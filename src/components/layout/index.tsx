import React from "react";
import { Outlet } from "react-router-dom";
import css from "./index.css";
import { Header } from "components/header";
import { BotonWhatsapp } from "components/btnWtspp";
import { Footer } from "components/footer";

function Layout() {
  return (
    <div className={css.root}>
      <Header />
      <Outlet />
      {/* <BotonWhatsapp></BotonWhatsapp> */}
      <Footer />
    </div>
  );
}
export { Layout };
