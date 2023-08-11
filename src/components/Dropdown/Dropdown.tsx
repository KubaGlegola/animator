import React from "react";
import { menuItem } from "../../types/menuItem";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

type Props = {
  items: menuItem[];
};

const Dropdown = (props: Props) => {
  return (
    <ul className={styles.dropdown}>
      {props.items.map((item) => {
        return (
          <li>
            <Link to={item.url}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
