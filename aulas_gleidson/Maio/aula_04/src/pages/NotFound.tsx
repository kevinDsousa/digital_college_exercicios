import { Link } from "react-router-dom"

export const NotFount = () => {
    return(
        <>
            <h1>Página não localizada</h1>
            <Link to={'/'}>Voltar</Link>
        </>
    )
}