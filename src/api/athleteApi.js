
import axios from "axios";

const BASE_URL = "http://localhost:8084/api/athletes";

const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        throw new Error("Access token is missing. Please log in again.");
    }

    return {
        Authorization: `Bearer ${token}`
    };
};

export const registerAthlete = async (athlete) => {
    const response = await axios.post(
        `${BASE_URL}/register`,
        athlete,
        {
            headers: getAuthHeaders()
        }
    );

    return response.data;
};

export const getAthlete = async (id) => {
    const response = await axios.get(
        `${BASE_URL}/${id}`,
        {
            headers: getAuthHeaders()
        }
    );

    return response.data;
};
