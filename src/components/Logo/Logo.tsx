import React from "react";
import logo from "../../assets/logo.webp";
import styles from "./Logo.module.scss";

const Logo = () => {
  return <img src={logo} alt="Logo image" className={styles.img} />;
};

export default Logo;
