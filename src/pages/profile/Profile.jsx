import styles from "./Profile.module.css";

// export const Profile = () => {
//   return <div className={styles["profile-container"]}>Profile</div>;
// };

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export const Profile = () => {
  const [file, setFile] = useState("");

  return (
    <div className={styles["new"]}>
      <div className={styles["newContainer"]}>
        {/* <span className={styles["profile-header"]}>Profile</span> */}
        <div className={styles["bottom"]}>
          <div className={styles["left"]}>
            <img
              src={file ? URL.createObjectURL(file) : "person.png"}
              alt=""
              className={styles["image-file"]}
            />
          </div>
          <div className={styles["right"]}>
            <form>
              <div className={styles["formInput"]}>
                <label htmlFor="file" className={styles["label-input"]}>
                  Image:{" "}
                  <DriveFolderUploadOutlinedIcon className={styles["icon"]} />
                </label>
                <input
                  className={styles["input-field"]}
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className={styles["formInput"]}>
                <label className={styles["label-input"]}>First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className={styles["input-field"]}
                />
              </div>
              <div className={styles["formInput"]}>
                <label className={styles["label-input"]}>Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className={styles["input-field"]}
                />
              </div>
              <div className={styles["formInput"]}>
                <label className={styles["label-input"]}>Tel:</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className={styles["input-field"]}
                />
              </div>
              <div className={styles["formInput"]}>
                <label className={styles["label-input"]}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles["input-field"]}
                />
              </div>

              <button type="submit" className={styles["send-btn"]}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
