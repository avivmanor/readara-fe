import { createContext } from "react";
import type { User } from "../common/user.interface";

interface AuthContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
    setIsLoggedIn: (value: boolean) => void;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null)
