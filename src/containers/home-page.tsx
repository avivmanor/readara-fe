import { Typography } from "@mui/joy";
import { Button } from "../components/button";
import { login, getUser, logout } from "../services/auth";
import { useState, useEffect } from "react";

export const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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
    <div>
      <Typography level="h1">Home Page</Typography>
      {isLoggedIn ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <Button onClick={() => login()}>Login</Button>
      )}
    </div>
  );
}