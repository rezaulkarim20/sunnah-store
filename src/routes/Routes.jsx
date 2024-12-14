import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import SignIn from "../pages/auth/signin/Signin";
import SignUp from "../pages/auth/signup/SignUp";
import Contact from "../pages/contact/Contact";
import Product from "../pages/product/Product";
import Blog from "../pages/blog/Blog";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
