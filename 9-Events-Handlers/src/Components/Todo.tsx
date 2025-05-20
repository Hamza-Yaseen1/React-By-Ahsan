import {  useState } from "react"

const Todo = ()=>{
    const[todos ,setTodos]= useState([
        {
            text: "Todo 1",
            id: 1,
        },
        {
            text: "Todo 2",
            id: 2,
        },
        {
            text: "Todo 3",
            id: 3,
        },
    ]);
    const deleteItem = (itemId:number)=>{
        setTodos(todos.filter(itemEl => {
            return itemEl.id !== itemId;
        }));
    }
    return(
        <>
        <ul>
            {todos.map((todoItem) => (
                <li key={todoItem.id} onClick={()=>{
                    deleteItem(todoItem.id);
                }}>
                    {todoItem.text}
                </li>
            ))}
        </ul>
        </>
    )
}
export default Todo