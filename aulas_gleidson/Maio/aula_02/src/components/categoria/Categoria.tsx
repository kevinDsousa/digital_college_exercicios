import React from "react"

interface propsCategorias {
    children: React.ReactNode
}

export const Categoria = (props: propsCategorias) => {
    return (
        <>
            <div className="categoria">
                {props.children}
            </div>
        </>
    )
}