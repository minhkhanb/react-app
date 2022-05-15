import AppActions from "../actionTypes/app";

export const increment = () => {
  return {
    type: AppActions.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: AppActions.DECREMENT,
  };
};
