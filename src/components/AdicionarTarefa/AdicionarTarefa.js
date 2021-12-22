import React from "react";
import './AdicionarTarefa.css'
import Botao from '../Botao/Botao.js'

const AdicionarTarefa = () =>{
  return(
    <div className="addTarefaContainer">
      <input className="inputAddTarefa" type="text" />
      <div className="espacoBotao">
        <Botao>Adicionar</Botao>
      </div>
    </div>
  )
}

export default AdicionarTarefa;