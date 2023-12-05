import ListElement from "./uiElements/ListElement";

type Task = {
    task: string,
    done: boolean
}

type MainProps = {
    tasks: Task[],
    deleteTask: (index: number) => void,
    toggleDoneState: (index: number)=> void
}

function Main({ tasks, deleteTask, toggleDoneState }: MainProps) {
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
                index,
                deleteTask,
                toggleDoneState,
              };
              return <ListElement {...props} key={index} />;
            })}
      </ul>
    </main>
  );
}

export default Main;
