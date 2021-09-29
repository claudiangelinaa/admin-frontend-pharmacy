import React, { useEffect, useState } from "react";
// import PaginateComponent from "../Components/PaginateComponent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { url } from "../helpers/urlConfig";
import moment from "moment";
import axios from "axios";
import "../Styles/Components/BahanBaku.css";

export default function BahanBakuRecord() {
  const dispatch = useDispatch();
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/bahanBaku/getUsage`)
      .then((res) => {
        console.log(res);
        setTransactionList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="BahanBaku">
      <h2>Record Bahan Baku Custom Order</h2>
      <div className="TableBorder">
        {transactionList.map((val) => {
          return (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <div className="TextHeader">
                    <h5 style={{ marginRight: 100 }}>
                      Transaction ID : {val.id}
                    </h5>
                    <h5 style={{ marginRight: 100 }}>
                      Date : {moment(val.tanggal).format("LL")}
                    </h5>
                    <h5>User Name : {val.name_user}</h5>
                    <h5 style={{ marginRight: 100 }}>Bought Item : </h5>
                  </div>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{val.nama}</TableCell>
                    <TableCell>{val.komposisi_quantity} ml</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          );
        })}
      </div>
      {/* <div className="Paginate">
        <PaginateComponent
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div> */}
    </div>
  );
}
