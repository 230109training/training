import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const ParentComponent : React.FC= () => {
    // To send data to the child component, we use attributes inside the element itself
    // The lines will be red until you put the props item in the child component
  return (
    <>
    <div className='parent-component'>
        <ChildComponent message={"hello there"}/>   
        <ChildComponent message={"I am red"} bgColor="red" isRound={false}/>
        <ChildComponent message={"I am round"} bgColor="lightblue" isRound={true}/>
    </div>
      <h1>Code</h1>
      <h2>Parent Component</h2>
        <pre style={{
            textAlign: "left",
            backgroundColor: "black",
            color: "white"
        }}>
{
`
import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const ParentComponent : React.FC= () => {
    // To send data to the child component, we use attributes inside the element itself
    // The lines will be red until you put the props item in the child component
  return (
    <div className='parent-component'>
        <ChildComponent message={"hello there"}/>   
        <ChildComponent message={"I am red"} bgColor="red" isRound={false}/>
        <ChildComponent message={"I am round"} bgColor="lightblue" isRound={true}/>
    </div>
    )
}

export default ParentComponent
`
}
        </pre>
        <h2>Child Component</h2>
        <pre style={{
            textAlign: "left",
            backgroundColor: "black",
            color: "white"
        }}>
{
`
import React from 'react'

interface StyleProps{
    bgColor?: string;
    isRound?: boolean;
    message?: string;
}

const ChildComponent: React.FC<StyleProps> = (props: StyleProps) => {
    /**
     * Styles can be applied in line by passing an object into the style attribute
     * CSS names are camel case instead of their usual names
     */
  return (
    <button style={{
        backgroundColor: props.bgColor,
        color: "white",
        border: "none",
        borderRadius: props.isRound ? "6px" : "0px",
        padding: "8px",
        fontSize: "20px"
    }}>{props.message}</button>
  )
}

export default ChildComponent
`
}
        </pre>
    </>
  )
}

export default ParentComponent