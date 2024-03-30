import React from 'react'
import '../css/compiler.css'
import MenuBar from './MenuBar'
import CodeEditor from './CodeEditor'
import Console from './Console'
import ConsoleMenuBar from './ConsoleMenuBar'

function Compiler() {
    return (
        <div className='compilerTop container-fluid'>
            <div className="row h-100 ">
                <div className="col m-1 cmpleft ">
                    <MenuBar />
                    <CodeEditor />
                </div>
                <div className="col-md-5 m-1 cmpright bg-black ">
                    <ConsoleMenuBar />
                    <Console />
                </div>
            </div>
        </div>
    )
}

export default Compiler