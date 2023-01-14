import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Task } from './Task'

const reorder = (taskList, startIndex, endIndex) => {
  const removeTask = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, removeTask[0]);
}

export const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (result) => {
    reorder(taskList,result.source.index, result.destination.index);
    setTaskList(taskList);
    console.log(taskList);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskList.map((task, index) => {
                return(
                  <div key={task.id}>
                    <Task task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>
                  </div>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
