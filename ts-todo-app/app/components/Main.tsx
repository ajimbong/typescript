"use client"

import { useContext } from "react";
import ListElement from "./uiElements/ListElement";
import { TodoContext } from "../Providers/TodoProvider";

type Task = {
    task: string,
    done: boolean
}

function Main() {
  const {tasks} = useContext(TodoContext)
  const noItemsElement = (message: string) => {
    return (
      <li className="no-item">
        <p>{message}</p>
      </li>
    );
  };
  return (
    <main>
      <ul className="list" id="list">
        {tasks.length == 0
          ? noItemsElement("No tasks")
          : tasks.map((item, index) => {
              const props = {
                task: item.task,
                done: item.done,
                key: index,
                index
              };
              return <ListElement {...props} key={index} />;
            })}
      </ul>
    </main>
  );
}

export default Main;
