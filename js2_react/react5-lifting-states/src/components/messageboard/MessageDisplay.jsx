import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend> MessageDisplay.jsx</legend>
        <div>
                <h1> Message History</h1>
                {
                    props.msgList.map((eachMsg, idx)=>{
                        return (
                            <pre key={idx} style={{color: eachMsg}}> {eachMsg}</pre>
                        )
                    })
                }
            </div>        
    </fieldset>
  )
}

export default MessageDisplay