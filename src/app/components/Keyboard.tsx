"use client";

type Props = {
  guessed: string[];
  onGuess: (letter: string) => void;
  disabled: boolean;
};

export const Keyboard = ({ guessed, onGuess, disabled }: Props) => {
  const letters = "abcdefghijklmnñopqrstuvwxyzáéíóú".split("");

  return (
    <div className="grid grid-cols-8 gap-2 mt-8">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          className="p-2 border rounded text-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={guessed.includes(letter) || disabled}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
