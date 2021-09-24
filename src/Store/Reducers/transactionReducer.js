import {
  ADD_TRANSACTION,
  LOADING_TRANSACTION,
  FETCH_TRANSACTION,
} from "../Actions/actionType";

const initialState = {
  historyTransaction: [],
  addTransaction: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        ...state,
        addTransaction: action.payload,
      };
    }

    case FETCH_TRANSACTION: {
      return {
        ...state,
        historyTransaction: action.payload,
      };
    }

    case LOADING_TRANSACTION: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
