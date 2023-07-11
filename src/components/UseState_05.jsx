// Criar um component que vai apresentar um UseState (valor)
// criar outro componente, a ser apresentado dentro do componente anterior,
// que vai ter um botao que vai actualizar o useState do componente "Pai"


import React from 'react';
import { useState } from 'react';
import UseState_05a from './UseState_05a';

export default () => {

    const [valor, setValor] = useState(0);

    function atualizarValor (){
        setValor(v => v + 1);

    
    }
  return (
    <div>
        <h3>Exercicio 3</h3>
        <h3>{valor}</h3>
        <hr />

        <UseState_05a funcao= {atualizarValor}/>
        
      
    </div>
  )
}

 
