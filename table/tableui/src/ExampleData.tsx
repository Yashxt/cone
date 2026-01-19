import React, { useState } from "react";
import Table from "./Table";

const ExampleData = () => {
  const theadData = ["", "Name", "Stock", "Categories", "Tags", "Brands"];

  const initialData = [
    { id: "1", items: ["", "no title — Draft", "In stock", "—", "—", "—"] },
    { id: "2", items: ["", "sgsgs — Draft", "In stock", "—", "—", "—"] },
    { id: "3", items: ["", "yash — Draft", "In stock", "Uncategorized", "—", "—"] },
    { id: "4", items: ["", "mat — Draft", "In stock", "Uncategorized", "—", "—"] },
    { id: "5", items: ["", "bodygel", "In stock", "Uncategorized", "—", "—"] },
  ];

  const [tbodyData, setTbodyData] = useState(initialData);

  return (
    <div>
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        setTbodyData={setTbodyData}
      />
    </div>
  );
};

export default ExampleData;
