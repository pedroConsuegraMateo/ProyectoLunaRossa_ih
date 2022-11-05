import {Box, Grid, Skeleton} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {
  getRestaurantesRecomendados,
  getRestaurantesGuardados,
  getRestaurantesCercanos,
  getUserLocation,
} from '../data/getRestaurantes';
import {RestCard} from './card';
import CardsByLabel from './cardsByLabel';

export const AllCards = (props) => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [restaurantesGuardados, setRestaurantesGuardados] = useState([]);
  const [restaurantesCercanos, setRestaurantesCercanos] = useState([]);
  const [coords, setCoords] = useState('');
  const id = JSON.parse(window.localStorage.getItem('userAppLog')).id;

  useEffect(() => {
    getRestaurantesRecomendados(id).then((data) => setRestaurantes(data));
  }, []);

  useEffect(() => {
    getRestaurantesGuardados(id).then((data) => setRestaurantesGuardados(data));
  }, []);

  useEffect(() => {
    getUserLocation().then((coords) =>
      setCoords([coords.coords.latitude, coords.coords.longitude])
    );
  }, []);

  useEffect(() => {
    if (coords) {
      getRestaurantesCercanos(coords).then((data) =>
        setRestaurantesCercanos(data)
      );
    }
  }, [coords]);

  useEffect(() => {
    const timer = setInterval(() => {
    }, 1500)
    return clearInterval(timer)
  }, [restaurantesCercanos, restaurantesGuardados, coords, restaurantes])
  
  return (

    <Grid container sx={{ p: 4, m: 4 }}>
      <CardsByLabel />
      {restaurantesCercanos.length == 0 && <Box sx={{ width:1000}}>
        <Skeleton /><Skeleton animation="wave" /><Skeleton animation={false} />
        <Skeleton /><Skeleton animation="wave" /><Skeleton animation={false} />
        </Box>}
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
        />
      ), 1000)}
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
        />
      ))}
    </Grid>
  );
};
