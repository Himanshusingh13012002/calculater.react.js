import React from 'react'
import style from './Display.module.css'
function Display({tab}) {
  return (
    <input type="text" className={style.display} value={tab}  readOnly/>

  
  )
}

export default Display