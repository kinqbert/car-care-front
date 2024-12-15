import styles from "./styles.module.scss";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string | number;
  error?: string;
}

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  error,
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.inputField}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder?.toString()}
      />
      {error && <span className={styles.inputError}>{error}</span>}
    </div>
  );
};
