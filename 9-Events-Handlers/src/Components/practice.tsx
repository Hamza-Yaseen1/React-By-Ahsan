import { useState } from "react"

const Practice = ()=>{
    const [input,setInput]= useState('')
  const [tasks, setTasks] = useState<string[]>([]);

    const handleTask=()=>{
        if(input.trim()){
            setTasks([...tasks,input.trim()]);
            setInput('');
        }
    }
    return(

        <>
        <h1>Todo</h1>

        <input type="text" placeholder="Enter Todo"
        value={input}
        onChange = {e => setInput(e.target.value)}
        />
        <button onClick={handleTask}>Add</button>
        </>
    )
}
export default Practice