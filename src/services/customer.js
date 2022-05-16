import api from "../api";

export const getProductTypes = () => {
  return api.get("/product-type");
};

export const addProductTypes = (productName) => {
  return api.post("/product-type", {type: productName});
};

