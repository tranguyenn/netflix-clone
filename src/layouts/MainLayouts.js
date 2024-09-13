import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainHeader from "./MainHeader";
import HeaderLogged from "./HeaderLogged";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <HeaderLogged />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default MainLayout;