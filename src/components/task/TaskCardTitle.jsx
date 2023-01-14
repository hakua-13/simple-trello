import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [ isClick, setIsClick ] = useState(false);
  const [ inputCardTitle, setInputCardTitle ] = useState('Today');
  
  const handleClickTitle = () => {
    setIsClick(true);
  }

  const handleChangeTitle = (event) => {
    setInputCardTitle(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  return ( 
    <div className="taskCardTitleInputArea" onClick={handleClickTitle}>
      {isClick? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            autoFocus
            value={inputCardTitle}
            onChange={handleChangeTitle}
            onBlur={handleBlur}
            maxLength='10'
          />
        </form>
      ): ( 
        <h3>
          {inputCardTitle}
        </h3>
      )}
    </div>
  )
}
