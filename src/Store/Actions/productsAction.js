import { LOADING_PRODUCTS, LOAD_PRODUCTS, LOAD_DETAIL_PRODUCT } from "../Actions/actionType";
import axios from "axios";
import { url } from "../../helpers/urlConfig";

export function loadProducts(data) {
  return {
    type: LOAD_PRODUCTS,
    payload: data,
  };
}

export function loadingProducts(data) {
  return {
    type: LOADING_PRODUCTS,
    payload: data,
  };
}

export function loadProduct(data) {
  return {
    type: LOAD_DETAIL_PRODUCT,
    payload: data,
  };
}

// export function loadProduct(data) {
//   return {
//     type: LOADING_DETAIL_PRODUCT,
//     payload: data,
//   };
// }

export function fetchProducts() {
  return (dispatch) => {
    dispatch(loadingProducts(true));

    axios
      .get(`${url}/obatjadi`)
      .then((res) => {
        dispatch(loadingProducts(false));
        dispatch(loadProducts(res.data.result));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(loadingProducts(true));

    axios
      .get(`${url}/obatjadi/${id}`)
      .then((res) => {
        dispatch(loadingProducts(false));
        dispatch(loadProduct(res.data.result));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}
