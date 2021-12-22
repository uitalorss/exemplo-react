import React, { useState } from 'react';
import './App.css'
import AdicionarTarefa from './components/AdicionarTarefa/AdicionarTarefa';

import Tasks from './components/Tasks/Tasks.js';

const App = () =>{
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      conteudo: 'Pegar almoço na geladeira',
      completed: false,
    },
    {
      id: 1,
      conteudo: 'Pegar almoço na geladeira',
      completed: false,
    },
    
  ])
  return(
    <>

    <div className='container'>
      <h1>Minhas Tarefas</h1>
      <AdicionarTarefa />
      <Tasks tarefas={tarefas} />
    </div>
    </>
  )
}

export default App;
