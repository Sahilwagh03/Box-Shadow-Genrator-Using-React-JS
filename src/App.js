
import './App.css';
import React, { useState } from 'react'

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [color,setcolor]=useState('black')
  const [bgcolor,setbgcolor]=useState('blueviolet')
  const [checkOn,setcheckOn]=useState(false)
  return (
    <div className="App">
      <div className="controls">
        <label >Horizontal lenght</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
        <label >Vertical lenght</label>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)} />
        <label >Blur</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
        <label >Color</label>
        <input type="color" min="0" max="200" value={color} onChange={(e) => setcolor(e.target.value)} />
        <br></br>
        <br></br>
        <label >CardColor</label>
        <input type="color" min="0" max="200" value={bgcolor} onChange={(e) => setbgcolor(e.target.value)} />
        <div class="switch">
    <label>
      Outline
      <input type="checkbox" checked={checkOn} onChange={(e)=>setcheckOn(!checkOn)}/>
      <span className="lever"></span>
      Inline
    </label>
  </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${checkOn?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${color} ` ,backgroundColor: `${bgcolor}` }}>
          <p>Box-Shadow: {Hori}px {Veri}px {Blur}px {color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
