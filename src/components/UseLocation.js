import React from 'react'
import {Route,Routes} from "react-router-dom";
import NavbarULE from './NavbarULE'
import HomeULE from './HomeULE'

const UseLocation = () => {


  return (
    <div>
        <Routes>
            <Route pathe="/homeule" element={<HomeULE/>}/>
            <Route pathe="/navbarule" element={<NavbarULE/>}/>
        </Routes>
    </div>
  )
}

export default UseLocation