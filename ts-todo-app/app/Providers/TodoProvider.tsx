"use client"

import { ReactNode, createContext, useEffect, useState } from "react"

type Task = {
  task: string;
  done: boolean;
}

type TodoContextValues = {
    tasks: Task[],
    addTask: (newTak: string) => void,
    deleteTask: (taskIndex: number) => void,
    toggleDoneState: (taskIndex: number) => void
};

type TodoProviderProps = {
    children: ReactNode
}

export const TodoContext = createContext({} as TodoContextValues)

export const TodoProvider = ({ children }: TodoProviderProps) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const jsonString = localStorage.getItem("ajim-todo-app-tasks");

    if (jsonString) {
      const savedTasks: Task[] = JSON.parse(jsonString);
      setTasks(savedTasks);
    }
  }, []);

  const addTask = (newTask: string) => {
    const updatedTasks = [...tasks, { task: newTask, done: false }];
    setTasks(updatedTasks);
    localStorage.setItem("ajim-todo-app-tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((task, index) => index != taskIndex);
    setTasks(updatedTasks);
    localStorage.setItem("ajim-todo-app-tasks", JSON.stringify(updatedTasks));
  };

  const toggleDoneState = (taskIndex: number) => {
    const updatedTasks = tasks.map((item, index) => {
      return index != taskIndex ? item : { task: item.task, done: !item.done };
    });
    setTasks(updatedTasks);
    localStorage.setItem("ajim-todo-app-tasks", JSON.stringify(updatedTasks));
  };
    
    const value: TodoContextValues = {
        tasks,
        addTask,
        deleteTask,
        toggleDoneState
    };

    return ( 
            <TodoContext.Provider value={value} > 
                {children}
            </TodoContext.Provider>
     );
}
 
export default TodoProvider;