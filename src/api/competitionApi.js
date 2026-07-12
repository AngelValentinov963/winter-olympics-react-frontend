import api from "./axios";

export const getCompetitions = async () => {
    const response = await api.get("/competitions");
    return response.data;
};

export const getCompetitionById = async (id) => {
    const response = await api.get(`/competitions/${id}`);
    return response.data;
};

export const createCompetition = async (competition) => {
    const response = await api.post("/competitions", competition);
    return response.data;
};

export const updateCompetition = async (id, competition) => {
    const response = await api.put(`/competitions/${id}`, competition);
    return response.data;
};

export const deleteCompetition = async (id) => {
    await api.delete(`/competitions/${id}`);
};