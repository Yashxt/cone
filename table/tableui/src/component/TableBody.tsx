import React from "react";

interface TableBodyProps {
  data: string[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <>
      {data.map((value, index) => (
        <td
          key={index}
          style={{
            padding: "15px 10px",
            fontSize: "14px",
            borderBottom: "1px solid #e5e5e5",
            color: index === 2 ? "green" : "#000", // Stock in green
          }}
        >
          {index === 0 ? (
            <input type="checkbox" />
          ) : index === 1 ? (
            <span style={{ color: "#0073aa", cursor: "pointer" }}>
              {value}
            </span>
          ) : (
            value
          )}
        </td>
      ))}
    </>
  );
};

export default TableBody;
