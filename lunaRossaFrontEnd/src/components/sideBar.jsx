import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  Grid,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";

export const SideBar = ({ drawerWidth = 240 }) => {

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Nombre de Usuario
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/main">
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={"Todo"} />
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={"Recomendaciones"} />
              </Grid>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/explore">
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={"Explore"} />
              </Grid>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={"Ajustes"} />
              </Grid>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
