import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router";




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
