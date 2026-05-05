import React from 'react'

/*
  FormInput
  --------------------------------------------------
  - Reusable input component for:
      • Bill
      • Number of people
      • Any numeric field
  - Supports:
      • Custom label (currency or icon)
      • Caret repositioning
      • Unified input handler
*/

export const FormInput = ({
  heading,
  label,
  id,
  value,
  handleUserInput,
  moveCaretAtEnd
}) => {
  return (
    <div className="relative">
      {/* Input heading (Bill, People, etc.) */}
      <h2 className="text-gray-500 mb-1">{heading}</h2>

      {/* Main input field */}
      <input
        className="
          bg-purple-100 block w-full rounded p-3 outline-0
          text-xl text-right font-bold text-purple-900
          hover:border-purple-400 focus:border-purple-400
          border-2 border-transparent
        "
        type="text"
        id={id}
        value={value}
        placeholder="0"
        onClick={moveCaretAtEnd}
        onChange={(e) => handleUserInput(e, id)}
      />

      {/* Label (currency symbol or icon) */}
      <label
        className="absolute bottom-4 left-4 text-gray-400 font-medium"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
