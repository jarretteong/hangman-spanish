"use client";

import { Button } from "@/components/ui/button";
import { words } from "@/lib/words";
import { useState, useEffect } from "react";
import { HangmanFigure } from "../../components/HangmanFigure";
import { Keyboard } from "../../components/Keyboard";
import Link from "next/link";
import Leaderboard from "@/components/Leaderboard/Leaderboard";

const HangmanGame = () => {
  const [selected, setSelected] = useState(() => {
    const entry = words[Math.floor(Math.random() * words.length)];
    return entry;
  });

  const [guessed, setGuessed] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");

  const word = selected.word;
  const hint = selected.hint;
  const maxAttempts = 6;

  const handleGuess = (letter: string) => {
    if (guessed.includes(letter) || status !== "playing") return;

    setGuessed((prev) => [...prev, letter]);

    if (!word.includes(letter)) {
      setAttempts((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const isWinner = word.split("").every((char) => guessed.includes(char));
    if (isWinner) {
      setStatus("won");
    } else if (attempts >= maxAttempts) {
      setStatus("lost");
    }
  }, [guessed, attempts, word]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
      <h1 className="text-3xl font-bold mb-6 text-center w-full">
        Spanish Hangman
      </h1>

      <div className="w-full max-w-6xl flex flex-col items-center justify-center">
        {/* Flex container for game + leaderboard */}
        <div className="flex flex-col lg:flex-row w-full gap-8 justify-center items-center">
          {/* Hangman Section */}
          <div className="flex flex-col items-center">
            <HangmanFigure attempts={attempts} />

            <div className="text-center flex justify-center items-center mt-2">
              <p className="text-muted-foreground mr-1">Hint:</p>
              <p className="text-lg font-semibold">{hint}</p>
            </div>

            <p className="text-2xl mt-6 tracking-widest font-mono">
              {word
                .split("")
                .map((char) =>
                  guessed.includes(char) || status !== "playing" ? char : "_"
                )
                .join(" ")}
            </p>

            <Keyboard
              guessed={guessed}
              onGuess={handleGuess}
              disabled={status !== "playing"}
            />

            <div className="mt-4">
              {status === "won" && (
                <p className="text-green-600 text-lg font-bold">You won!</p>
              )}
              {status === "lost" && (
                <p className="text-red-600 text-lg font-bold">
                  You lost! The word was <strong>{word}</strong>.
                </p>
              )}
            </div>

            {status !== "playing" && (
              <div className="mt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const entry =
                      words[Math.floor(Math.random() * words.length)];
                    setSelected(entry);
                    setGuessed([]);
                    setAttempts(0);
                    setStatus("playing");
                  }}
                >
                  Play Again
                </Button>
              </div>
            )}
          </div>

          {/* Leaderboard Section */}
          <div className="w-full lg:w-80 flex justify-center">
            <Leaderboard />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <p className="text-sm text-muted-foreground mt-8 text-center">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/jarretteong/hangman-spanish"
            target="_blank"
            className="underline"
          >
            jarretteong
          </Link>
        </p>
      </div>
    </main>
  );
};

export default HangmanGame;
