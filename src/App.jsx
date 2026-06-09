import React, { useState } from 'react'
import { FormInput } from './components/FormInput'
import { TipButton } from './components/TipButton'

/*
  App — Tip Calculator
  --------------------------------------------------
  - Calculates:
      • Tip per person
      • Total per person
  - Manages:
      • Bill amount
      • Tip percentage
      • Number of people
  - Handles:
      • Tip button selection
      • Custom tip input
      • Reset functionality
*/

function App() {

  // Main state for all user inputs
  const [variables, setVariables] = useState({
    bill: '',
    tip: '',
    people: ''
  })

  // Calculations
  const tipPerson = (variables.bill * (variables.tip / 100)) / variables.people
  const totalPerson = (variables.bill / variables.people) + tipPerson

  // Move caret to end of input when clicked
  function moveCaretAtEnd(e) {
    const temp = e.target.value
    e.target.value = ''
    e.target.value = temp
  }

  /*
    Handle all user input:
    - Converts input to number
    - Prevents NaN values
    - Handles tip button highlighting
    - Handles custom tip clearing
  */
  function handleUserInput(e, key) {
    const input = e.target

    // Allow only numbers and up to 2 decimals
    if (key === 'bill') {
      input.value = input.value
        .toString()
        .replace(/[^0-9.]/g, '')       // remove non-numeric
        .replace(/(\..*)\./g, '$1')    // prevent more than one dot
        .replace(/(\.\d{2}).+/g, '$1') // limit to 2 decimals
    }

    // Force integers for custom tip
    if (key === 'tip') {
      input.value = input.value.replace(/[^0-9]/g, '') // only digits
    }
    // Force integers for number of people
    if (key === 'people') {
      input.value = input.value.replace(/[^0-9]/g, '') // only digits
    }

    // Tip button clicked
    if (input.classList.contains('tip-button')) {
      document.querySelector('#customTip').value = ''
      document.querySelectorAll('.tip-button').forEach(btn =>
        btn.classList.remove('!bg-purple-700')
      )
      input.classList.add('!bg-purple-700')
    }

    // Custom tip clicked
    if (input.id === 'customTip') {
      document.querySelectorAll('.tip-button').forEach(btn =>
        btn.classList.remove('!bg-purple-700')
      )
    }



    e.preventDefault()
    setVariables({ ...variables, [key]: input.value })
  }

  // Reset all values
  function handleReset() {
    setVariables({ bill: 0, tip: 0, people: 0 })
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-purple-200 font-electrolize p-5">
      <div>
        {/* Title */}
        <h1 className="text-center text-2xl text-purple-800 font-semibold tracking-[10px] uppercase m-10">
          Splitter
        </h1>

        {/* Main container */}
        <div className="lg:w-235 bg-purple-50 rounded-2xl lg:flex md:p-7 p-5 gap-7 shadow-2xl/30 ">

          {/* Left side — Inputs */}
          <form className="lg:w-1/2 lg:mb-0 mb-10">

            {/* Bill input */}
            <FormInput
              heading="Bill"
              id="bill"
              value={variables.bill}
              handleUserInput={handleUserInput}
              label="£"
              moveCaretAtEnd={moveCaretAtEnd}
            />

            {/* Tip selection */}
            <div className="md:my-10 my-5">
              <h2 className="text-gray-500 mb-1">Select Tip %</h2>

              <div className="grid grid-cols-3 gap-3">
                <TipButton value={5} handleUserInput={handleUserInput} />
                <TipButton value={10} handleUserInput={handleUserInput} />
                <TipButton value={15} handleUserInput={handleUserInput} />
                <TipButton value={20} handleUserInput={handleUserInput} />
                <TipButton value={25} handleUserInput={handleUserInput} />

                {/* Custom tip */}
                <input
                  id="customTip"
                  className="bg-purple-100 outline-0 rounded text-center text-purple-900 hover:border-purple-400 focus:border-purple-400 border-2 border-transparent"
                  onChange={(e) => handleUserInput(e, 'tip')}
                  onClick={moveCaretAtEnd}
                  type="text"
                  placeholder="Custom"
                />
              </div>
            </div>

            {/* People input */}
            <FormInput
              heading="Number of People"
              id="people"
              value={variables.people}
              handleUserInput={handleUserInput}
              moveCaretAtEnd={moveCaretAtEnd}
              label={<i className="fa-solid fa-user"></i>}
            />
          </form>

          {/* Right side — Results */}
          <div className="lg:w-1/2 bg-purple-800 rounded-xl md:p-7 p-5 flex flex-col justify-between">

            <div>
              {/* Tip per person */}
              <div className="flex justify-between mb-10">
                <div>
                  <p className="text-purple-50 md:text-lg text-sm">Tip Amount</p>
                  <p className="text-purple-400 text-sm">/ person</p>
                </div>
                <p className="md:text-5xl text-4xl text-purple-300 font-medium">
                  {isFinite(tipPerson) ? `£${tipPerson.toFixed(2)}` : '£0.00'}
                </p>
              </div>

              {/* Total per person */}
              <div className="flex justify-between">
                <div>
                  <p className="text-purple-50 md:text-lg text-sm">Total</p>
                  <p className="text-purple-400 text-sm">/ person</p>
                </div>
                <p className="md:text-5xl text-4xl text-purple-300 font-medium">
                  {isFinite(totalPerson) ? `£${totalPerson.toFixed(2)}` : '£0.00'}
                </p>
              </div>
            </div>

            {/* Reset button */}
            <button
              className="bg-purple-950 text-purple-100 hover:bg-purple-500 rounded w-full p-2 text-xl uppercase cursor-pointer lg:mt-0 mt-10"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
