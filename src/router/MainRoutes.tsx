import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { AppRoutes } from "router/AppRoutes";
import { MainLayout } from "layout";
import { WithLoadable } from "components/app-loader";

const HomePage = WithLoadable(lazy(() => import("pages/HomePage")));
const RootPage = WithLoadable(lazy(() => import("pages/RootPage")));

const MainRoutes: RouteObject = {
  path: AppRoutes.Root,
  element: <MainLayout/>,
  children: [
    {
      path: AppRoutes.RootPage,
      element: <RootPage />,
      index: true,
    },
    {
      path: AppRoutes.Home,
      element: <HomePage />,
    },
    {
      path: AppRoutes.NotFound,
      element: <h1>404 Not Found</h1>,
    },
    {
      path: AppRoutes.ServerError,
      element: <h1>500 Server Error</h1>,
    },
    {
      path: AppRoutes.Forbidden,
      element: <h1>403 Forbidden</h1>,
    },
    {
      path: "*",
      element: <Navigate replace to={AppRoutes.NotFound}/>
    }
  ],
};
export default MainRoutes;