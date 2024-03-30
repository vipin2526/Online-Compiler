import '../css/codeEditor.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCode } from '../../feature/compiler/codeSlice';


const CodeEditor = () => {
  const dispatch = useDispatch();
  let code = useSelector(state => state.codeReducer.code);

  const handleChange = (event) => {
    dispatch(setCode(event.target.value));
  };

  const renderLines = () => {
    const lines = code.split('\n');
    return lines.map((line, index) => (
      <div key={index} className="code-line">
        <span className="line-number">{index + 1}</span>
      </div>
    ));
  };

  return (
    <div className='outerBox h-100 position-relative'>
      <div className="code-editor container-fluid codeEditor row">
        <div className="code-lines col-1">{renderLines()}</div>
        <textarea
          className="code-input col"
          value={code}
          onChange={handleChange}
        />
      </div></div>
  );
};

export default CodeEditor;
