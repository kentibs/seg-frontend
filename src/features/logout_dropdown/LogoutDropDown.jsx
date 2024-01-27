import { dropdownItems } from "../../data/dropDownData";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./LogoutDropDown.module.css";
import { useState } from "react";
import { logOut } from "../../store/actions/auth";
// import { BiSolidDownArrow } from "react-icons/bi";

export const LogoutDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = (item) => {
    // setTab(item);
    console.log("clicked");
    // setClicked(true);
    // if (clicked && isActive(item)) {
    if (item === "My profile") {
      console.log("INDEX 0 CLICKED");
    } else if (item === "Notifications") {
      console.log("INDEX 1 CLICKED");
    } else if (item === "Recent activity") {
      console.log("INDEX 2 CLICKED");
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/", { replace: true });
  };

  return (
    // <div className={styles["dropdown-container"]}>
    <div className={styles["dropdown"]}>
      {/* <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
          <BiSolidDownArrow />
        </button> */}
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
        <span onClick={toggleDropdown} className={styles["dropdown-button"]}>
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
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {dropdownItems.map((item, index) => (
            <li key={index} onClick={() => clickHandler(item)}>
              <Link to={item.link} className={styles["dropdown-item"]}>
                {item.icon} {item.linkName}
              </Link>
            </li>
          ))}
          <li className={styles["logout_container"]} onClick={logOutHandler}>
            <TbLogout />
            Logout
          </li>
        </ul>
      )}
      {/* </div> */}
    </div>
  );
};
