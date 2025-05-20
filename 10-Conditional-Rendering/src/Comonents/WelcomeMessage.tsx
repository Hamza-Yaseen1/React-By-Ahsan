import type { FC } from "react"

type WelcomeMessageProps ={
    // isLoggedIn?: boolean to make it optional
    isLoggedIn: boolean ,
    user?:{
        name : string;
    }
}
const WelcomeMessage:FC<WelcomeMessageProps> = ({isLoggedIn,user})=>{
    return(
        <>
        <div>
            {isLoggedIn ? <h1>User LoggedIn</h1> : <h1>User LoggedOut</h1>}
            {user && <h1>Hello , {user.name}</h1>}
        </div>
        </>
    )
}
export default WelcomeMessage