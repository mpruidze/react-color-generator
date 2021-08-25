import React, { useState } from "react";
import Values from 'values.js';
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#cc348a').all(10))
  const [amount, setAmount] = useState('') // amount of colors

  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors
      if (amount) colors = new Values(color).all(100 / amount)
      else colors = new Values(color).all(10)
      console.log(colors)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }

  return <>
    <section className="container">
      <h3>color generator</h3>
      <form >
        <input type="text"
          name='color'
          value={color}
          placeholder='#cc348a'
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`}
        />

        <input type="number"
          name='amount'
          value={amount}
          placeholder='Number of tints/shades'
          min='1' max='100'
          onChange={(e) => {
            if (e.target.value > 0 && e.target.value <= 100) setAmount(e.target.value)
          }}
        />
        <button className='btn' type='submit' onClick={handleSubmit}>generate</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return (
          <SingleColor key={index} {...color} index={index} hex={color.hex} />
        )
      })}
    </section>
  </>
}

export default App;
