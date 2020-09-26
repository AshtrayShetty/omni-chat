import React from 'react';
import VerifyStyles from './Login.module.css';
import axios from 'axios';

const Verify=()=>{

    const resendVerification=(e)=>{
        e.preventDefault();
        axios.post(
            'http://localhost:80/query-or-mutation',
            {
                'query': `mutation EmailEmailAddressVerification($emailAddress: String!){
                    emailEmailAddressVerification(emailAddress: $emailAddress)
                }`,
                'variables': {
                    'emailAddress': 'ashrayshetty09@gmail.com'
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }

    return(
        <div id={VerifyStyles.loginMain}>
            <div className={VerifyStyles.formDiv} id={VerifyStyles.verifyDiv}>
                <span>Please Enter Your Verification Code</span>
                <form>
                    <input type="text" />
                    <input type="submit" value="Verify" id={VerifyStyles.loginBtn} style={{backgroundColor: '#7289DA', top: '1vh'}} />
                </form>
                <span id={VerifyStyles.resend}>
                    Didn't get the code? <a href="#" onClick={resendVerification}>Resend code</a>
                </span>
            </div>
        </div>
    );
}

export default Verify;