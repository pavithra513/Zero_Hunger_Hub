import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:8084",

  headers: {
    "Content-Type": "application/json"
  }

});


// Add JWT token to every request

api.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem("token");

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;
  },

  (error) => {

    return Promise.reject(error);

  }

);


// Handle expired / invalid token

api.interceptors.response.use(

  (response) => {

    return response;

  },

  (error) => {

    if (
      error.response &&
      (
        error.response.status === 401 ||
        error.response.status === 403
      )
    ) {

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      alert(
        "Session expired. Please login again."
      );

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }

);


export default api;