import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

const reorder = (taskCardsList, startIndex, endIndex) => {
  const removeTaskCard =  taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, removeTaskCard[0]);
}

export const TaskCards = () => {
  // const taskId = uuidv4();
  const [ taskCardsList, setTaskCardsList] = useState([{
    id: '0',
    draggableId: 'item0',
  }]);

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);

    
  }

  return(
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton setTaskCardsList={setTaskCardsList}/>

          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}