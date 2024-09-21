import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
      <div className="root-layout">
        <Navbar />
        <Outlet />
      </div>
  );
}

export default RootLayout;
