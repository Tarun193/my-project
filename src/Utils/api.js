import axios from "axios";
import key from "../key";

export const API_KEY = key;

export const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: "bearer " + key,
    },
});
