// export const UserSideBar = () => {
//   return <div>UserSideBar</div>;
// };

import styles from "./UserSideBar.module.css";

// export const AdminSideBar = () => {
//   return <div className={styles["admin-sidebar-container"]}>AdminSideBar</div>;
// };

// import { useState } from "react";
// import { MainNav } from "../main-nav/MainNav";
// import Chat from "../../chat/Chat";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/actions/auth";
import { setActiveList } from "../../store/actions/activeList";
import { setDarkMode } from "../../store/actions/darkMode";

export const UserSideBar = () => {
  // const [active, setActive] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const active = useSelector((state) => state.activeList.activeList);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleClick = (route, activeListOption) => {
    // setActive(activeListOption);
    dispatch(setActiveList(activeListOption));
    navigate(route);
  };

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/", { replace: true });
  };

  return (
    <aside
      className={`${styles["sidebar-container"]} ${
        darkMode && styles["darkmode-sidebar"]
      }`}
    >
      <div className={styles["seg-logo"]}>
        <span className={styles["logo-main"]}>AAPG</span>
        <span className={styles["super-admin-container"]}>
          <span className={styles["super-admin"]}>Superadmin</span>
        </span>
      </div>
      {/* <MainNav /> */}
      <div className={styles["sidebar"]}>
        <div className={styles["center"]}>
          <ul className={styles["ul-list-container"]}>
            <p className={styles["title"]}>MAIN</p>
            <li
              className={`${styles["list-option"]} ${
                active === "dashboard" && styles["active"]
              }`}
              onClick={() => handleClick("super-dashboard", "dashboard")}
            >
              {/* <DashboardIcon className={styles["icon"]} /> */}
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                className={styles["icon"]}
              >
                <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
                <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
              </svg>
              <span>Home</span>
            </li>
            <p className={styles["title"]}>LISTS</p>
            {/* <Link to="/users" style={{ textDecoration: "none" }}> */}

            <li
              className={`${styles["list-option"]} ${
                active === "competition" && styles["active"]
              }`}
              onClick={() => handleClick("user-competitions", "competition")}
            >
              {/* <PersonOutlineIcon className={styles["icon"]} /> */}

              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.6em"
                width="1.6em"
                className={styles["icon"]}
              >
                <path d="M2.5.5A.5.5 0 013 0h10a.5.5 0 01.5.5c0 .538-.012 1.05-.034 1.536a3 3 0 11-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 01-.3.9H3a.5.5 0 01-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 11-1.132-5.89A33.076 33.076 0 012.5.5zm.099 2.54a2 2 0 00.72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 00.72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
              </svg>
              <span>Competitions</span>
            </li>

            <li
              className={`${styles["list-option"]} ${
                active === "products" && styles["active"]
              }`}
              onClick={() => handleClick("user-products", "products")}
            >
              {/* <svg
                fill="none"
                viewBox="0 0 15 15"
                height="1.5em"
                width="1.5em"
                className={styles["icon"]}
              >
                <path
                  fill="currentColor"
                  d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM3.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zM12.5 10H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
                />
                <path
                  fill="currentColor"
                  d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                />
              </svg> */}
              <svg
                viewBox="0 0 576 512"
                fill="currentColor"
                height="1.7em"
                width="1.7em"
                className={styles["icon"]}
              >
                <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z" />
              </svg>
              <span>Products</span>
            </li>

            <li
              className={`${styles["list-option"]} ${
                active === "committee" && styles["active"]
              }`}
              onClick={() => handleClick("super-committee", "committee")}
            >
              {/* <CreditCardIcon className={styles["icon"]} /> */}
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1.4em"
                width="1.4em"
                className={styles["icon"]}
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.582 0 0 1.119 0 2.5v2C0 5.881 3.582 7 8 7s8-1.119 8-2.5v-2C16 1.119 12.418 0 8 0z"
                />
                <path
                  fill="currentColor"
                  d="M8 8.5C3.582 8.5 0 7.381 0 6v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5V6c0 1.381-3.582 2.5-8 2.5z"
                />
                <path
                  fill="currentColor"
                  d="M8 13c-4.418 0-8-1.119-8-2.5v3C0 14.881 3.582 16 8 16s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z"
                />
              </svg>
              <span>Committee</span>
            </li>

            <p className={styles["title"]}>COMMUNICATION</p>
            <li
              className={`${styles["list-option"]} ${
                active === "messages" && styles["active"]
              }`}
              onClick={() => handleClick("messages", "messages")}
            >
              <ForumIcon className={styles["icon"]} />
              <span>Messages</span>
            </li>

            <li
              className={`${styles["list-option"]} ${
                active === "updates" && styles["active"]
              }`}
              onClick={() => handleClick("super-updates", "updates")}
            >
              <TipsAndUpdatesIcon className={styles["icon"]} />
              <span>Updates</span>
            </li>
            <p className={styles["title"]}>USEFUL</p>
            <li
              className={`${styles["list-option"]} ${
                active === "notifications" && styles["active"]
              }`}
              onClick={() =>
                handleClick("super-notifications", "notifications")
              }
            >
              <NotificationsNoneIcon className={styles["icon"]} />
              <span>Notifications</span>
            </li>

            <li
              className={`${styles["list-option"]} ${
                active === "settings" && styles["active"]
              }`}
              onClick={() => handleClick("super-settings", "settings")}
            >
              <SettingsApplicationsIcon className={styles["icon"]} />
              <span>Settings</span>
            </li>
            <p className={styles["title"]}>USER</p>
            <li
              className={`${styles["list-option"]} ${
                active === "profile" && styles["active"]
              }`}
              onClick={() => handleClick("profile", "profile")}
            >
              <AccountCircleOutlinedIcon className={styles["icon"]} />
              <span>Profile</span>
            </li>
            <li className={styles["list-option"]} onClick={logOutHandler}>
              <ExitToAppIcon className={styles["icon"]} />
              <span>Logout</span>
            </li>
            <p className={styles["title"]}>THEME</p>
          </ul>
        </div>
        <div className={styles["bottom"]}>
          <div
            className={styles["light-option"]}
            onClick={() => dispatch(setDarkMode(false))}
          ></div>
          <div
            className={styles["dark-option"]}
            onClick={() => dispatch(setDarkMode(true))}
          ></div>
        </div>
      </div>
    </aside>
  );
};
