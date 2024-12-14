import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";
import { LogoWithText } from "../../assets/svg/logo";
import {
  DollarCircle,
  Home,
  Logout,
  Repair,
  SteeringWheel,
} from "../../assets/svg";
import { LayoutNavLinkItem } from "./LayoutNavLinkItem";
import { useUserStore } from "../../store/useUserStore";

export const Layout = () => {
  const userName = "El Gatito"; //useUserStore((state) => state.name);
  const userImageUrl =
    "https://i.pinimg.com/originals/3e/48/6f/3e486fc989e7cf87e748b750692d86c9.jpg"; //useUserStore((state) => state.imageUrl);
  const vehiclesSold = 0; //useUserStore((state) => state.vehiclesSold);
  const vehiclesOwned = useUserStore((state) => state.vehiclesOwned);

  return (
    <div className={styles.container}>
      <aside className={styles.sidePanel}>
        <div className={styles.topContent}>
          <div className={styles.logo}>
            <img
              className={styles.logoWrapper}
              src={LogoWithText}
              alt="CarCare logo with text"
            />
          </div>
          <div className={styles.userInfo}>
            <img
              className={styles.userImage}
              src={userImageUrl}
              alt="User image"
            />
            <span className={styles.userName}>{userName}</span>
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
                  Owned: {vehiclesOwned}
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
        </div>

        <div className={styles.bottomContent}>
          <LayoutNavLinkItem to="/logout" icon={Logout} text="Logout" />
        </div>
      </aside>
      <Outlet />
    </div>
  );
};
