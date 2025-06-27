import { Route, Routes } from "react-router-dom"
import { HomePage } from "../home-page"
import { BooksPage } from "../books-page"
import ROUTES from "./routes"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.BOOKS} element={<BooksPage />} />
            <Route path={ROUTES.FAVORITES} element={<BooksPage />} />
        </Routes>
    )
}