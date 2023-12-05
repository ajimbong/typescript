type ListElementProps = {
    task: string,
    index: number,
    deleteTask: (index: number) => void,
    done: boolean,
    toggleDoneState: (index: number)=> void
}

function ListElement({ task, index, deleteTask, done, toggleDoneState }: ListElementProps) {
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
