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
  const [score, setScore] = useState(0);
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [letter, setLetter] = useState("");
  const ATTEMPT_MARGIN = 5;

  function handleRestartGame() {
    const isConfirmed = window.confirm(
      "Você tem certeza que deseja reiniciar o jogo?"
    );
    if (isConfirmed) {
      return startGame();
    }
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
      setLetter("");
      alert("Você já usou a letra " + value);
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetterUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setScore(0);
    setLetter("");
    setLetterUsed([]);
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return;
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, você descobriu a palavra!");
      }

      const attemptLimit = challenge.word.length + ATTEMPT_MARGIN;
      if (letterUsed.length === attemptLimit) {
        return endGame("Que pena, você atingiu o limite de tentativas!");
      }
    }, 200);
  }, [score, letterUsed.length]);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          currentNumber={letterUsed.length}
          maxNumber={challenge.word.length + ATTEMPT_MARGIN}
          onRestart={handleRestartGame}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge?.word.split("").map((letter, index) => {
            const showedLetter = letterUsed.find(
              (used) => used.value.toLocaleUpperCase() === letter.toUpperCase()
            );
            return (
              <Letter
                value={showedLetter?.value}
                key={index}
                color={showedLetter?.value ? "correct" : "default"}
              />
            );
          })}
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
