import React, { useEffect, useState } from "react";
import "./App.css";
function Todo({ todos }) {
  const tJsx = todos.map((to) => {
    return (
      <li key={to._id} className={to.completed ? "complete" : "incomplete"}>
        {to.title}
      </li>
    );
  });
  return <ul>{tJsx}</ul>;
}

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch("/api/getTodos");
    const data = await res.json();
    setTodos(data.data.allTodos.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  );
}

export default App;
