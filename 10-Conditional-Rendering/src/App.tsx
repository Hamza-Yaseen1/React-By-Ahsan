import './App.css'
import WelcomeMessage from './Comonents/WelcomeMessage'

function App() {

  return (
    <>
     <WelcomeMessage isLoggedIn={true} user={{name:"Hamza",
      type : "Guest"
     }}/>
    </>
  )
}

export default App
