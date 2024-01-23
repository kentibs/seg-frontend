import { Chart } from "../../features/chart/Chart";
import { Featured } from "../../features/featured/Featured";
import { List } from "../../features/table/List";
import Widget from "../../features/widget/Widget";
import styles from "./SuperDashBoard.module.css";

export const SuperDashBoard = () => {
  return (
    <div className={styles[["super-container"]]}>
      <div className={styles["widgets"]}>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className={styles["charts"]}>
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className={styles["listContainer"]}>
        <div className={styles["listTitle"]}>Latest Admin Updates</div>
        <List />
      </div>
    </div>
  );
};
