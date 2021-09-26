import React from "react";
import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";
import "../Styles/Components/TableComponent.css";
import Button from '@material-ui/core/Button';
import { Avatar } from "@material-ui/core";

export default function TableComponent(props) {
  // const { historyTransaction } = useSelector(state => state.transactionReducer)

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaksi ID</th>
            <th>Nama User</th>
            <th>Resep</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.nama_user}</td>
            <td><img style={{ height: "80px", width: "80px" }} src={props.resep_image} /></td>
            <td>{props.tanggal}</td>
            <td>
              <div
                className={props.status === "0" ? "waitPayment" : "donePayment"}
              >
                {props.status === "0" ? "Waiting for payment" : "Done Payment"}
              </div>
            </td>
            <td>
              <Button>
                Process
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
