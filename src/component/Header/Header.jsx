import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const {timer, text} = useSelector((state) => state.count)

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        {timer}
    </div>
  )
}

export default Header