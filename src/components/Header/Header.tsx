import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Menu from "../Menu/Menu";
import Wrapper from "../UI/Wrapper/Wrapper";

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper customStyles={styles.wrapper}>
        <Link to="/">
          <Logo />
        </Link>
        <Menu />
      </Wrapper>
    </header>
  );
};

export default Header;
