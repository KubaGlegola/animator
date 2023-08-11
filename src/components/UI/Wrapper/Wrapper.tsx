import React from "react";
import styles from "./Wrapper.module.scss";

type Props = {
  children: React.ReactNode;
  customStyles?: string;
};

const Wrapper = ({ children, customStyles }: Props) => {
  return <div className={`${styles.wrapper} ${customStyles}`}>{children}</div>;
};

export default Wrapper;
