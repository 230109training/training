import React from 'react'

const Child = ({variable, setVariable}: {variable: boolean, setVariable: any}) => {

    const toggleVisibility = () => {
        setVariable(!variable)
    }
  return (
    <div>
        {
            variable ? <h2>You can see me?</h2>: <></>
        }
        <button onClick={toggleVisibility}>Toggle</button>
    </div>
  )
}

export default Child