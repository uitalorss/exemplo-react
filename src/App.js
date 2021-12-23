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

  const handleAddTask = (taskTitulo) =>{
    const newTarefa = [...tarefas, {
      id: Math.random(10),
      conteudo: taskTitulo,
      completed: false,
    }]
    setTarefas(newTarefa)
  }

  return(
    <>

    <div className='container'>
      <h1>Minhas Tarefas</h1>
      <AdicionarTarefa handleAddTask={handleAddTask} />
      <Tasks tarefas={tarefas} />
    </div>
    </>
  )
}

export default App;
