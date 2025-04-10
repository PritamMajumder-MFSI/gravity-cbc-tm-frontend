import { createBrowserRouter } from "react-router-dom";
import PersonalityTest from "../pages/PersonalityTest";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/personality-test",
    element: <PersonalityTest />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);
export default router;
