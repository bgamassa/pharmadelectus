import http from "axios";

export const pharmaClient = http.create({
    baseURL: "https://pharmadelectus-project.herokuapp.com"
});