import React, { useState } from "react";

const Todo = (props) => {
  const { todo, todos, settodos } = props;
  const [isEdit, setIsedit] = useState(false);
  const [updateText, setUpdatedText] = useState(todo.tex);

  const tarih = new Date(todo.createdAt);
  const handleDelete = () => {
    const tempArray = todos.filter((item) => item.id !== todo.id);
    settodos(tempArray);
  };
  const handleDone = () => {
    const newTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    const droppedSeries = todos.filter((item) => item.id !== todo.id);
    const newArray = [...droppedSeries, newTodo];
    settodos(newArray);
  };
  const handleEdit = () => {
    const newTodo = {
      ...todo,
      text: updateText,
    };
    const droppedSeries = todos.filter((item) => item.id !== todo.id);
    settodos([...droppedSeries, newTodo]);
    setIsedit(false);
  };

  return (
    <div
      className={`d-flex justify-content-between alert alert-${todo.isDone === false ? "secondary" : "success"
        } `}
    >
      <div>
        {isEdit === false ? (
          <h1
            className={`${todo.isDone === true ? "text-decoration-line-through" : ""
              }`}
          >
            {todo.text}
          </h1>
        ) : (
          <div className="d-flex">
            {" "}
            <input
              value={updateText}
              onChange={(Event) => setUpdatedText(Event.target.value)}
            />
            <button onClick={handleEdit} className="btn btn-sm btn-outline-prime"> Save </button>
          </div>
        )}
      </div>
      <small>{tarih.toLocaleDateString()}</small>
      <div>
        <div className="btn-group">
          <button
            onClick={handleDone}
            type="button"
            className="btn btn-sm btn-success"
          >
            {todo.isDone === false ? "Done" : "Undone"}
          </button>
          <button
            onClick={() => {
              setIsedit(!isEdit);
              if (isEdit === true) {
                setUpdatedText(todo.text);
              }
            }}
            type="button"
            className="btn btn-sm btn-danger"
          >
            {isEdit === false ? "Edit" : "Cancel"}
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-sm btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
