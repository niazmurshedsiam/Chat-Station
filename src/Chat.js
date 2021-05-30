import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Chat.css';
import MicNoneIcon from "@material-ui/icons/MicNone";
const Chat = () => {
    const [input,setInput] = useState("");
    const sendMessage = e =>{
        e.preventDefault();
        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">Channel Name</span></h4>
                <strong>Detail</strong>
            </div>
            <div className="chat_messages">
                <h2>I am a message</h2>
                <h2>I am a message</h2>
                <h2>I am a message</h2>
                <h2>I am a message</h2> 
            </div>
            <div className="chat_input">
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Text" type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon></MicNoneIcon>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;