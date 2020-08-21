import React from 'react';
import Member from './GroupInfo.module.css' 

const GroupMember=(props)=>{
    return(
        <div className={Member.participants}>
            <div style={{fontSize: '1.1rem', fontWeight:'700', paddingLeft: '0'}}>#</div> 
            <div>{props.firstName} {props.lastName}</div>
            {
                props.position!==""?<div><span className={Member.position}>{props.position}</span></div>:null
            }
            <div>G</div>
        </div>
    );
}

export default GroupMember;