import axios from "axios";
const BASE_URL_API = "https://api.integrity1auto.com";

const axiosConfig = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    accept: "*/*",
    "Content-Type": "application/json",
  },
  // withCredentials: true
});
// axiosConfig.defaults.headers.common["accept"] = "*/*"

// Add a request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// axiosConfig.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//       // logout();
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosConfig;
