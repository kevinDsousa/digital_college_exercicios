import './ButtonCount.css'
import { useState } from 'react'

export default function ButtonCount() {
    const [count, setCount] = useState(0)
    return (
        <button className='butauzin' onClick={() => setCount((count) => count + 1)}>
          count is <span>{count}</span>
        </button>
    )
}