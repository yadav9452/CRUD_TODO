import "./styles.css";
import React from "react";
import Todo from "./Components/Todo";
import Counter from "./Components/Counter";
export default function App() {
  return (
    // YOU ARE ENTERING JSX
    <div className="App">
      <Todo />
      <Counter />
    </div>
  );
  // YOU ARE LEAVING JSX
}
