import './header.css'

const header = () => {
    return(
        <header className='meuHeader'>
            <h2>Meu Site</h2>
            <ul>
                <a href="#"><li>Login</li></a>
                <a href="#"><li>Registrar</li></a>
                <a href="#"><li>Sobre</li></a>
            </ul>
        </header>
    )
}

export default header;