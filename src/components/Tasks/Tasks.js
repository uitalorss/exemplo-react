import React from 'react';
import Item from '../Item/Item.js'

const Tasks = ({tarefas, handleTaskClick}) =>{
  return (
    <>
      {tarefas.map(tarefa => <Item tarefa={tarefa} handleTaskClick={handleTaskClick}/>)}
    </>
  )
}

export default Tasks