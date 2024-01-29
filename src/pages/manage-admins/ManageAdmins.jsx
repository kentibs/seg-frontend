import { List } from "../../features/table/List";
import styles from "./ManageAdmins.module.css";

export const ManageAdmins = () => {
  return (
    <div className={styles["manage-container"]}>
      <div className={styles["listContainer"]}>
        <div className={styles["listTitle"]}>Latest Admin Updates</div>
        <List />
      </div>
    </div>
  );
};
 