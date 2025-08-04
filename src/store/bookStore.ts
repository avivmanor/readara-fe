import { create } from "zustand";

interface BookSearchStore {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

export const useBookSearchStore = create<BookSearchStore>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm) => set({ searchTerm }),
}));