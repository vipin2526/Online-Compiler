import React from 'react';
import './css/documentation.css'
export default function Documentation() {
    return (
        <div id="Documentation">
            <h1 className='text-center'>Online Compiler</h1>

            <p>Online Compiler is a web-based platform that allows users to compile and execute code online without the need for installing any development environment locally. It supports multiple programming languages, making it convenient for developers to quickly test their code snippets or run small programs.</p>

            <h2>Features</h2>
            <ul>
                <li><strong>Support for Multiple Programming Languages:</strong> Online Compiler supports a wide range of programming languages including but not limited to C, C++, Java, Python, JavaScript, Ruby, and many more.</li>
                <li><strong>Real-time Code Compilation:</strong> Users can write their code directly in the browser, and the platform provides real-time compilation, showing errors and warnings instantly.</li>
                <li><strong>Execution Environment:</strong> Users can execute their code within the platform, and see the output directly without having to switch between different applications or environments.</li>
                <li><strong>Syntax Highlighting:</strong> The code editor provides syntax highlighting for different programming languages, making it easier for users to read and write code.</li>
            </ul>

            <h2>Usage</h2>
            <p>To use Online Compiler, follow these steps:</p>
            <ol>
                <li><strong>Select Programming Language:</strong> Choose the programming language you want to write code in from the dropdown menu at the top of the editor.</li>
                <li><strong>Write Code:</strong> Write your code in the editor area provided.</li>
                <li><strong>Compile/Run Code:</strong> Click on the "Compile" or "Run" button to compile/execute your code respectively.</li>
                <li><strong>View Output:</strong> Once the code is compiled/executed, the output will be displayed in the output area below the editor.</li>
            </ol>

            <h2>Supported Languages</h2>
            <p>Online Compiler supports the following programming languages:</p>
            <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Rust</li>
            </ul>
        </div>
    );
};