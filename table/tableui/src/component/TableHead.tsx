import React from "react";

interface HeadProps {
  item: string;
}

const TableHead: React.FC<HeadProps> = ({ item }) => {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "15px 10px",
        fontWeight: "bold",
        fontSize: "14px",
        background: "#f0f0f0",
        borderBottom: "2px solid #ccc",
      }}
    >
      {item === "" ? <input type="checkbox" /> : item}
    </th>
  );
};

export default TableHead;
