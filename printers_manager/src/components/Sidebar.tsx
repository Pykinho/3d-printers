import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
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
    title: "Printers",
    path: "/printers",
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

// import Button from "./Button";

// export default function Sidebar(
//   {
//     //   onStartAddProject,
//     //   onSelectProject,
//     //   selectedProjectId,
//     //   projects,
//   }
// ) {
//   return (
//     <aside className="w-1/3 px-8 py-16 bg-stone-950 text-stone-100 md:w-72 rounded-r-xl">
//       <h2 className="mb-9 font-bold uppercase md:text-xl text-stone-200">
//         Your Projects
//       </h2>

//       <Button onClick={onStartAddProject}>Add project</Button>
//       <ul className="mt-8">
//         {projects.map((project) => {
//           let cssClasses =
//             "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-100 hover:bg-stone-900";

//           if (project.id === selectedProjectId) {
//             cssClasses += " bg-stone-900 text-stone-100";
//           } else {
//             cssClasses += " text-stone-400";
//           }
//           return (
//             <li key={project.id}>
//               <button
//                 className={cssClasses}
//                 onClick={() => onSelectProject(project.id)}
//               >
//                 {project.title}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }
export {};
