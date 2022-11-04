import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/authRoutes"
import { MainPage } from "../main_page/screens/mainPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<AuthRoutes />}/>

            <Route path='/main' element={<MainPage />}/>
        </Routes>
    )
}