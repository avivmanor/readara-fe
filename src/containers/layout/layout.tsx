// import { Outlet } from "react-router-dom"
import { Typography } from "@mui/joy"
import { Navbar } from "../../components/nav-bar"
import { AppRoutes } from "../Routing/app-routes"
import "./layout.css"

export const Layout = () => {
    return (
        <div className="page-conteiner">
            <div className="header">
                <div className="header-right">
                    <Typography level="body-xs">Readara Logo</Typography>
                </div>
                <div className="header-left">
                    <Navbar />
                </div>
            </div>
            <AppRoutes />
            {/* <Outlet /> */}
        </div>
    )
}