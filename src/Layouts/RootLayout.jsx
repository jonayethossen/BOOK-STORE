import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
