import React from "react";
import TableBody from "./component/TableBody";

interface TableProps {
  theadData: string[];
  tbodyData: {
    id: string | number;
    items: string[];
  }[];
  setTbodyData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Table: React.FC<TableProps> = ({ theadData, tbodyData, setTbodyData }) => {

  // SORT ASCENDING (A → Z)
  const sortAsc = () => {
    const sorted = [...tbodyData].sort((a, b) =>
      a.items[1].localeCompare(b.items[1])
    );
    setTbodyData(sorted);
  };

  // SORT DESCENDING (Z → A)
  const sortDesc = () => {
    const sorted = [...tbodyData].sort((a, b) =>
      b.items[1].localeCompare(a.items[1])
    );
    setTbodyData(sorted);
  };

  return (
    <table
      style={{
       width: "70%",
        borderCollapse: "collapse",
        background: "#ffffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr>
          {theadData.map((h, index) => (
            <th
              key={index}
              style={{
                padding: "15px 10px",
                textAlign: "left",
                background: "#f0f0f0",
                borderBottom: "2px solid #ccc",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {h === "Name" ? (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>Name</span>

                  {/* UP ARROW */}
                  <button
                    onClick={sortAsc}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ↑
                  </button>

                  {/* DOWN ARROW */}
                  <button
                    onClick={sortDesc}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ↓
                  </button>
                </div>
              ) : h === "" ? (
                <input type="checkbox" />
              ) : (
                h
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tbodyData.map((row, index) => (
          <tr
            key={row.id}
            style={{
              background: index % 2 === 0 ? "#fafafa" : "white",
            }}
          >
            <TableBody data={row.items} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
