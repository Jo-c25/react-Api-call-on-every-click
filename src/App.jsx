import React, { useState, useEffect } from 'react';
import './App.css'
import fallBackImage from "./images/fallBackImage.png"

function App() {
  const [data, setData] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random"
  const [counter, setcounter] = useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  const counterHundler = () => {  
    fetchData()
    setcounter(counter + 1)
  }
  
  const onImageError = (e) => e.target.src = fallBackImage;
  const breedsName = data.message ? data.message.split("/")[4] : "";
 
  return (
    <>
    <div className="head-disc">
        <p>On this project: every time you click on the refresh button it makes an api call and fetches a random dog's images, and it updates the counter for how many times you make an api call</p>
      </div>
      <div className='container'>
      <div className='card'>
        <div className='controller'>
    <button className="button" onClick={counterHundler} >Refresh</button>
    <p >Api calls you have made <span className='counter'>{counter}</span> time's </p>
      </div>
      <div className='content'>
      <p> breeds:  {breedsName}</p> 
      <img src={data.message} onError={onImageError} alt={breedsName} />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
