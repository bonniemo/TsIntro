import { useRef, useState } from "react";

const Addition = () => {
  const inputRefOne = useRef<HTMLInputElement>(null);
  const inputRefTwo = useRef<HTMLInputElement>(null);

  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number | null>(null);

  const handleClickAdd = () => {
    const parsedNum1 = parseFloat(inputRefOne.current?.value || "0");
    const parsedNum2 = parseFloat(inputRefTwo.current?.value || "0");

    setNum1(parsedNum1);
    setNum2(parsedNum2);
    setSum(parsedNum1 + parsedNum2);

    // Clear the input fields
    if (inputRefOne.current) inputRefOne.current.value = "";
    if (inputRefTwo.current) inputRefTwo.current.value = "";

    // Set focus back to the first input field
    if (inputRefOne.current) inputRefOne.current.focus();
  };

  return (
    <>
      <input 
        type="text" 
        ref={inputRefOne} 
        placeholder="Enter a number" 
      />

      <input 
        type="text" 
        ref={inputRefTwo} 
        placeholder="Enter another number" 
      />

      <button onClick={handleClickAdd}>Add it up</button>
      <p>{num1} + {num2} = {sum}</p>
    </>
  );
};

export default Addition;
