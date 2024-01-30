import styles from "./UserHeader.module.css";

// export const UserHeader = () => {

import { useSelector } from "react-redux";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../store/actions/darkMode";
import { useNavigate } from "react-router-dom";
import { setActiveList } from "../../store/actions/activeList";
import { setSideBar } from "../../store/actions/sideBar";
import { LogoutDropDown } from "../../features/logout_dropdown/LogoutDropDown";
// import { useState } from "react";
// import { useState } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";

// import { useLocation } from "react-router-dom";

export const UserHeader = ({ scrolled }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state.sideBar.sideBar);

  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleClick = (route, activeListOption) => {
    // setActive(activeListOption);
    dispatch(setActiveList(activeListOption));
    navigate(route);
  };

  const changeMode = () => {
    dispatch(setDarkMode(!darkMode));
    // console.log("changed mode", darkMode);
  };

  const handleSideBarState = () => {
    // console.log("sideBarState click", sideBarState);

    if (sideBarState === "") dispatch(setSideBar("off"));
    if (sideBarState === "on") dispatch(setSideBar("off"));
    if (sideBarState === "off") dispatch(setSideBar("on"));
    // console.log("sideBarState", sideBarState);
  };

  return (
    <header
      // className={styles["header-container"]}
      className={`${styles["header-container"]} ${
        scrolled ? styles["scrolled"] : ""
      } ${sideBarState === "off" && styles["sidebar-on"]} ${
        darkMode && styles["darkmode"]
      }`}
    >
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
        <div className={styles["item"]} onClick={() => changeMode()}>
          {!darkMode ? (
            <DarkModeOutlinedIcon className={styles["icon"]} />
          ) : (
            <svg
              viewBox="0 0 1000 1000"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
              className={styles["icon"]}
            >
              <path d="M950 460c13.333 0 25 4 35 12s15 17.333 15 28c0 26.667-16.667 40-50 40h-48c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h48M500 226c76 0 141 26.667 195 80s81 118 81 194c0 77.333-27 142.667-81 196s-119 80-195 80-140.667-26.667-194-80-80-118.667-80-196c0-76 26.667-140.667 80-194s118-80 194-80m0 474c54.667 0 101.667-19.333 141-58s59-86 59-142c0-54.667-19.667-101.667-59-141s-86.333-59-141-59-101.667 19.667-141 59-59 86.333-59 141c0 56 19.667 103.333 59 142s86.333 58 141 58M150 500c0 26.667-16.667 40-50 40H50c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h50c13.333 0 25 4 35 12s15 17.333 15 28m350-350c-10.667 0-20-5-28-15s-12-21.667-12-35V50c0-13.333 4-25 12-35s17.333-15 28-15c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15m0 700c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15c-10.667 0-20-5-28-15s-12-21.667-12-35v-50c0-13.333 4-25 12-35s17.333-15 28-15m368-660l-34 34c-22.667 22.667-44 25.333-64 8-18.667-18.667-16-40 8-64 2.667-4 14-16 34-36 24-22.667 45.333-24.667 64-6s16 40-8 64M168 778c9.333-10.667 20.333-16.667 33-18 12.667-1.333 22.333 2 29 10 8 8 11.333 18.333 10 31-1.333 12.667-6.667 23.667-16 33l-36 36c-9.333 9.333-20.333 14.667-33 16-12.667 1.333-22.333-2-29-10-20-18.667-18-40 6-64 4-2.667 16-14 36-34m20-646l36 36c24 24 26 45.333 6 64-6.667 6.667-16.333 9.333-29 8-12.667-1.333-23.667-6.667-33-16-20-20-32-31.333-36-34-9.333-9.333-14.667-20.333-16-33-1.333-12.667 2-23 10-31 6.667-8 16.333-11.333 29-10 12.667 1.333 23.667 6.667 33 16m590 702c-24-24-26.667-45.333-8-64s40-16 64 8l34 34c24 24 26.667 45.333 8 64s-40 16.667-64-6c-20-20-31.333-32-34-36" />
            </svg>
          )}
        </div>

        <div className={styles["item"]}>
          <FullscreenExitOutlinedIcon className={styles["icon"]} />
        </div>
        <div className={styles["item"]}>
          <NotificationsNoneOutlinedIcon
            className={styles["icon"]}
            onClick={() => handleClick("super-notifications", "notifications")}
          />
          <div className={styles["counter"]}>1</div>
        </div>
        <div className={styles["item"]}>
          <ChatBubbleOutlineOutlinedIcon
            className={styles["icon"]}
            onClick={() => handleClick("messages", "messages")}
          />
          <div className={styles["counter"]}>2</div>
        </div>
        <div className={styles["item"]}>
          <ListOutlinedIcon
            className={styles["icon"]}
            onClick={handleSideBarState}
          />
        </div>
        <div className={styles["user-container"]}>
          <span>
            <span>
              Hi, {user?.firstName} {user?.lastName}
            </span>
            {/* <br /> */}
            {/* <span className={styles["queen-badge"]}>
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
            </span> */}
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
              {/* <span className={styles["user-icon-svg"]}>
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
                </svg>
              </span> */}
              {/* <span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                </svg>
              </span> */}
            </div>
            <LogoutDropDown />
          </span>
          {/* <img src={userIcon} className={styles["img-container"]} /> */}
        </div>
      </div>
    </header>
  );
};
