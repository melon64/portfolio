import { React, useState} from 'react';
import Draggable from 'react-draggable';
import './DesktopIcon.css';

function DesktopIcon({ id, title, imgSrc, onDoubleClick }) {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = (e, data) => {
        setPosition({ x: data.lastX, y: data.lastY });
        setIsActive(false);
    };

    return (
        <Draggable
            bounds="parent"
            position={position}
            onStart={handleStart}
            onStop={handleStop}
        >
            <div
                id={id}
                className={`desktop-icon ${isActive ? 'active' : ''}`}
                onDoubleClick={onDoubleClick}
            >
                <img src={imgSrc} alt={title} />
                <span>{title}</span>
            </div>
        </Draggable>
    );
}

export default DesktopIcon;