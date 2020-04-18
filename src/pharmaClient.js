import http from "axios";

export const pharmaClient = http.create({
    baseURL: "http://localhost:8000"
});