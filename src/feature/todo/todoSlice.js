import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: 'Hello!' }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            let newtodo = { id: nanoid(), text: action.payload };
            state.todos.push(newtodo);
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            })
        },
        updatetodo: () => {
            console.log('you are updating the value');
        }
    }
})

export const {addtodo,removetodo,updatetodo} = todoSlice.actions;

export default todoSlice.reducer;