import React, {useState, useEffect} from 'react'
// import './App.css';


import axios from 'axios'

import {Table} from 'react-bootstrap'

//  const baseURL = "https://data.covid19india.org/state_district_wise.json"
 const baseURL = "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json"
//  const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

const App = () => {
  
  const [receiveData, setReceiveData] = useState([])
  const [errors, setErrors] = useState(null)

    const networkCall = async () => {
      try {
        const response = await axios.get(baseURL)
        // const response = await fetch(baseURL)
        console.log("Full response:", response)
        const { data, errors } = response

         setReceiveData(data.statewise)
        
        // console.log("All States:",Object.entries(data))
        
        
        if (errors) setErrors(errors)
      } catch (error) {
        setErrors([error])
      }
    }


  useEffect(() => {
  
    networkCall()

  },[])

  console.log("received Data:",receiveData)


  return (
    <>
      <div className="container mt-5">
      <div className="main-heading">
      <h2 className="mb-5"><span className="font-weight-bold">Covid19 Statewise Stats in India</span></h2>
      </div>
     
     <div>
     {
        <Table  striped bordered hover responsive >
          <thead className="thead-dark th">
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATHS</th>
            <th>ACTIVE</th>
          </thead>
          <tbody>
            {
              receiveData.map((items, key) => {
                return (
                <tr key={key}>
                  <td>{items.state}</td>
                  <td>{items.confirmed}</td>
                  <td>{items.recovered}</td>
                  <td>{items.deaths}</td>
                  <td>{items.active}</td>
                </tr>
                )
              })
            }
          </tbody>
        </Table>
     }
       
     </div>
      </div>
    </>
  )
}

export default App
