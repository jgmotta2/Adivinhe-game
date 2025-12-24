import tipIcon from "../../assets/tip.svg";

import styles from "./styles.module.css";

type Props = {
  tip: string;
};

export default function Tip(props: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="ícone de dica" />

      <div>
        <h3>Dica</h3>
        <p>{props.tip}</p>
      </div>
    </div>
  );
}
