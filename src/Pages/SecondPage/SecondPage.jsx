import React from 'react'
import { useLocation } from 'react-router-dom'
import Leftbar from '../../components/Leftbar/Leftbar'
import { useState, useEffect } from 'react'
import secpagebg from '../../assets/secondpagebg.mp4'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import ModeTable from '../../components/ModeTable/ModeTable'
import './SecondPage.css'

const SecondPage = () => {

  const location = useLocation()
  const data = location.state?.data;
  const [tableData,settableData] = useState({Data:{
    length:0
  }})

  let jsonNum=0;
  {
    if(data.val2==='<5'){
      jsonNum=0;
    }
    else if(data.val2==='5-10'){
      jsonNum=5;
    }
    else if(data.val2==='10-15'){
      jsonNum=10;
    }
    else if(data.val2==='15-20'){
      jsonNum=15;
    }
    else if(data.val2==='20-25'){
      jsonNum=20;
    }
    else{
      jsonNum=25
    }
  }
  useEffect(() => {
    axios
    .get(`db_JSON/sample_db_${jsonNum}km.json`)
    .then(response => {
      settableData(response.data);
    })
    .catch(error => {
      console.log('Error fetching data:',error)
    })
    
  }, [jsonNum])
  console.log(data.val1)
  
  return (
    <div className="main-container1">
      <Helmet>
        <title>
          Mode Choice Table
        </title>
      </Helmet>
      <div className='main-container2'>
        <video className='secpagebg' autoPlay loop muted>
          <source src={secpagebg} type='video/mp4' />
        </video>
        <div className="data-container">
          <div className="leftbar-container">
            <Leftbar val1={data.val1} val2={data.val2}/>
          </div>
          <div className="mode-table">
            {tableData.Data.length > 0 && (
              <ModeTable tabdata={tableData.Data[0]} data={data}/> 
            )}
            <h1>{tableData.length}</h1>
            {/*<h1>mode_1.ivtt value: {tableData.Data[0]["mode_1.ivtt"]}</h1>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
