import React from 'react'

/*
  TipButton
  --------------------------------------------------
  - Represents a single preset tip percentage (5%, 10%, etc.)
  - When clicked:
      • Sends its value to handleUserInput()
      • Highlights itself via Tailwind + JS logic in App.jsx
*/

export const TipButton = ({ value, handleUserInput }) => {
  return (
    <button
      className="
        tip-button
        bg-purple-900 hover:bg-purple-700
        text-xl font-bold text-purple-50
        p-3 rounded cursor-pointer
      "
      value={value}
      onClick={(e) => handleUserInput(e, 'tip')}
    >
      {value + '%'}
    </button>
  )
}
