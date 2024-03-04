import { useRef, useState } from "react";

const Todo = () => {
   
    const inputRef = useRef<HTMLInputElement>(null);  
    const [todos, setTodos] = useState<string[]>([]);
    
    const handleClickAdd = () => {        
        if (inputRef.current && inputRef.current.value.trim() !== '') {           
            const inputValue = inputRef.current.value;      
            setTodos([...todos, inputValue]);        
            inputRef.current.value = '';
        }
    };

    return (
        <>    
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Enter your todo"
            />           
            <button onClick={handleClickAdd}>Add</button>            
            <ul>              
                {todos.map((todo, index) => (
                    <li 
                    key={index}>{todo}                    
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
