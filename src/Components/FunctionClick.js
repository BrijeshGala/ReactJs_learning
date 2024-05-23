import React from 'react'

function FunctionClick() {

  function clickHandler(){ //Event Handler
    console.log("Button Clicked")
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button> 
    </div>
  )
}

export default FunctionClick
