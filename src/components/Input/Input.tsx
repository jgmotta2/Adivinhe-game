import styles from "./styles.module.css";

type Props = React.ComponentProps<"input">;

export default function Input({ ...rest }: Props) {
  return (
    <div>
      <input type="text" className={styles.input} {...rest} />
    </div>
  );
}
