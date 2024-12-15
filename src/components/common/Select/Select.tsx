import styles from "./styles.module.scss";

interface Props {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  error,
}: Props) => {
  return (
    <div className={styles.selectContainer}>
      <span className={styles.selectLabel}>{label}</span>
      <select
        className={styles.selectField}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.selectError}>{error}</span>}
    </div>
  );
};
