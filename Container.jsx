import React from 'react'
import style from './Container.module.css'
function Container({handler}) {

    const arr = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={style.container}>
        {
            arr.map(b=> <button className={style.button} onClick={(e)=>handler(b)}>{b}</button>
        )
        }
    </div>

  )
}

export default Container