import userIcon from "/user.jpg";
import styles from "./SuperHeader.module.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const SuperHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  let title = "";
  switch (location.pathname) {
    case "/super-admin-home-page":
      title = "Dashboard";
      break;
    case "/super-admin-home-page/super-dashboard":
      title = "Dashboard";
      break;
    case "/super-admin-home-page/manage-admins":
      title = "Manage admins";
      break;
    case "/super-admin-home-page/manage-events":
      title = "Manage events";
      break;
    case "/super-admin-home-page/super-settings":
      title = "Settings";
      break;
    case "/super-admin-home-page/super-committee":
      title = "Committee members";
      break;
    case "/super-admin-home-page/news-letter":
      title = "News letter";
      break;
    case "/super-admin-home-page/messages":
      title = "Messages";
      break;
    case "/super-admin-home-page/super-updates":
      title = "Manage updates";
      break;
    case "/super-admin-home-page/super-competitions":
      title = "Manage competitions";
      break;
    case "/super-admin-home-page/super-notifications":
      title = "Notifications";
      break;

    default:
      title = "Page Not Found";
      break;
  }
  return (
    <header className={styles["header-container"]}>
      <span>{title}</span>
      <div className={styles["user-container"]}>
        <span>
          <span>
            {user?.firstName} {user?.lastName}
          </span>
          <br />
          <span>
            Signed in as <b className={styles["user-role"]}>{user?.role}</b>
          </span>
        </span>
        <img src={userIcon} className={styles["img-container"]} />
      </div>
    </header>
  );
};
