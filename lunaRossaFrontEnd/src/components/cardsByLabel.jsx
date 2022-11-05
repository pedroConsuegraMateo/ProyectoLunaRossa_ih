import { useState, useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import TapasIcon from '@mui/icons-material/Tapas';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { getRestaurantesByLabel, getUserLocation, getRestaurantesCercanos } from '../data/getRestaurantes';
import { RestCard } from './card';
import { Grid } from '@mui/material';


export default function CardsByLabel() {
    const [value, setValue] = useState('cercanos');
    const [restaurantesByLabel, setRestaurantesByLabel] = useState([])
    const [restaurantesCercanos, setRestaurantesCercanos] = useState([]);
    const [coords, setCoords] = useState('');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        getUserLocation().then((coords) =>
          setCoords([coords.coords.latitude, coords.coords.longitude])
        );
      }, []);

    useEffect(() => {
        if(value == 'cercanos'){
            if (coords) {
                getRestaurantesCercanos(coords).then((data) =>
                setRestaurantesCercanos(data)
              );
            }
        } else {
            getRestaurantesByLabel(value).then((data) => setRestaurantesByLabel(data));
        }
    }, [coords, value]);
    return (
        <Grid container>
            <Grid container>
                <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Cercanos"
                        value="cercanos"
                        icon={<LocationOnIcon />}
                    />

                <BottomNavigationAction
                    label="Tomar Algo"
                    value="tomar-algo"
                    icon={<TapasIcon />}
                />

                <BottomNavigationAction
                    label="Española"
                    value="espanola"
                    icon={<RestaurantMenuIcon />}
                />

                <BottomNavigationAction
                    label="Italiana"
                    value="italiana"
                    icon={<LocalPizzaIcon />}
                />

                        <BottomNavigationAction
                    label="Asiática"
                    value="asiatica"
                    icon={<RiceBowlIcon />}
                />

                <BottomNavigationAction
                    label="Latina"
                    value="latina"
                    icon={<EmojiFoodBeverageIcon />}
                />
            </BottomNavigation>

        </Grid>
        {value=='cercanos' && 
        <Grid item xs={12}>
            <h2>Restaurantes Cercanos</h2>
        </Grid>}
        {value == 'cercanos' && restaurantesCercanos.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
        />))}
        {value=='espanola' && 
        <Grid item xs={12}>
            <h2>Restaurantes de comida Española</h2>
        </Grid>}
        {value == 'espanola' && restaurantesByLabel.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
        />))}

        {value=='tomar-algo' && 
        <Grid item xs={12}>
            <h2>Lugares para tomar algo</h2>
        </Grid>}
        {value == 'tomar-algo' && restaurantesByLabel.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
        />))}

        {value=='italiana' && 
        <Grid item xs={12}>
            <h2>Restaurantes Italianos</h2>
        </Grid>}
        
        {value == 'italiana' && restaurantesByLabel.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
          />))}

        {value=='asiatica' && 
        <Grid item xs={12}>
            <h2>Restaurantes Asiáticos</h2>
        </Grid>}
        {value == 'asiatica' && restaurantesByLabel.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
          />))}
        
        {value=='latina' && 
        <Grid item xs={12}>
            <h2>Restaurantes de comida Latina</h2>
        </Grid>}
        {value == 'latina' && restaurantesByLabel.map((restaurante) => (
        <RestCard
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          descripcion={restaurante.descripcion}
          imagen={restaurante.img}
          labels={restaurante.labels}
          url={restaurante.url}
          numero={restaurante.numero}
          />))}
      </Grid>  
    );
  }