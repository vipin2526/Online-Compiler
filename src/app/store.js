import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice';
import codeReducer from '../feature/compiler/codeSlice'

export const store = configureStore({
    reducer: { todoReducer, codeReducer }
})