import styles from "./styles.module.css";

type Props = {
  value?: string;
};

export default function Letter(props: Props) {
  return (
    <div className={styles.letter}>
      <span>{props.value}</span>
    </div>
  );
}
