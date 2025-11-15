import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    console.log("Parent Component Render");
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1 className='text-4xl text-red-500 '>{count}</h1>
            <button
                className='bg-blue-600 text-white p-3 cursor-pointer'
                onClick={() => setCount((prev) => prev + 1)}>Count</button>
            <Child />

        </div>
    )
}

export default Parent