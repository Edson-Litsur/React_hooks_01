import { useState } from "react"
import "./css/useState_04.css"
import useState_04a from "./useState_04a";
import UseState_04a from "./useState_04a";

export default () => {


    return(
        <>
            <p>Exercicio 02</p>
            <div className="layout">
                <UseState_04a unidades = {1} />
                <UseState_04a unidades = {5}/>
                <UseState_04a unidades = {10}/>


            </div>
        </>
    );
}