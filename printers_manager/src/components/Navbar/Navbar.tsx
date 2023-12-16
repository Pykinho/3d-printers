import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from "./Sidebar";
// import "./Navbar.css";
import { IconContext } from "react-icons";
import { StyledNavbar } from "./StyledNavbar";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);
  return (
    // <StyledNavbar>

    <StyledNavbar>
      <div className="navbar">Dupa</div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu expanded" : "nav-menu"}>
          {sidebar ? (
            <ul className="nav-menu-items">
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="navbar-toggle">
                <Link to="#" onClick={showSidebar}>
                  <FaIcons.FaRegArrowAltCircleLeft></FaIcons.FaRegArrowAltCircleLeft>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-menu-items">
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>{item.icon}</Link>
                  </li>
                );
              })}
              <li className="navbar-toggle">
                <Link to="#" onClick={showSidebar}>
                  <FaIcons.FaRegArrowAltCircleRight></FaIcons.FaRegArrowAltCircleRight>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </IconContext.Provider>
    </StyledNavbar>
  );
}

export default Navbar;
