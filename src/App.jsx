
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Blogs from './pages/Blogs';

import MainLayout from "./components/layouts/MainLayout";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/certifications", element: <Certifications /> },
          { path: "/projects", element: <Projects /> },
          { path: "/services", element: <Services /> },
          { path: "/blogs", element: <Blogs /> }
        ]
    }
])

const App = () => {
  return(
    <RouterProvider router={router} />
  );
}

export default App;