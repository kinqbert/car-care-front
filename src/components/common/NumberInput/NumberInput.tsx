import styles from "./styles.module.scss";

interface Props {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  placeholder?: string | number;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
}

export const NumberInput = ({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  step,
  error,
}: Props) => {
  return (
    <div className={styles.numberInputContainer}>
      <span className={styles.numberInputLabel}>{label}</span>
      <input
        className={styles.numberInputField}
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        placeholder={placeholder?.toString()}
        min={min}
        max={max}
        step={step}
      />
      {error && <span className={styles.numberInputError}>{error}</span>}
    </div>
  );
};
