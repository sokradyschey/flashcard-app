# 📘 React + TypeScript Flashcard Study App

A lightweight, customizable flashcard application built with **React**, **TypeScript**, and **Vite**.  
This project was created to help prepare for **Junior Front-End / React Developer technical interviews** by studying concepts using interactive flashcards.

The app supports categories (technical, behavioral, scenario), card flipping, and can be easily extended with new content.

---

## 🚀 Features

- ⚛️ Built with **React + TypeScript (Vite)**
- 🎴 **Interactive flashcards** with flip animation
- 🏷️ **Filter by category** (React, TypeScript, Next.js, Behavioral, Scenario)
- 🔄 Shuffle / randomize cards
- 📚 Organized interview questions and answers
- 🧩 Simple data structure — all flashcards stored in `flashcards.ts`
- 🎨 Styled with **Tailwind CSS**
- 📱 Fully responsive design

---

## 🧩 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **ESLint + Prettier** (optional)
- **Netlify-ready** for deployment

---

## 🔧 Installation & Setup

### 1. Clone the repository
``` bash
git clone https://github.com/your-username/flashcard-react-app.git
cd flashcard-react-app
```
### 2. Install dependencies
```
npm install
```
### 3. Start the development server
```
npm run dev
```
### 4. Build for production
```
npm run build
```

---

## 🎴 Adding Your Own Flashcards

All flashcards live in:
```
src/data/flashcards.ts
```

Example:
```
export type Flashcard = {
  id: number;
  question: string;
  answer: string;
  category: "technical" | "behavioral" | "scenario";
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is a React component?",
    answer: "A reusable UI function that returns JSX.",
    category: "technical"
  }
];
```
---

## 🧪 Future Enhancements

- Dark mode toggle
- Add-your-own-flashcard UI
- LocalStorage saving
- Study stats dashboard
- Spaced repetition system
- Animations with Framer Motion
