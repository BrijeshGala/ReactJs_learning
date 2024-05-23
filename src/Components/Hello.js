// import React from "react"

// const Hello = () => { //Using JSX method.
//   return (
//     <div className='dummyClass'>
//       <h1>Hello Brijesh</h1>
//     </div>
//   )
// } 
// export default Hello;

import React from "react"

const Hello = () => {     //without JSX
  return React.createElement("div", {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Brijesh'))
}

export default Hello;
