import React from 'react'
import { Link } from 'react-router-dom'

function SimpleLink({ to, title }) {
  return (
    <Link to={to}
      className='bg-blue-600 text-white p-2 px-5 rounded-sm inline-block'>{title}</Link>
  )
}

export default SimpleLink