import { Draggable } from "react-beautiful-dnd";

export const Task = ({task, taskList, setTaskList, index}) => {
  const handleDeleteTask = (id) => {
    setTaskList(previousTaskList => previousTaskList.filter((task) => id !== task.id));
    console.log(taskList);
  }
  
  return(
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className='taskBox'
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>
            {task.text}
          </p>
          <button className='taskTrashButton' onClick={() => {handleDeleteTask(task.id)}}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}