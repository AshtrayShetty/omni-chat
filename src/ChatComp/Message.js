import React from 'react';
import MessageStyles from './Nav.module.css';

const Message=(props)=>{
    return(
        <div className={MessageStyles.messageContainer}>
            <div className={MessageStyles.profilePic}>#</div>
            <div className={MessageStyles.messageDetails}>
                <p>
                    <span style={{color: 'white'}}>{props.authorFirst} {props.authorLast}</span>
                    <span className={MessageStyles.messageMeta}>. 12:49pm</span>
                </p>
                <p className={MessageStyles.message}>
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default Message;