const initialState = {
  bahanBaku: []
}

export default function bahanBakuReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BAHAN_BAKU':
      // console.log("action payload:", action.payload)
      return {
        ...state,
        bahanBaku: action.payload
      };
    default:
      return state;
  }
}