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