import { request } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async (query, variables) => {
    try {
        const data = await request(API_URL, query, variables);
        return data;
    } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
        throw error;
    }
};
