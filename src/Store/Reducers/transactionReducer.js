import {
  ADD_TRANSACTION,
  LOADING_TRANSACTION,
  FETCH_TRANSACTION,
  FETCH_TRANSACTION_REPORT,
  FILTER_TRANSACTION_REPORT
} from "../Actions/actionType";

const initialState = {
  historyTransaction: [],
  addTransaction: [],
  reportTransaction: [],
  filterTransactionReport: [],
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

    case FETCH_TRANSACTION_REPORT: {
      return {
        ...state,
        reportTransaction: action.payload,
      };
    }

    case FILTER_TRANSACTION_REPORT: {
      return {
        ...state,
        filterTransactionReport: action.payload,
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
