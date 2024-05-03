import { BrowserRouter, createBrowserRouter, useRoutes } from "react-router-dom";
import MainRoutes from "router/MainRoutes";

const routes = [MainRoutes];
export default function ThemeRoutes() {
  return useRoutes(routes);
}

export const Router = () => {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
};

export const router = createBrowserRouter(routes);