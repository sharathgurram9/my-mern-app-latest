import React from "react"


const DisplayMessage = (props) =>{
    const message=props.message

    return(
        <h1>This is the message from parent component:{message}</h1>
    )
    
}

export default DisplayMessage;