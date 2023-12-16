import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from "./Sidebar";
// import "./Navbar.css";
import { IconContext } from "react-icons";
import { StyledNavbar } from "./StyledNavbar";
import { StyledHeader } from "./StyledHeader";

function Header() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);
  return (
    // <StyledNavbar>

    <StyledHeader>
      <div className="navbar">Dupa</div>
    </StyledHeader>

    // </StyledNavbar>
  );
}

export default Header;
