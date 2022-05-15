import AppActions from '../actionTypes';

const rootState = {
  count: 0,
};

const rootReducer = (state = rootState, action) => {
  switch (action.type) {
    case AppActions.SET_COUNT:
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
};

export default rootReducer;