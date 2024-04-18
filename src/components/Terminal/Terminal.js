import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import TerminalInput from './TerminalInput';
import TerminalOutput from './TerminalOutput';
import './Terminal.css';

function Terminal({ isVisible, minimizeTerminal, closeTerminal }) {
    const [history, setHistory] = useState([
        { command: '', output: 'Welcome to my portfolio terminal. Type "help" for a list of commands.' }
    ]);
    const [input, setInput] = useState('');
    const [currentIndex, setCurrentIndex] = useState(history.length);
    const [isMaximized, setIsMaximized] = useState(false);
    const [size, setSize] = useState({ width: 600, height: 400 });  //Default size
    const [position, setPosition] = useState({ x: (window.innerWidth / 2) - 300, y: (window.innerHeight / 2) - 200 });
    const [terminalOutputHeight, setTerminalOutputHeight] = useState(400);  //Initial height of the terminal output
    const outputContainerRef = React.useRef(null);

    React.useEffect(() => {
        if (outputContainerRef.current) {
            outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
        }
    }, [history]);


    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < history.length) {
            setInput(history[currentIndex].command || '');
        }
    }, [currentIndex, history]);

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
        minimizeTerminal();
    };

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
        if (!isMaximized) {
            setSize({ width: 1280, height: 720 });
            setPosition({ x: (window.innerWidth / 2) - 600, y: (window.innerHeight / 2) - 400});
        }
        else {
            setSize({ width: 600, height: 400 });
            setPosition({ x: (window.innerWidth / 2) - 300, y: (window.innerHeight / 2) - 200 });
        }
    };

    const handleClose = () => {
        closeTerminal();
    };

    useEffect(() => {
        const terminalElement = document.querySelector('.terminal-rnd');
        if (terminalElement) {
            const height = size.height;
            setTerminalOutputHeight(height);
        }
    }, [size]);

    const outputContainerStyle = {
        maxHeight: `${terminalOutputHeight - 100}px`,
        overflowY: 'auto',
    };

    return (
        <div className={`terminal-container ${isVisible ? '' : 'hidden'}`}>
        <Rnd
            className="terminal-rnd"
            dragHandleClassName="drag-handle"
            size={size}
            position={position}
            onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
                setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
                setPosition(position);
            }}
            enableResizing={{
                bottom: true,
                bottomRight: true,
                right: true,
                top: false,
                topLeft: false,
                topRight: false,
                left: false,
                bottomLeft: false,
            }}
        >
            <div className="terminal" onKeyDown={handleKeyDown}>
                <div className="terminal-top-bar drag-handle">
                    <button onClick={handleMinimize}>_</button>
                    <button onClick={handleMaximize}>{isMaximized ? '❐' : '[]'}</button>
                    <button onClick={handleClose}>X</button>
                </div>

                <div className="terminal-body">
                    <div className="terminal-output-container" ref={outputContainerRef} style={outputContainerStyle}>
                        {history.map((entry, index) => (
                            <TerminalOutput 
                                key={index} 
                                command={entry.command} 
                                output={entry.output} 
                            />
                        ))}
                    </div>
                    <TerminalInput 
                        input={input} 
                        setInput={setInput} 
                        onCommand={executeCommand} 
                        commandList={['about', 'projects', 'contact']}
                    />
                </div>
            </div>
        </Rnd>
        </div>
    );
}

export default Terminal;
