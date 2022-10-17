import React, { useState, useEffect } from 'react';

export default function ClickCounter() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Page loaded ${count + 1} ${count > 0 ? 'times' : 'time'}`;

    // },[*]);
    // *variable(s) that when changed call useEffect(). If the array is empty, the function is only called once,
    // *if the array is not declared as an argument, any rerendering of the component will call the function.

    useEffect(() => {
        document.title = `Page loaded ${count + 1} ${count > 0 ? 'times' : 'time'}`;
    });

    return (
        <div>
            <p>You've clicked {count} times.</p>

            <button onClick={()=> setCount(count + 1)}>Click me</button>
        </div>
    );
}