import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5001/api/",
  // baseURL: import.meta.env.mode === "production" ?  "/api/" : "http://localhost:5001/api/",
  baseURL: "/api/",
  withCredentials: true,
  timeout: 5000
});