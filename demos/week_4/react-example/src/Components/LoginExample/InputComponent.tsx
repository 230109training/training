import React from 'react'
const InputComponent = (props: any) => {
  return (
        <input onChange={props.inputHandler} type={props.type} placeholder={props.placeholder} name={props.name} required={props.required}/>
  )
}

export default InputComponent