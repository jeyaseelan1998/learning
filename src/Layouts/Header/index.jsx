import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookies";

import websiteLogo from "../../assets/logo/logo.svg";
import logoutIcon from "../../assets/logout.svg";

import style from "./style.module.css";

const Header = () => {
  const { pathname } = useLocation();

  const isLoggedIn = Cookies.getItem("token");

  const onLogout = () => {
    Cookies.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <header className={style.headerWrapper}>
      <div>
        <div className={style.logoWrapper}>
          <img src={websiteLogo} alt="logo" />
        </div>
        <nav>
          <Link className={["/", "/home"].includes(pathname) ? style.active : ''} to={"/"}>Home</Link>
          <Link className={pathname === "/about" ? style.active : ''} to={"/about"}>About</Link>
          <Link className={pathname === "/contact" ? style.active : ''} to={"/contact"}>Contact</Link>
          <Link className={pathname === "/login" ? style.active : ''} to={"/login"}>Login</Link>
        </nav>

        {isLoggedIn && <button className={style.logoutBtn} onClick={onLogout}>
          <img src={logoutIcon} alt="logout" />
        </button>}
      </div>
    </header>
  );
};

export default Header;
