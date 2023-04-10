import React from 'react'
import {Route,Routes} from 'react-router-dom'
import FirstPage from './Pages/FirstPage/FirstPage'
import SecondPage from './Pages/SecondPage/SecondPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
