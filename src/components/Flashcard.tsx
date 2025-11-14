import { useState } from "react";
import type { Flashcard as FlashcardType } from "../data/flashcards";

interface Props {
  card: FlashcardType;
}

export default function Flashcard({ card }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-96 h-56 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105"
      onClick={() => setFlipped(!flipped)}
    >
      <p className="text-center text-lg font-medium">
        {flipped ? card.answer : card.question}
      </p>
    </div>
  );
}
