import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getRestaurantesRecomendados,
  getRestaurantesGuardados,
} from "../data/getRestaurantes";
import { RestCard } from "./card";
import CardsByLabel from "./cardsByLabel";

export const AllCards = (props) => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [restaurantesGuardados, setRestaurantesGuardados] = useState([]);
  const id = JSON.parse(window.localStorage.getItem("userAppLog")).id;

  useEffect(() => {
    getRestaurantesRecomendados(id).then((data) => setRestaurantes(data));
  }, []);

  useEffect(() => {
    getRestaurantesGuardados(id).then((data) => setRestaurantesGuardados(data));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {}, 1500);
    return clearInterval(timer);
  }, [restaurantesGuardados, restaurantes]);

  return (
    <Grid container sx={{ p: 4, m: 4 }}>
      <CardsByLabel />

      <Grid item xs={12}>
        <h2>Recomendaciones para ti</h2>
      </Grid>
      {restaurantes.map((restaurante) => (
          <RestCard
            nombre={restaurante.nombre}
            direccion={restaurante.direccion}
            descripcion={restaurante.descripcion}
            imagen={restaurante.img}
            labels={restaurante.labels}
            url={restaurante.url}
            numero={restaurante.numero}
            key={restaurante.id}
          />
        ))}
      <Grid item xs={12}>
        <h2>Restaurantes Guardados</h2>
      </Grid>
      {restaurantesGuardados.map((restaurante) => (
          <RestCard
            nombre={restaurante.nombre}
            direccion={restaurante.direccion}
            descripcion={restaurante.descripcion}
            imagen={restaurante.img}
            labels={restaurante.labels}
            url={restaurante.url}
            numero={restaurante.numero}
            key={restaurante.id}
          />
        ))}
    </Grid>
  );
};
