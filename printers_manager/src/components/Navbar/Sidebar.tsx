import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as GrIcons from "react-icons/gr";

export const Sidebar = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: <LuIcons.LuPrinter />,
    className: "nav-text",
  },
  {
    title: "Materials",
    path: "/materials",
    icon: <GrIcons.GrResources />,
    className: "nav-text",
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <GrIcons.GrTask />,
    className: "nav-text",
  },
];
