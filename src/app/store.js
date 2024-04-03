import { configureStore } from '@reduxjs/toolkit'
import codeReducer from '../feature/compiler/codeSlice'

export const store = configureStore({
    reducer: { codeReducer }
})