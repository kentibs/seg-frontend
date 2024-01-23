import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useNavigate } from "react-router-dom";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import styles from "./Widget.module.css";

const Widget = ({ type }) => {
  const navigate = useNavigate();
  let data;

  switch (type) {
    case "user":
      data = {
        title: "NEW USERS",
        isMoney: false,
        link: "See all users",
        linkName: "/super-admin-home-page/super-users",
        diff: 20,
        amount: 56,
        icon: (
          <PersonOutlinedIcon
            className={styles["icon"]}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "EVENTS",
        isMoney: false,
        link: "View all events",
        linkName: "/super-admin-home-page/super-updates",
        diff: 31,
        amount: 76,
        icon: (
          <ShoppingCartOutlinedIcon
            className={styles["icon"]}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "UPDATES",
        isMoney: false,
        link: "View recent updates",
        linkName: "/super-admin-home-page/super-updates",
        diff: 18,
        amount: 65,
        icon: (
          <TipsAndUpdatesIcon
            className={styles["icon"]}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
          // <MonetizationOnOutlinedIcon
          //   className={styles["icon"]}
          //   style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          // />
        ),
      };
      break;
    case "balance":
      data = {
        title: "NEW ADMINS",
        isMoney: false,
        link: "See details",
        linkName: "/super-admin-home-page/manage-admins",
        diff: 24,
        amount: 44,
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.4em"
            width="1.4em"
            className={styles["icon"]}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
          </svg>
          // <AccountBalanceWalletOutlinedIcon
          //   className={styles["icon"]}
          //   style={{
          //     backgroundColor: "rgba(128, 0, 128, 0.2)",
          //     color: "purple",
          //   }}
          // />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles["widget"]}>
      <div className={styles["left"]}>
        <span className={styles["title"]}>{data.title}</span>
        <span className={styles["counter"]}>
          {data.isMoney && "$"} {data.amount}
        </span>
        <span
          className={styles["link"]}
          onClick={() => navigate(data.linkName)}
        >
          {data.link}
        </span>
      </div>
      <div className={styles["right"]}>
        <div className={`${styles["percentage"]} ${styles["positive"]}`}>
          <KeyboardArrowUpIcon />
          {data.diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
