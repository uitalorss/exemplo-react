import React from 'react';
import Item from '../Item/Item.js'

const Tasks = ({tarefas}) =>{
  return (
    <>
      {tarefas.map(tarefa => <Item tarefa={tarefa} />)}
    </>
  )
}

export default Tasks