import React from 'react';
import './AppIcon.css';

function AppIcon({ isVisible, isOpen, toggleVisibility, toggleOpen, minimize, iconClass }) {
    return (
        <button 
            className={`${iconClass} ${isVisible && isOpen ? 'highlighted' : ''} ${isOpen ? 'active' : ''}`} 
            onClick={() => {
                if (!isVisible && !isOpen) {
                    toggleVisibility();
                    toggleOpen();
                } else if (!isVisible) {
                    toggleVisibility();
                } else if (!isOpen) {
                    toggleOpen();
                } else if (isVisible && isOpen) {
                    minimize();
                }
            }}
        >
        </button>
    );
}

export default AppIcon;