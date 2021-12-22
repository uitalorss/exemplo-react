import React from 'react'
import './Item.css'

const Item = ({tarefa}) => {
  return(
    <div className='item'>
      {tarefa.conteudo}
    </div>
  )
}

export default Item;