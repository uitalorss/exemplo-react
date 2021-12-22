import React, { useState } from 'react';
import './App.css'

const App = () =>{
  const [tarefas, setTarefas] = useState(
    {
      id: 1,
      conteudo: 'Pegar almoço na geladeira',
      completed: false
    }
  )
  return(
    <>
    <div className='container'>

    </div>
    </>
  )
}

export default App;
