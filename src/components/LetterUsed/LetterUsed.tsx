import Letter from "../Letter/Letter";
import styles from "./styles.module.css";

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

export default function LetterUsed({ data }: Props) {
  return (
    <div className={styles.letterUsed}>
      <h5>Letras Utilizadas</h5>
      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "incorrect"}
          ></Letter>
        ))}
      </div>
    </div>
  );
}
