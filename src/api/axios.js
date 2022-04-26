import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://earthquake.usgs.gov/earthquakes/feed/v1.0",
});

export default axiosInstance;
