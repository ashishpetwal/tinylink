import { api } from "@/lib/api";

export const getHealthStatus = async () => {
    try {
        const response = await api.get("/healthz");
        return response.data;
    } catch (error) {
        console.error("Error fetching health status:", error);
        throw error;
    }
}