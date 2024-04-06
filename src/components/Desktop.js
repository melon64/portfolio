import React, { useState } from 'react';
import Terminal from './Terminal';
import SystemTrayTime from './SystemTrayTime';
import Window from './Window';
import AppIcon from './AppIcon';
import DesktopIcon from './DesktopIcon';
import './Desktop.css';

function Desktop() {
    const [windows, setWindows] = useState([
        { id: 'testwindow', isOpen: false, isVisible: true, isMaximized: false, children: <div>Test window content</div>},
        { id: 'resumewindow', isOpen: false, isVisible: true, isMaximized: true, children:
            <object
                data={'/pdf/resumev6.pdf'}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={'/pdf/resumev6.pdf'}>Download PDF</a>.</p>
            </object>
        },
    ]);

    const desktopIcons = [
        {
            id: 'terminal',
            title: 'Terminal',
            imgSrc: '/terminal.png',
            action: () => {
                if (!isTerminalOpen){
                    toggleTerminal();
                }
                if (!isTerminalVisible) {
                    showTerminal();
                }
            }
        },
        {
            id: 'testwindow',
            title: 'README.md',
            imgSrc: '/notepad.png',
            action: () => {
                if (!windows.find(win => win.id === 'testwindow').isOpen) {
                    toggleWindow('testwindow');
                }
                if (!windows.find(win => win.id === 'testwindow').isVisible) {
                    showWindow('testwindow');
                }
            }
        },
        {
            id: 'resumewindow',
            title: 'Resume',
            imgSrc: '/CV.webp',
            action: () => {
                if (!windows.find(win => win.id === 'resumewindow').isOpen) {
                    toggleWindow('resumewindow');
                }
                if (!windows.find(win => win.id === 'resumewindow').isVisible) {
                    showWindow('resumewindow');
                }
            }
        }
    ];

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
            {desktopIcons.map(icon => (
                <DesktopIcon
                    key={icon.id}
                    id={icon.id}
                    title={icon.title}
                    imgSrc={icon.imgSrc}
                    onDoubleClick={icon.action}
                />
            ))}

            {windows.map((win) => {
                if (win.isOpen) {
                    return (
                        <Window
                            key={win.id}
                            isVisible={win.isVisible}
                            onMinimize={() => minimizeWindow(win.id)}
                            onClose={() => toggleWindow(win.id)}
                            isMaximizedAlready={win.isMaximized}
                            children={win.children}
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
                    <AppIcon 
                        isVisible={windows.find(win => win.id === 'resumewindow').isVisible} 
                        isOpen={windows.find(win => win.id === 'resumewindow').isOpen} 
                        toggleVisibility={() => showWindow('resumewindow')} 
                        toggleOpen={() => toggleWindow('resumewindow')} 
                        minimize={() => minimizeWindow('resumewindow')} 
                        iconClass="taskbar-button resume-button"
                    />
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
