import { use, useEffect, useState } from "react";
import styles from "./app.module.css";
import Button from "./components/Button/Button";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Letter from "./components/Letter/Letter";
import LetterUsed, {
  type LetterUsedProps,
} from "./components/LetterUsed/LetterUsed";
import Tip from "./components/Tip/Tip";
import { WORDS, type Challenge } from "./utils/words";

export default function App() {
  const [attempt, setAttempt] = useState(0);
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [letter, setLetter] = useState("");

  function handleRestartGame() {
    return alert("Restart game!");
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      alert("Digite uma letra!");
    }

    const value = letter.toUpperCase();
    const exists = letterUsed.find(
      (used) => used.value.toUpperCase() === value
    );

    if (exists) {
      alert("Você já usou a letra " + value);
    }

    setLetterUsed((prevState) => [...prevState, { value, correct: false }]);
    setLetter("");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setAttempt(0);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          currentNumber={attempt}
          maxNumber={10}
          onRestart={handleRestartGame}
        />
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />

        <div className={styles.word}>
          {challenge?.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            value={letter}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LetterUsed data={letterUsed} />
      </main>
    </div>
  );
}
