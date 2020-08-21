import React from 'react';
import memberStats from './UserStats.module.css'

const Member=(props)=>{
    return(
        <div className={memberStats.member}>
            <span style={{fontSize: '1.1rem', fontWeight:'700'}}>#</span>
            <span>{props.firstName} {props.lastName}</span>
        </div>
    );
}

export default Member;