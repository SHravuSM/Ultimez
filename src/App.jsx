import React, { useState } from 'react'

export default function App() {

  const [Even, setEven] = useState([])
  const [Odd, setOdd] = useState([])
  const [number, setNumber] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number % 2 == 0) {
      setEven((pre) => [...pre, number])
    }
    else {
      setOdd((pre) => [...pre, number])
    }
  }

  return (
    <div className="container">
      <h1>Even & Odd Number Sorter</h1>

      <form onSubmit={handleSubmit} className="number-form">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="lists">
        <div className="even-list">
          <h2>Even Numbers</h2>
          <ul>
            {Even.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
        </div>

        <div className="odd-list">
          <h2>Odd Numbers</h2>
          <ul>
            {Odd.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}