import '../Page/SignUp2.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp2(){
    const [phoneVerificationCode, setPhoneVerificationCode] = useState(false);

    const telBtnHandeler = () => {
        setPhoneVerificationCode(true);
    }


    return(
        <div className='signup2_container'>
            <h1>휴대폰 인증 </h1>
            <form className='tel_form'>
                <label htmlFor="usertel">
                    휴대폰 번호<span style={{color:'red'}}>*</span></label>
                <input type='tel' id='usertel' name='usertel' placeholder='01012345678' />
                {phoneVerificationCode &&
                    <>
                        <label htmlFor="smsCode">
                            인증번호<span style={{color:'red'}}>*</span></label>
                        <input type='num' id='smsCode' name='smsCode' placeholder='인증번호 4자리' />
                    </>
                }
                
                {phoneVerificationCode ?
                <Link to='/signup3'>
                    <button type='button' className='telBtn'>확인</button> 
                </Link>
                : 
                <button type='submit' className='telBtn' onClick={telBtnHandeler}>인증번호 전송</button>}
            </form>
        </div>
    )
}