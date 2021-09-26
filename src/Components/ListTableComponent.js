import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/Report.css";

export default function ListTableComponent(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <div className="TextHeader">
            <h5 style={{ marginRight: 100 }}>Transaction ID : {props.id}</h5>
            <h5>User Address : {props.alamat}</h5>
            <h5 style={{ marginRight: 100 }}>Date : {props.tanggal}</h5>
            <h5>User Name : {props.nama_user}</h5>
            <h5 style={{ marginRight: 100 }}>Bought Item : </h5>
            <h5>Total : {props.total} </h5>
          </div>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {props.nama.map((val) => {
                return (
                  <>
                    <ul style={{ width: "fit-content" }}>
                      <li style={{ textDecoration: "none", listStyle: "none" }}>
                        {val}
                      </li>
                    </ul>
                  </>
                );
              })}
            </TableCell>
            <TableCell>
              {props.quantity.map((val) => {
                return (
                  <>
                    <ul>
                      <li style={{ textDecoration: "none", listStyle: "none" }}>
                        {val}
                      </li>
                    </ul>
                  </>
                );
              })}
            </TableCell>
            <TableCell>{props.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
