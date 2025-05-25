import type { FC } from "react"

type WelcomeMessageProps ={
    // isLoggedIn?: boolean to make it optional
    isLoggedIn: boolean ,
    user?:{
        name : string;
        type : "Admin"| "Moderator"|"Guest"
    }
}
const WelcomeMessage:FC<WelcomeMessageProps> = ({isLoggedIn,user})=>{
        if(user?.type === "Moderator"){
            return(
                <>
                <h1>Ask Admin for access</h1>
                </>
            )
        }
        else if(user?.type === "Guest"){
            return(
                <>
                <p>No Access</p>
                </>
            )
        }
         <div>
            {isLoggedIn ? <h1>User LoggedIn</h1> : <h1>User LoggedOut</h1>}
            {user && <h1>Hello , {user.name}</h1>}
        </div>
    
    }
  

export default WelcomeMessage