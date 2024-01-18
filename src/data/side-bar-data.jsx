import { AiOutlineDatabase } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { MdEmojiEvents } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export const sideBarData = [
  {
    id: uuidv4(),
    category: "Dashboard",
    icon: <HiOutlineHome />,
    linkName: "super-dashboard",
  },
  {
    id: uuidv4(),
    category: "Committee",
    icon: <AiOutlineDatabase />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    children: [
      { linkName: "super-committee", label: "Database" },
      { linkName: "super-post", label: "Post" },
    ],
  },
  {
    id: uuidv4(),
    category: "Manage users",
    icon: <HiOutlineUsers />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    children: [
      { linkName: "manage-admins", label: "Admins" },
      { linkName: "super-users", label: "Users" },
    ],
  },
  {
    id: uuidv4(),
    category: "Events",
    icon: <MdEmojiEvents />,
    linkName: "manage-events",
  },
  {
    id: uuidv4(),
    category: "Messages",
    icon: <TiMessages />,
    linkName: "messages",
  },
  {
    id: uuidv4(),
    category: "Newsletter",
    icon: <LuNewspaper />,
    linkName: "news-letter",
  },
  {
    id: uuidv4(),
    category: "Updates",
    icon: <MdOutlineTipsAndUpdates />,
    linkName: "super-updates",
  },
  {
    id: uuidv4(),
    category: "Notifications",
    icon: <IoNotifications />,
    linkName: "super-notifications",
  },
  {
    id: uuidv4(),
    category: "Settings",
    icon: <IoSettingsOutline />,
    linkName: "super-settings",
  },
];
