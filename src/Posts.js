import React, { useState } from "react"


function Post(props){

  const [foiSalvo, setFoiSalvo] = useState(props.isSaved)
  const [foiCurtido, setFoiCurtido] = useState(props.isLiked)
  const [contador, setContador] = useState(props.initialLikesAmount)

  function mudaSalvo(){
    setFoiSalvo(!foiSalvo)
  }

  function curtirPost(){
    if(!foiCurtido){
      setContador(contador + 1)
    }else{
      setContador(contador - 1)
    }

    setFoiCurtido(!foiCurtido)

  }

  function darLikeImagem(){
    if(!foiCurtido){
      setFoiCurtido(true)
      setContador(contador + 1)
    }
  }
  
  return (
    <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.userImage} alt={`Perfil do ${props.userName}`} />
                {props.userName}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.contentImage} onClick={darLikeImagem} alt={`Postagem do ${props.userName}`}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  {foiCurtido? (
                    <ion-icon class='liked' onClick={curtirPost} name="heart"></ion-icon>
                  ) : (
                    <ion-icon onClick={curtirPost} name="heart-outline"></ion-icon>
                  )}
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  {foiSalvo? (
                    <ion-icon onClick={mudaSalvo} name="bookmark"></ion-icon> 
                    ) : (
                    <ion-icon onClick={mudaSalvo} name="bookmark-outline"></ion-icon> 
                  )}
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likedByImage} alt={`Imagem do ${props.likedByText}`} />
                <div class="texto">
                  Curtido por <strong>{props.likedByText}</strong> e <strong>outras {contador} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}


export default function Posts() {

  const posts = [
    {
        userName: "meowed",
        userImage: "assets/img/meowed.svg",
        contentImage: "assets/img/gato-telefone.svg",
        likedByImage: "assets/img/respondeai.svg",
        likedByText: "respondeai",
        initialLikesAmount: 101523,
        isSaved: true,
        isLiked: false
    },
    {
        userName: "barked",
        userImage: "assets/img/barked.svg",
        contentImage: "assets/img/dog.svg",
        likedByImage: "assets/img/adorable_animals.svg",
        likedByText: "adorable_animals",
        initialLikesAmount: 12500,
        isSaved: false,
        isLiked: true
    }
]

    return(
        <div class="post">
          {posts.map((x) => (
            <Post
              userName = {x.userName}
              userImage = {x.userImage}
              contentImage = {x.contentImage}
              likedByImage = {x.likedByImage}
              likedByText = {x.likedByText}
              initialLikesAmount = {x.initialLikesAmount}
              isSaved = {x.isSaved}
              isLiked = {x.isLiked}
            />
          ))}
        </div>
    )
}