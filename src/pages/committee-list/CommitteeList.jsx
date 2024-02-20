// import { PropagateLoader } from "react-spinners";/
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./CommitteeList.module.css";
import { useState } from "react";

export const CommitteeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const committeeMembers = [
    {
      imgUrl: "Gift.jpg",
      email: "giftkopio@gmail.com",
      name: "Kopio Gift",
      gender: "F",
      tel: "0782363882",
      title: "President",
      period: "2023-2024",
      description:
        "She has been greatly resourceful in the rise and development of this organization, leaving behind a great foundation for other upcoming leaders. ",
    },
    {
      imgUrl: "emma.jpg",
      name: "Emmanuella Kaducu Lagen",
      email: "emmakaducu@gmail.com",
      gender: "F",
      tel: "0742799882",
      title: "Vice President",
      period: "2023-2024",
      description:
        "She has also done alot for the association and has been greatly resourceful in the rise and development of this organization. ",
    },
    {
      imgUrl: "Robert.jpg",
      name: "Luwuge Robert",
      gender: "M",
      email: "robertluwuge@gmail.com",
      tel: "0758853882",
      title: "Secretary",
      period: "2023-2024",
      description:
        "He is responsible for all the formal and legal documentation within the organization  as well as spending and saving strategies. ",
    },
    {
      imgUrl: "triza.jpg",
      name: "Namitala Theresa Natonda",
      email: "triza@gmail.com",
      gender: "F",
      tel: "0778952182",
      period: "2023-2024",
      title: "Treasurer",
      description:
        "She is responsible for all the organization transactions as well as spending and saving strategies. ",
    },
    {
      imgUrl: "wycliffe.jpg",
      name: "Atuhairwe Wycliffe",
      email: "wycliffe@gmail.com",
      gender: "M",
      tel: "0700009182",
      period: "2023-2024",
      title: "Year 4 representative",
      description:
        "He is responsible for mobilizing and organizing many of the organiztions' big events.",
    },
    {
      imgUrl: "ev1.jpg",
      name: "Kitiibwa Deo",
      email: "deokitiibwa@gmail.com",
      gender: "M",
      period: "2023-2024",
      title: "Mobilizer",
      tel: "0700009182",
      description:
        "He is greatly involved in the organization of social events ",
    },
  ];

  const searchedUsers =
    searchQuery.length > 0
      ? committeeMembers.filter((item) =>
          `${item.name} ${item.email} ${item.contact} ${item.period} ${item.title} ${item.tel} ${item.createdDate} ${item.description}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : committeeMembers;

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
          ? committeeMembers.filter((item) =>
              `${item.name} ${item.email} ${item.contact} ${item.period} ${item.title} ${item.tel} ${item.createdDate} ${item.description}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : committeeMembers;
      return searchedUsers;
      // setMembers(searchedUsers);
      //   setIsLoading(false);
      //   }
    } catch (error) {
      console.log(error.message);
      //   setIsLoading(false);
    }
  };
  return (
    <div className={styles["manage-container"]}>
      <div className={styles["listContainer"]}>
        <div className={styles["admin-header-container"]}>
          <div className={styles["listTitle"]}>Committee</div>
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
                  <b className={styles["table-item"]}>Contact</b>
                </TableCell>

                <TableCell className={styles["tableCell"]}>
                  <b className={styles["table-item"]}>Serving period</b>
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
                      <span className={styles["image-container"]}>
                        <img
                          src={row?.imgUrl}
                          alt=""
                          className={styles["img-item"]}
                        />

                        <span className={styles["table-item"]}>
                          <span> {row?.name}</span>
                          <span className={styles["email-item"]}>
                            {row?.email}
                          </span>
                        </span>
                      </span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>{row?.title}</span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>{row?.tel}</span>
                    </TableCell>

                    <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {row?.period}
                      </span>
                    </TableCell>
                    {/* <TableCell
                      className={`${styles["tableCells"]} ${
                        darkMode && styles["darkmode-table"]
                      }`}
                    >
                      <span className={styles["table-item"]}>
                        {formatDate(row?.createdAt)}
                      </span>
                    </TableCell> */}
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
                        <span className={styles["action-icon"]}>
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
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* {queryLoading && (
            <PropagateLoader color="#007fff" className={styles["beatloader"]} />
          )} */}
        </TableContainer>
      </div>
    </div>
  );
};
