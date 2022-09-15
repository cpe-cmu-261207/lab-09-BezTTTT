import React from "react";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { useState, useEffect } from "react";

export default function todolist() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const onEnter = () => {
    if (todoInput.trim() === "") {
      alert("Todo cannot be empty!");
    } else {
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
    }
  };

  useEffect(() => {
    const todosStr = localStorage.getItem("react-todos");
    if (todosStr === null) setTodos([]);
    else setTodos(JSON.parse(todosStr));
  }, []);
  const [isFirstRender, setisFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setisFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  return (
    <div>
      <Navbar />
      <div>
        {/* Entire App container (required for centering) */}
        <div style={{ maxWidth: "700px" }} className="mx-auto">
          {/* App header */}
          <p className="display-4 text-center fst-italic m-4">
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <input
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
            onKeyUp={(event) => {
              if (event.key !== "Enter") return;
              onEnter();
            }}
          />
          {todos.map((todo, idx) => (
            <Todo
              key={idx}
              title={todo.title}
              completed={todo.completed}
              onDelete={() => deleteTodo(idx)}
              onMark={() => markTodo(idx)}
              onMoveUp={() => moveUp(idx)}
              onMoveDown={() => moveDown(idx)}
            />
          ))}
          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((x) => x.completed === false).length})
            </span>
            <span className="text-success">
              Completed ({todos.filter((x) => x.completed === true).length})
            </span>
          </p>

          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Thanakit Chanlaset 640610637
          </p>
        </div>
      </div>
    </div>
  );
}
