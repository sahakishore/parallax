import React, {useState} from 'react'
import './App.css';

// import Position1 from './Components/Positions/Position1';
// import Position2 from './Components/Positions/Position2';
// import Position3 from './Components/Positions/Position3';
// import Position4 from './Components/Positions/Position4';
// import Position5 from './Components/Positions/Position5';
// import Position6 from './Components/Positions/Position6';
// import Position7 from './Components/Positions/Position7';
// import Position8 from './Components/Positions/Position8';
// import Position9 from './Components/Positions/Position9';

import Circle1 from './Components/Circles/Circle1';
import Circle2 from './Components/Circles/Circle2';
import Circle3 from './Components/Circles/Circle3';
import Circle4 from './Components/Circles/Circle4';



const App = () => {
  
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  
    
  const tags = [Achievement, Conservation, Caring, Freedom, Respect, Tradition, Enjoyment, Stability, Equality/justice]

  // const freespirit = [1, 2, 2, 4, 3, 3, 1, 2, 1]
  
  // const archiever = [4, 2, 1, 1, 3, 4, 3, 2, 2]
  
  // const caregiver = [1, 2, 4, 2, 1, 1, 2, 3, 2]
  
  const freespirit = [<Circle1/>, <Circle2/>, <Circle2/>, <Circle4/>, <Circle3/>, <Circle3/>, <Circle1/>, <Circle2/>, <Circle1/>]
  
  const archiever = [<Circle4/>, <Circle2/>, <Circle1/>, <Circle1/>, <Circle3/>, <Circle4/>, <Circle3/>, <Circle2/>, <Circle2/>]
  
  const caregiver = [<Circle1/>, <Circle2/>, <Circle4/>, <Circle2/>, <Circle1/>, <Circle1/>, <Circle2/>, <Circle3/>, <Circle2/>]


  return (
    <>
      <div className="container" style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center", display:"table" }}>
        
        <div style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center", display: 'flex' }}>
        <button className="button" >Free spirit</button>
        <button className="button" >Achiever</button>
        <button className="button" >Caregiver</button>
        </div>
        

        



          <div className="grid">
              
          <div className="row">
            <div className="cell"><div className="circle"><span className="span">Achievement</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Conservation</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Caring</span></div></div>
        </div>
            
            <div className="row">
              <div className="cell"><div className="circle"><span className="span">Freedom</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Respect</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Tradition</span></div></div>
            </div>
            <div className="row">
              <div className="cell"><div className="circle"><span className="span">Enjoyment</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Stability</span></div></div>
              <div className="cell"><div className="circle"><span className="span">Equality/Justice</span></div></div>
            </div>
            
          </div>
          
      </div>
</>
  )
}

export default App
