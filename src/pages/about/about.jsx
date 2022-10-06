import './about.css';
import Navbar from '../../components/navbar/navbar';

import profile from "../../imgs/profile.jpg"

const about = () => {
    return (
        <div className='about'>
            <Navbar />
            <div className='card'>
                <h2 className='title'>📑 Um breve resumo sobre esse projeto</h2>
                <br />
                <p className='text'>Esse projeto é básicamente uma lista dos meus livros preferidos com um link para comprar,
                <br/> eles estão em ordem de importância para mim, resolvi fazer essa aplicação tendo como principal objetivo
                treinar os fundamentos do React simulando uma biblioteca digital com um formulário funcional incluso, 
                ao realizar o login o usuário recebe um email com o link dos livros listados aqui.
                </p>
                <div className='more'>
                <p className='text'>💡Acesse o meu Github.</p>
                <a href="https://github.com/gaiekdacosta"><img src={profile} className='profile' /></a>
                <p className='text'>Gaiek da costa</p>
                </div>
            </div>
        </div>
    )
}

export default about;