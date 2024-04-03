import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearConsole } from '../../feature/compiler/codeSlice';
function ConsoleMenuBar() {
  const dispatch = useDispatch();

  const img = (name) => {
    return (<img src={name} alt="Not Found" />);
  }
  return (
    <div className='consoleMenuBar container-fluid'>
      <div className='cputime datapoint'>CPU Time: {useSelector(state => state.codeReducer.cputime)}sec</div>
      <div className='memory datapoint'>Memory: {useSelector(state => state.codeReducer.memory)}</div>
      <div className="menuBtn" onClick={() => { dispatch(clearConsole()) }} >
        {img('clear.png')}
      </div>
    </div>
  )
}

export default ConsoleMenuBar;