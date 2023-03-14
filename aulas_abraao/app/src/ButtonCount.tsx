import './ButtonCount.css'
import { useState } from 'react'

export default function ButtonCount() {

  function handclik() {
    setCount((c) => c + 1) // forma mais precisa de realizar a contagem
    setCount(count + 1) // forma usual de realizar a contagem
  }
  const [count, setCount] = useState(0)
  return (
    <button className='butauzin' onClick={handclik}>
      count is <span>{count}</span>
    </button>
  )
}