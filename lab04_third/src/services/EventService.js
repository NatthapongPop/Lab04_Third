import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/se331-2022/passengerdb",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEventsAir() {
    return apiClient.get("/airline");
  },
  //Added new call
  getEventsPass() {
    return apiClient.get("/passenger");
  },
};
