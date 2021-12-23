import React from 'react'
import './Item.css'

const Item = ({tarefa, handleTaskClick}) => {
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
    </div>
    /*
    <div className='item'>
      {tarefa.conteudo}
    </div>*/
  )
}

export default Item;