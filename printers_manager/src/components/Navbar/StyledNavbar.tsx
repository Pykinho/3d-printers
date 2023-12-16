import { styled } from "styled-components";

export const StyledNavbar = styled.div`
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    position: absolute;
  }

  .menu-bars {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    transition: 850ms;
    background-color: #060b26;
    width: 90px;
    height: 100vh;
    display: flex;
    justify-content: center;
    top: 0;
  }

  .nav-menu.expanded {
    width: 170px;
    transition: 150ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    margin-top: 80px;
    width: 100%;
  }

  .navbar-toggle {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 100%;
  }
  .navbar-toggle a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  span {
    margin-left: 16px;
  }
`;
