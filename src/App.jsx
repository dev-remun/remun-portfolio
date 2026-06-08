
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";

import Test from "./pages/Test";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <ProjectPage /> },
  { path: "/services", element: <ServicePage /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "test", element: <Test /> }
])

const App = () => {
  return(
    <RouterProvider router={router} />
  );
}

export default App