import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { ScatterChart, LineChart, RestaurantesTotales } from "../../components/charts";
import { MainPageLayout } from "../Layout/mainPageLayout";

export const Explore = () => {
  return (
    <MainPageLayout>
      <Grid container sx={{ p: 4, m: 4 }}>
        <Grid item xs={12}>
          <h1>Charts</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Restaurantes Disponibles: <RestaurantesTotales /></h2>
        </Grid>
        <Grid item xs={6}>
          <ScatterChart />
        </Grid>
        <Grid item xs={6}>
          <LineChart />
        </Grid>
      </Grid>
    </MainPageLayout>
  );
};
