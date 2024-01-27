import { HiUser } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

export const dropdownItems = [
  {
    icon: <HiUser />,
    linkName: "My Profile",
    link: "profile",
  },
  {
    icon: <IoIosNotifications />,
    linkName: "Notifications",
    link: "super-notifications",
  },
  {
    icon: <IoSettingsSharp />,
    linkName: "Settings",
    link: "super-settings",
  },
];
