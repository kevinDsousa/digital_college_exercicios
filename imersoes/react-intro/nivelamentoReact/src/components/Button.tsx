import React from 'react'
import './Button.css'


export function Button(props: {id: Number, value: string , meuClick: any}) {
    const meuHandler = () => props.meuClick(props.id)
    return <button className='square' onClick={meuHandler}>{props.value}</button>
}


