import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { compile } from './api';

const defaultCodes = {
    'c': '#include<stdio.h>\n\nint main()\n{\n    printf("Hello, World!");\n  return 0;\n}',
    'cpp': '#include <iostream>\nusing namespace std;\n\nint main()\n{\n    cout << "Hello, World!" << endl;\n    return 0;\n}',
    'rust': 'fn main() {\n    println!("Hello, World!");\n}',
    'python3': 'print("Hello, World!")',
    'java': 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
};

const initialState ={
    code: defaultCodes['c'],
    output: '',
    status: 'idle',
    lang: 'c'
}

const codeSlice = createSlice({
    name: 'compiler',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
        clearEditor: (state) => {
            state.code =defaultCodes[state.lang] || '';
        },
        clearConsole: (state) => {
            state.output = '';
            console.log('console clear');
        },
        setLang: (state, action) => {
            state.lang = action.payload;
            state.code = defaultCodes[state.lang] || '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(runCode.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(runCode.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.output = action.payload;
            })
            .addCase(runCode.rejected, (state, action) => {
                state.status = 'failed';
                state.output = action.error.message;
            });
    }
})


export const runCode = createAsyncThunk('running', async (args, thunkAPI) => {
    try {
        const currentState = thunkAPI.getState();
        const lang =currentState.codeReducer.lang;
        const code =currentState.codeReducer.code;
        if(code===defaultCodes[lang]) return 'Hello, World!';
        const response= await axios.request(compile(lang,code));
      
        return response.data.output;
    } catch (error) {
        throw error;
    }
})


export const { setCode, clearEditor, clearConsole, setLang } = codeSlice.actions;

export default codeSlice.reducer;