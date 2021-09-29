import axios from "axios"
import { url } from "../../helpers/urlConfig";

export function fetchBahanBaku() {
  return (dispatch) => {
    axios.get(`${url}/bahanBaku`)
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: "FETCH_BAHAN_BAKU",
        payload: res.data.result
      })
    })
  }
}