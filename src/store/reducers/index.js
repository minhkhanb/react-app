import AppActions from '../actionTypes/app';

const rootState = {
  count: 0,
};

const rootReducer = (state = rootState, action) => {
  switch (action.type) {
    case AppActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case AppActions.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

export default rootReducer;