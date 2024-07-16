import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Coin from "./views/Coin";
import Eco from "./views/Eco";
import Road from "./views/Road";
import Promo from "./views/Promo";
import Paper from "./views/Paper";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop />},
  { path: "/coin", element: <Coin />},
  { path: "/roadmap", element: <Road />},
  { path: "/paper", element: <Paper />},
  { path: "/promo", element: <Promo />},
  { path: "/eco", element: <Eco />},
  { path: "*", element: <Home /> }
]);

export default function App() {
  return <RouterProvider router={router} />
}

