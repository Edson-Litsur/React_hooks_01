import { useState } from "react";

export default ({unidades})=> {
    const[valor, setValor] = useState(0);

    function incrementar(){
        setValor( old => old + unidades);
    }

    function dimcrementar(){
        setValor(old => old - unidades);
    }

    return (
        <>
            <h3><strong>Valor: {valor}</strong></h3>
            <button onClick={incrementar} > + </button>
            <button onClick={dimcrementar} > - </button>


        </>
    );

}