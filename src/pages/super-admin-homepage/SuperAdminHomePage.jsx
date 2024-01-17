import { Outlet } from "react-router-dom";
import styles from "./SuperAdminHomePage.module.css";
import { SuperHeader } from "../../components/super-header/SuperHeader";
import { SuperSideBar } from "../../components/super-sidebar/SuperSideBar";

export const SuperAdminHomePage = () => {
  return (
    <div className={styles["main-container"]}>
      <SuperHeader />
      <SuperSideBar />
      <main className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
