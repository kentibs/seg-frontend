import styles from "./SuperUsers.module.css";

// export const SuperUsers = () => {
//   return <div className={styles["users-container"]}>SuperUsers</div>;
// };

// import styles from "./ManageAdmins.module.css";
import { baseUrl } from "../../utils/utils";
import { useQuery } from "@tanstack/react-query";
import { format, parse } from "date-fns";
import { PropagateLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export const SuperUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  // const [searchQuery, setSearchQuery] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  // const user = useSelector((state) => state.auth.user);

  const getAllUsers = async () => {
    console.log("CHECK FOR TOKEN STATE", token);
    // return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/api/v1/users/get-users-by-role-user`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const res = await response.json();

    console.log("ALL USERS FROM BACKEND", res.data.users);
    // const data = await response.json();

    return res.data.users;
  };

  const formatDate = (date) => {
    if (!date) return "null";
    const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
    const formattedDate = format(parsedDate, "MMMM dd, yyyy hh:mm a");
    return formattedDate;
  };

  const {
    isLoading: queryLoading,
    data: AdminInfo,
    error,
  } = useQuery({ queryKey: ["users"], queryFn: getAllUsers });
  console.log("ADMIN INFO", AdminInfo);

  const searchedUsers =
    searchQuery.length > 0
      ? AdminInfo.filter((item) =>
          `${item?.firstName} ${item?.lastName} ${item?.email} ${item?.role} ${item?.createdAt} ${item?.title} ${item?.tel} ${item?.createdDate} ${item?.description}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : AdminInfo;

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("searched", searchQuery);
    try {
      //   setIsLoading(true);
      //   const docSnap = await getDocs(colletionRef);

      //   if (!docSnap.empty) {
      //   const data = await docSnap.docs.map((doc) => doc.data());

      const searchedUsers =
        searchQuery.length > 0
          ? AdminInfo.filter((item) =>
              `${item?.firstName} ${item?.lastName} ${item?.email} ${item?.role} ${item?.createdAt} ${item?.title} ${item?.tel} ${item?.createdDate} ${item?.description}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : AdminInfo;
      return searchedUsers;
      // setUsers(searchedUsers);
      //   setIsLoading(false);
      //   }
    } catch (error) {
      console.log(error.message);
      //   setIsLoading(false);
    }
  };

  console.log("react query error message", error);

  return (
    <div className={styles["manage-container"]}>
      <span className={styles["tokens-header"]}>
        <span>SEG Muk Chapter members</span>
        <span className={styles["tokens-desc"]}>
          These include all non-admin users with active accounts on this site.
        </span>
      </span>
      <div className={styles["listContainer"]}>
        <div className={styles["admin-header-container"]}>
          <div className={styles["listTitle"]}>Community members</div>
          <form 
            className={styles["search-icon-container"]}
            onSubmit={searchHandler}
          >
            <input
              type="text"
              placeholder="Search members"
              className={styles["search-input"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
        </div>
        <TableContainer
          component={Paper}
          className={`${styles["table"]} ${
            darkMode && styles["darkmode-table"]
          }`}
        >
          <Table
            style={{
              minWidth: 650,
              fontFamily: "Poppins, sans-serif",
              fontSize: "46px",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Names</b>
                </TableCell>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Role</b>
                </TableCell>

                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Created Time</b>
                </TableCell>
                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(searchedUsers) &&
                searchedUsers.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {row?.firstName} {row?.lastName}
                      </span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>{row?.role}</span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {formatDate(row?.createdAt)}
                      </span>
                    </TableCell>
                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["actions-container"]}>
                        <span className={styles["action-icon"]}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15zm-3.847-8.699a2 2 0 102.646 2.646 4 4 0 11-2.646-2.646z" />
                          </svg>
                        </span>
                        {/* <span className={styles["action-icon"]}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 18zM3 20h18v2H3v-2z" />
                          </svg>
                        </span>
                        <span className={styles["delete-icon"]}>
                          {" "}
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.4em"
                            width="1.4em"
                            className={styles["delete-actual-icon"]}
                          >
                            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                          </svg>
                        </span> */}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {queryLoading && (
            <PropagateLoader color="#007fff" className={styles["beatloader"]} />
          )}
        </TableContainer>
      </div>
    </div>
  );
};
