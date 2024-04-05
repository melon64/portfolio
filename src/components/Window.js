import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './Window.css';

function Window({ title, isVisible, onMinimize, onClose, children }) {
    const [size, setSize] = useState({ width: 600, height: 400 });
    const [position, setPosition] = useState({ x: (window.innerWidth / 2) - 300, y: (window.innerHeight / 2) - 200 });
    const [isMaximized, setIsMaximized] = useState(false);

    const handleMinimize = () => onMinimize();
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

    const handleClose = () => onClose();

    return (
        <div className={`window-container ${isVisible ? '' : 'hidden'}`}>
            <Rnd
                className="window-rnd"
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
                <div className="window-top-bar drag-handle">
                    <span>{title}</span>
                    <button onClick={handleMinimize}>_</button>
                    <button onClick={handleMaximize}>{isMaximized ? '[]' : '❐'}</button>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className="window-content">
                    {children}
                </div>
            </Rnd>
        </div>
    );
}

export default Window;
