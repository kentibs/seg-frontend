import { useState } from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDarkMode } from "../../store/actions/homeDarkMode";

export const Header = ({ scrolled }) => {
  const [activeLink, setActiveLink] = useState("home");
  // const [darkOn, setDarkOn] = useState(false);
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const darkOn = useSelector((state) => state.homeDarkMode.homeDarkMode);

  const changeTheme = () => {
    dispatch(setHomeDarkMode(!darkOn));
    // setDarkOn((prev) => !prev);
    if (!document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", 1);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark", 0);
    }
  };

  const toggleMenu = () => {
    setToggle((prev) => !prev);
    // document.body.classList.toggle("open");
  };
  return (
    <header
      className={`${styles["header_container"]} ${
        scrolled ? styles["scrolled"] : ""
      }`}
    >
      <nav className={styles["container"]}>
        <span className={styles["logo"]}>
          <img src="/muk-logo.jpg" alt="aapg" className={styles["muk-img"]} />
          <img src="/aapg-logo.jpg" alt="" className={styles["aapg-img"]} />
        </span>
        <div className={styles["links"]}>
          <ul className={styles["link_container"]}>
            <li>
              <a
                href="#home"
                className={`${styles["nav-link"]} ${
                  activeLink === "home" && styles["active"]
                }`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </a>
              {/* <Link to="/" className={styles["nav-link"]}>
              
                Home
              </Link> */}
            </li>
            <li>
              <a
                href="#about"
                className={`${styles["nav-link"]} ${
                  activeLink === "about" && styles["active"]
                }`}
                onClick={() => setActiveLink("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`${styles["nav-link"]} ${
                  activeLink === "services" && styles["active"]
                }`}
                onClick={() => setActiveLink("services")}
              >
                Services 
              </a>
            </li>
            <li>
              <a
                href="#lifestyle"
                className={`${styles["nav-link"]} ${
                  activeLink === "lifestyle" && styles["active"]
                }`}
                onClick={() => setActiveLink("lifestyle")}
              >
                Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#events"
                className={`${styles["nav-link"]} ${
                  activeLink === "events" && styles["active"]
                }`}
                onClick={() => setActiveLink("events")}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#committee"
                className={`${styles["nav-link"]} ${
                  activeLink === "committee" && styles["active"]
                }`}
                onClick={() => setActiveLink("committee")}
              >
                Committee
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${styles["nav-link"]} ${
                  activeLink === "contact" && styles["active"]
                }`}
                onClick={() => setActiveLink("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className={styles["toggle-btn"]} onClick={() => changeTheme()}>
            {darkOn ? (
              <svg
                viewBox="0 0 1000 1000"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M950 460c13.333 0 25 4 35 12s15 17.333 15 28c0 26.667-16.667 40-50 40h-48c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h48M500 226c76 0 141 26.667 195 80s81 118 81 194c0 77.333-27 142.667-81 196s-119 80-195 80-140.667-26.667-194-80-80-118.667-80-196c0-76 26.667-140.667 80-194s118-80 194-80m0 474c54.667 0 101.667-19.333 141-58s59-86 59-142c0-54.667-19.667-101.667-59-141s-86.333-59-141-59-101.667 19.667-141 59-59 86.333-59 141c0 56 19.667 103.333 59 142s86.333 58 141 58M150 500c0 26.667-16.667 40-50 40H50c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h50c13.333 0 25 4 35 12s15 17.333 15 28m350-350c-10.667 0-20-5-28-15s-12-21.667-12-35V50c0-13.333 4-25 12-35s17.333-15 28-15c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15m0 700c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15c-10.667 0-20-5-28-15s-12-21.667-12-35v-50c0-13.333 4-25 12-35s17.333-15 28-15m368-660l-34 34c-22.667 22.667-44 25.333-64 8-18.667-18.667-16-40 8-64 2.667-4 14-16 34-36 24-22.667 45.333-24.667 64-6s16 40-8 64M168 778c9.333-10.667 20.333-16.667 33-18 12.667-1.333 22.333 2 29 10 8 8 11.333 18.333 10 31-1.333 12.667-6.667 23.667-16 33l-36 36c-9.333 9.333-20.333 14.667-33 16-12.667 1.333-22.333-2-29-10-20-18.667-18-40 6-64 4-2.667 16-14 36-34m20-646l36 36c24 24 26 45.333 6 64-6.667 6.667-16.333 9.333-29 8-12.667-1.333-23.667-6.667-33-16-20-20-32-31.333-36-34-9.333-9.333-14.667-20.333-16-33-1.333-12.667 2-23 10-31 6.667-8 16.333-11.333 29-10 12.667 1.333 23.667 6.667 33 16m590 702c-24-24-26.667-45.333-8-64s40-16 64 8l34 34c24 24 26.667 45.333 8 64s-40 16.667-64-6c-20-20-31.333-32-34-36" />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278zM4.858 1.311A7.269 7.269 0 001.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 005.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`${styles["hamberger"]} ${toggle && styles["toggle-on"]}`}
          onClick={toggleMenu}
        >
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
        {toggle && (
          <>
            <ul className={styles["toggle-link_container"]}>
              <li>
                <a
                  href="#home"
                  className={`${styles["nav-link"]} ${
                    activeLink === "home" && styles["active"]
                  }`}
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </a>
                {/* <Link to="/" className={styles["nav-link"]}>
                Home
              </Link> */}
              </li>
              <li>
                <a
                  href="#about"
                  className={`${styles["nav-link"]} ${
                    activeLink === "about" && styles["active"]
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${styles["nav-link"]} ${
                    activeLink === "services" && styles["active"]
                  }`}
                  onClick={() => setActiveLink("services")}
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#events"
                  className={`${styles["nav-link"]} ${
                    activeLink === "events" && styles["active"]
                  }`}
                  onClick={() => setActiveLink("events")}
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className={`${styles["nav-link"]} ${
                    activeLink === "contact" && styles["active"]
                  }`}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </a>
              </li>
              <div
                className={styles["toggled-btn"]}
                onClick={() => changeTheme()}
              >
                {darkOn ? (
                  <svg
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M950 460c13.333 0 25 4 35 12s15 17.333 15 28c0 26.667-16.667 40-50 40h-48c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h48M500 226c76 0 141 26.667 195 80s81 118 81 194c0 77.333-27 142.667-81 196s-119 80-195 80-140.667-26.667-194-80-80-118.667-80-196c0-76 26.667-140.667 80-194s118-80 194-80m0 474c54.667 0 101.667-19.333 141-58s59-86 59-142c0-54.667-19.667-101.667-59-141s-86.333-59-141-59-101.667 19.667-141 59-59 86.333-59 141c0 56 19.667 103.333 59 142s86.333 58 141 58M150 500c0 26.667-16.667 40-50 40H50c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h50c13.333 0 25 4 35 12s15 17.333 15 28m350-350c-10.667 0-20-5-28-15s-12-21.667-12-35V50c0-13.333 4-25 12-35s17.333-15 28-15c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15m0 700c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15c-10.667 0-20-5-28-15s-12-21.667-12-35v-50c0-13.333 4-25 12-35s17.333-15 28-15m368-660l-34 34c-22.667 22.667-44 25.333-64 8-18.667-18.667-16-40 8-64 2.667-4 14-16 34-36 24-22.667 45.333-24.667 64-6s16 40-8 64M168 778c9.333-10.667 20.333-16.667 33-18 12.667-1.333 22.333 2 29 10 8 8 11.333 18.333 10 31-1.333 12.667-6.667 23.667-16 33l-36 36c-9.333 9.333-20.333 14.667-33 16-12.667 1.333-22.333-2-29-10-20-18.667-18-40 6-64 4-2.667 16-14 36-34m20-646l36 36c24 24 26 45.333 6 64-6.667 6.667-16.333 9.333-29 8-12.667-1.333-23.667-6.667-33-16-20-20-32-31.333-36-34-9.333-9.333-14.667-20.333-16-33-1.333-12.667 2-23 10-31 6.667-8 16.333-11.333 29-10 12.667 1.333 23.667 6.667 33 16m590 702c-24-24-26.667-45.333-8-64s40-16 64 8l34 34c24 24 26.667 45.333 8 64s-40 16.667-64-6c-20-20-31.333-32-34-36" />
                  </svg>
                ) : (
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278zM4.858 1.311A7.269 7.269 0 001.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 005.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                  </svg>
                )}
              </div>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};
Header.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
