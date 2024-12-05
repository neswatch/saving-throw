import {useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>UwU Site de test</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}