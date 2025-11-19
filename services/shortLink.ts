import { api } from "@/lib/api";

export const getAllShortLinks = async () => {
    try {
        const response = await api.get("/links");
        return response.data;
    } catch (error) {
        console.error("Error fetching short links:", error);
        throw error;
    }
}

export const createShortLink = async (data: { originalUrl: string; shortcode?: string }) => {
    try {
        const response = await api.post("/links", data);
        return response.data;
    } catch (error) {
        console.error("Error creating short link:", error);
        throw error;
    }
}

export const redirectShortLink = async (code: string) => {
    try {
        const response = await api.get(`/links/r/${code}`);
        return response.data;
    } catch (error) {
        console.error("Error redirecting short link:", error);
        throw error;
    }
}

export const getShortLinkStats = async (code: string) => {
    try {
        const response = await api.get(`/links/${code}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching short link stats:", error);
        throw error;
    }
}

export const deleteShortLink = async (code: string) => {
    try {
        const response = await api.delete(`/links/${code}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting short link:", error);
        throw error;
    }
}