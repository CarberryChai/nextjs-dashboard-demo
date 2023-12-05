'use client'

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        className='px-2 py-1 border border-slate-500 rounded-lg'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className='px-2 py-1 border border-slate-500 rounded-lg'
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </>
  )
}
