import { Button } from "./Button"
import { useState } from 'react'

export function Board() {
    const [data, setData] = useState(Array(9).fill(''));
    const [clicked, setClicked] = useState('X');

    const handler = (id: Number) => {
        const novoArray = [...data];
        
        clicked === "X"? (novoArray[id] = "O", setClicked("O")) : (novoArray[id] = "X", setClicked("X") )
        setData(novoArray);
    }

    return (
        <>
            <div>
                <Button id={0} value={data[0]} meuClick={handler} />
                <Button id={1} value={data[1]} meuClick={handler} />
                <Button id={2} value={data[2]} meuClick={handler} />
            </div>
            <div>
                <Button id={3} value={data[3]} meuClick={handler} />
                <Button id={4} value={data[4]} meuClick={handler} />
                <Button id={5} value={data[5]} meuClick={handler} />
            </div>
            <div>
                <Button id={6} value={data[6]} meuClick={handler} />
                <Button id={7} value={data[7]} meuClick={handler} />
                <Button id={8} value={data[8]} meuClick={handler} />
            </div>

        </>
    )
}