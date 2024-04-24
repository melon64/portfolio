import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loading-icon">
                <img src="/logobgremresize.webp" alt="Loading..." />
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;