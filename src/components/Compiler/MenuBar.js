import React from 'react'
import { runCode, clearEditor, setLang } from '../../feature/compiler/codeSlice';
import { useDispatch,useSelector } from 'react-redux'


function MenuBar() {
  const dispatch = useDispatch();
  const code = useSelector(state=>state.codeReducer.code);
  const handleChange = (event) => {
    dispatch(setLang(event.target.value));
  };
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Copied Code");
  }
  const img = (name) => {
    return (<img src={name} alt="Not Found" />);
  }
  return (
    <div className='container-fluid menuBar'>
      <div className="row h-100 menuRow">
        <div className="col-6 menuLeftBtn"> Language 
          <select id="language" className='rounded m-lg-2' defaultValue={'c'} onChange={handleChange}>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="rust">Rust</option>
            <option value="python3">Python3</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="col-2 menuBtn" onClick={()=>copyCode()}>Copy{img('copy.png')}</div>
        <div className="col-2 menuBtn"
          onClick={() => { dispatch(clearEditor()) }}>Reset{img('reset.png')}
        </div>
        <div className="col-2 menuBtn "
          onClick={() => { dispatch(runCode()) }}>Run{img('run.png')}
        </div>
      </div>

    </div>
  )
}

export default MenuBar