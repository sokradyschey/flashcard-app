import { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import { flashcards } from "./data/flashcards";

export default function App() {
  const [filter, setFilter] = useState<"All" | "React" | "TypeScript" | "Next.js" | "Behavioral" | "Scenario">("All");

  const filtered = filter === "All" ? flashcards : flashcards.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Technical Interview Flashcards</h1>

      <div className="flex gap-3 mb-4">
        {["All", "React", "TypeScript", "Next.js", "Behavioral", "Scenario"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-4 py-2 rounded-lg text-white ${
              filter === cat ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <FlashcardList cards={filtered} />
    </div>
  );
}
