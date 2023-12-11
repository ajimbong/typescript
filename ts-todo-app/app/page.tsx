"use client"

// export default function Home() {
//   return (
//     <main>
//       Hello World
//     </main>
//   )
// }
type Task = {
    task: string,
    done: boolean
}
  
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function Home() {
  /*TODO: 
  - We have to manage all the state from the App component alone
  - We can use local storage to persist the to-do items
  - Also, sub components of App need a way to modify the state by
    passing in the functions as props.
  */

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

  return (
    <div className="container">
      <Header />
      <Main
        tasks={tasks}
        deleteTask={deleteTask}
        toggleDoneState={toggleDoneState}
      />
      <Footer addTask={addTask} />
    </div>
  );
}

export default Home;