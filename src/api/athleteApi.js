import axios from "axios";

const BASE_URL = "http://localhost:8084/api/athletes";

export const registerAthlete = async (athlete) => {
    const response = await axios.post(`${BASE_URL}/register`, athlete);
    return response.data;
};

export const getAthlete = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};