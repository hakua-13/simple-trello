import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskAddInput = ({taskList, setTaskList}) => {
  
  const [ inputTask, setInputTask ] = useState('');

  const handleSubmit = (e) => {
    const taskId = uuidv4()
    e.preventDefault();
    // taskを追加する
    if(inputTask === ''){
      return;
    }


    setTaskList(previusVal => [
      ...previusVal,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputTask,
      }
    ]);
    setInputTask('');
  }

  const handleChangeInputTask = (e) => {
    setInputTask(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type='text'
          placeholder='add a task'
          value={inputTask}
          onChange={handleChangeInputTask}
        />
      </form>
    </div>
  )
}
