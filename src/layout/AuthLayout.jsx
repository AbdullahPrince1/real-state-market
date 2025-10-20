import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <>
      <header className="max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
