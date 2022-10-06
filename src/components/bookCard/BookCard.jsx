import "./BookCard.css"

/* Capas */
import armasgermeseaçoImg from "../../imgs/armasgermeseaço.jpg"
import sapiensImg from "../../imgs/sapiens.jpg"
import romaImg from "../../imgs/roma.jpg"
import lições from "../../imgs/lições.jpg"
import ideias from "../../imgs/50ideias.jpg"
import homodeus from "../../imgs/homodeus.jpg"
import oprincipe from "../../imgs/oprincipe.jpg"
import metamorfose from "../../imgs/metamorfose.jpg"
import amarcadavitoria from "../../imgs/amarcadavitoria.jpg"
import mil984 from "../../imgs/1984.jpg"
import as48leis from "../../imgs/as48leis.jpg"
import aartedaguerra from "../../imgs/aartedaguerra.jpg"


const BookCard = () => {
    return (
        <div className="BookCard">
            <div className="livro1">
            <img src={armasgermeseaçoImg} />
            <p>Armas, germes e aço</p>
            <a href="https://www.amazon.com.br/Homo-deus-Yuval-Noah-Harari/dp/8535928197">Comprar</a>
            </div>

            <div className="livro2">
            <img src={lições} />
            <p>21 lições sobre o século 21</p>
            <a href="https://www.amazon.com.br/21-lições-para-século/dp/8535930914">Comprar</a>
            </div>

            <div className="livro3">
            <img src={romaImg} />
            <p>Roma antiga</p>
            <a href="https://www.amazon.com.br/Roma-Antiga-Romulo-Justiniano-Convencional/dp/8525431168">Comprar</a>
            </div>

            <div className="livro4">
            <img src={sapiensImg} />
            <p>Sapiens</p>
            <a href="https://www.amazon.com.br/Sapiens-Uma-Breve-História-Humanidade/dp/8525432180/">Comprar</a>
            </div>

            <div className="livro5">
            <img src={ideias} />
            <p>50 ideias de economia</p>
            <a href="https://www.amazon.com.br/ideias-economia-você-precisa-conhecer/dp/8542205197">Comprar</a>
            </div>

            <div className="livro6">
            <img src={homodeus} />
            <p>Homo deus</p>
            <a href="https://www.amazon.com.br/Homo-deus-Yuval-Noah-Harari/dp/8535928197">Comprar</a>
            </div>

            <div className="livro7">
            <img src={oprincipe} />
            <p>O principe</p>
            <a href="https://www.amazon.com.br/Príncipe-Livro-Bolso-Nicolau-Maquiavel/dp/8572839046">Comprar</a>
            </div>

            <div className="livro8">
            <img src={metamorfose} />
            <p>Metamorfose</p>
            <a href="https://www.amazon.com.br/metamorfose-Franz-Kafka/dp/8542217187/">Comprar</a>
            </div>

            <div className="livro9">
            <img src={amarcadavitoria} />
            <p>A marca da vitoria</p>
            <a href="https://www.amazon.com.br/marca-vitória-Phil-Knight/dp/8543104467">Comprar</a>
            </div>

            <div className="livro10">
            <img src={mil984} />
            <p>1984</p>
            <a href="https://www.amazon.com.br/1984-George-Orwell/dp/8535914846">Comprar</a>
            </div>

            <div className="livro11">
            <img src={as48leis} />
            <p>As 48 leis do poder</p>
            <a href="https://www.amazon.com.br/AS-LEIS-PODER-CAPA-DURA/dp/6555320516">Comprar</a>
            </div>

            <div className="livro12">
            <img src={aartedaguerra} />
            <p>A arte da guerra</p>
            <a href="https://www.amazon.com.br/arte-guerra-Sun-Tzu/dp/8594318596">Comprar</a>
            </div>
        </div>
    )
}

export default BookCard;