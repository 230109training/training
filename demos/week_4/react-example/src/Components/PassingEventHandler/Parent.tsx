import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [variable, setVariable] = useState(true);

  return (
    <div>
        <Child variable={variable} setVariable={setVariable}/>
    </div>
  )
}

export default Parent