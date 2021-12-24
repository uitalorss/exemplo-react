import React from 'react';
import Item from '../Item/Item.js'

const Tasks = ({tarefas, handleTaskClick, handleDeleteTask}) =>{
  return (
    <>
      {tarefas.map(tarefa => <Item 
      tarefa={tarefa} 
      handleTaskClick={handleTaskClick} 
      handleDeleteTask={handleDeleteTask}/>)}
    </>
  )
}

export default Tasks