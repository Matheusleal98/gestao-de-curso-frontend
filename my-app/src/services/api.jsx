import axios from "axios"

export const api = new axios.create({
    baseURL: "htpp://localhost:8080"
});