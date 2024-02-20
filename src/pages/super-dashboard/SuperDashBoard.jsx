import { Chart } from "../../features/chart/Chart";
import { Featured } from "../../features/featured/Featured";
import Widget from "../../features/widget/Widget";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import styles from "./SuperDashBoard.module.css";
import { TokensList } from "../../features/tokens-list/TokensList";

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
        <div className={styles["listContainer-main-first"]}>
          <div className={styles["listTitle"]}>Activity Overview</div>
          <div className={styles["listContainer-main"]}>
            <div className={styles["listContainer-events"]}>
              <div className={styles["upcoming-item-header"]}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                </svg>
                <span> Upcoming events</span>
              </div>
              <ul>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["yellow-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm - Jan 25,2024 -04:00pm
                    </span>
                    <span>Launching the AAPG Website</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["orange-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm - Jan 25,2024 -04:00pm
                    </span>
                    <span>TotalEnergies conference</span>
                  </div>
                </li>

                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["blue-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 25,2024 - 05:00pm - Jan 26,2024 -04:00pm
                    </span>
                    <span>Career guidance</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["green-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm - Jan 25,2024 -04:00pm
                    </span>
                    <span>Launching the AAPG Magazine</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* ----------------------------------------------------RECENT ACTIVITIES--------------------- */}
            <div className={styles["listContainer-events"]}>
              <div className={styles["upcoming-item-header"]}>
                <div className={styles["item"]}>
                  <ListOutlinedIcon className={styles["icon"]} />
                </div>
                <span>Latest Activities</span>
              </div>
              <ul>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["yellow-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm
                    </span>
                    <span>Launching the AAPG Website</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["orange-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm
                    </span>
                    <span>TotalEnergies conference</span>
                  </div>
                </li>

                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["blue-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 25,2024 - 05:00pm
                    </span>
                    <span>Career guidance</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["green-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm
                    </span>
                    <span>Launching the AAPG Magazine</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["purple-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Jan 24,2024 - 05:30pm
                    </span>
                    <span>Launching the AAPG Magazine</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className={styles["listContainer"]}></div> */}
            {/* ----------------------------------------------------LATEST ANNOUNCEMENTS-------------------- */}
            <div className={styles["listContainer-events"]}>
              <div className={styles["upcoming-item-header"]}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.3em"
                  width="1.3em"
                  className={styles["icon"]}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
                </svg>
                <span>New Admins</span>
              </div>
              <ul>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["yellow-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Atuhairwe Wycliffe
                    </span>
                    <span>Admin</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["orange-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>Kopio Gift</span>
                    <span>Super Admin</span>
                  </div>
                </li>

                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["blue-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Namitala Theresa Natonda
                    </span>
                    <span>Admin</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["green-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Luwuge Robert
                    </span>
                    <span>Super admin</span>
                  </div>
                </li>
                <li className={styles["upcoming-item-container-list"]}>
                  <span className={styles["purple-colored"]}></span>
                  <div className={styles["upcoming-item-container"]}>
                    <span className={styles["upcoming-item"]}>
                      Kaducu Emmanuella
                    </span>
                    <span>Admin</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["listContainer"]}>
        <div className={styles["listTitle"]}>Latest Admin Updates</div>
        {/* <List /> */}
        <TokensList />
      </div>
    </div>
  );
};
