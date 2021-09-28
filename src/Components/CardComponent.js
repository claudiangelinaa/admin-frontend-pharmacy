import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonComponent from "../Components/ButtonComponent";
import { convertToRupiah } from "../helpers/convertToRupiah";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { editProduct, fetchProduct } from "../Store/Actions/productsAction";
import { deleteProduct } from "../Store/Actions/productsAction";
import { Dialog, DialogActions, DialogTitle, Grid, InputLabel, Select, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    padding: 10,
    margin: 30,
    height: "fit-content",
  },
  media: {
    height: 120,
  },
});

export default function CardComponent(props) {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();

  const [dialogEdit, setDialogEdit] = useState(false)
  const [nama, setNama] = useState(props.nama)
  const [deskripsi, setDeskripsi] = useState(props.deskripsi)
  const [kategori, setKategori] = useState(props.kategori)
  const [stock, setStock] = useState(props.stock)
  const [harga, setHarga] = useState(props.harga)


  const [cart, setCart] = useState({
    product: [],
  });

  function onSubmit() {
    let data = {
      nama,
      harga,
      // foto_produk,
      stock,
      kategori,
      deskripsi
    };

    dispatch(editProduct(props.id, data))
    setDialogEdit(false)
    // let getData = JSON.parse(localStorage.getItem("cart")) || [];
    // getData.push(data);
    // localStorage.setItem("cart", JSON.stringify(getData));
  }

  const handleEdit = () =>{
    setDialogEdit(true)
  }
  // function getCartTotal(){
  //   return cart.reduce((sum, {quantity}) => sum + quantity, 0)
  // }

  // function onSubmit() {
  //   productToCart();
  // }

  // useEffect(() => {
  //   productToCart();
  // }, []);

  return (
    <div>
    <Card className={classes.root}>
      {/* {console.log(props)} */}
      <CardActionArea>
        <CardMedia className={classes.media} image={props.foto_produk} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {props.nama}
          </Typography>
        </CardContent>
        <CardContent>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Deskripsi Produk</Accordion.Header>
              <Accordion.Body>{props.deskripsi}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </CardContent>

        <CardContent>
          <strong>{convertToRupiah(props.harga)}</strong>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <button onClick={onSubmit}>Add to cart</button> */}
        {/* <ButtonComponent title={"Add To Cart"} onSubmit={() => onSubmit()} /> */}
            <Button onClick={()=>handleEdit()}>Edit</Button>
            <Button onClick={()=> dispatch(deleteProduct(props.id))}>Delete</Button>
      </CardActions>
    </Card>

    <Dialog open={dialogEdit} onClose={() => setDialogEdit(false)}>
            <DialogTitle>EDIT DATA</DialogTitle>
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
              <Button onClick={() => setDialogEdit(false)}>Cancel</Button>
              <Button onClick={() => onSubmit()}>Submit</Button>
            </DialogActions>
            </Grid>
            </form>

          </Dialog>
    </div>
  );
}
