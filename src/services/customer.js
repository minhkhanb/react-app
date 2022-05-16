import api from "../api";

export const getProductTypes = () => {
  return api.get("/product-type");
};
