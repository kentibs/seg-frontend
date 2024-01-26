// import { useState } from "react";
// import { MainNav } from "../main-nav/MainNav";
// import Chat from "../../chat/Chat";
import styles from "./SuperSideBar.module.css";
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

export const SuperSideBar = () => {
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
            <li
              className={`${styles["list-option"]} ${
                active === "dashboard" && styles["active"]
              }`}
              onClick={() => handleClick("super-dashboard", "dashboard")}
            >
              <DashboardIcon className={styles["icon"]} />
              <span>Dashboard</span>
            </li>
            <p className={styles["title"]}>LISTS</p>
            {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
            <li
              className={`${styles["list-option"]} ${
                active === "admins" && styles["active"]
              }`}
              onClick={() => handleClick("manage-admins", "admins")}
            >
              {/* <StoreIcon className={styles["icon"]} /> */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                className={styles["icon"]}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
              </svg>
              <span>Admins</span>
            </li>
            <li
              className={`${styles["list-option"]} ${
                active === "users" && styles["active"]
              }`}
              onClick={() => handleClick("super-users", "users")}
            >
              {/* <PersonOutlineIcon className={styles["icon"]} /> */}
              <svg
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
              </svg>
              <span>Users</span>
            </li>
            {/* </Link> */}
            {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
            {/* </Link> */}
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
            <li
              className={`${styles["list-option"]} ${
                active === "tokens" && styles["active"]
              }`}
              onClick={() => handleClick("tokens", "tokens")}
            >
              {/* <LocalShippingIcon className={styles["icon"]} /> */}
              <svg
                fill="none"
                viewBox="0 0 15 15"
                height="1.8em"
                width="1.8em"
                className={styles["icon"]}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM9 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-7 6a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6-1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM9 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Tokens</span>
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
                active === "news" && styles["active"]
              }`}
              onClick={() => handleClick("news-letter", "news")}
            >
              <NewspaperIcon className={styles["icon"]} />
              <span>Newsletter</span>
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
