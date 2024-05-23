import React from 'react'

// function Greet(){
//   return <h1>Hello Brijesh</h1>
// }

 const Greet = (props) => {     //props are immutable:It cannot be changed.
  console.log(props)
  return(
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
      </div>
  ) 
 }

export default Greet;