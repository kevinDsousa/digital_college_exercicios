interface artigoProps {
    titulo: string,
    imagem: string,
    descricao: string,
    link: string,
}

export const Artigo = ({titulo, imagem, descricao, link}: artigoProps) => {
    return (
        <>
            <div>
                <h3>{titulo}</h3>
                <img src={imagem} style={{width: 300}}/>
                <p>{descricao}</p>
                <a href={link}>Link</a>
            </div>
        </>
    )
}
