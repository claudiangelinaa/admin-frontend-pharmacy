const initialState = []
  
  export default function productsCustomReducer(state = initialState, action) {
    switch(action.type) {
      case 'INIT_PRODUCTS_CUSTOM':
        return action.payload
        
      default:
        return state;
    }
  }