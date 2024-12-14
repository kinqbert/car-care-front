import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick?: () => void;
  variant?: "filled" | "outlined";
}

export const Button = ({ title, onClick, variant = "filled" }: Props) => {
  const getButtonStyle = () => {
    if (variant === "filled") {
      return [styles.button, styles.button__filled].join(" ");
    } else {
      return [styles.button, styles.button__outlined].join(" ");
    }
  };

  return (
    <button onClick={onClick} className={getButtonStyle()}>
      {title}
    </button>
  );
};
