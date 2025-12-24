import logo from "../../assets/logo.png";
import restartButton from "../../assets/restart.svg";

import styles from "./styles.module.css";

type Props = {
  currentNumber: number;
  maxNumber: number;
};

export default function Header(props: Props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />

      <header>
        <span>
          <strong>{props.currentNumber}</strong> de {props.maxNumber} tentativas
        </span>

        <button type="button">
          <img src={restartButton} alt="" />
        </button>
      </header>
    </div>
  );
}
