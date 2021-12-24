import React from 'react'
import { useParams } from 'react-router-dom'
import Botao from '../Botao/Botao.js'
import './DetalhesTarefa.css'
const DetalhesTarefa = () =>{
  const params = useParams();
  return(
    <>
      <div className='btnvoltar'>
        <Botao>Voltar</Botao>
      </div>
      <div className='conteudoDetalhesTarefa'>
        <h2>{params.taskTitulo}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sit quod cum dolores repellendus explicabo maxime corporis ab laudantium repudiandae? Ullam voluptatum ab sit! Eius vel quas exercitationem tenetur eos.</p>
      </div>
    </>
  )
}

export default DetalhesTarefa