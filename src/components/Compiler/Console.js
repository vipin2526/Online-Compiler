import React from 'react'
import '../css/console.css'
import { useSelector } from 'react-redux'

function Console() {
  const output = useSelector(state => state.codeReducer.output)
  return (
    <div className='consoleTop p-2' >
      {output}
    </div>
  )
}

export default Console