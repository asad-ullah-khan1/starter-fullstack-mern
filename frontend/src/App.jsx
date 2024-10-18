import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <>
      <h1>Welcome to Full stack web app!</h1>
      <p>jokes : {jokes.length}</p>

      {
        jokes.map((joke) => {
          return (
            <div key={joke.id} >
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div >
          )
        })
      }
    </>
  )
}

export default App
