import React, { useState } from "react";
import "./Addtocart.css";

function Addtocart() {
  let [cart, setcart] = useState([]);
  console.log(cart);
  let [state, setstate] = useState([
    {
      name: "mari",
      age: "24",
      Qty: "1",
    },

    {
      name: "selvam",
      age: "43",
      Qty: "1",
    },

    {
      name: "vel",
      age: "90",
      Qty: "1",
    },

    {
      name: "alpance",
      age: "55",
      Qty: "1",
    },
  ]);
  function car(param) {
    let a = cart;
    const x = a.includes(param);
    console.log(x);
    if(x==false){
        setcart([...cart,param])
    }
   else{
    Add(param)
   }
  }

  function Add(item){
    // let inc=cart.Qty
    // let final=inc+1
    // setcart(...final);
    console.log(item);
    if(item.Qty>0){
        item.Qty++
        setcart([...cart])

    }
    

  }

  function remove(id) {
    // let a = cart.filter((item, i) => {
    //   return i != id;
    // });
    // setcart(a);
    console.log(id);
    
    setcart(cart.filter((param)=>param.age !== id.age))
  }

  return (
    <div className="container">
      {state.map((param) => (
        <div>
          <h2> {param.name}</h2>
          <div className="head">
            <h1>{param.age}</h1>
            <button onClick={() => car(param)}>Click</button>
          </div>
        </div>
      ))}

      {cart.map((item, index) => (
        <div>
          {item.name}
          <div>
            {item.age}
            <div>{item.Qty}</div>
            <button onClick={() => remove(item)}>Remove</button>
            <button onClick={()=>Add(item)}>+</button>
            <button>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Addtocart;
