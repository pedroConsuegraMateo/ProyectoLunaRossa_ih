import { MainPageLayout } from "../Layout/mainPageLayout";
import { Typography } from "@mui/material";
import { RestCard } from "../../components/card";
import { AllCards } from "../../components/allCards";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [usuario, setUsuario] = useState(
    window.localStorage.getItem("userAppLog")
  );

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userAppLog");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUsuario(user);
    }
  }, []);

  return (
    <MainPageLayout>
      <AllCards id_={usuario.id} />
    </MainPageLayout>
  );
};
