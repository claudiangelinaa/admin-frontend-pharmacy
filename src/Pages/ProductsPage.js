import React, { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import SearchBarComponent from "../Components/SearchBarComponent";
import { useHistory } from "react-router";
import axios from "axios";
import "../Styles/Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../Store/Actions/productsAction";
import LoadingComponent from "../Components/LoadingComponent"
import ButtonComponent from "../Components/ButtonComponent";
import { Dialog, DialogActions, DialogTitle, Button, Grid, TextField, InputLabel, Select } from "@material-ui/core";
import { ADD_PRODUCT } from "../Store/Actions/actionType";
// import { Button } from "bootstrap";

export default function ProductsPage() {
  // const [products, setProducts] = useState([]);
  const { products, isLoading } = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()
  const history = useHistory();
  const [dialogAdd, setDialogAdd] = useState(false)
  const [nama, setNama] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("")
  const [stock, setStock] = useState()
  const [harga, setHarga] = useState()

  const handleAddData = () =>{
    setDialogAdd(true)
  }

  const handleSubmit = () =>{
    let newProduct = {
      nama,
      harga,
      kategori,
      stock,
      deskripsi
    }

    dispatch(addProduct(newProduct))
        alert(`Berhasil tambah data`)
        setDialogAdd(false)
        setNama("")
        setHarga("")
        setKategori("")
        setDeskripsi("")
        setStock("")
      
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if(isLoading){
    return (
      <>
      <LoadingComponent />
      </>
    )
  }

  return (
    <div className="ProductPage">
      <h1>Products</h1>

        <Button
          onClick={()=>handleAddData()}>ADD DATA</Button>
        <div>
          <Dialog open={dialogAdd} onClose={() => setDialogAdd(false)}>
            <DialogTitle>ADD NEW DATA</DialogTitle>
            <form >

            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Nama"
                variant="outlined"
                required
                fullWidth
                id="Nama"
                label="Nama"
                autoFocus
                value={nama}
                onChange={e => setNama(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="Deskripsi"
                name="Deskripsi"
                variant="outlined"
                required
                fullWidth
                id="Deskripsi"
                label="Deskripsi"
                autoFocus
                value={deskripsi}
                onChange={e => setDeskripsi(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Harga"
                variant="outlined"
                required
                fullWidth
                id="Harga"
                label="Harga"
                autoFocus
                value={harga}
                onChange={e => setHarga(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="stock"
                name="Stock"
                variant="outlined"
                required
                fullWidth
                id="Stock"
                label="Stock"
                autoFocus
                value={stock}
                onChange={e => setStock(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6} >
            <InputLabel htmlFor="filled-age-native-simple">Category</InputLabel>
            <Select
                native
                variant="outlined"
                value={kategori}
                inputProps={{
                    name: 'gender',
                    id: 'outlined-gender-native-simple',
                }}
                onChange={e=>{setKategori(e.target.value)}}
            >
                <option aria-label="None" value="" />
                <option value='BATUK DAN FLU'>BATUK DAN FLU</option>
                <option value='DEMAM'>DEMAM</option>
                <option value='ANTI NYERI'>ANTI NYERI</option>
                <option value='ANTI INFLAMASI'>ANTI INFLAMASI</option>
                <option value='ALERGI'>ALERGI</option>
                <option value='HIPERTENSI'>HIPERTENSI</option>
                <option value='SALURAN KEMIH'>SALURAN KEMIH</option>

            </Select>
            </Grid>

            <DialogActions>
              <Button onClick={() => setDialogAdd(false)}>Cancel</Button>
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </DialogActions>
            </Grid>
            </form>

          </Dialog>

        </div>
      <div className="SearchBar">
        <SearchBarComponent />
      </div>
      <div className="Products">
        {products.map(val=>{
          return (
            <>
            <CardComponent
              id={val.id} 
              foto_produk={val.foto_produk}
              nama={val.nama}
              deskripsi={val.deskripsi}
              harga={val.harga}
              stock={val.stock}
              kategori={val.kategori}
            />
            
            </>
          )})}
      </div>
    </div>
  );
}
