import React, { useState, useEffect } from 'react';

function SystemTrayTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span>{currentTime.toLocaleTimeString()}</span>
            <span>{currentTime.toLocaleDateString()}</span>
        </div>
    );
}

export default SystemTrayTime;
