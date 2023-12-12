import { TodoContext } from "@/app/Providers/TodoProvider";
import { useContext } from "react";

type ListElementProps = {
    task: string,
    index: number,
    done: boolean
}

function ListElement({ task, index, done }: ListElementProps) {

  const {deleteTask, toggleDoneState} = useContext(TodoContext)

  const handleClick = () => {
    deleteTask(index);
  };

  const hancdleCheck = () => {
    toggleDoneState(index);
  };
  return (
    <li className="list-item">
      <input type="Checkbox" checked={done} onChange={hancdleCheck} />
      <p>{task}</p>
      <button onClick={handleClick}>X</button>
    </li>
  );
}

export default ListElement;
