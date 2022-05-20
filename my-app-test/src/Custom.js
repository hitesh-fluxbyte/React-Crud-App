import { useState } from "react";

function useCustomCounter(){

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);
    const handleIncrement = () =>{
        setCount(count + 1);
    };

    const handleDecrement = () =>{
        setCount1(count1 - 1);
    };
    return{
        count,
        handleIncrement, 
        count1,
        handleDecrement
    };
};


export default useCustomCounter;