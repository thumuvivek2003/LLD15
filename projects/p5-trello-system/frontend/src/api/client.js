import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true
});

// 🔐 attach token automatically
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ⚠️ handle global errors
client.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized → redirect to login");
      // redirect logic here
    }
    return Promise.reject(error);
  }
);

export default client;