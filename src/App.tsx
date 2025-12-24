import styles from "./app.module.css";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Letter from "./components/Letter/Letter";
import Tip from "./components/Tip/Tip";

export default function App() {
  return (
    <div className={styles.container}>
      <main>
        <Header currentNumber={5} maxNumber={10} />
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  );
}
