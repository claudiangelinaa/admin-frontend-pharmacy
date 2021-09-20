import React, { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import SearchBarComponent from "../Components/SearchBarComponent";
import { useHistory } from "react-router";
import axios from "axios";
import "../Styles/Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Store/Actions/productsAction";
import LoadingComponent from "../Components/LoadingComponent"

export default function ProductsPage() {
  // const [products, setProducts] = useState([]);
  const { products, isLoading } = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()
  const history = useHistory();

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
      <div className="SearchBar">
        <SearchBarComponent />
      </div>
      <div className="Products">
        {products.map(val=>{
          return (
            <CardComponent
              id={val.id} 
              foto_produk={val.foto_produk}
              nama={val.nama}
              deskripsi={val.deskripsi}
              harga={val.harga}
            />
          )})}
      </div>
    </div>
  );
}
