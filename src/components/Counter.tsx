import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);

    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     setCount(Number(e.target.value))
    // };

   

    return (
        <>
        <input type="text" value={count} />
        <button>Change</button>
        <p>{count}</p>
        <button onClick={handleClick}>Add</button>
        <button onClick={() => setCount(count - 1)}>Remove</button>
        </>
    )
}

export default Counter