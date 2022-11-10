import React,{useState} from 'react';


function Addtocart() {
    let[cart,setcart]=useState([]);
    console.log(cart);
    let[state,setstate]=useState( [
        {
            name:"mari",
            age:"24"
        },

        {
            name:"selvam",
            age:"43"
        },

        {
            name:"vel",
            age:"90"
        },

        {
            name:"alpance",
            age:"55"
        }
    ])
    function car(param){
        setcart([...cart,param])
        
    }

    function remove(id)
    {
 let a=cart.filter((item,i)=>{
    return i!=id
    });
 setcart(a)
    }
   
  
  return (
    <div>
        <h1>mari</h1>
        

        </div>
        
        
        )}
        export default Addtocart;

        

        