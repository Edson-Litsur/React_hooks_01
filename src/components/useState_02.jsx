import { useState } from "react";

export default () =>{
 
    const [valor, setValor,] = useState(0);

    function aumentar (){
        setValor(v => v + 1);
    }

    function diminuir (){
        setValor( v => v -1);
    }

    function diminuir_valor(){
        setValor( v => v - 10);
    } 
    return(
        <>
            <h1>Valor: {valor}</h1>
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={diminuir} >Diminuir</button>
            <button onClick={() => diminuir_valor (10)} >Diminuir 10 u</button>
        </>
    );
}