import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/todo-list",
    element: <HomePage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
