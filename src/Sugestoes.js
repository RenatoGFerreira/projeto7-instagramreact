function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.nome} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">
                Seguir
            </div>
        </div>
    )
}

export default function Sugestoes() {

    let listaSugestao = [

    { 
        nome: "bad.vibes.memes", 
        img: "assets/img/bad.vibes.memes.svg", 
        razao: "Segue você" 
    },
    { 
        nome: "chibirdart", 
        img: "assets/img/chibirdart.svg", 
        razao: "Segue você" 
    },
    { 
        nome: "razoesparaacreditar", 
        img: "assets/img/razoesparaacreditar.svg", 
        razao: "Novo no Instagram" 
    },
    { 
        nome: "adorable_animals", 
        img: "assets/img/adorable_animals.svg", 
        razao: "Segue você" 
    },
    { 
        nome: "smallcutecats", 
        img: "assets/img/smallcutecats.svg", 
        razao: "Segue você" 
    }
    ]

    const sugestaoLista = listaSugestao.map((x) => <Sugestao nome={x.nome} img={x.img} razao={x.razao} />)
    return sugestaoLista

}