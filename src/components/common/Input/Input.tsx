import styles from "./styles.module.scss";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string | number;
  error?: string;
  type?: "text" | "password" | "email";
}

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.inputField}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder?.toString()}
        type={type}
      />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};
