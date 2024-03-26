import React, { useState } from 'react';
import Terminal from './Terminal';
import SystemTrayTime from './SystemTrayTime';
import Window from './Window';

function Desktop() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isTerminalVisible, setIsTerminalVisible] = useState(true);

    const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
    const minimizeTerminal = () => setIsTerminalVisible(false);
    const showTerminal = () => setIsTerminalVisible(true);

    return (
        <div className="desktop">
            <Window/>
            {isTerminalOpen && (
                <Terminal
                    isVisible={isTerminalVisible}
                    minimizeTerminal={minimizeTerminal}
                    closeTerminal={toggleTerminal}
                />
            )}
            <div className="taskbar">
                <div className="app-icons">
                    <button className={`terminal-button 
                    ${isTerminalVisible && isTerminalOpen ? 'highlighted' : ''}
                    ${ isTerminalOpen ? 'active' : ''}`
                } onClick={
                        () => {
                            if (!isTerminalVisible && !isTerminalOpen) {
                                showTerminal();
                                toggleTerminal();
                            } else if (!isTerminalVisible) {
                                showTerminal();
                            } else if (!isTerminalOpen) {
                                toggleTerminal();
                            } else if (isTerminalVisible && isTerminalOpen) {
                                minimizeTerminal();
                            }
                        }
                    }>
                    </button>
                    <button className=""></button>
                    <button className=""></button>
                    <button className=""></button>
                    <button className=""></button>
                    <button className=""></button>
                    <button className=""></button>

                    {/* Additional app icons */}
                </div>
                <div className="system-tray">
                    <SystemTrayTime />
                    {/* Additional system tray items */}
                </div>
            </div>
        </div>
    );
}

export default Desktop;
