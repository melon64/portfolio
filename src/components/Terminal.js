import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import TerminalInput from './TerminalInput';
import TerminalOutput from './TerminalOutput';

function Terminal() {
    const [history, setHistory] = useState([
        { command: '', output: 'Welcome to my portfolio terminal. Type "help" for a list of commands.' }
    ]);
    const [input, setInput] = useState('');
    const [currentIndex, setCurrentIndex] = useState(history.length);

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < history.length) {
            setInput(history[currentIndex].command || '');
        }
    }, [currentIndex]);

    const executeCommand = (command) => {
        const output = command + ': Command executed';
        const newHistory = [...history, { command, output }];
        setHistory(newHistory);
        setCurrentIndex(newHistory.length);
        setInput('');
    };

    const handleKeyDown = event => {
        if (event.key === 'ArrowUp') {
            setCurrentIndex(i => Math.max(i - 1, 0));
        } else if (event.key === 'ArrowDown') {
            setCurrentIndex(i => Math.min(i + 1, history.length));
        }
    };

    const handleMinimize = () => {
        console.log('Minimize the terminal');
    };

    const handleMaximize = () => {
        console.log('Maximize the terminal');
    };

    const handleClose = () => {
        console.log('Close the terminal');
    };

    return (
        <Rnd
            className="terminal-rnd"
            dragHandleClassName="drag-handle"
            enableResizing={{
                bottom: true,
                bottomRight: true,
                right: true,
            }}
            minWidth={300}
            minHeight={200}
        >
            <div className="terminal" onKeyDown={handleKeyDown}>
                <div className="terminal-top-bar drag-handle">
                    <button onClick={handleMinimize}>_</button>
                    <button onClick={handleMaximize}>[]</button>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className="terminal-body">
                    {history.map((entry, index) => (
                        <TerminalOutput key={index} command={entry.command} output={entry.output} />
                    ))}
                    <TerminalInput 
                        input={input} 
                        setInput={setInput} 
                        onCommand={executeCommand} 
                        commandList={['about', 'projects', 'contact']}
                    />
                </div>
            </div>
        </Rnd>
    );
}

export default Terminal;
