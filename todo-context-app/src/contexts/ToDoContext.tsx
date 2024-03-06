import { ReactNode, createContext, useEffect, useState } from "react";

interface ToDo {
  id: number;
  completed: boolean;
  icon: string;
  taskTitle: string;
  backgroundColor: string;
  time: string;
  notes?: string;
}

type ToDoContextType = {
  todos: ToDo[];
  handleAddTodo: (todo: ToDo) => void;
  finishToDo: (id: number) => void;
};

interface ToDoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  finishToDo: () => { },
  handleAddTodo: () => { },
});

export default function ToDoProvider({ children }: ToDoProviderProps) {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAddTodo = (task: ToDo) => {
    setTodos((prev) => [...prev, task]);
  };

  useEffect(() => {
    console.log(todos);

  }, [todos])

  const finishToDo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const removeToDo = (id: number) => {
    const updatedTasks = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTasks)
  }

  const contextValue: ToDoContextType = {
    todos,
    handleAddTodo,
    finishToDo,
  };

  return (
    <ToDoContext.Provider value={contextValue}>
      {children}
    </ToDoContext.Provider>
  );
}
