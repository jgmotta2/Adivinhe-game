import logo from "../../assets/logo.png";
import restartButton from "../../assets/restart.svg";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />

      <header>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>

        <button type="button">
          <img src={restartButton} alt="" />
        </button>
      </header>
    </div>
  );
}
