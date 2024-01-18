// import { useState } from "react";
// import { MainNav } from "../main-nav/MainNav";
import styles from "./SuperSideBar.module.css";
// import Chat from "../../chat/Chat";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export const SuperSideBar = () => {
  // const [botActive, setBotActive] = useState(false);

  // const handleBotClick = () => {
  //   setBotActive((prev) => !prev);
  // };
  return (
    <aside className={styles["sidebar-container"]}>
      <div className={styles["seg-logo"]}>
        <span className={styles["logo-main"]}>SEG</span>
        <span className={styles["super-admin-container"]}>
          <span className={styles["super-admin"]}>Superadmin</span>
        </span>
      </div>
      {/* <MainNav /> */}
      <div className={styles["sidebar"]}>
        {/* <div className={styles["top"]}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className={styles["logo"]}>lamadmin</span>
          </Link>
        </div>
        <hr /> */}
        <div className={styles["center"]}>
          <ul className={styles["ul-list-container"]}>
            <p className={styles["title"]}>MAIN</p>
            <li>
              <DashboardIcon className={styles["icon"]} />
              <span>Dashboard</span>
            </li>
            <p className={styles["title"]}>LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className={styles["icon"]} />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <StoreIcon className={styles["icon"]} />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className={styles["icon"]} />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className={styles["icon"]} />
              <span>Delivery</span>
            </li>
            <p className={styles["title"]}>USEFUL</p>
            <li>
              <InsertChartIcon className={styles["icon"]} />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className={styles["icon"]} />
              <span>Notifications</span>
            </li>
            <p className={styles["title"]}>SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className={styles["icon"]} />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className={styles["icon"]} />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className={styles["icon"]} />
              <span>Settings</span>
            </li>
            <p className={styles["title"]}>USER</p>
            <li>
              <AccountCircleOutlinedIcon className={styles["icon"]} />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className={styles["icon"]} />
              <span>Logout</span>
            </li>
            <p className={styles["title"]}>THEME</p>
          </ul>
        </div>
        <div className={styles["bottom"]}>
          <div
            className={styles["light-option"]}
            // onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className={styles["dark-option"]}
            // onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>

      {/* {botActive && (
        <div className={styles["chat_container"]}>
          <Chat />
        </div>
      )}

      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="2em"
        width="2em"
        className={styles["bot-svg"]}
        onClick={handleBotClick}
      >
        <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
        <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
      </svg> */}
    </aside>
  );
};
