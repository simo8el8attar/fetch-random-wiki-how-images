import { useState } from 'react'

function App() {
  const [fact, setFact] = useState(null);
  const [imgs, setImg] = useState([]);
  const [nbImgs , setNbImgs] = useState(1);

  const fetchData = async()=> {
    const url = `https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=${nbImgs}`;
    const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '24448b8a23mshbc8147dac7a9135p1a03d9jsned62a1229db5',
      'x-rapidapi-host': 'hargrimm-wikihow-v1.p.rapidapi.com'
    }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setFact(result);
      setImg(Object.values(result));
      console.log(imgs)
    } catch (error) {
      setFact(error);
    }
  };

  return (
    <>
  
      <b>How many Images do u want ? </b>
      <input value={nbImgs} onChange={(e)=>{setNbImgs(e.target.value)}} type="text" /> <br/> <br/>
      <button
      onClick={fetchData}
      style={{
        color : "white" , 
        backgroundColor : "blue",
        padding : "26px"
        ,border : "solid white 2px",
        borderRadius : "9px"
      }}
      >Fetch Random Wiki How Images</button>
      <p>
        {imgs.map((i,index)=>(<img key={index} src={i}/>))}
      </p>
    </>
    
  )
}

export default App
