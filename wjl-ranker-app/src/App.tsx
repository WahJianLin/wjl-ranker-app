import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./pages/home-page";
import CategorySelectorPage from "./pages/category-selector-page";
import CategoryViewerPage from "./pages/category-viewer-page";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category" element={<CategorySelectorPage />} />
        <Route path="category/:id" element={<CategoryViewerPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
