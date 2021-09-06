import React, {useState} from 'react'
import './App.css';

import Circle1 from './Components/Circles/Circle1';
import Circle2 from './Components/Circles/Circle2';
import Circle3 from './Components/Circles/Circle3';
import Circle4 from './Components/Circles/Circle4';



const App = () => {
  
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  

  // const freespirit = [1, 2, 2, 4, 3, 3, 1, 2, 1]
  
  // const archiever = [4, 2, 1, 1, 3, 4, 3, 2, 2]
  
  // const caregiver = [1, 2, 4, 2, 1, 1, 2, 3, 2]
  
  const tags = ['Achievement', 'Conservation', 'Caring', 'Freedom', 'Respect', 'Tradition', 'Enjoyment', 'Stability', 'Equality/justice']


  const freespirit = [<Circle1/>, <Circle2/>, <Circle2/>, <Circle4/>, <Circle3/>, <Circle3/>, <Circle1/>, <Circle2/>, <Circle1/>]
  
  const archiever = [<Circle4/>, <Circle2/>, <Circle1/>, <Circle1/>, <Circle3/>, <Circle4/>, <Circle3/>, <Circle2/>, <Circle2/>]
  
  const caregiver = [<Circle1/>, <Circle2/>, <Circle4/>, <Circle2/>, <Circle1/>, <Circle1/>, <Circle2/>, <Circle3/>, <Circle2/>]


  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center"}}>
        
        <div style={{ backgroundColor: "#051c2c", justifyContent: "center", alignItems: "center", display: 'flex' }}>

          <button className="button" onClick={
            () => {
              setClicked1(true)
              setClicked2(false)
              setClicked3(false)
            }}>Free spirit</button>
          
          <button className="button" onClick={
            () =>{
              setClicked2(true)
              setClicked1(false)
              setClicked3(false)
            }
          }>Achiever</button>

          <button className="button" onClick={
            () => {
              setClicked3(true)
              setClicked1(false)
              setClicked2(false)
            }}>Caregiver</button>
          
        </div>
            
         <div className="grid-container">
         {clicked1?(
           
          [0,1,2,3,4,5,6,7,8].map((item, index)=>{
            return (
             
              <div className="grid-item" key={index}><div className="circle"><span className="span">{tags[item]}</span>
                {freespirit[item]}
              </div></div> 
            )
          })
          ) : ""
        }
        </div>
        

        <div className="grid-container">
         {clicked2?(
           
          [0,1,2,3,4,5,6,7,8].map((item, index)=>{
            return (
             
              <div className="grid-item" key={index}><div className="circle"><span className="span">{tags[item]}</span>
                {archiever[item]}
              </div></div> 
            )
          })
          ) : ""
        }
        </div>


        <div className="grid-container">
         {clicked3?(
           
          [0,1,2,3,4,5,6,7,8].map((item, index)=>{
            return (
             
              <div className="grid-item" key={index}><div className="circle"><span className="span">{tags[item]}</span>
                {caregiver[item]}
              </div></div> 
            )
          })
          ) : ""
        }
        </div>
      </div>
</React.Fragment>
  )
}

export default App
