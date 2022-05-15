import api from "../api";

export const getUser = () => {
  return api.get("/users/thor0103");
};
