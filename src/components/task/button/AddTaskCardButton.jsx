import { v4 as uuidv4 } from 'uuid';

export const AddTaskCardButton = ({setTaskCardsList}) => {
  const handleAddTaskCard = () => {
    const taskId = uuidv4();
    setTaskCardsList(previousList => [
      ...previousList,
      {
        id: taskId,
        draggableId: `item${taskId}`,
      }])
  }

  return(
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={handleAddTaskCard}> + </button>
    </div>
  )
}