import axios from 'axios';

export function doInitProductsCustom() {
  return dispatch => {
    axios.get(`http://localhost:5001/bahanbaku`)
      .then(res => {
        dispatch({
          type: 'INIT_PRODUCTS_CUSTOM',
          payload: res.data.result
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
