import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='center'>
        {count}
        <br/>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count - 1)}>Decrement</button>

    </div>
  )
}

export default Counter