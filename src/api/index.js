import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: { "content-type": " application/json" },
});

export default api;
