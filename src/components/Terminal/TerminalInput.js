import React, { useState } from 'react';
import './Terminal.css';

function TerminalInput({ input, setInput, onCommand, commandList }) {
    const [suggestions, setSuggestions] = useState([]);

    const handleInput = event => {
        const userInput = event.target.value;
        setInput(userInput);
        const filteredSuggestions = commandList.filter(command => command.startsWith(userInput));
        setSuggestions(filteredSuggestions);
    };

    const handleKeyDown = event => {
        if (event.key === 'Tab' && suggestions.length > 0) {
            event.preventDefault();  // Prevent the default tab behavior
            setInput(suggestions[0]);  // Set the input to the first suggestion
            setSuggestions([]);  // Clear suggestions after selection
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        onCommand(input);
        setInput('');
        setSuggestions([]);
    };

    const autoCompleteText = suggestions.length > 0 ? suggestions[0].slice(input.length) : '';
    const inputLength = input.length;

    return (
        <div className="terminal-input-container">
            <form onSubmit={handleSubmit} className="terminal-input-form">
                <span className="prompt">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    className="terminal-input"
                    autoFocus
                />
                <span className="autocomplete-suggestion" style={{ paddingLeft: `${inputLength}ch` }}>
                    {autoCompleteText}
                </span>
            </form>
        </div>
    );
}

export default TerminalInput;
