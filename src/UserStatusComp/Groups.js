import React from 'react';
import Member from './Member';
import groupStyle from './UserStats.module.css';

const Groups=(props)=>{
    return(
        <div>
            <div className={groupStyle.group}>
                <span>{props.title}</span>
                <button>+</button>
            </div>
            <div className={groupStyle.groupList}>
                <Member firstName={'Jeremy'} lastName={'Firow'}/>
                <Member firstName={'Mariuz'} lastName={'Jaders'}/>
                <Member firstName={'Emil'} lastName={'Anders'}/>
                <Member firstName={'Markus'} lastName={'Gavrilov'}/>
            </div>
        </div>
    );
}

export default Groups;