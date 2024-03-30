// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { removetodo, updatetodo } from '../feature/todo/todoSlice';

// export default function AllTodos() {
//   const todos = useSelector(state => state.todos);
//   const dispatch = useDispatch();
//   console.log(todos);

//   return (
//     <div className='container allTodo  p-2 '>
//       {todos.map((todo) => (
//         <div className="row p-1 mt-1 todoBox align-items-center " key={todo.id}>
//           <div className="col-9">
//             <h3 className='overflow-hidden'>{todo.text}</h3>
//           </div>
//           {/* <div className="col">
//             <button className='btnRemove' onClick={() => dispatch(updatetodo())}>Update</button>
//           </div> */}
//           <div className="col">
//             <button className='btnRemove' onClick={() => dispatch(removetodo(todo.id))}>Remove</button>
//           </div>
//         </div>
//       ))
//       }

//     </div>
//   )
// }
