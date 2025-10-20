import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
]);
