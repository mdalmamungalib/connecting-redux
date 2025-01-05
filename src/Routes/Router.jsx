import { createBrowserRouter } from "react-router-dom";
import Frontend from "../Layout/Frontend";
import Page from "../components/Frontend/page";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [{ path: "/", element: <Page /> }],
  },
]);
