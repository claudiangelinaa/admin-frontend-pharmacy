const initialState = {
  id: '',
  nama : '',
  role: '',
  isLogin: false,
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN':
      // console.log("action payload:", action.payload)
      return {
        ...state,
        id: action.payload.id,
        nama: action.payload.nama,
        role: action.payload.role,
        isLogin: action.payload.isLogin,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}