import React, { useReducer } from 'react'
//Use: complex state management.
//types: Array and object can be manage more flexible

const reducer=(state,action)=>{
 switch(action.type){
    case "INC":
        return {count:state.count+1}
    case "DEC":
        return {count:state.count-1}
    default:
        return state
 }
}

const Usereducer = () => {

const [state,dispatch] =useReducer(reducer,{count:0})

  return (
      <div>
        <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
        {state.count}
        <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
    </div>
  )
}

export default Usereducer