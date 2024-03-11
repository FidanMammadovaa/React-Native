import { ReactNode, createContext, useEffect, useState } from "react";
import { createDatabase } from "../db/todo";

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
  getToDos: () => void;
};

interface ToDoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  finishToDo: () => { },
  handleAddTodo: () => { },
  getToDos: () => { },
});

export default function ToDoProvider({ children }: ToDoProviderProps) {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const db = createDatabase();

  useEffect(() => {
    getToDos();
  }, []);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, completed INTEGER, icon TEXT, taskTitle TEXT, backgroundColor TEXT, time TEXT)')
    })
  }, [])


  const getToDos = () => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows }) => {
        const todoList: ToDo[] = [];

        for (let i = 0; i < rows.length; i++) {
          const { id, completed, icon, taskTitle, backgroundColor, time, notes } = rows.item(i);
          todoList.push({ id, completed: completed === 1, icon, taskTitle, backgroundColor, time, notes });
        }

        setTodos(todoList);
      });
    });
  };

  const handleAddTodo = (task: ToDo) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO todos (completed, icon, taskTitle, backgroundColor, time) VALUES (?, ?, ?, ?, ?)',
        [task.completed ? 1 : 0, task.icon, task.taskTitle, task.backgroundColor, task.time]
      );
    });

    getToDos();
  };

  const finishToDo = (id: number) => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE todos SET completed = NOT completed WHERE id = ?', [id]);
    });

    getToDos();
  };

  const contextValue: ToDoContextType = {
    todos,
    handleAddTodo,
    finishToDo,
    getToDos,
  };

  return (
    <ToDoContext.Provider value={contextValue}>
      {children}
    </ToDoContext.Provider>
  );
}
