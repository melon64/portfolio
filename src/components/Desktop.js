import React, { useState } from 'react';
import Terminal from './Terminal';
import SystemTrayTime from './SystemTrayTime';
import Window from './Window';
import AppIcon from './AppIcon';

function Desktop() {
    const [windows, setWindows] = useState([
        { id: 'testwindow', isOpen: true, isVisible: true, isMaximized: false },
    ]);

    const toggleWindow = (windowId) => {
        setWindows(windows.map(win => {
            if (win.id === windowId) {
                return { ...win, isOpen: !win.isOpen };
            }
            return win;
        }));
    };

    const minimizeWindow = (windowId) => {
        setWindows(windows.map(win => {
            if (win.id === windowId) {
                return { ...win, isVisible: false };
            }
            return win;
        }));
    };

    const showWindow = (windowId) => {
        setWindows(windows.map(win => {
            if (win.id === windowId) {
                return { ...win, isVisible: true };
            }
            return win;
        }));
    };

    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isTerminalVisible, setIsTerminalVisible] = useState(true);

    const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
    const minimizeTerminal = () => setIsTerminalVisible(false);
    const showTerminal = () => setIsTerminalVisible(true);

    return (
        <div className="desktop">
            {windows.map((win) => {
                if (win.isOpen) {
                    return (
                        <Window
                            key={win.id}
                            isVisible={win.isVisible}
                            onMinimize={() => minimizeWindow(win.id)}
                            onClose={() => toggleWindow(win.id)}
                            children={<div>Window content</div>}
                        />
                    );
                }
                return null;
            })}
            {isTerminalOpen && (
                <Terminal
                    isVisible={isTerminalVisible}
                    minimizeTerminal={minimizeTerminal}
                    closeTerminal={toggleTerminal}
                />
            )}
            <div className="taskbar">
                <div className="app-icons">
                    <AppIcon 
                        isVisible={isTerminalVisible} 
                        isOpen={isTerminalOpen} 
                        toggleVisibility={showTerminal} 
                        toggleOpen={toggleTerminal} 
                        minimize={minimizeTerminal} 
                        iconClass="taskbar-button terminal-button" 
                    />
                    <AppIcon 
                        isVisible={windows.find(win => win.id === 'testwindow').isVisible} 
                        isOpen={windows.find(win => win.id === 'testwindow').isOpen} 
                        toggleVisibility={() => showWindow('testwindow')} 
                        toggleOpen={() => toggleWindow('testwindow')} 
                        minimize={() => minimizeWindow('testwindow')} 
                        iconClass="taskbar-button test-button"
                    />
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
