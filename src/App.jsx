import { useState, useEffect } from 'react'
import './App.scss'

function App() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("theme", "darkMode");
      setDark(true)
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("theme", "darkMode")
    } else {
      document.documentElement.setAttribute("theme", "lightMode")
    }
  }, [dark])

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
          <button onClick={fetchData}>Roundhouse Kick!</button><br /><br />
          <button onClick={() => setDark(!dark)}>Change theme!</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
