import './email.css';
import Navbar from '../../components/navbar/navbar';

const email = () => {
    return (
        <div className='email'>
            <Navbar />
            <form action="https://formspree.io/f/xoqbwbqg" method="POST">
                <p className='text'>Cadastre seu e-mail para receber os links dos livros via mensagem. 👇</p>
                <input name='nome' type='name' placeholder='Digite seu nome' required />
                <input name='email' type='email'  placeholder='Digite seu e-mail' required />
                <input className='btn' name='enviar' type='submit' value='enviar' />
            </form>
        </div>
    )
}

export default email;