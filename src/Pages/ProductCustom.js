import React, { useEffect } from "react";
import ButtonComponent from "../Components/ButtonComponent";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import "../Styles/ProductCustom.css";
import { Button, Table } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { doInitProductsCustom } from "../Store/Actions/productsCustomAction";
import productsCustomReducer from "../Store/Reducers/productsCustomReducer";


export default function ProductCustom() {
  const dispatch = useDispatch()
  const productsCustom = useSelector(state=> state.productsCustomReducer)
  // console.log(productsCustom);

  
  useEffect(()=>{
    dispatch(doInitProductsCustom())
  },[])
  return (

    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Stok (dalam botol)</th>
            <th>Komposisi per Botol</th>
            <th>Sisa</th>
            <th>Satuan Komposisi</th>
            <th>Harga Beli per Botol</th>
            <th>Harga Jual per Satuan Komposisi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsCustom.map((value,index)=>{
            return (
              <tr>
                <td>{index+1}</td>
                <td>{value.nama}</td>
                <td>{value.harga_beli_per_botol}</td>
                <td>{value.harga_jual_per_satuan_komposisi}</td>
                <td>{value.stok}</td>
                <td>{value.komposisi_per_botol}</td>
                <td>{value.satuan_komposisi}</td>
                <td>{value.sisa}</td>
                <td>
                  <ButtonComponent 
                  title={"Update Stok"} 
                  
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
)
}
