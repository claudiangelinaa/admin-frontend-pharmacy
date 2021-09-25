import {
  ADD_TRANSACTION,
  LOADING_TRANSACTION,
  FETCH_TRANSACTION,
} from "../Actions/actionType";
import axios from "axios";
import { url } from "../../helpers/urlConfig";

export function fetchTransactions(data) {
  return {
    type: FETCH_TRANSACTION,
    payload: data,
  };
}

export function addTransactions(data) {
  return {
    type: ADD_TRANSACTION,
    payload: data,
  };
}

export function loadingTransactions(data) {
  return {
    type: LOADING_TRANSACTION,
    payload: data,
  };
}

// export function insertTransaction(data) {
//   return (dispatch) => {
//     dispatch(loadingTransactions(true));

//     axios
//       .post(`${url}/insertTransaction`, data)
//       .then((res) => {
//         dispatch(loadingTransactions(false));
//         dispatch(addTransactions(res.data));
//       })

//       .catch((err) => {
//         alert(err);
//       });
//   };
// }

export function fetchTransaction() {
  return (dispatch) => {
    dispatch(loadingTransactions(true));
    axios
      .get(`${url}/getTransaction`)
      .then((res) => {
        let data = res.data.result;
        let result = data.reduce((acc, ele) => {
          let filtered = acc.filter((el) => el.id == ele.id);
          if (filtered.length > 0) {
            filtered[0]["nama"].push(ele.nama);
            filtered[0]["quantity"].push(ele.quantity);
          } else {
            let element = {};
            element["id"] = ele.id;
            element["nama_user"] = ele.nama_user;
            element["nama"] = [];
            element["quantity"] = [];
            element["tanggal"] = ele.tanggal;
            element["status"] = ele.status;
            element["nama"].push(ele.nama);
            element["quantity"].push(ele.quantity);
            element["total"] = ele.total;
            acc.push(element);
          }
          return acc;
        }, []);
        dispatch(loadingTransactions(false));
        dispatch(fetchTransactions(result));
      })

      .catch((err) => {
        alert(err);
      });
  };
}
