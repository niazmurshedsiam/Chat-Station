import React from 'react';
import Chat from './Chat';
import './IMessage.css';
import Sidebar from './Sidebar';
const IMessage = () => {
    return (
        <div className="imessage">
            <Sidebar></Sidebar>
            <Chat></Chat>
        </div>
    );
};

export default IMessage;