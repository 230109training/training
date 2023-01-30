import React from 'react'
import './BasicComponent.css';
// A component is a function that returns JSX
// This is used to render onto the dom by React
function BasicComponent() {

  return (
    <>
    <div className='comp-one'>Hello From Basic Component</div>
    <h1>Code</h1>
        <pre style={{
            textAlign: "left",
            backgroundColor: "black",
            color: "white"
        }}>
{
`
import React from 'react'
import './BasicComponent.css';
// A component is a function that returns JSX
// This is used to render onto the dom by React
function BasicComponent() {

  return (
    <div className='comp-one'>Hello From Basic Component</div>
  )
}

export default BasicComponent
`
}
        </pre>
    </>
  )
}

export default BasicComponent