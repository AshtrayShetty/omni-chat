import React from 'react';
import MessageInputStyles from './Nav.module.css';

const MessageInput=()=>{
    return(
        <div className={MessageInputStyles.messageInput}>
            <textarea className={MessageInputStyles.textBox}/>
            <div className={MessageInputStyles.formatOptions}>
                <ul>
                    <li>F</li>
                    <li style={{fontWeight: 'bolder', fontFamily: 'Times New Roman'}}>B</li>
                    <li style={{fontStyle: 'italic', fontFamily: 'Times New Roman'}}>I</li>
                    <li style={{textDecoration: 'line-through'}}>S</li>
                </ul>
                <ul>
                    <li>@</li>
                    <li>E</li>
                    <li>Send</li>
                </ul>
            </div>
        </div>
    );
}

export default MessageInput;