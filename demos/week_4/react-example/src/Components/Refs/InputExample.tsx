import React, { MutableRefObject, useRef } from 'react'

const InputExample = () => {

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Focus the Input</button>
    </div>
  )
}

export default InputExample