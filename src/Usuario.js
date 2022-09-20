import React, { useState } from "react"

export default function Usuario(props) {
    
    const [alteraUserName, setUserName] = useState(props.username)
    const [alteraFotoAtual, setFotoAtual] = useState(props.img)

    function mudaUserName(){
        const novoNome = prompt("Insira o novo nome de usuário:")

        if(novoNome === null || novoNome === "" || novoNome === false){
            alert("Escreva um nome de usuário válido.")
        }else{
            setUserName(novoNome)
        }
    }

    function mudaFotoAtual(){
        const novaFoto = prompt('Insira o link da nova foto:')
        if(novaFoto === null || novaFoto === "" || novaFoto === false){
            alert("Escreva um link de foto válida.")
        }else{
            setFotoAtual(novaFoto)
        }

    }


    return (
        <div class="usuario">
            <img onClick={mudaFotoAtual} src={alteraFotoAtual} alt={props.name} />
            <div class="texto">
                <strong>{alteraUserName}</strong>
                <span>
                    {props.name}
                    <ion-icon onClick={mudaUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}