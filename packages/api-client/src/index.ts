import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.example.com", // Replace with actual base URL
});

export function fetchData(endpoint: string) {
  return apiClient.get(endpoint);
}
