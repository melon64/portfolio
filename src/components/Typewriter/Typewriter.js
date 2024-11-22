import React, { useState, useEffect } from 'react'
import './Typewriter.css'


export default function Typewriter({ name }) {
  const [displayedName, setDisplayedName] = useState("F")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < name.length) {
        i++
        setDisplayedName((prev) => prev + name.charAt(i))
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 150) 

    return () => clearInterval(typingInterval)
  }, [name])

  return (
    <h1 className={`Home-h1 typewriter ${isTypingComplete ? 'typing-complete' : ''}`}>
      {displayedName}
    </h1>
  )
}

