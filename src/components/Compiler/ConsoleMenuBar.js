import React from 'react'
import { useDispatch } from 'react-redux'
import { clearConsole } from '../../feature/compiler/codeSlice';
function ConsoleMenuBar() {
  const dispatch = useDispatch();

  const img = (name) => {
    return (<img src={name} alt="Not Found" />);
  }
  return (
    <div className='consoleMenuBar container-fluid'>
      <div className="menuBtn" onClick={() => { dispatch(clearConsole()) }} >
        {img('clear.png')}</div>
    </div>
  )
}

export default ConsoleMenuBar;