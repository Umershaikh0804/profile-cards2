import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCards2 from './components/ProfileCards2';

function App(){
  const[mainState,setMainState]=useState("I am from app.js component");
  return(
    <div className="App">
       <div>
        <b><h1>Employee Details</h1></b>
        <div style={{padding:"14px",flexWrap:"wrap"}}>
          <ProfileCards2  mainState={mainState} />
          </div>
       </div>
</div>
)
}

export default App;