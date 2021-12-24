import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Item.css'


const Item = ({tarefa, handleTaskClick, handleDeleteTask}) => {
  const navigate = useNavigate();

  const handleClickDetalhes = () =>{
    navigate(`/${tarefa.conteudo}`)
  }
  
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
          className='detalhesTarefa' onClick={handleClickDetalhes}>
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