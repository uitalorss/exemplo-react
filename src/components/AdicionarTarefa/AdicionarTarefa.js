import React, { useState } from "react";
import './AdicionarTarefa.css'
import Botao from '../Botao/Botao.js'


const AdicionarTarefa = ({handleAddTask}) =>{
  const [inputTarefa, setInputTarefa] = useState('')
  const handleInputChange = (e) =>{
      setInputTarefa(e.target.value)
  }

  const handleAddTaskClick = () =>{
    handleAddTask(inputTarefa)
    setInputTarefa('');
  }
  return(
    <div className="addTarefaContainer">
      <input 
        onChange={handleInputChange}
        value={inputTarefa} 
        className="inputAddTarefa" 
        type="text" />
      <div className="espacoBotao">
        <Botao onClick={handleAddTaskClick}>Adicionar</Botao>
      </div>
    </div>
  )
}

export default AdicionarTarefa;