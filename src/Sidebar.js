import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function Sidebar() {
    return (
        <div class="sidebar">

            <Usuario username='renatoferreira' name='Renato' img="assets/img/userDefault.png" />
            
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestoes />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2022 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}