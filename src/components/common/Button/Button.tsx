import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "filled" | "outline";
  to?: string;
}

export const Button = ({
  title,
  type = "button",
  onClick,
  variant = "filled",
  to,
}: Props) => {
  const getButtonStyle = () => {
    if (variant === "filled") {
      return [styles.button, styles.button__filled].join(" ");
    } else {
      return [styles.button, styles.button__outlined].join(" ");
    }
  };

  if (to) {
    return (
      <Link to={to}>
        <button className={getButtonStyle()} type={type}>
          {title}
        </button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={getButtonStyle()} type={type}>
      {title}
    </button>
  );
};
