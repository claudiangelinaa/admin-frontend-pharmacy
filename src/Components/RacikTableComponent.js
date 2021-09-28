import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import { useSelector } from "react-redux";
import "../Styles/Components/TableComponent.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { fetchBahanBaku } from "../Store/Actions/bahanBakuAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../helpers/urlConfig";

export default function TableComponent(props) {
  const dispatch = useDispatch();
  const {bahanBaku} = useSelector(state => state.bahanBakuReducer);
  const [bahanBakuSelected, setBahanBakuSelected] = useState("");
  const [bahanBakuQty, setBahanBakuQty] = useState(0);
  const [bahanBakuList, setBahanBakuList] = useState([]);
  const [dialogProcess, setDialogProcess] = useState(false);

  useEffect(() => {
    dispatch(fetchBahanBaku())
  }, [])

  const handleAddBahanBaku = () => {
    // console.log(bahanBakuSelected, bahanBakuQty, bahanBakuList)
    let newBahanBakuList = bahanBakuList
    
    let indexReducer = bahanBaku.findIndex(ele => ele.nama === bahanBakuSelected)
    let index = newBahanBakuList.findIndex(ele => ele.bahan_baku === bahanBakuSelected)
    if(index >= 0) {
      newBahanBakuList[index].qty = parseInt(bahanBakuQty)
      newBahanBakuList[index].id = parseInt(bahanBaku[indexReducer].id)
    } else {
      // console.log(bahanBaku[indexReducer].id)
      newBahanBakuList = [...newBahanBakuList, {
        id: bahanBaku[indexReducer].id,
        bahan_baku: bahanBakuSelected,
        qty: parseInt(bahanBakuQty)
      }]
    }
    
    setBahanBakuList(newBahanBakuList)
    console.log(bahanBakuList)
  }

  const handleSubmitBahanBaku = () => {
    axios.post(`${url}/insertObatRacikDetailTransaction/${props.id}`, {
      payload: bahanBakuList
    })
    .then((res) => {
      console.log(res.data)
      alert(`Sukses input obat!`)
      setDialogProcess(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleRejectOrder = () => {
    alert(`Rejected!`)
    axios.post(`${url}/updateTransactionStatus/${props.id}`, { status: 2 })
    .then((res) => {
      alert(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <div>
      <Dialog open={dialogProcess} onClose={() => setDialogProcess(false)}>
        <DialogTitle>Process</DialogTitle>
        {/* {JSON.stringify(bahanBakuList)} */}
        <ul className="mx-5">
          {/* <li className="row">
            <div className="col-5">
              Bahan Baku
            </div>
            <div className="col-2">
              Qty
            </div>
          </li> */}
          {
            bahanBakuList.map((ele) => {
              return (
                <li className="row">
                  <div className="col-1">
                    {ele.id}
                  </div>
                  <div className="col-5">
                    {ele.bahan_baku}
                  </div>
                  <div className="col-2">
                    {ele.qty}
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="row mx-2">
          <Select
            native
            variant="outlined"
            value={bahanBakuSelected}
            inputProps={{
              name: "bahan-baku",
              id: "filled-age-native-simple",
            }}
            className="col-6 mx-3"
            onChange={(e) => setBahanBakuSelected(e.target.value)}
          >
            <option aria-label="Bahan Baku" value="">
              Bahan Baku
            </option>
            {
              bahanBaku.map((ele) => {
                return (
                  <option value={ele.nama}>{ele.nama}</option>
                )
              })
            }
          </Select>
          <TextField
            className="col-2 mx-2"
            variant="outlined"
            type="number"
            placeholder="Qty"
            value={bahanBakuQty}
            onChange={(e) => setBahanBakuQty(e.target.value)}
          />
          <Button className="col-2 mb-1 mx-2" onClick={handleAddBahanBaku}>
            Add
          </Button>
        </div>

        <DialogActions>
          <Button onClick={() => setDialogProcess(false)}>Cancel</Button>
          <Button onClick={() => handleSubmitBahanBaku()}>Submit</Button>
        </DialogActions>
      </Dialog>
      
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
                className={props.status === "4" ? "donePayment" : "waitPayment"}
              >
                {props.status === "0" ? "PENDING" : props.status === "1" ? "ORDER PROCESSED" : props.status === "2" ? "ORDER REJECTED" : props.status === "3" ? "WAITING FOR PAYMENT" : "DONE PAYMENT"}
              </div>
            </td>
            <td>
              {
                props.status === "0" ? 
                (
                  <>
                    <Button variant="outlined" color="primary" className="my-1 mx-1" onClick={() => setDialogProcess(true)}>
                      Process Order
                    </Button>
                    <Button variant="contained" color="secondary" className="my-1 mx-1" onClick={() => handleRejectOrder()}>
                      Reject Order
                    </Button>
                  </>
                ) : (
                  <Typography>Already processed</Typography>
                )
              }
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
