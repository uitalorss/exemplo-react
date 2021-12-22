import React from "react";

import './Botao.css';

const Botao = ({children, onClick}) => {
  return(
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

export default Botao;