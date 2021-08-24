import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);

  // const hexValue = rgbToHex(...rgb); // 1st solution
  // or i can directly use hex property 
  // and in this case i even don't need the function from 'utils.js'
  const hexValue = `#${hex}`; // 2nd solution

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `${hexValue}` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className="alert">copied to the clipboard</p>}
    </article >

  )
}

export default SingleColor
