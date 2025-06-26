# Reusable Components in Next.js Prototype

## What are Components?

**Components** are independent, reusable pieces of UI that help you build complex user interfaces by combining simple building blocks. In frameworks like React and Next.js, components allow you to:

- **Encapsulate logic and styles** for a specific part of the UI.
- **Reuse code** across different parts of your application.
- **Customize behavior and appearance** using properties (props).

For example, a button, a navigation bar, or a card can each be a component.

---

## How are Components Used in This Prototype?

In this prototype, we created a reusable button component called `MyButton`. This component:

- Accepts props like `label`, `onClick`, and `style` to customize its text, behavior, and appearance.
- Is used in multiple times in (`index.js`) to demonstrate reusability.
- Helps keep the code DRY (Don't Repeat Yourself) and consistent.

### Example Usage

```javascript
import MyButton from './components/MyButton';

<MyButton
  label="Click Me"
  onClick={() => alert('Button clicked!')}
  style={{ backgroundColor: 'skyblue' }}
/>
```

You can use `MyButton` anywhere in your app, passing different props to change its look and function.

---

## Benefits

- **Consistency:** UI elements look and behave the same everywhere.
- **Maintainability:** Update the component in one place to change it everywhere.
- **Productivity:** Build faster by reusing existing components.

---

## How to Run

1. Install dependencies:  
   `npm install`
2. Start the development server:  
   `npm run dev`
3. Visit [http://localhost:3000](http://localhost:3000) to see the prototype in action.

---
