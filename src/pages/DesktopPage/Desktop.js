import React, { useRef, useState, useEffect } from 'react';
import Terminal from '../../components/Terminal/Terminal';
import SystemTrayTime from '../../components/Desktop/SystemTray/SystemTrayTime';
import Window from '../../components/Window/Window';
import AppIcon from '../../components/AppIcon/AppIcon';
import DesktopIcon from '../../components/Desktop/DesktopIcon/DesktopIcon';
import './Desktop.css';
import HALO from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';
import ProjectSlideshow from '../../components/ProjectSlideshow/ProjectSlideshow';

function Desktop() {
    const [windows, setWindows] = useState([
        { id: 'testwindow', isOpen: false, isVisible: true, isMaximized: false, children: <div>Hi, this is my portfolio desktop simulation! Treat this as a real desktop, open apps, click on the icons, and have fun!</div>},
        { id: 'resumewindow', isOpen: false, isVisible: true, isMaximized: true, children:
            <object
                data={'/pdf/resume.pdf'}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={'/pdf/resume.pdf'}>Download PDF</a>.</p>
            </object>
        },
        { id: 'projectswindow', isOpen: false, isVisible: true, isMaximized: true, children: <ProjectSlideshow />}
    ]);

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(HALO({
                el: vantaRef.current,
                THREE: THREE, // Use the same THREE instance, important if bundling
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                amplitudeFactor: 1.0,
                size: 1.5,
                backgroundColor: 0x0,
                color: 0x482794
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

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
        },
        {
            id: 'projectswindow',
            title: 'Projects',
            imgSrc: '/project.png',
            action: () => {
                if (!windows.find(win => win.id === 'projectswindow').isOpen) {
                    toggleWindow('projectswindow');
                }
                if (!windows.find(win => win.id === 'projectswindow').isVisible) {
                    showWindow('projectswindow');
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
        <div ref={vantaRef} className="desktop">
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
                    <AppIcon 
                        isVisible={windows.find(win => win.id === 'projectswindow').isVisible} 
                        isOpen={windows.find(win => win.id === 'projectswindow').isOpen} 
                        toggleVisibility={() => showWindow('projectswindow')} 
                        toggleOpen={() => toggleWindow('projectswindow')} 
                        minimize={() => minimizeWindow('projectswindow')} 
                        iconClass="taskbar-button projects-button"
                    />
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
