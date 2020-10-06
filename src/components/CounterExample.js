import React, {useState} from 'react';

export default function CounterExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                {count}
            </h1>
            <p>
                <button onClick={() => setCount(count + 1)} >Sumar 1</button>
            </p>
            <p>
                <button onClick={() => setCount(count - 1)} >Restar 1</button>
            </p>
            <p>
                <button onClick={() => setCount(0)} >Resetear</button>
            </p>
        </div>
    )
}
