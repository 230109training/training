import React, { ChangeEventHandler } from 'react'
interface Props{
    name: string;
    type: string;
    onChange: ChangeEventHandler
}
const ValidatedField = (props: Props) => {
  return (
    <>
        {/* <input type="text" name="name" onChange={validateName}></input> */}
        <label>{props.name}</label>
        <input type={props.type || "text"} onChange={props.onChange}></input>
    </>
  )
}

export default ValidatedField