import { Outlet } from "react-router-dom";
import styles from "./MainSuperContainer.module.css";
import { useEffect } from "react";

export const MainSuperContainer = ({ setScrolled }) => {
  const handleScroll = () => {
    console.log(
      window.scrollY > 0
        ? "SCROLLED IN SUPER CONTAINER"
        : "scroll failed in Container"
    );
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    console.log("scrolling");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <main className={styles["container"]}>
      <div className={styles["sub-container"]}>
        <Outlet />
      </div>
    </main>
  );
};
