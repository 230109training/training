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