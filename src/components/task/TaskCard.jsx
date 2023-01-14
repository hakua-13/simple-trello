import { useState } from 'react';

import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}) => {
  const [ taskList, setTaskList ] = useState([]);

  // console.log('--- taskList ---');
  // console.log(taskList);

  return(
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className='taskCard'
          ref={provided.innerRef}
          {...provided.draggableProps}
          >
          <div
            className='taskCardTitleAndTaskCardDeleteButtonArea'
            {...provided.dragHandleProps}
          >
            <TaskCardTitle/>
            <TaskCardDeleteButton taskCard={taskCard} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}/>
          </div>
          <TaskAddInput taskList={taskList} setTaskList={setTaskList}/>
          <Tasks taskList={taskList} setTaskList={setTaskList}/>
        </div>
      )}
    </Draggable>
  ) 
}