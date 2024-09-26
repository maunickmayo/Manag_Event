import axios, { AxiosInstance } from "axios";

export function useApi() {
    // const headers = { 'Access-Control-Allow-Origin': '*' };

    const api: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_LOCAL_URL,
        // headers
    });

    api.interceptors.request.use((config) => {
        //Ajouter le Token dans le header
        const token = localStorage.getItem("authToken");
        token ? (config.headers["Authorization"] = "Bearer " + token) : "";
        return config;
    });

    // api.interceptors.response.use(
    //   (response) => response

    //   async (error) => {
    //     if (error.response) {
    //       return error.response.data.error;
    //     } else if (error.request) {
    //       return error.request;
    //     } else {
    //       return error.config;
    //     }
    //   }
    // );

    return api;
}
