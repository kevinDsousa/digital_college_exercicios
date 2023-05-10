import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}