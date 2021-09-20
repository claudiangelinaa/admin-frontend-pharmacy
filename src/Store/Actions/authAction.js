import axios from "axios";

export function doLogin(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOGIN", payload: { isLoading: true } });
      const { data } = await axios.post(
        `http://localhost:5001/login`,
        params
      );

      dispatch({
        type: "LOGIN",
        payload: {
          ...data,
          isLogin: true,
          isLoading: false,
        },
      });
      localStorage.setItem("access_token", data.token);
    } catch (err) {
      console.log(err);
    }
  };
}

// export function doLogout() {
//   return async (dispatch) => {
//     await localStorage.removeItem('userId')
//     const userId = await localStorage.getItem('userId');
//     console.log("logout:", userId);
//     dispatch({
//       type: 'LOGOUT'
//     })
//   }
// }

// export function checkLogin() {
//   return async dispatch => {
//     const userId = await localStorage.getItem('userId');
//     console.log("[checkLogin] userId:", userId);
//     if (userId) {
//       const { data } = await axios.get(`${url}/users?id=${userId}`);
//       // console.log("[checkLogin] data:", data);
//       dispatch({
//         type: 'LOGIN',
//         payload: { ...data[0], isLogin: true, isLoading: false }
//       });
//     };
//   };
// }
