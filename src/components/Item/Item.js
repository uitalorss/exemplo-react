import React from 'react'
import './Item.css'

const Item = ({tarefa, handleTaskClick, handleDeleteTask}) => {
  return(
    <div 
      className='item'
      style={tarefa.completed ? {
        borderLeft: "5px solid #3498db",
        textDecoration: "line-through"
    } : {}}>
      <div className='conteudo-item' onClick={() => handleTaskClick(tarefa.id)}>
        {tarefa.conteudo}
      </div>
      <div className='botoesSecundarios'>
        <button className='removeTarefa' onClick={() => handleDeleteTask(tarefa.id)}>X</button>
      </div>
    </div>
    /*
    <div className='item'>
      {tarefa.conteudo}
    </div>*/
  )
}

export default Item;