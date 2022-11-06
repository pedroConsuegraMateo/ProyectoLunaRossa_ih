import { Navigate, Route, Routes } from "react-router-dom";
import { Explore } from "../screens/explore";
import { MainPage } from "../screens/mainPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
