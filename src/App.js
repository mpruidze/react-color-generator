import React, { useState } from "react";
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('gellow');
  }
  return <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='color'
          value={color}
          placeholder='#f15025'
          onChange={(e) => setColor(e.target.value)}
        />
        <button className='btn' type='submit' >generate</button>
      </form>
    </section>
    <section className="colors">
      <h4>list goes here</h4>
    </section>
  </>
}

export default App;
