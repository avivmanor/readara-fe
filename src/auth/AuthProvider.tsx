import React, { useEffect, useState } from "react";
import { getUser, login, logout } from "./authService";
import type { User } from "../common/user.interface";
import { AuthContext } from "./authContext";

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUser = async () => {
                const {user, error: userError} = await getUser()
                console.log(user)
                if(userError) {
                    setError(userError)
                } else {
                    setIsLoggedIn(!!user)
                    setUser(user)
                }
                setLoading(false)
        }
        fetchUser()
    }, [])

    return (
        <AuthContext.Provider value={{isLoggedIn, user, loading, error, setIsLoggedIn, setUser, setLoading, setError, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
