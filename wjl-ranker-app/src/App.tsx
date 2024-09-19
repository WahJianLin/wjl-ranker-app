import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import CategoryPage from "./pages/category-page";
import RootLayout from "./layout/root-layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
