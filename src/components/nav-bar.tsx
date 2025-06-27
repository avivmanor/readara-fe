import { Box } from "@mui/joy"
import { MutedButton } from "./muted-button"
import { useNavigate } from "react-router-dom"
import ROUTES from "../containers/Routing/routes"
import { ActionButton } from "./action-button"
import { useAuth } from "../auth/useAuth"

export const Navbar = () => {
    const navigate = useNavigate()
    const { isLoggedIn, login, logout } = useAuth()

    return (
        <Box>
            <MutedButton onClick={() => navigate(ROUTES.BOOKS)}>
                Books
            </MutedButton>
            <MutedButton onClick={() => navigate(ROUTES.FAVORITES)}>
                Favorites
            </MutedButton>
                  {isLoggedIn ? (
        <ActionButton onClick={() => logout()}>Logout</ActionButton>
      ) : (
        <ActionButton onClick={() => login()}>Login</ActionButton>
      )}
        </Box>
    )
}