import axios from "axios";

//const token = window.localStorage.getItem('token');
//const api_url = API;

export const axiosIntance = axios.create({
   baseURL:'http://localhost:5000/api' ,
   withCredentials : false,
  /*  headers: {
       "Authorization": token ? `Bearer ${token}` : "",
       "content-Type" : "multipart/form-data"
   } */
});