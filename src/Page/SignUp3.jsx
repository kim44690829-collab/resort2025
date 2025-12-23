import '../Page/SignUp3.css';
import { useState, useEffect, useContext } from 'react';
import { ResortDateContext } from '../Api/ResortDate';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp3(){
    // 핸드폰 데이터 3개 합친 변수
    const {userNumFront, userNumBack} = useContext(ResortDateContext);
    // 회원가입 form에 들어가는 상태변수
    // 이메일
    const [userMail, setUserMail] = useState('');
    // 비밀번호
    const [userPw, setUserPw] = useState('');
    // 비밀번호 확인
    const [userPwConfirm, setUserPwConfirm] = useState('');
    // 생일
    const [BirthYear, setBirthYear] = useState('');
    const [BirthMonth, setBirthMonth] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    
    // 성별
    const [userGender, setUserGender ] = useState('');
    // 닉네임
    const [nickname, setNickname] = useState('');
    // 마우스 변경
    const [mouseCursor, setMouseCursor] = useState(false);

    // submit 함수 생성
    const signup = async (e) => {
        e.preventDefault();
        // 생일을 하나로 합쳐서 DB에 보내기 위한 변수
        // padStart => 앞쪽을 특정 문자로 채워서 원하는 길이로 맞추는 기능 
        // padStart(총 길이, 채울 문자열) => 총길이는 2인데 부족하면 0으로 채워라 라는 의미
        const userBirth = `${BirthYear}-${BirthMonth.padStart(2,'0')}-${BirthDate.padStart(2,'0')}`;
        const userPhone = `010${userNumFront}${userNumBack}`;
        try{
            const res = await axios.post('http://localhost/resort2025/backend/api/signup.php',
                {
                    step: 3,                 // 서버에서 단계 구분
                    userEmail: userMail,
                    userPw: userPw,
                    userGender: userGender,
                    userPhone: userPhone,    // signup2에서 받은 값
                    userBirth: userBirth,
                    nickname: nickname
                }
            )
            if(res.data.status === "success"){
                setSignupModalOpen(true);
                setUserMail('');
                setUserPw('');
                setUserPwConfirm('');
                setBirthYear('');
                setBirthMonth('');
                setBirthDate('');
                setUserGender('');
                setNickname('');
            }else{
                console.log(res.data);
                alert(res.data.message || '회원 가입 실패');
            }
        }catch(error){
            console.log("에러", error);
            alert("서버 연결 오류")
        }
    }


    // 회원가입 폼에서 조건을 만족하지 못했을때 확인버튼 비활성화
    const [isDisabledSignup, setIsDisabledSignup] = useState(true);
    // 회원가입 폼의 모든 작성이 종료된 후 확인버튼 클릭시 모달
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    // 회원가입 종료 후 모달 핸들러
    const modalHandeler = () => {
        setSignupModalOpen(!signupModalOpen);
    }


    // 
    const m = Number(BirthMonth);
    const d = Number(BirthDate);

    // 회원가입 시 버튼 활성화 조건
    useEffect(() => {
        if(
            userMail.includes('@') && 
            userMail.includes('.com') && 
            userPw.length >= 8 && 
            userPwConfirm === userPw && 
            BirthYear.length >= 4 && 
            (1 <= m && m <= 12) &&
            (1 <= d && d <= 31) &&
            userGender !== '' &&
            nickname.length >= 2){
                setIsDisabledSignup(false)
                setMouseCursor(true)
            }else{
                setIsDisabledSignup(true)
                setMouseCursor(false)
            }
    }, [userMail, userPw, userPwConfirm, BirthYear, BirthMonth, BirthDate, userGender, nickname])

    return(
        <div className='signup3_container'>
            <h1 className='signup3_title'>필수 정보 입력</h1>
            <h2 className='signup3_info'>가입을 위해 필수 정보를 입력해주세요</h2>
            {/* 회원가입 form */}
            <form className='signupForm' onSubmit={signup}>
                {/* 이메일 */}
                <div className='signup1'>
                    <label htmlFor="userEmail">이메일<span style={{color:'red'}}>*</span></label>
                    <input type="email" id='userEmail' name='userEmail' placeholder='abc@naver.com' value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
                </div>
                {/* 비밀번호 */}
                <div className='signup1'>
                    <label htmlFor="userpw">비밀번호<span style={{color:'red'}}>*</span></label>
                    <input type="password" id='userpw' name='userpw' placeholder='최소 8자 이상' value={userPw} onChange={(e) => setUserPw(e.target.value)} />
                </div>
                {/* 비밀번호 확인 */}
                <div className='signup1'>
                    <label htmlFor="pwConfirm">비밀번호 확인<span style={{color:'red'}}>*</span></label>
                    <input type="password" id='pwConfirm' name='pwConfirm' placeholder='위 비밀번호와 동일하게 입력해주세요' value={userPwConfirm} onChange={(e) => setUserPwConfirm(e.target.value)} />
                </div>
                {/* 생년월일 */}
                <div className='signup2'>
                    <label>생년월일<span style={{color:'red'}}>*</span></label><br/>
                    <div className='signup2_sub'>
                        <input type="text" id='birth_year' name='birth' placeholder='YYYY' value={BirthYear} onChange={(e) => setBirthYear(e.target.value)} maxLength="4" /> <span>/</span>
                        <input type="text" id='birth_month' name='birth' placeholder='MM' value={BirthMonth} onChange={(e) => setBirthMonth(e.target.value)} maxLength="2" /> <span>/</span>
                        <input type="text" id='birth_date' name='birth' placeholder='DD' value={BirthDate} onChange={(e) => setBirthDate(e.target.value)} maxLength="2" />
                    </div>
                </div>
                {/* 성별 */}
                <div className='signup3'>
                    <p className='signup3_gender'>성별<span style={{color:'red'}}>*</span></p>
                    <input type="radio" id='man' name='gender' value="0" checked={userGender === '0'} onChange={(e) => setUserGender(e.target.value)}  />
                    <label htmlFor='man'>남자</label>
                    <input type="radio" id='woman' name='gender' value="1" checked={userGender === '1'} onChange={(e) => setUserGender(e.target.value)} />
                    <label htmlFor='woman'>여자</label>
                </div>
                {/* 닉네임 */}
                <div className='signup4'>
                    <label htmlFor="nickname">닉네임<span style={{color:'red'}}>*</span></label>
                    <input type="text" id='nickname' name='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder='2글자 이상 적어주세요' />
                </div>
                {/* 버튼 */}
                <button type='submit' 
                className='signupBtn' 
                disabled={isDisabledSignup} 
                style={{
                    cursor: mouseCursor ? 'pointer' : 'not-allowed',
                    backgroundColor: mouseCursor ? '#42799b' : '#e7e7e7ff',
                    color: mouseCursor ? '#fff' : '#a5a5a5ff',
                    border:'none'
                    }}  >확인</button>
            </form>
            {/* 회원가입 종료 후 모달 */}
            {signupModalOpen && 
            <>
                <div className='overlay'></div>
                <div className='signupModal'>
                    <p className='p2'>감사합니다!</p>
                    <h1>회원가입이 완료되었습니다!</h1>
                    <p className='p1'>EcoStay로 오신걸 환영합니다!</p>
                    <Link to='/'>
                        <button type='button' 
                        onClick={modalHandeler} 
                        style={{color:'#fff', backgroundColor:'#42799b', border:'none', cursor:'pointer'}}
                        className='signupModalBtn'>홈으로</button>
                    </Link>
                </div> 
            </>
            }
        </div>
    )
}