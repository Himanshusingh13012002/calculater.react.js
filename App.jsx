import style from './App.module.css'; // Importing CSS module
import Display from './Display';
import Container from './Container';
import { useState } from 'react';
function App() {

   const [tab,settab] =useState("");

   const handler=(b)=>{
    if(b=='='){
      settab(eval(tab))
    

    }

    else if(b=='C'){
      settab("");

    }
    else{
      settab(tab+b)

    }
  

   }

  return (
    <>
      <div className={style.calculator}> {/* Corrected class name to "calculator" */}
        
        <Display tab={tab}></Display>
        <Container handler={handler}></Container>

        </div>
       
    </>
  );
}

export default App;
