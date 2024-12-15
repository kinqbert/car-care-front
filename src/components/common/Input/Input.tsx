import styles from "./styles.module.scss";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const Input = ({ label, value, onChange, error }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.inputField}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <span>{error}</span>}
    </div>
  );
};
