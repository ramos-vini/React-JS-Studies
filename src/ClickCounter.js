import React, { useState, useEffect } from 'react';

export default function ClickCounter() {
    const [count, setCount] = useState(-1);

    // useEffect(() => {
    //     document.title = `Page loaded ${count + 1} ${count > 0 ? 'times' : 'time'}`;

    // },[*]);
    // *variable(s) that when changed call useEffect(). If the array is empty, the function is only called once,
    // *if the array is not declared as an argument, any rerendering of the component will call the function.

    useEffect(() => {
        document.title = `Page loaded ${count + 2} ${count > -1 ? 'times' : 'time'}`;
    });

    if (count == -1) {
        return (
            <div>
                <h1>Let's play a super silly game. Yeah, for no reason at all.</h1>

                <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'darkBlue', color: 'white', padding: '5px' }}>Start</button>

            </div>
        );
    } else if (count < (Math.round(Math.random() * 50 + 50))) {
        return (
            <div>
                <p>You've clicked {count} times.</p>

                <button onClick={() => setCount(count + 1)}>Click me</button>

                {
                    (count == 0) ?
                        <code>Once you begin, you gotta do your best...</code> :
                        (count % 10 == 0 || (count - 1) % 10 == 0 && count != 1) ?
                            <code>Come on! Is that all you can do!?</code> :
                            <code>Let's goooooo!</code>
                }

            </div>
        );
    } else {
        return (
            <h1>You won the super silly game. Yeah, for no reason at all.</h1>
        );
    }

}