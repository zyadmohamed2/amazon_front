import { createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SingleNew from "../Pages/NEWS/SingleNew";
import MySwiper from "./Swiper 3/MySwiper";
import MySwiper4 from "./Swiper4/MySwiper4";
import SingleSevice from "../Pages/Servicepage/SingleSevice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/swiper1/:id",
        element: <SingleNew/>,
      },
      {
        path: "/swiper4/:id",
        element: <SingleNew/>,
      },
      {
        path: "/swiper3/:id",
        element: <SingleSevice/>,
      },
      {
        path: "/:id",
        element: <SingleNew/>,
      },
      {
        path: "/:id",
        element: <SingleSevice/>,
      },
      {
        path: "/swiper1",
        element: <MySwiper/>,
      },
      {
        path: "/swiper4",
        element: <MySwiper4/>,
      },
      {
        path: "/swiper3",
        element: <MySwiper/>,
      },
      {
        path: "/news",
        element: <SingleNew />,
      },
      {
        path: "/services",
        element: <SingleSevice />,
      }
    ],
  },
]);

export default router;
