import { useState, useEffect } from 'react'
import './App.scss'

function App() {

  const [data, setData] = useState(null);
  // endpoint = url to fetch from
  const endpoint = "https://geek-jokes.sameerkumar.website/api?format=json";
    
      async function fetchData() {
          const res = await fetch(endpoint);
          const data = await res.json();
          // console.log(data);
          setData(data);
      }

    useEffect (() => {    
        fetchData();
    }, []);

  return (
    <div>
      {data ? (
        <>
          <img src="./src/assets/chucknorris.jpg" />
          <p>{data.joke}</p>
          <button onClick={fetchData}>Roundhouse Kick!</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
