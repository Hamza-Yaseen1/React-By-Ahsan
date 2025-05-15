import { useState } from "react"

const Counter= ()=>{
    const[counterValue , setCounterValue] = useState(0)
// let couterValue = 0;this will not render koe b normal variable jo let ya const sa bnaya gya ho or wo normal variable kisi react component ma change ho jay like increment  to react k compnent render nhi hota

    const increment = ()=>{
        setCounterValue(counterValue + 1);
        if(counterValue == 10){
            setCounterValue (10)
            
        }
        }
        const decrement = ()=>{
            setCounterValue(counterValue - 1)
             if(counterValue == 0){
            setCounterValue (0)
        }
        }
    const reset = ()=>{
        setCounterValue(0)
    }
    return(
        <>
        <section className="mb-10 flex flex-col">
            <h2 className="text-2xl">Count is</h2>
            <p className="text-2xl">{counterValue}</p>
            <div className="flex gap-4 mb-4 justify-center">
                <button onClick={decrement}>_Decrement</button>
                <button onClick={increment}>+Increment</button>
            </div>
            <div className="flex justify-center">
                <button onClick={reset}>Reset</button>
            </div>
        </section>
        </>
    )
}
export default Counter