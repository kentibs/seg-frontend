import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Contact } from "./pages/contact/Contact";
import { HomePage } from "./pages/homepage/HomePage";
import { AdminLandingPage } from "./pages/admin-landing-page/AdminLandingPage";
import { Notifications } from "./features/notifications/Notifications";
import { hideCardNotification } from "./store/actions/notification";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/actions/auth";
import { UserHomePage } from "./pages/user-homepage/UserHomePage";
import { SuperAdminHomePage } from "./pages/super-admin-homepage/SuperAdminHomePage";
import { AdminHomePage } from "./pages/admin-homepage/AdminHomePage";
import { useEffect } from "react";
import { SuperDashBoard } from "./pages/super-dashboard/SuperDashBoard";
import { ManageAdmins } from "./pages/manage-admins/ManageAdmins";
import { ManageEvents } from "./pages/manage-events/ManageEvents";
import { SuperCommittee } from "./pages/super-committee/SuperCommittee";
import { SuperNotifications } from "./pages/super-notifications/SuperNotifications";
import { NewsLetter } from "./pages/newsletter/NewsLetter";
import { Messages } from "./pages/messages/Messages";
import { SuperCompetitions } from "./pages/competitions/SuperCompetitions";
import { SuperUpdates } from "./pages/updates/SuperUpdates";
import { SuperSettings } from "./pages/super-settings/SuperSettings";
import { SuperUsers } from "./pages/super-users/SuperUsers";
import { SuperPost } from "./pages/super-post/SuperPost";
import { Tokens } from "./pages/tokens/Tokens";
import { Profile } from "./pages/profile/Profile";
import { setDarkMode } from "./store/actions/darkMode";
// import { baseUrl } from "./utils/utils";

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const notification = useSelector((state) => state.notification);

  const queryClient = new QueryClient({
    defaultOptions: { options: { staleTime: 60 * 1000 } },
  });

  const dispatch = useDispatch();
  console.log("NOTIFICATION", notification);

  // const darkMode = useSelector((state) => state.darkMode.darkMode);

  function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }
  // http://localhost:8080/
  // useEffect(() => {
  //   async function signin() {
  //     console.log("Loading refresh...");
  //     const response = await fetch(
  //       `https://seg-backend.onrender.com/api/v1/users/signin`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           email: "kennedymuhumuza283@gmail.com",
  //           password: "kennedy",
  //         }),
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();

  //     console.log("REFRESH RESPONSE", response);
  //     const currentTime = getCurrentTime();
  //     console.log(`Time then was: ${currentTime}`);
  //     console.log("refresh data", data);
  //   }
  //   signin();
  //   const intervalId = setInterval(() => {
  //     signin();
  //     console.log("hello");
  //   }, 240000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const tryLogin = async () => {
      const userData = localStorage.getItem("userData");
      const modeTheme = localStorage.getItem("modeToggle");
      const themeParsedData = JSON.parse(modeTheme);

      const parsedData = JSON.parse(userData);
      if (!userData) {
        console.log("no data found");
        return <Route path="/" element={<HomePage to="/" replace />} />;
      }
      const { user, token } = parsedData;

      if (!token || !user) {
        return <Route path="/" element={<HomePage to="/" replace />} />;
      }
      await dispatch(authenticate(user, token));
      await dispatch(setDarkMode(themeParsedData.darkMode));
    };
    tryLogin();
  }, [dispatch]);

  console.log("redux user", user);
  console.log("is logged in:", isLoggedIn);
  console.log("token:", token);

  const closeCardHandler = () => {
    dispatch(hideCardNotification());
  };
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <BrowserRouter>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route
                path="/"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/admins"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <AdminLandingPage />
                  </>
                }
              />
              <Route
                path="/admin"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <AdminLandingPage />
                  </>
                }
              />
              <Route
                path="/committee"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <AdminLandingPage />
                  </>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<HomePage />} />
            </>
          )}
          {isLoggedIn && user?.role === "user" && (
            <>
              <Route
                // path="/user-home-page"
                path="/"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <UserHomePage />
                  </>
                }
              />

              <Route path="*" element={<UserHomePage />} />
            </>
          )}
          {isLoggedIn && user?.role === "admin" && (
            <>
              <Route
                // path="/admin-home-page"
                path="/"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}
                    <AdminHomePage />
                  </>
                }
              />
              <Route path="*" element={<AdminHomePage />} />
            </>
          )}
          {isLoggedIn && user?.role === "superadmin" && (
            <>
              <Route
                // path="/super-admin-home-page"
                path="/"
                element={
                  <>
                    {notification.showCardNotification && (
                      <Notifications
                        type={notification.cardNotificationType}
                        message={notification.cardMessage}
                        onClose={closeCardHandler}
                      />
                    )}

                    <SuperAdminHomePage />
                  </>
                }
              >
                <Route index element={<SuperDashBoard />} />
                <Route path="super-dashboard" element={<SuperDashBoard />} />
                <Route path="manage-admins" element={<ManageAdmins />} />
                <Route path="manage-events" element={<ManageEvents />} />
                <Route path="super-users" element={<SuperUsers />} />
                <Route path="super-post" element={<SuperPost />} />
                <Route path="super-committee" element={<SuperCommittee />} />
                <Route path="news-letter" element={<NewsLetter />} />
                <Route path="messages" element={<Messages />} />
                <Route path="tokens" element={<Tokens />} />
                <Route path="profile" element={<Profile />} />
                <Route path="super-updates" element={<SuperUpdates />} />
                <Route path="super-settings" element={<SuperSettings />} />
                <Route
                  path="super-competitions"
                  element={<SuperCompetitions />}
                />
                <Route
                  path="super-notifications"
                  element={<SuperNotifications />}
                />
              </Route>

              <Route path="*" element={<SuperAdminHomePage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
