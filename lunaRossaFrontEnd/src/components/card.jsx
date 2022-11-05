import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";

export const RestCard = ({
  nombre,
  direccion,
  descripcion,
  imagen,
  labels,
  url,
  numero,
}) => {

  return (
    <Grid item xs={3} alignItems='center'>
      <Card sx={{ maxWidth: 345, m: 3 }}>
        <CardMedia component="img" height="140" image={imagen ? imagen : 'https://cdn.dribbble.com/users/143350/screenshots/14052412/media/27ab3785352e64f357bc1608bae74361.png?compress=1&resize=400x300'} alt={nombre} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="caption" color="text.secondary">
            {labels}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion ? descripcion : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ab!'}
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            {direccion}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ml:1}}>
            {numero}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
          <Link sx={{color: '#fff'}} href={url}>Ver en Google Maps</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
