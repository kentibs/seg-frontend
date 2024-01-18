// import userIcon from "/user.jpg";
import styles from "./SuperHeader.module.css";
import { useSelector } from "react-redux";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";

// import { useLocation } from "react-router-dom";

export const SuperHeader = () => {
  const user = useSelector((state) => state.auth.user);
  // const location = useLocation();

  // let title = "";
  // switch (location.pathname) {
  //   case "/super-admin-home-page":
  //     title = "Dashboard";
  //     console.log("dashboard console");
  //     break;
  //   case "/super-admin-home-page/super-dashboard":
  //     title = "Dashboard";
  //     break;
  //   case "/super-admin-home-page/manage-admins":
  //     title = "Manage admins";
  //     break;
  //   case "/super-admin-home-page/manage-events":
  //     title = "Manage events";
  //     break;
  //   case "/super-admin-home-page/super-settings":
  //     title = "Settings";
  //     break;
  //   case "/super-admin-home-page/super-committee":
  //     title = "Committee members";
  //     break;
  //   case "/super-admin-home-page/news-letter":
  //     title = "News letter";
  //     break;
  //   case "/super-admin-home-page/messages":
  //     title = "Messages";
  //     break;
  //   case "/super-admin-home-page/super-updates":
  //     title = "Manage updates";
  //     break;
  //   case "/super-admin-home-page/super-competitions":
  //     title = "Manage competitions";
  //     break;
  //   case "/super-admin-home-page/super-post":
  //     title = "Manage posts";
  //     break;
  //   case "/super-admin-home-page/super-notifications":
  //     title = "Notifications";
  //     break;
  //   case "/super-admin-home-page/super-users":
  //     title = "Manage users";
  //     break;

  //   default:
  //     title = "Page Not Found";
  //     break;
  // }

  return (
    <header className={styles["header-container"]}>
      {/* <span>{title}</span> */}
      <form className={styles["search-icon-container"]}>
        <input
          type="text"
          placeholder="Search"
          className={styles["search-input"]}
        />
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          type="submit"
          className={styles["search-icon"]}
        >
          <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </form>
      <div className={styles["icons-container"]}>
        <div className={styles["item"]}>
          <LanguageOutlinedIcon className={styles["icon"]} />
          English
        </div>
        <div className={styles["item"]}>
          <DarkModeOutlinedIcon className={styles["icon"]} />
        </div>

        <div className={styles["item"]}>
          <FullscreenExitOutlinedIcon className={styles["icon"]} />
        </div>
        <div className={styles["item"]}>
          <NotificationsNoneOutlinedIcon className={styles["icon"]} />
          <div className={styles["counter"]}>1</div>
        </div>
        <div className={styles["item"]}>
          <ChatBubbleOutlineOutlinedIcon className={styles["icon"]} />
          <div className={styles["counter"]}>2</div>
        </div>
        <div className={styles["item"]}>
          <ListOutlinedIcon className={styles["icon"]} />
        </div>
        <div className={styles["user-container"]}>
          <span>
            <span>
              Hi, {user?.firstName} {user?.lastName}
            </span>
            <br />
            <span className={styles["queen-badge"]}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M18 3a2 2 0 012 2c0 .81-.5 1.5-1.17 1.82L17 13.15V18H7v-4.85L5.17 6.82C4.5 6.5 4 5.81 4 5a2 2 0 012-2 2 2 0 012 2c0 .5-.18.95-.5 1.3l2.8 3.05.53-3.73C10.33 5.26 10 4.67 10 4a2 2 0 012-2 2 2 0 012 2c0 .67-.33 1.26-.83 1.62l.53 3.73 2.77-3.06A2 2 0 0116 5a2 2 0 012-2M5 20h14v2H5v-2z" />
              </svg>
            </span>
            <span>
              &nbsp;<b className={styles["user-role"]}>{user?.role}</b>
            </span>
          </span>
          <span className={styles["icons-container"]}>
            {/* <span>
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                />
              </svg>
            </span>
            <span>
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M21 7h-3c0-1.65-1.35-3-3-3H3C1.35 4 0 5.35 0 7v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zM3 15c-.542 0-1-.458-1-1V7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1H9.5A2.502 2.502 0 007 10.5V15H3zm19 2c0 .542-.458 1-1 1H9c-.542 0-1-.458-1-1v-6.5C8 9.673 8.673 9 9.5 9H21c.542 0 1 .458 1 1v7z" />
              </svg>
            </span> */}
            <div className={styles["user-icon-dropdown-container"]}>
              <span className={styles["user-icon-svg"]}>
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
                </svg>
              </span>
              <span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                </svg>
              </span>
            </div>
          </span>
          {/* <img src={userIcon} className={styles["img-container"]} /> */}
        </div>
      </div>
    </header>
  );
};
