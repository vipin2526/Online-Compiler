// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addtodo } from '../feature/todo/todoSlice'

// export default function AddTodo() {
//   const dispatch = useDispatch();

//   const [text, setText] = useState('');

//   return (
//     <div className='container pb-5 align-self-center addTodo'>
//       <div className="row ">
//         <div className="col-8">
//           <input className='inputTodo' type="text" onChange={(e) => setText(e.target.value)} name="" id="" placeholder='Enter Text Here' value={text} />
//         </div>
//         <div className="col">
//           <button type='submit' className='btnAddtodo' onClick={() => { if (text.length) { dispatch(addtodo(text)); setText('') } }}>Add ToDo</button>
//         </div>
//       </div>
//     </div>
//   )
// }
