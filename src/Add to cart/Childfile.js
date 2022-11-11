import React,{useState} from 'react'

function Childfile() {
    const[update,setupdate]=useState([])
    console.log(update);

    const[state,setstate]=useState([
        {
            id:'999',
            name:"chitty"
        },

        {
            id:'888',
            name:"lion"
        },

        {
            id:'777',
            name:"Tiger"
        },

        {
            id:'555',
            name:"Elephanent"
        },

        {
            id:'444',
            name:"Chettach"
        },
    ])

    function upt(param){
        let a=update;
        const x=a.includes(param)
        console.log(x);
        if(x==false){
            setupdate([...update,param])

        }
        
        
       
        
    }




  return (
    <div>
       {state.map((item)=>
       <div>{item.id}
       <div>
        {item.name}
        </div>
        <button onClick={()=>upt(item)}>Updated</button>
       </div>

    
       )}

       { update.map((param)=>
       <div>{param.id}
       <div>
        {param.name}
        </div>
        <div>
            <button>trigger</button>
        </div>
       
       </div>
       
       )} 
    </div>
  )
}

export default Childfile