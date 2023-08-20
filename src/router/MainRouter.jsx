import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import FullScreenSpinner from "../components/spinners/FullScreenSpinner.jsx";

const Devices = lazy(() => import("../pages/devices/index.jsx"));

export const MainRouter = props => {
  const menu = JSON.parse(localStorage.getItem("menu"));

  return (
    <Suspense fallback={<FullScreenSpinner />}>
      <Routes>
        <>
          <Route path="/" element={<Devices />} />
        </>
      </Routes>
    </Suspense>
  );
};
