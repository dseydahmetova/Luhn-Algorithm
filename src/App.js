import './App.css';
import { useState, useEffect } from 'react';
import { CardCheck } from './CardCheck'


function App() {
  let [input, setInput] = useState('')

  function handleOnChange(e) {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(e.target.value)
    }
  }

  useEffect(() => {
    CardCheck(input)
  }, [input])


  return (
    <form className="App">
      <h1>The Luhn Algorithm</h1>
      <div className='examples'>
        <p>1234567890123456 //should be false</p>
        <p>4408041234567893 //should be true</p>
        <p>4222222222222 //should be true </p>
      </div>

      <input value={input} maxLength="16" onChange={handleOnChange} placeholder="Enter your card number" />
      {
        CardCheck(input) && input.length > 0 ?
          (<h2 className="result">Card Number is Valid</h2>) :
          (<h2 className="result">Card Number is NOT Valid</h2>)
      }
    </form>
  );
}

export default App;
