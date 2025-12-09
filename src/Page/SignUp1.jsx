import '../Page/SignUp1.css';
import { Link } from 'react-router-dom';

export default function SignUp1(){
    return(
        // 이용약관 동의 페이지
        <div className="signup_container">
            <h1>저희 EcoStay를 찾아와 주셔서 감사합니다! <br/>
                약관에 동의를 부탁드립니다!</h1>
            {/* 이용약관 form */}
            <form className='agreeForm'>
                {/* 이용약관 전체 동의 */}
                <input type="checkbox" id='agreeAllTerms' name='agreeAll' />
                <label htmlFor="agreeAllTerms">약관 전체동의</label>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeTermsOfService' name='agreeTOS' />
                        <label htmlFor="agreeTermsOfService">(필수) 이용약관</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='confirmAgeOver14' name='age14' />
                        <label htmlFor="confirmAgeOver14">(필수) 만 14세 이상 확인</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreePrivacyPolicy' name='agreePrivacy' />
                        <label htmlFor="agreePrivacyPolicy">(필수) 개인정보 수집 및 이용 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeOptionalPrivacy' name='optPrivacy' />
                        <label htmlFor="agreeOptionalPrivacy">(선택) 개인정보 수집 및 이용 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeMarketingNotifications' name='marketingOk' />
                        <label htmlFor="agreeMarketingNotifications">(선택) 마케팅 알림 수신 동의</label>
                    </div>    
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeLocationService' name='locService' />
                        <label htmlFor="agreeLocationService">(선택) 위치기반 서비스 이용약관 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <Link to='/SignUp2'>
                    <button type="submit" className='agreeBtn'>다음</button>
                </Link>
            </form>
        </div>
    )
}