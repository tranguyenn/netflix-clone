import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useAuth from "../hooks/useAuth";
import Title from "../components/Title";
import { Button } from "@mui/material";

function MainHeader() {
  // const { user } = useAuth();
  return (
    <Box className="header-container">
      <AppBar position="static" id="header-appbar">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Title />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
         
          <Typography variant="h6" color="inherit" component="div">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;