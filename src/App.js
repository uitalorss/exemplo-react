import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';

import './App.css'
import AdicionarTarefa from './components/AdicionarTarefa/AdicionarTarefa';
import DetalhesTarefa from './components/DetalhesTarefa/DetalhesTarefa';

import Tasks from './components/Tasks/Tasks.js';

const App = () =>{
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      conteudo: 'Pegar almoço na geladeira',
      completed: false,
    },
    {
      id: 2,
      conteudo: 'Comprar pão na volta',
      completed: false,
    },
    
  ])

  const handleAddTask = (taskTitulo) =>{
    const newTarefa = [...tarefas, {
      id: uuidv4(),
      conteudo: taskTitulo,
      completed: false,
    }]
    setTarefas(newTarefa)
  }

  const handleTaskClick = (taskId) =>{
    const newTarefas = tarefas.map(tarefa =>{
      if(tarefa.id === taskId) return {...tarefa, completed: !tarefa.completed}
      return tarefa
    });
    setTarefas(newTarefas)
  }

  const handleDeleteTask = (taskid) =>{
    const newTarefas = tarefas.filter (tarefa => tarefa.id !== taskid);
    setTarefas(newTarefas)
  }

  return(
    <div className='container'>
        <h1>Minhas Tarefas</h1>
        <Routes>
        <Route 
          path="/" 
          exact 
          element={
            <>
            <AdicionarTarefa 
              handleAddTask={handleAddTask}/>
            <Tasks 
              tarefas={tarefas} 
              handleTaskClick={handleTaskClick} 
              handleDeleteTask={handleDeleteTask}/>
          </>
          } 
        />
        <Route path="/:taskTitulo" exact element={ <DetalhesTarefa /> } />
        </Routes>
    </div>
  )
}

export default App;
