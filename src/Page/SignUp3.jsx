import '../Page/SignUp3.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp3(){
    const [userMail, setUserMail] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userPwConfirm, setUserPwConfirm] = useState('');
    const [BirthYear, setBirthYear] = useState('');
    const [BirthMonth, setBirthMonth] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    const [userId, setUserId] = useState('');
    // 마우스 변경
    const [mouseCursur, setMouseCursur] = useState(false);


    // 회원가입 폼에서 조건을 만족하지 못했을때 확인버튼 비활성화
    const [isDisabledSignup, setIsDisabledSignup] = useState(true);
    // 회원가입 폼의 모든 작성이 종료된 후 확인버튼 클릭시 모달
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    const modalHandeler = () => {
        setSignupModalOpen(!signupModalOpen);
    }

    useEffect(() => {
        if(
            userMail.includes('@') && 
            userMail.includes('.com') && 
            userPw >= 8 && 
            userPwConfirm === userPw && 
            BirthYear.length >= 4 && 
            (1 <= BirthMonth && BirthMonth <= 12 ) && 
            ( 1 <= BirthDate && BirthDate <= 31) &&
            userId.length >= 2){
                setIsDisabledSignup(false)
                setMouseCursur(true)
            }else{
                setIsDisabledSignup(true)
                setMouseCursur(false)
            }
    }, [userMail, userPw, userPwConfirm, BirthYear, BirthMonth, BirthDate, userId])

    return(
        <div className='signup3_container'>
            <h1 className='signup3_title'>필수 정보 입력</h1>
            <h2 className='signup3_info'>가입을 위해 필수 정보를 입력해주세요</h2>
            <form className='signupForm'>
                <div className='signup1'>
                    <label htmlFor="userEmail">이메일<span style={{color:'red'}}>*</span></label>
                    <input type="email" id='userEmail' name='userEmail' placeholder='abc@naver.com' value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
                </div>
                <div className='signup1'>
                    <label htmlFor="userpw">비밀번호<span style={{color:'red'}}>*</span></label>
                    <input type="password" id='userpw' name='userpw' placeholder='최소 8자 이상' value={userPw} onChange={(e) => setUserPw(e.target.value)} />
                </div>
                <div className='signup1'>
                    <label htmlFor="pwConfirm">비밀번호 확인<span style={{color:'red'}}>*</span></label>
                    <input type="password" id='pwConfirm' name='pwConfirm' placeholder='위 비밀번호와 동일하게 입력해주세요' value={userPwConfirm} onChange={(e) => setUserPwConfirm(e.target.value)} />
                </div>
                <div className='signup2'>
                    <label>생년월일<span style={{color:'red'}}>*</span></label><br/>
                    <div className='signup2_sub'>
                        <input type="text" id='birth_year' name='birth' placeholder='YYYY' value={BirthYear} onChange={(e) => setBirthYear(e.target.value)} /> <span>/</span>
                        <input type="text" id='birth_month' name='birth' placeholder='MM' value={BirthMonth} onChange={(e) => setBirthMonth(e.target.value)} /> <span>/</span>
                        <input type="text" id='birth_date' name='birth' placeholder='DD' value={BirthDate} onChange={(e) => setBirthDate(e.target.value)} />
                    </div>
                </div>
                <div className='signup3'>
                    <p className='signup3_gender'>성별<span style={{color:'red'}}>*</span></p>
                    <input type="radio" id='man' name='gender' defaultChecked />
                    <label htmlFor='man'>남자</label>
                    <input type="radio" id='woman' name='gender' />
                    <label htmlFor='woman'>여자</label>
                </div>
                <div className='signup4'>
                    <label htmlFor="userid">닉네임<span style={{color:'red'}}>*</span></label>
                    <input type="text" id='userid' name='userid' value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='2글자 이상 적어주세요' />
                </div>
                <button type='button' className='signupBtn' onClick={modalHandeler} disabled={isDisabledSignup} style={{cursor: mouseCursur ? 'pointer' : 'not-allowed'}}  >확인</button>
            </form>
            {signupModalOpen && 
            <>
                <div className='overlay'></div>
                <div className='signupModal'>
                    <p className='p2'>감사합니다!</p>
                    <h1>회원가입이 완료되었습니다!</h1>
                    <p className='p1'>EcoStay로 오신걸 환영합니다!</p>
                    <Link to='/'>
                        <button type='button' onClick={modalHandeler} className='signupModalBtn'>홈으로</button>
                    </Link>
                </div> 
            </>
            }
        </div>
    )
}