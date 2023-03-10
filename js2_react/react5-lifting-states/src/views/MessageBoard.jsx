import React, {useState} from 'react'
import MessageDisplay from '../components/messageboard/MessageDisplay'
import MessageForm from '../components/messageboard/MessageForm'

const MessageBoard = () => {
    // to keep track of the sent messages : at parent component 
    const [msgList, setMsgList] = useState([])

    const receiveMessage = (newMessage)=>{
        setMsgList([...msgList, newMessage])
    }

    return (
        <fieldset>
            <legend> MessageBoard.jsx</legend>
            <h1> Message Board</h1>
            <MessageForm handleSentMessage={receiveMessage}/>
            <MessageDisplay  msgList = {msgList} />
        </fieldset>
    )
}

export default MessageBoard