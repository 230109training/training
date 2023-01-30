import React, { SyntheticEvent } from 'react'

const EventsDemo = () => {

    /**
     * To add a function to an event, you have to add the function to the event
     * Inside the tag that you want to attach it to
     * 
     * onClick = {}
     *  - using the {} to include the name of the function to be called
     *  - Do not use parenthesis for the name of the function
     *  - This will be called each time the event is triggered
     * 
     */
    function clickEventTriggered(event: SyntheticEvent){
        console.log("I have been clicked");
    }

    function hoverEventTriggered(event: SyntheticEvent){
        console.log("I have been hovered");
    }

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>): void{
        console.log(event.target.value);
    }

  return (
    <>
        <button onClick={clickEventTriggered}>Click Event</button>
        <button onMouseOver={hoverEventTriggered}>Hover Event</button>
        <input type="text" placeholder="name" onChange={inputChanged}/>
    </>
  )
}

export default EventsDemo