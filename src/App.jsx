import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random"
  const [counter, setcounter] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(url);
      const body = await result.json();
      setData(body);
    }
    fetchData();
  }, [counter]);
  const counterHundler = () => {  
    setcounter(counter + 1)
  }
 
  return (
    <>
    <div className="head-disc">
        <p>On this project: every time you click on the refresh button it makes an api call and fetches a random dog's images, and it updates the counter for how many times you make an api call</p>
      </div>
      <div className='container'>
      <div className='card'>
        <div className='controller'>
    <button className="button" onClick={counterHundler} >Refresh</button>
    <p className='counter'>{`Api calls you have made ${counter} time's `}</p>
      </div>
      <div className='content'>
      <p> breeds:  {data.message ? data.message.split("/")[4] : ""}</p> 
      <img src={data.message} />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
