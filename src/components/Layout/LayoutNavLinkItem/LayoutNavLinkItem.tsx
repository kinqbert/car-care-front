import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

interface Props {
  to: string;
  icon: string;
  text: string;
}

export const LayoutNavLinkItem = ({ to, icon, text }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? [styles.layoutNavLink, styles.layoutNavLink__active].join(" ")
          : styles.layoutNavLink
      }
    >
      <img src={icon} className={styles.layoutNavLinkIcon} />
      <span>{text}</span>
    </NavLink>
  );
};
