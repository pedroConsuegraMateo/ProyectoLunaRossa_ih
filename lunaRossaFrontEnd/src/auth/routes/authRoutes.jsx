import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../screens/login"
import { Register } from "../screens/register"


export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/*' element={<Navigate to='/login'/>}/>
        </Routes>
    )
}