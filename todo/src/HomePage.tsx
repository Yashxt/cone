import { useState, useEffect, useRef } from "react";


// ----------------------------------
// TYPES
// ----------------------------------
type Todo = {
  text: string;
  completed: boolean;
  id: string;
};

// ----------------------------------
// CUSTOM HOOK: DEBOUNCE
// (Moved OUTSIDE component)
// ----------------------------------
function useDebounce(value: string, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
}

// ----------------------------------
// COMPONENT
// ----------------------------------
const HomePage = () => {
  const [array, setArray] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);  // FIX 1: Prevent empty render flicker

  const [task, setTask] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [search, setSearch] = useState("");

  const editRef = useRef<HTMLDivElement | null>(null);

  // ----------------------------------
  // LOAD FROM LOCAL STORAGE
  // ----------------------------------
  useEffect(() => {
    const tasks = localStorage.getItem("todo");
    if (tasks) setArray(JSON.parse(tasks));
    setLoading(false);
  }, []);

  // ----------------------------------
  // SAVE TO LOCAL STORAGE
  // ----------------------------------
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("todo", JSON.stringify(array));
    }
  }, [array, loading]);

  // ----------------------------------
  // DEBOUNCED SEARCH
  // ----------------------------------
  const debouncedSearch = useDebounce(search, 300);
  const suggestions = array.filter((todo) =>
    todo.text.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // ----------------------------------
  // BACKGROUND CLICK HANDLER
  // FIX: Changed to onClick (not onMouseDown)
  // ----------------------------------
  function handleBackgroundClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!editRef.current) return;
    if (!editRef.current.contains(e.target as Node)) {
      setSelected(null);
    }
  }

  // ----------------------------------
  // ADD TASK
  // ----------------------------------
  const addTask = () => {
    if (task.trim() === "") return;

    setArray([
      ...array,
      { text: task, completed: false, id: crypto.randomUUID() },
    ]);
    setTask("");
  };

  // ----------------------------------
  // SAVE EDIT
  // ----------------------------------
  const saveEdit = () => {
    setArray(
      array.map((item) =>
        item.id === selected ? { ...item, text: editText } : item
      )
    );
    setSelected(null);
  };

  // ----------------------------------
  // FILTERED TASKS
  // ----------------------------------
  const filteredArray = array.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true;
  });

  // ----------------------------------
  // TOGGLE COMPLETE
  // ----------------------------------
  const handleCheck = (id: string) => {
    setArray(
      array.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  
  const deleteItem = (id: string) => {
    setArray(array.filter((item) => item.id !== id));
    
  };
  const handleDelete = ()=>{
   setArray(array.filter((item)=>item.completed != true))
  }

  // nothing render if no data from the local host
  if (loading) return null;
return (
  <div onClick={handleBackgroundClick}>
    <div
      style={{
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        paddingTop: "60px",
        background: "#f9f9f9",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        style={{
          width: "600px",
          minHeight: "auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* FILTER BAR → moved on TOP */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "15px 0",
            background: "#ffffff",
            borderBottom: "1px solid #eee",
            fontSize: "15px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <span
            onClick={() => setFilter("completed")}
            style={{ color: filter === "completed" ? "#333" : "#888" }}
          >
            completed
          </span>

          <span
            onClick={() => setFilter("all")}
            style={{ color: filter === "all" ? "#333" : "#888" }}
          >
            all
          </span>

          <span
            onClick={() => setFilter("pending")}
            style={{ color: filter === "pending" ? "#333" : "#888" }}
          >
            pending
          </span>
        </div>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 20px",
            borderBottom: "1px solid #eee",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          <span>Demo</span>
          <span>icon</span>
        </div>

        {/* INPUT BOX */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
          style={{
            display: "flex",
            padding: "12px 20px",
            borderBottom: "1px solid #eee",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              flex: 1,
              height: "40px",
              padding: "0 12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
            }}
          />

          <button
            type="button"
            onClick={addTask}
            style={{
              width: "44px",
              height: "40px",
              fontSize: "22px",
              borderRadius: "8px",
              border: "none",
              background: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </form>

        {/* LIST */}
        {filteredArray.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: "10px 20px",
              margin: 0,
            }}
          >
            {filteredArray.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid #f2f2f2",
                }}
              >
                {/* Left side */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheck(item.id)}
                    style={{ marginRight: "10px" }}
                  />

                  {selected === item.id ? (
                    <div ref={editRef}>
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                        style={{
                          border: "1px solid #ccc",
                          padding: "4px",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  ) : (
                    <span
                      onClick={() => {
                        setSelected(item.id);
                        setEditText(item.text);
                      }}
                      style={{
                        cursor: "pointer",
                        color: item.completed ? "#999" : "#333",
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.text}
                    </span>
                  )}
                </div>

                {/* Right side */}
                {selected === item.id ? (
                  <div
                    style={{ cursor: "pointer", padding: "5px" }}
                    onClick={() => deleteItem(item.id)}
                  >
                    delete
                  </div>
                ) : (
                  <div style={{ cursor: "pointer", padding: "5px" }}>⋮</div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* CLEAR BUTTON */}
        <button
          style={{
            width: "100%",
            height: "60px",
            background: "#eee",
            border: "none",
            fontSize: "15px",
            cursor: "pointer",
            borderRadius: "0 0 16px 16px",
          }}
          onClick={handleDelete}
        >
          clear all completed
        </button>
      </div>
    </div>
  </div>
);

};

export default HomePage;
