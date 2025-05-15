import type { SyntheticEvent } from "react"

const LoginForm=()=>{
    const submitForm = (ev: SyntheticEvent)=>{
        ev.preventDefault();
    }
    return(
        <>
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
            <input type="email" placeholder="Enter Your Email"/>
            <input type="password" placeholder="Enter Your Password" />
            <button>Submit</button>
        </form>
        </>
    )
}
export default LoginForm