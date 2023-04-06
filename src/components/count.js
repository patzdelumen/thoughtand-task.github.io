import React, {useState} from 'react'

function Counting(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked: {count} times</p>
            <button onClick={ () => { setCount(count +1)} }>Increment Me</button>
            <button onClick={ () => { setCount(count -1)} }>Decrement Me</button>
        </div>
    )
}

export default Counting