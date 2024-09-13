import axios from "axios";
import { BASE_URL,API_KEY } from "./config";
const AuthStr = 'Bearer '.concat(API_KEY); 
const apiService = axios.create({
  baseURL: BASE_URL,
  // headers: { Authorization: AuthStr }
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    console.log(BASE_URL, "base url");
    console.log(request, "Request123")
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiService;