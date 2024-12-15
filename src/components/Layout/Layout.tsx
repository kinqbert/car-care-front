import { Link, Outlet } from "react-router-dom";

import styles from "./styles.module.scss";
import { LogoWithText } from "../../assets/svg/logo";
import {
  DollarCircle,
  Home,
  Logout,
  People,
  Repair,
  SteeringWheel,
  Trade,
} from "../../assets/svg";
import { LayoutNavLinkItem } from "./LayoutNavLinkItem";
import { useUserStore } from "../../store/useUserStore";
import { useAuthStore } from "../../store/useAuthStore";
import { getCurrentUser } from "../../api/user";
import { useEffect } from "react";
import { useCarsStore } from "../../store/useCarsStore";

export const Layout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setUser = useUserStore((state) => state.setUser);
  const userCars = useCarsStore((state) => state.userCars);

  useEffect(() => {
    if (isAuth) {
      getCurrentUser().then((user) => {
        setUser(user);
      });
    }
  }, []);

  const { name, surname, avatarUrl, vehiclesSold } = useUserStore();

  return (
    <div className={styles.container}>
      <aside className={styles.sidePanel}>
        <div className={styles.topContent}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                className={styles.logoWrapper}
                src={LogoWithText}
                alt="CarCare logo with text"
              />
            </Link>
          </div>
          <div className={styles.userInfo}>
            <Link to="/edit-user">
              <img
                className={styles.userImage}
                src={avatarUrl}
                alt="User image"
              />
            </Link>
            <span className={styles.userName}>{name + " " + surname}</span>
            <div className={styles.userInfoItems}>
              <div className={styles.userInfoItem}>
                <img src={DollarCircle} className={styles.userInfoItemIcon} />
                <span className={styles.userInfoItemText}>
                  Sold: {vehiclesSold}
                </span>
              </div>
              <div className={styles.userInfoItem}>
                <img src={SteeringWheel} className={styles.userInfoItemIcon} />
                <span className={styles.userInfoItemText}>
                  Owned: {userCars.length}
                </span>
              </div>
            </div>
          </div>
          <LayoutNavLinkItem to="/garage" icon={Home} text="Your Garage" />
          <LayoutNavLinkItem
            to="/vehicles"
            icon={SteeringWheel}
            text="Browse Vehicles"
          />
          <LayoutNavLinkItem to="/repairs" icon={Repair} text="Repairs" />
          <LayoutNavLinkItem to="/users" icon={People} text="Users" />
          <LayoutNavLinkItem
            to="/transactions"
            icon={Trade}
            text="Transactions"
          />
        </div>

        <div className={styles.bottomContent}>
          <LayoutNavLinkItem to="/logout" icon={Logout} text="Logout" />
        </div>
      </aside>
      <Outlet />
    </div>
  );
};
