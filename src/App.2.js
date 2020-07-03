import React, {
  useState,
  useEffect
} from 'react'
import Counter from './components/Counter'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedText, setLoggedText] = useState("Log in");

  useEffect(() => {

    return () => {

    }
  }, []);

  const handleClick = () => {

  }

  return (
    <div className="container mt-5 text-center" >
      <h4>Welcome to my Blog</h4>
      <button onClick={handleClick}>{loggedText}</button>
    </div>
  )
}

export default App