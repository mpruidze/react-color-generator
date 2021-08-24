import React, { useState } from "react";
import Values from 'values.js';
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#cc348a').all(10))

  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
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
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='color'
          value={color}
          placeholder='#cc348a'
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit' >generate</button>
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
