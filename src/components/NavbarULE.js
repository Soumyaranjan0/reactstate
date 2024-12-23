import React from 'react'
import { useLocation } from 'react-router-dom'

const NavbarULE = () => {

   const location= useLocation()
    console.log(location);

  return (
    <div>
        <h2>{location.state.name}</h2>
    </div>
  )
}

export default NavbarULE