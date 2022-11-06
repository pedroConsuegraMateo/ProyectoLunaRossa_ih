import { Grid } from "@mui/material";
import React from "react";
import { Chart } from "../../components/chart";
import { MainPageLayout } from "../Layout/mainPageLayout";

export const Explore = () => {
  return (
    <MainPageLayout>
      <Grid container sx={{ p: 4, m: 4 }}>
        <h1>Charts</h1>
        <Chart />
      </Grid>
    </MainPageLayout>
  );
};
