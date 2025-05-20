import type { FC } from "react"

type WelcomeMessageProps ={
    // isLoggedIn?: boolean to make it optional
    isLoggedIn: boolean 
}
const WelcomeMessage:FC<WelcomeMessageProps> = ({isLoggedIn})=>{
    return(
        <>
        <div>
            {isLoggedIn ? <h1>User LoggedIn</h1> : <h1>User LoggedOut</h1>}
        </div>
        </>
    )
}
export default WelcomeMessage