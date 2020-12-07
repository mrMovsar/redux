import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App(props) {
  const st = useSelector((state)=>{
    return state;
  });
  const dispatch = useDispatch();

  const handlePlus = () =>{
    dispatch({type: 'plus'})
  }
  return (
    <div>
      <div>
     Counter: {st}  
    </div>
    <div>
      <button onClick={handlePlus}>
        plus
      </button>
      <button onClick={()=>dispatch({type: 'minus'})}>
        minus
      </button>
      <button onClick={()=>dispatch({type: 'reset'})}>
        reset
      </button>
    </div>
    </div>
    
  );
}

export default App;
