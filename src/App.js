import React, {useState} from 'react'
import './App.css';

import Position1 from './Components/Positions/Position1';
import Position2 from './Components/Positions/Position2';
import Position3 from './Components/Positions/Position3';
import Position4 from './Components/Positions/Position4';
import Position5 from './Components/Positions/Position5';
import Position6 from './Components/Positions/Position6';
import Position7 from './Components/Positions/Position7';
import Position8 from './Components/Positions/Position8';
import Position9 from './Components/Positions/Position9';


const App = () => {
  
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const [clicked4, setClicked4] = useState(false)
  
  // const data = "Kishore"

  

  return (
    
    <>
      

      <div className="container" style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center", display:"table" }}>
        
        <div style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center", display: 'flex' }}>
        <button className="button" onClick={()=>setClicked1(true)}>Free spirit</button>
        <button className="button" onClick={()=>setClicked2(true)}>Achiever</button>
        <button className="button" onClick={()=>setClicked3(true)}>Caregiver</button>
        </div>
        
          <div className="grid">
            <div className="row">
              {/* <div className="cell"><div className="circle"><Circle1 name={data}/></div></div> */}
            <div className="cell"><div className="circle"><span className="span">Achievement</span><Position1 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Conservation</span><Position2 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Caring</span><Position3 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
            </div>
            <div className="row">
              <div className="cell"><div className="circle"><span className="span">Freedom</span><Position4 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Respect</span><Position5 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Tradition</span><Position6 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
            </div>
            <div className="row">
              <div className="cell"><div className="circle"><span className="span">Enjoyment</span><Position7 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Stability</span><Position8 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
              <div className="cell"><div className="circle"><span className="span">Equality/Justice</span><Position9 clicked1={clicked1} clicked2={clicked2} clicked3={clicked3 }/></div></div>
            </div>
          </div>
      </div>
</>
  )
}

export default App
