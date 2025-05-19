import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export { AppRoutes };
