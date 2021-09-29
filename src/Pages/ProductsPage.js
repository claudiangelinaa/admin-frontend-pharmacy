import React, { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import SearchBarComponent from "../Components/SearchBarComponent";
import PaginateComponent from "../Components/PaginateComponent";
import { useHistory } from "react-router";
import axios from "axios";
import "../Styles/Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// <<<<<<< feature/raw-usage-order
// import { addProduct, fetchProducts } from "../Store/Actions/productsAction";
// import LoadingComponent from "../Components/LoadingComponent";
// import ButtonComponent from "../Components/ButtonComponent";
// import {
//   Dialog,
//   DialogActions,
//   DialogTitle,
//   Button,
//   Grid,
//   TextField,
//   InputLabel,
//   Select,
//   Input,
// } from "@material-ui/core";
// =======
import { addProduct, fetchProducts, fetchCategory } from "../Store/Actions/productsAction";
import LoadingComponent from "../Components/LoadingComponent"
import ButtonComponent from "../Components/ButtonComponent";
// import PaginateComponent from "../Components/PaginateComponent";
import { Dialog, DialogActions, DialogTitle, Button, Grid, TextField, InputLabel, Select, Input } from "@material-ui/core";

export default function ProductsPage() {
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategory())
  }, [])
  // const [products, setProducts] = useState([]);
// <<<<<<< feature/raw-usage-order
//   const { products, isLoading } = useSelector((state) => state.productsReducer);
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(4);
//   const [dialogAdd, setDialogAdd] = useState(false);
//   const [nama, setNama] = useState("");
//   const [deskripsi, setDeskripsi] = useState("");
//   const [kategori, setKategori] = useState("");
//   const [stock, setStock] = useState();
//   const [harga, setHarga] = useState();

// =======
  const { products, isLoading, category } = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()
  const [dialogAdd, setDialogAdd] = useState(false)
  const [nama, setNama] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("")
  const [stock, setStock] = useState()
  const [harga, setHarga] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [productsView, setProductsView] = useState(products);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAddData = () => {
    setDialogAdd(true);
  };

  const handleSubmit = () => {
    let newProduct = {
      nama,
      harga,
      kategori,
      stock,
      deskripsi,
    };

    let fd = new FormData();
    fd.append("data", JSON.stringify(newProduct));
    fd.append("images", selectedFiles[0]);
    console.log("selectfile:", selectedFiles);
    console.log("fd", fd);
    console.log("newProduct", JSON.stringify(newProduct));

    dispatch(addProduct(fd));
    alert(`Berhasil tambah data`);
    setDialogAdd(false);
    setNama("");
    setHarga("");
    setKategori("");
    setDeskripsi("");
    setStock("");
    setSelectedFiles([]);
  };

// <<<<<<< feature/raw-usage-order
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
// =======
  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  // console.log("products:", products)
  // console.log("productsView:", productsView)
  if(productsView.length > 0) {
    currentPosts = productsView.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <>
        <LoadingComponent />
      </>
    );
  }

  const selectFile = (e) => {
    setSelectedFiles(e.target.files);
    console.log(selectedFiles);
  };

  return (
    <div className="ProductPage">
      <h1>Products</h1>
      <div>
        <Dialog open={dialogAdd} onClose={() => setDialogAdd(false)}>
          <DialogTitle>ADD NEW DATA</DialogTitle>

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
                onChange={(e) => setNama(e.target.value)}
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
                onChange={(e) => setDeskripsi(e.target.value)}
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
                onChange={(e) => setHarga(e.target.value)}
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
                onChange={(e) => setStock(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="filled-age-native-simple">
                Category
              </InputLabel>
              <Select
// <<<<<<< feature/raw-usage-order
//                 native
//                 variant="outlined"
//                 value={kategori}
//                 inputProps={{
//                   name: "gender",
//                   id: "outlined-gender-native-simple",
//                 }}
//                 onChange={(e) => {
//                   setKategori(e.target.value);
//                 }}
//               >
//                 <option aria-label="None" value="" />
//                 <option value="BATUK DAN FLU">BATUK DAN FLU</option>
//                 <option value="DEMAM">DEMAM</option>
//                 <option value="ANTI NYERI">ANTI NYERI</option>
//                 <option value="ANTI INFLAMASI">ANTI INFLAMASI</option>
//                 <option value="ALERGI">ALERGI</option>
//                 <option value="HIPERTENSI">HIPERTENSI</option>
//                 <option value="SALURAN KEMIH">SALURAN KEMIH</option>
// =======
                  native
                  variant="outlined"
                  value={kategori}
                  inputProps={{
                      name: 'kategori',
                      id: 'outlined-kategori-native-simple',
                  }}
                  onChange={e=>{setKategori(e.target.value)}}
              >
                  <option aria-label="Kategori" value="" />
                  Kategori
                  {category.map((value)=>{
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
              <InputLabel htmlFor="filled-age-native-simple">
                Foto Obat Jadi
              </InputLabel>
              <div className="row mb-3">
                <div className="col-3 mx-1 my-2">
                  <label htmlFor="contained-button-file">
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      hidden
                      onChange={selectFile}
                    />
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                  </label>
                </div>
                <div className="col-5 my-3">
                  {selectedFiles && selectedFiles.length > 0
                    ? selectedFiles[0].name
                    : "No file chosen"}
                </div>
              </div>
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={() => setDialogAdd(false)}>Cancel</Button>
            <Button onClick={() => handleSubmit()}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="SearchBar">
        <SearchBarComponent />
      </div>
      <div className="AddProductButton">
        <Button variant="outlined" onClick={() => handleAddData()}>
          ADD OBAT JADI
        </Button>
      </div>
      <div className="Products">
        {currentPosts.map(val=>{
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
              category={category}
            />
            </>
          );
        })}
      </div>
      <div className="Paginate">
        <PaginateComponent
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>
      <PaginateComponent
        postsPerPage={postsPerPage}
        totalPosts={productsView.length > 0 ? productsView.length : products.length}
        paginate={paginate}
      />
    </div>
  );
}
