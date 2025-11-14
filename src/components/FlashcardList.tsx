import Flashcard from "./Flashcard";
import type { Flashcard as FlashcardType } from "../data/flashcards";

interface Props {
  cards: FlashcardType[];
}

export default function FlashcardList({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
      {cards.map((card) => (
        <Flashcard key={card.id} card={card} />
      ))}
    </div>
  );
}
