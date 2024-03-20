import React, { useState, useEffect } from 'react';
import TerminalInput from './TerminalInput';
import TerminalOutput from './TerminalOutput';

function Terminal() {
    const [history, setHistory] = useState([
        { command: '', output: 'Welcome to my portfolio terminal. Type "help" for a list of commands.' }
    ]);
    const [input, setInput] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);  //Start with 0 or history.length - 1

    useEffect(() => {
        //Only update input when navigating through history
        if (currentIndex >= 0 && currentIndex < history.length) {
            setInput(history[currentIndex].command);
        }
    }, [currentIndex, history]);

    const executeCommand = (command) => {
        const output = command + ': Command executed';
        const newHistory = [...history, { command, output }];
        setHistory(newHistory);
        setCurrentIndex(newHistory.length);  //Point currentIndex beyond the last command
        setInput('');
    };

    const handleKeyDown = event => {
        if (event.key === 'ArrowUp') {
            setCurrentIndex(i => Math.max(i - 1, 0));
        } else if (event.key === 'ArrowDown') {
            setCurrentIndex(i => Math.min(i + 1, history.length));
        }
    };

    return (
        <div className="terminal" onKeyDown={handleKeyDown}>
            {history.map((entry, index) => (
                <div key={index}>
                    <TerminalOutput command={entry.command} output={entry.output} />
                </div>
            ))}
            <TerminalInput 
                input={input} 
                setInput={setInput} 
                onCommand={executeCommand} 
                commandList={['about', 'projects', 'contact']}
            />
        </div>
    );
}

export default Terminal;
