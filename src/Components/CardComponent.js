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
import { editProduct, fetchProduct, fetchCategory } from "../Store/Actions/productsAction";
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
  const [selectedFiles, setSelectedFiles] = useState([]);

  function onSubmit() {
    let editedProduct = {
      nama,
      harga,
      stock,
      kategori,
      deskripsi
    };

    let fd = new FormData();
    fd.append('data', JSON.stringify(editedProduct));
    fd.append('images', selectedFiles[0]);

    dispatch(editProduct(props.id, fd))
    setDialogEdit(false)
    // let getData = JSON.parse(localStorage.getItem("cart")) || [];
    // getData.push(data);
    // localStorage.setItem("cart", JSON.stringify(getData));
  }

  const handleEdit = () =>{
    setDialogEdit(true)
  }

  const selectFile = (e) => {
    setSelectedFiles(e.target.files);
    console.log(selectedFiles);
  }

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

          <Grid item xs={12}>
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
                {props.category.map((value)=>{
                  return(
                    <option value={value}>{value}</option>
                    // <option value='DEMAM'>DEMAM</option>
                    // <option value='ANTI NYERI'>ANTI NYERI</option>
                    // <option value='ANTI INFLAMASI'>ANTI INFLAMASI</option>
                    // <option value='ALERGI'>ALERGI</option>
                    // <option value='HIPERTENSI'>HIPERTENSI</option>
                    // <option value='SALURAN KEMIH'>SALURAN KEMIH</option>
                  )
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
              <InputLabel htmlFor="filled-age-native-simple">Foto Obat Jadi</InputLabel>
              <div className="row mb-3">
                <div className="col-3 mx-1 my-2">
                  <label htmlFor="contained-button-file">
                    <input accept="image/*" id="contained-button-file" multiple type="file" hidden onChange={selectFile} />
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                  </label>
                </div>
                <div className="col-5 my-3">
                  {selectedFiles && selectedFiles.length > 0 ? selectedFiles[0].name : "No file chosen"}
                </div>
              </div>
            </Grid>

        </Grid>
        <DialogActions>
          <Button onClick={() => setDialogEdit(false)}>Cancel</Button>
          <Button onClick={() => onSubmit()}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
