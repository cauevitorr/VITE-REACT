import './footer.css'
import dogIcon from '/imgCachorro.jpg'

const Footer = () => {
    return(
        <footer className='meuFooter'>
            <img src={dogIcon} alt="" />
            <p>&copy;Todos os direitos rezervados</p>
        </footer>
    )
}

export default Footer