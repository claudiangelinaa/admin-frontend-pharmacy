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
                className={props.status === "4" ? "donePayment" : "waitPayment"}
              >
                {props.status === "0" ? "PENDING" : props.status === "1" ? "ORDER PROCESSED" : props.status === "2" ? "ORDER REJECTED" : props.status === "3" ? "WAITING FOR PAYMENT" : "DONE PAYMENT"}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
