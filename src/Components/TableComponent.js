import React from "react";
import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";
import "../Styles/Components/TableComponent.css";

export default function TableComponent(props) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaksi ID</th>
            <th>Nama User</th>
            <th>Nama Produk</th>
            <th>Quantity</th>
            <th>Tanggal</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.nama_user}</td>
            <td>{props.nama}</td>
            <td>{props.quantity}</td>
            <td>{props.tanggal}</td>
            <td>{props.total}</td>
            <td>
              <div
                className={props.status === "0" ? "waitPayment" : "donePayment"}
              >
                {props.status === "0" ? "Waiting for payment" : "Done Payment"}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
