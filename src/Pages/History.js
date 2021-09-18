import React from "react";
import TableComponent from "../Components/TableComponent";
import "../Styles/History.css";

export default function History() {
  return (
    <div className="History">
    <h2>History Transaction</h2>
      <div className="TableHistory">
        <TableComponent />
      </div>
    </div>
  );
}
