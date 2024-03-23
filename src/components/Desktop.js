import React from 'react';
import Terminal from './Terminal';

function Desktop() {
    const [isTerminalOpen, setIsTerminalOpen] = React.useState(false);

    const toggleTerminal = () => {
        setIsTerminalOpen(!isTerminalOpen);
    };

    return (
        <div className="desktop">
            {isTerminalOpen && <Terminal />}
            <div className="taskbar">
                <div className="app-icons">
                    <button className="terminal-button" onClick={toggleTerminal}></button>
                </div>
                <div className="system-tray">
                    <div className="system-tray-item">Time</div>
                    {/* Additional system tray items */}
                </div>
            </div>
        </div>
    );
}

export default Desktop;
