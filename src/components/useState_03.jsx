import { useState } from "react";

export default () => {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function aumentar1() {
        setValor1(v => v + 1);
    }

    function diminuir1(){
        setValor1(v => v - 1);
    }

    function aumentar2(){
        setValor2(v => v + 1);

    }

    function diminuir2(){
        setValor2(v => v - 1);
    }


    return (

        <>
            <p>Exercicio 1</p>
            <h1>Valor: {valor1}</h1>
            <hr />
            <button onClick={aumentar1} >Aumentar</button>
            <button onClick={diminuir1} >Diminuir</button>
           
            <hr />
            <h1>Valor: {valor2}</h1>
            <button onClick={aumentar2} >Aumentar</button>
            <button onClick={diminuir2} >Diminuir</button>

            <h3>O resultado do valor {valor1} X {valor2} e igual a {valor1 * valor2}</h3>
        
        </>

    );

}
