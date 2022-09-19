import React, { useState } from "react"

export default function Usuario(props) {
    let [username, setUsername] = useState(props.username)
    let [name, setName] = useState(props.name)
    let [img, setImg] = useState(props.img)

    //let ternario = (name === "" || name === null) ? "Olá sem nome :(" : `Bem-vindo(a), ${name}`


    function alterarPerfil() {
        username = prompt("Novo Username: ")
        name = prompt("Novo nome do Usuário: ")
        if (username === "" || username === null) {
            console.log("Usuário alterado para SemNome")
            username = 'SemNome'

        } else {
            console.log(`Usuário alterado para ${username}`)
            setUsername(username)
            setName(name)
        }
    }

    function alterarFoto() {
        img = prompt("Insira a URL da foto: ")

        if (img === null) {
            console.log("URL Inválida")
        }
        else {
            setImg(img)
        }
    }
    
    return (
        <div class="usuario">
            <img src={img} onClick={alterarFoto} alt={name} />
            <div class="texto">
                <strong>{username}</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={alterarPerfil}></ion-icon>
                </span>
            </div>
        </div>
    )
}