import { Box } from "@mui/system";
import React from "react";
import { NavBar } from "../../components/navBar";
import { SideBar } from "../../components/sideBar";

const DRAWER_WIDTH = 240;

export const MainPageLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NavBar */}
      <NavBar drawerWidth={DRAWER_WIDTH} />

      {/* SideBar */}
      <SideBar />

      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {/* ToolBar */}
        {children}
      </Box>
    </Box>
  );
};
