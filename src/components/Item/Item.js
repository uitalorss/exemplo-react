import React from 'react'
import {CgClose, CgInfo} from 'react-icons/cg'

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
        <button 
          className='detalhesTarefa'>
            <CgInfo />
        </button>

        <button 
          className='removeTarefa' 
          onClick={() => handleDeleteTask(tarefa.id)}>
            <CgClose />
        </button>
      </div>
    </div>
  )
}

export default Item;