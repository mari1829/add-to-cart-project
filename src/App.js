// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [update,setupdate]=useState([1,2,3,4]);
  // console.log(...update);
  console.log(update);
  function val (){
    setupdate([...update,9]);
  }
  
  return (
    <div>
      <input type="text"></input><button>Sumbit</button>
      {update.map((param)=>
      <div><h1>{param*2}</h1>
      <button onClick={()=>val()}>click</button>
      </div>
      )}

      {/* { {update.map((param)=>
      <div></div>
      )}
       }
{ 
        {update.map((param)=>
     <div><h1>{param*2}</h1></div>
       )} } */}
      
      

      
    </div>
  );
}

export default App;
