import React from 'react';
import MessagesView from './MessagesView';
import MessageInput from './MessageInput';
import LayoutStyles from './Nav.module.css';

const ChatRoom=()=>{
    return(
        <div className={LayoutStyles.mainLayout}>
            <MessagesView/>
            <MessageInput/>
        </div>
    );
}

export default ChatRoom;