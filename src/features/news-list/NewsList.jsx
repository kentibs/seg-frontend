import styles from "./NewsList.module.css";

// export const NewsList = () => {
//   return <div>NewsList</div>;
// };

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { PropagateLoader } from "react-spinners";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../utils/utils";
import { format, parse } from "date-fns";
// import { baseUrl } from "../../utils/utils";

export const NewsList = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const formatDate = (date) => {
    if (!date) return "null";
    const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
    const formattedDate = format(parsedDate, "MMMM dd, yyyy hh:mm a");
    return formattedDate;
  };

  const getAllSubscribers = async () => {
    const response = await fetch(`${baseUrl}/api/v1/newsletter/get`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const res = await response.json();
    console.log("hey there");
    console.log("ALL SUBSCRIBERS FROM BACKEND", res.data.subscribers);
    // const data = await response.json();

    return res.data.subscribers;
  };

  const {
    isLoading: queryLoading,
    data: subscriberInfo,
    error,
  } = useQuery({ queryKey: ["tokens"], queryFn: getAllSubscribers });
  console.log("SUBSCRIBER INFO", subscriberInfo);

  console.log("react query error message", error);

  return (
    <TableContainer
      component={Paper}
      className={`${styles["table"]} ${darkMode && styles["darkmode-table"]}`}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles["tableCell"]}>Email</TableCell>
            <TableCell className={styles["tableCell"]}>Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriberInfo.map((row) => (
            // <TableRow key={index}>
            <TableRow key={row?.newsLetterId}>
              {/* <TableCell
                className={`${styles["tableCells"]} ${
                  darkMode && styles["darkmode-table"]
                }`}
              >
                {row.id}
              </TableCell> */}

              <TableCell
                className={`${styles["tableCells"]} ${
                  darkMode && styles["darkmode-table"]
                }`}
              >
                {row?.email}
              </TableCell>
              <TableCell
                className={`${styles["tableCells"]} ${
                  darkMode && styles["darkmode-table"]
                }`}
              >
                {formatDate(row?.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {queryLoading && (
        <PropagateLoader color="#007fff" className={styles["beatloader"]} />
      )}
    </TableContainer>
  );
};
