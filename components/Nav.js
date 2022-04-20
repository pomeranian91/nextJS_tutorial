import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>PHOTOS</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
