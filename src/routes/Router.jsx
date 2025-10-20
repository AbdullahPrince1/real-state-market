import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../auth/LoginPage";
import RegisterPage from "../auth/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: RegisterPage,
      },
    ],
  },
]);
