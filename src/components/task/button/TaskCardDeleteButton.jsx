import React from 'react'

export const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {
  const handleDeleteTaskCard = (taskCardIdToDelete) => {
    setTaskCardsList(taskCardsList.filter(e => e.id !== taskCardIdToDelete));
  }

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => handleDeleteTaskCard(taskCard.id)}><i className="fas fa-times"></i></button>
    </div>
  )
}