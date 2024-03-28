import './form.css'

const Form = () => {


    return(
        <div className="container">
        <form action="">
            <label className='email' htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
            <label htmlFor="password">Senha</label>
            <input type="password" name="senha" id="senha" />
            <button>Enviar</button>
        </form>
        </div>
    )
}

export default Form