import '../Page/SignUp2.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp2(){
    // 휴대폰 인증번호 전송 버튼 클릭 후 인증번호 나타나게하는 상태변수
    const [phoneVerificationCode, setPhoneVerificationCode] = useState(false);
    // 휴대폰 번호를 작성해야 인증번호 전송 버튼을 활성화하는 상태변수
    const [phoneNum, setPhoneNum] = useState(true);
    // 인증번호 상태변수
    const [VerificationCode, setVerificationCode] = useState('');
    // 버튼 비활성화
    const [isDisabled, setIsDisabled] = useState(true);
    // 휴대폰 번호 상태저장 변수
    const [userNumFront, setUserNumFront] = useState('');
    const [userNumBack, setUserNumBack] = useState('');

    useEffect(() => {
        if(userNumFront.length === 4 && userNumBack.length === 4){
            setPhoneNum(false)
        }else{
            setPhoneNum(true)
        }
    },[userNumFront, userNumBack])
    

    // 휴대폰 인증번호 전송버튼 클릭시 true로 변경하며 인증번호 input이 나타남
    const telBtnHandeler = () => {
        setPhoneVerificationCode(true);
    }

    // 인증번호가 if문에 만족하면 버튼 활성화
    const VerificationCodeHandeler = (e) => {
        const value = e.target.value;
        setVerificationCode(value)
        
        if(value === '1111' || value === '2222' || value === '3333' || value === '5555' || value === '6666'){
            setIsDisabled(false)
        }else{
            setIsDisabled(true)
        }
    }



    return(
        <div className='signup2_container'>
            <h1 className='signup2_title'>휴대폰 인증 </h1>
            <form className='tel_form'>
                <label>
                    휴대폰 번호<span style={{color:'red'}}>*</span></label>
                <div className='userPhone'>
                    <input type='text' id='usertel' name='usertel' value='010' disabled style={{color:'black'}}/> <span>-</span>
                    <input type='text' id='usertelFront' name='usertel' placeholder='1234' value={userNumFront} onChange={(e) => setUserNumFront(e.target.value)} /><span>-</span>
                    <input type='text' id='usertelBack' name='usertel' placeholder='5678' value={userNumBack} onChange={(e) => setUserNumBack(e.target.value)} />
                </div>
                {phoneVerificationCode &&
                    <>
                        <label htmlFor="smsCode">
                            인증번호<span style={{color:'red'}}>*</span></label>
                        <input type='text' id='smsCode' name='smsCode' placeholder='인증번호 4자리' value={VerificationCode} onChange={VerificationCodeHandeler} />
                    </>
                }
                
                {phoneVerificationCode ?
                <Link to='/signup3'>
                    <button type='button' className='telBtn' disabled={isDisabled}>확인</button>
                </Link>
                : 
                <button type='submit' className='telBtn' onClick={telBtnHandeler} disabled={phoneNum}>인증번호 전송</button>}
            </form>
        </div>
    )
}