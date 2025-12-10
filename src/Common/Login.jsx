import '../Common/Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Login(){
    // 이메일, 비밀번호 저장 상태변수
    const [emailInput, setEmailInput] = useState('')
    const [pwInput, setPwInput] = useState('')
    const [isDisabledLogin, setIsDisabledLogin] = useState(true);

    // 이메일, 비밀번호 onchange
    const emailHandeler = (e) => {
        const emailValue = e.target.value
        setEmailInput(emailValue)
    }
    const pwHandeler = (e) => {
        const pwValue = e.target.value
        setPwInput(pwValue)
    }

    useEffect(() => {
        // const emailCondition =( emailInput.includes('@') + emailInput.includes('.com'));
        const pwCondition = pwInput.length > 7;

        if( emailInput.includes('@') && emailInput.includes('.com') && pwCondition){
            setIsDisabledLogin(false)
        }else(
            setIsDisabledLogin(true)
        )
    },[emailInput, pwInput])


    return(
        <div className="Login_container">
            <h2 className='Login_title'>이메일로 시작하기</h2>
            <form>
                <div className='login_form'>
                    <label htmlFor="userEmail">
                        이메일<span style={{color:'red'}}>*</span>
                    </label>

                    <input type="email" 
                    id="userEmail" 
                    name="userEmail" 
                    placeholder='abc@naver.com'
                    value={emailInput}
                    onChange={emailHandeler}
                    />
                    <label htmlFor="userPw">
                        비밀번호<span style={{color:'red'}}>*</span>
                    </label>
                    <input type="password" 
                    id="userPw" 
                    name="userPw" 
                    placeholder='비밀번호를 입력하세요'
                    value={pwInput}
                    onChange={pwHandeler}
                    />
                    <div className='remember'>
                        <div className='remember_left'>
                            <input type="checkbox" id="rememberMail" name='rememberMail' />
                            <label htmlFor="rememberMail">이메일 저장</label>
                        </div>
                        <button type="button" className='remember_right'>비밀번호 재설정</button>
                    </div>
                    <button type="submit" className='LoginBtn' disabled={isDisabledLogin} >로그인</button>
                </div>
            </form>
            <div className='SignUpGo'>
                <p>계정이 없으신가요?</p>
                <Link to='/signup1'>
                    <button type="button" className='EmailSignUp'>이메일로 회원가입</button>
                </Link>
            </div>
        </div>
    )
}