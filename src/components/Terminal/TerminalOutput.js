import React from 'react';
import './Terminal.css';

function TerminalOutput({ command, output }) {
    const renderOutput = () => {
        if (typeof output === 'string' || Array.isArray(output)) {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
    
            const convertToLink = (text) => {
                return text.replace(urlRegex, url => `<a style="color: lightblue" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
            };
    
            if (Array.isArray(output)) {
                return <ul>{output.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: convertToLink(item) }}></li>)}</ul>;
            } else {
                return <div dangerouslySetInnerHTML={{ __html: convertToLink(output) }}></div>;
            }
        }
    };

    return (
        <div className="terminal-output">
            <div className="command">{`> ${command}`}</div>
            {renderOutput()}
        </div>
    );
}

export default TerminalOutput;
