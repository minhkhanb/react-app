import AppActions from "../actionTypes/app";
import { GET_PRODUCT_TYPE_SUCCESS } from '../actionCreators/thunk'

const rootState = {
  count: 0,
  listProductTypes: []
};

const rootReducer = (state = rootState, action) => {
  switch (action.type) {
    case AppActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case AppActions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case GET_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
        listProductTypes: action.payload,
      }
      

    default:
      return state;
  }
};

export default rootReducer;
