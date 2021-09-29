import {
  LOAD_PRODUCTS,
  LOADING_PRODUCTS,
  LOAD_DETAIL_PRODUCT,
  LOADING_DETAIL_PRODUCT,
  ADD_PRODUCT
} from "../Actions/actionType";

const initialState = {
  products: [],
  product: [],
  isLoading: false,
  category: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case LOADING_PRODUCTS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case LOAD_DETAIL_PRODUCT: {
      return {
        ...state,
        product: action.payload,
      };
    }

    case LOADING_DETAIL_PRODUCT: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case "FETCH_CATEGORY": {
      return {
      ...state,
      category: action.payload
    };
  }

    default:
      return {
        ...state,
      };
  }
};