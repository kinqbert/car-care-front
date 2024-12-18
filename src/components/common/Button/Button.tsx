import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BeatLoader } from "react-spinners";

interface Props {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "filled" | "outline" | "error";
  to?: string;
  isLoading?: boolean;
}

export const Button = ({
  title,
  type = "button",
  onClick,
  variant = "filled",
  to,
  isLoading = false,
}: Props) => {
  let spinnerColor = "#fff";

  const getButtonStyle = () => {
    if (variant === "filled") {
      spinnerColor = "#1c1c1c";
      return [styles.button, styles.button__filled].join(" ");
    } else if (variant === "error") {
      return [styles.button, styles.button__error].join(" ");
    } else {
      return [styles.button, styles.button__outlined].join(" ");
    }
  };

  if (to) {
    return (
      <Link to={to}>
        <button className={getButtonStyle()} type={type} disabled={isLoading}>
          {isLoading ? <BeatLoader color={spinnerColor} /> : title}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={getButtonStyle()}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <BeatLoader size={5} color={spinnerColor} /> : title}
    </button>
  );
};
