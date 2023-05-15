import React from "react"

export const Home = () => {

    const [contador, setContador] = React.useState(0)
    const [interruptor, setInterruptor] = React.useState(false)

    return (
        <>
            <div className={interruptor ? 'centro dark' : 'centro'}>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>

                <h1>Contagem: {contador}</h1>
            </div>
            <div className="switch" onClick={() => setInterruptor(!interruptor)}>
                {interruptor ? 'Acender' : 'Apagar'} luz
            </div>
        </>
    )
}