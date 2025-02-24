import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Layout.css"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container layout">
        <Outlet />
      </main>
    </>
  );
}
