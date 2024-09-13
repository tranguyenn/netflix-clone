import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Homes from "../pages/HomePage";
import AuthRequire from "./AuthRequire";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";


function Router() {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homes />}></Route>
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/movie/:id" element={<AuthRequire><DetailPage /></AuthRequire>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
