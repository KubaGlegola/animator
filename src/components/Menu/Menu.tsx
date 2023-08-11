import React, { MouseEvent } from "react";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { menuItem } from "../../types/menuItem";
import Dropdown from "../Dropdown/Dropdown";

const menuItems: menuItem[] = [
  {
    title: "oferta",
    url: "/oferta",
    dropdown: [
      {
        title: "wesele",
        url: "/oferta/wesele",
      },
      {
        title: "urodziny",
        url: "/oferta/urodziny",
      },
      {
        title: "uroczystości rodzinne",
        url: "/oferta/uroczystosci-rodzinne",
      },
      {
        title: "wynajem dmuchańca",
        url: "/oferta/wynajem-dmuchanca",
      },
    ],
  },
  {
    title: "kontakt",
    url: "/kontakt",
  },
];

const Menu = () => {
  const onMouseEnterHandler = (event: MouseEvent) => {
    event.currentTarget.lastElementChild?.setAttribute("dropdown", "1");
  };

  const onMouseLeaveHandler = (event: MouseEvent) => {
    event.currentTarget.lastElementChild?.removeAttribute("dropdown");
  };

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => {
        return item.dropdown ? (
          <li
            className={styles.menuItem}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <NavLink to={item.url}>{item.title}</NavLink>
            <Dropdown items={item.dropdown} />
          </li>
        ) : (
          <li className={styles.menuItem}>
            <NavLink to={item.url}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
