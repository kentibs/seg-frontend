import { Outlet } from "react-router-dom";
import styles from "./SuperAdminHomePage.module.css";
import { SuperHeader } from "../../components/super-header/SuperHeader";
import { SuperSideBar } from "../../components/super-sidebar/SuperSideBar";
import { useEffect, useState } from "react";
// import { MainSuperContainer } from "../main-super-container/MainSuperContainer";

export const SuperAdminHomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("scrolling", scrolled);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className={styles["main-container"]}>
      <SuperHeader scrolled={scrolled} />
      <SuperSideBar />
      {/* <MainSuperContainer setScrolled={setScrolled} /> */}
      <main className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
