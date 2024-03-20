import React from 'react';

function TerminalOutput({ command, output }) {
    const renderOutput = () => {
        if (typeof output === 'string') {
            if (output.startsWith('http')) {
                return <a href={output} target="_blank" rel="noopener noreferrer">{output}</a>;
            }
            return <div>{output}</div>;
        } else if (Array.isArray(output)) {
            return <ul>{output.map((item, index) => <li key={index}>{item}</li>)}</ul>;
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
