import React, { useEffect, useState } from "react";
import { getAllRestaurantes } from "../data/getRestaurantes";

export const Chart = () => {

    const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    getAllRestaurantes().then((data) => setRestaurantes(data));
  }, []);

  return (
    <div></div>
  )
};
