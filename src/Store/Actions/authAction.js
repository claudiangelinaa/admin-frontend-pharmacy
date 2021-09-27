import axios from "axios";
import { url } from "../../helpers/urlConfig";

export function doLogin(data) {
  return async (dispatch) => {
// // <<<<<<< feature/sales-report
//     try {
//       dispatch({ type: "LOGIN", payload: { isLoading: true } });
//       const { data } = await axios.post(`${url}/users/login`, params);

// // =======
// // >>>>>>> development
      dispatch({
        type: "LOGIN",
        payload: {
          ...data,
          isLogin: true,
          isLoading: false,
        },
      });
  };
}

export function doLogout() {
  return async (dispatch) => {
    await localStorage.removeItem('userId')
    const userId = await localStorage.getItem('userId');
    console.log("logout:", userId);
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export function checkLogin() {
  return async dispatch => {
    const token = await localStorage.getItem('access_token');
    console.log("[checkLogin] token:", token);
    if (token) {
      const { data } = await axios.get(`${url}/users/check-token`, {headers : { "Authorization" : token }});
      console.log("[checkLogin] data:", data);
      dispatch({
        type: 'LOGIN',
        payload: { ...data, isLogin: true, isLoading: false }
      });
    };
  };
}