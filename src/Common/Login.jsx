import '../Common/Login.css';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div className="Login_container">
            <h2>이메일로 시작하기</h2>
            <form>
                <div className='login_form'>
                    <label htmlFor="userEmail">
                        이메일<span style={{color:'red'}}>*</span>
                    </label>
                    <input type="email" 
                    id="userEmail" 
                    name="userEmail" 
                    placeholder='abc@naver.com'
                    />
                    <label htmlFor="userPw">
                        비밀번호<span style={{color:'red'}}>*</span>
                    </label>
                    <input type="password" 
                    id="userPw" 
                    name="userPw" 
                    placeholder='비밀번호를 입력하세요'
                    />
                    <div className='remember'>
                        <div className='remember_left'>
                            <input type="checkbox" id="rememberMail" name='rememberMail' />
                            <label htmlFor="rememberMail">이메일 저장</label>
                        </div>
                        <button type="button" className='remember_right'>비밀번호 재설정</button>
                    </div>
                    <button type="submit" className='LoginBtn'>로그인</button>
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