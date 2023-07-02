import { useState } from "react";

export default () => {

const [valor, setValor] = useState(0);

function aumentar(){
    setValor(v => v +1);
}

function diminuir(){
    setValor(v => v -1);
}



    return (
        <>
            <p>Valor: {valor}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    );
}