import {type SyntheticEvent, useState } from "react"
const LoginForm=()=>{
    const[email , setEmail]= useState('')
    const[password , setPassword]= useState('')
    const submitForm = (ev: SyntheticEvent)=>{
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        //  You're telling TypeScript that ev.target is a form.
        //  This helps with type safety and accessing form elements.


        console.log(target,{
            email,
            password
        });
        
    }
    return(
        <>
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <input onChange={(ev)=>{
                setEmail(ev.target.value);
            }} type="email" placeholder="Enter Your Email"/>
            <input onChange={(ev)=>{
                setPassword(ev.target.value);
            }} type="password" placeholder="Enter Your Password" />
            <button>Submit</button>
        </form>
        </>
    )
}
export default LoginForm