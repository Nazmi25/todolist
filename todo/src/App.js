import React, { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, settodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("Todo text can't empty");
      return;
    }
    const todo = {
      id: new Date().getTime(),
      text: todoText,
      isDone: false,
      createdAt: new Date(),
    };
    console.log(todo);
    settodos([...todos, todo]);
    setTodoText("")
  };
  return (
    <div className="container p-5">
      <h1 className="text-center my-6">My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your todo"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
      <div>
        {todos.length !== 0 ? (
          <div>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} todos={todos} settodos={settodos} />
            ))}
          </div>
        ) : (
          <p>You don't have any todos yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
