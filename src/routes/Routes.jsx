import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
import Categories from "../components/Categories";
import GadgetDetails from "../pages/GadgetDetails";
import Trending from "../pages/Trending";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          
          children:[
            {
              path:'/',
              element:<Categories></Categories>,
              loader:()=>fetch('../gadgets.json')
            },
            {
              path:'/category/:category',
              element:<Categories></Categories>,
              loader:()=>fetch('../gadgets.json')
            }
          ]
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>

        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/gadget/:product_id',
          element:<GadgetDetails></GadgetDetails>,
          loader:()=>fetch('../gadgets.json')
        },
        {
          path:'/trending',
          element:<Trending></Trending>,
          loader:()=>fetch('../gadgets.json')
        }

      ]
    },
  ]);


  export default routes