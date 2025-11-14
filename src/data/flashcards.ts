export interface Flashcard {
  id: number;
  category: "React" | "TypeScript" | "Next.js" | "Behavioral" | "Scenario";
  question: string;
  answer: string;
}

export const flashcards: Flashcard[] = [
    {
        id: 1,
        category: "React",
        question: "What’s the difference between SSR, SSG, and CSR in Next.js?",
        answer: "SSR: Render per request; SSG: Pre-render at build time; CSR: Render client-side for interactivity."
    },
    {
        id: 2,
        category: "Next.js",
        question: "How do you deploy a Next.js app to Netlify?",
        answer: "Connect GitHub repo → set build command `next build` → publish `.next` → configure env vars."
    },
    {
        id: 3,
        category: "React",
        question: "What is a component in React?",
        answer: "A component is a reusable piece of UI. It’s a function (or class) that returns JSX and manages its own logic and state."
    },
    {
        id: 4,
        category: "React",
        question: "Difference between functional and class components?",
        answer: "Functional: plain JavaScript functions, use hooks, preferred in modern React. Class: older syntax using class, lifecycle methods, and this."
    },
    {
        id: 5,
        category: "React",
        question: "Explain props vs state.",
        answer: "Props: read-only values passed into a component. State: internal data that can change within a component."
    },
    {
        id: 6,
        category: "React",
        question: "What are React hooks? Name common ones.",
        answer: "Hooks let functional components use state and lifecycle behavior. Common: useState, useEffect, useContext."
    },
    {
        id: 7,
        category: "React",
        question: "Purpose of useEffect?",
        answer: "useEffect runs side-effects, such as: API calls, timers, event listeners, and reacting to a state change."
    },
    {
        id: 8,
        category: "React",
        question: "What causes a React component to re-render?",
        answer: "State or props changes trigger re-renders to update the UI."
    },
    {
        id: 9,
        category: "React",
        question: "What is “lifting state up”?",
        answer: "When two components need shared state, you move the state to their closest common parent and pass values/functions via props."
    },
    {
        id: 10,
        category: "React",
        question: "What is context, and when do you use it?",
        answer: "Context provides global data (like theme or auth) to avoid prop drilling. Use it for app-wide settings."
    },
    {
        id: 11,
        category: "React",
        question: "What are keys in lists, and why are they important?",
        answer: "Keys help React identify items in lists for efficient updates. They should be unique and stable."
    },
    {
        id: 12,
        category: "React",
        question: "Controlled vs uncontrolled components?",
        answer: "Controlled: form data managed by React state. Uncontrolled: form data handled by the DOM."
    },
    {
        id: 13,
        category: "TypeScript",
        question: "Difference between interface and type?",
        answer: "Interface: used to define object shapes, can be extended. Type: more versatile, can define unions, intersections, primitives."
    },
    {
        id: 14,
        category: "Next.js",
        question: "How would you optimize a slow-loading Next.js page?",
        answer: "Use code-splitting, lazy loading, optimize images, use getStaticProps/getServerSideProps wisely, and minimize bundle size."
    },
    {
        id: 15,
        category: "Behavioral",
        question: "Describe a challenging bug you fixed.",
        answer: "Situation, Task, Action, Result (STAR method) to explain the context, your role, steps taken, and outcome."
    },
    {
        id: 16,
        category: "Scenario",
        question: "How would you handle a disagreement with a team member about a technical approach?",
        answer: "Listen to their perspective, present your views with data, seek common ground, and involve a mediator if needed."
    },
    {
        id: 17,
        category: "TypeScript",
        question: "What are generics in TypeScript?",
        answer: "Generics allow you to create reusable components that work with any data type while maintaining type safety."
    },
    {
        id: 18,
        category: "TypeScript",
        question: "How do you handle null and undefined in TypeScript?",
        answer: "Use strict null checks, optional chaining, and non-null assertion operator to manage potential null/undefined values."
    },
    {
        id: 19,
        category: "Behavioral",
        question: "Tell me about a time you had to meet a tight deadline",
        answer: "Tips: describe the situation, how you prioritized tasks, managed time, and the successful outcome."
    }
];
