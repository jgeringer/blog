import * as React from 'react'
import { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0) // hook

    useEffect(() => {
        console.log(`useEffect fired`)
    }, [count]) // use count to only fire when count changes

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>UP</button>
            <p>useEffect happens when anything changes</p>
        </div>
    )
}

export default Counter