import { useQuery } from "@tanstack/react-query";
import type { IBook } from "../types/book";

export const fetchBooks = async (query: string) : Promise<IBook[]> => {
    const response = await fetch(`http://localhost:8080/books?query=${query}`,
        {
        method: 'GET',
        // TODO: Check how to add it to every request
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.json();
}

export const useBooks = (searchTerm: string) => {
    return useQuery<IBook[], Error>({
        queryKey: ['books', searchTerm],
        queryFn: () => fetchBooks(searchTerm),
        enabled: !!searchTerm,
        
    })
}