import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import AddTodoForm from "../components/AddTodoForm";
import EditForm from "../components/EditForm";

export default function App() {
  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");

      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="bg-[#161826] rounded-xl min-h-[70vh] max-h-[90vh] w-[600px] text-white max-w-[320px] md:max-w-3xl overflow-y-auto pb-2 ">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list space-y-4 px-6">
        {typeof window !== "undefined"
          ? todos &&
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            ))
          : console.log("oops")}
      </ul>
    </div>
  );
}
