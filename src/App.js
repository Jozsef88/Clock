import React, { useState } from 'react';
import './App.css';

function App() {

  const [ currTime, setCurrTime ] = useState();

  const date = new Date();
  setInterval(() => {setCurrTime(date)}, 1000);
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  
  let pmHour = 1;
  if (hour > 12) {pmHour = 13};

  const redH = (h) => {return h === hour ? "red" : "grey"}
  const nums = [];
  for (let n = pmHour; n <= 11+pmHour; n++) {
    nums.push(<div key={n} style={{color: `${redH(n)}`, textShadow: `0 0 2px ${redH(n)}, 0 0 5px ${redH(n)}, 0 0 10px ${redH(n)}`, transform: `translateX(-50%) rotate(${n*30}deg)`}} className="number">{n}</div>); 
  }
  const redM = (m) => {return m <= minute ? "red" : "rgba(0,0,0,0)"}
  const dots = [];
  for (let n = 1; n <= 59; n++) {
    dots.push(<div key={n} style={{color: `${redM(n)}`, textShadow: `0 0 2px ${redM(n)}, 0 0 5px ${redM(n)}, 0 0 10px ${redM(n)}`, transform: `translateX(-50%) rotate(${n*6}deg)`}} className="dots">.</div>);  
  }
  const redS = (s) => {return s === second ? "red" : "rgba(0,0,0,0)"}
  const secDots = [];
  for (let n = 0; n <= 59; n++) {
    secDots.push(<div key={n} style={{color: `${redS(n)}`, textShadow: `0 0 2px ${redS(n)}, 0 0 5px ${redS(n)}, 0 0 10px ${redS(n)}`, transform: `translateX(-50%) rotate(${n*6}deg)`}} className="sec-dots">|</div>);  
  }
  return (
    <div className="App">
      <div className="wrapper">
        {nums}
        {dots}
        {secDots}
      </div>
    </div>
  );
}

export default App;
