import { useState, useEffect } from 'react';
import '../Page/SignUp1.css';
import { Link } from 'react-router-dom';

export default function SignUp1(){
    const [isDisabledAgree, setIsDisabledAgree] = useState(true);
    // 전체 동의 상태저장 변수
    const [allChecked, setAllChecked] = useState(false);
    // 전체 동의 하위 동의들 상태 저장 변수 
    const [checkedItems, setCheckedItems] = useState({
        agreeTermsOfService : false,
        confirmAgeOver14 : false,
        agreePrivacyPolicy : false,
        agreeOptionalPrivacy : false,
        agreeMarketingNotifications : false,
        agreeLocationService : false,
    })
    // 마우스 변경
    const [mouseCursur, setMouseCursur] = useState(false);

    // 전체 동의 체크시 하위 동의 전부 체크
    const allAgreeHandeler = () => {
        const allAgreeValue = !allChecked
        setAllChecked(allAgreeValue)

        setCheckedItems({
            agreeTermsOfService : allAgreeValue,
            confirmAgeOver14 : allAgreeValue,
            agreePrivacyPolicy : allAgreeValue,
            agreeOptionalPrivacy : allAgreeValue,
            agreeMarketingNotifications : allAgreeValue,
            agreeLocationService : allAgreeValue,
        })
    }

    // 하나라도 체크 해제시 전체 동의 체크 해제
    const handleSingleChecked = (name) => {
        setCheckedItems((prev) => {
            const updated = {...prev, [name] : !prev[name]};

            const all = Object.values(updated).every((v) => v === true)
            setAllChecked(all);
            return updated;
        })
    }

    // 필수에 해당하는 이용약관이 체크되면 다음버튼 활성화
    useEffect(() => {
        if(checkedItems.agreeTermsOfService === true && checkedItems.confirmAgeOver14 === true && checkedItems.agreePrivacyPolicy === true){
            setIsDisabledAgree(false)
            setMouseCursur(true)
        }else{
            setIsDisabledAgree(true)
            setMouseCursur(false)
        }
    },[checkedItems])


    return(
        // 이용약관 동의 페이지
        <div className="signup_container">
            <h1 className='signup_title'>저희 EcoStay를 찾아와 주셔서 감사합니다! <br/>
                약관에 동의를 부탁드립니다!</h1>
            {/* 이용약관 form */}
            <form className='agreeForm'>
                {/* 이용약관 전체 동의 */}
                <input type="checkbox" id='agreeAllTerms' name='agreeAll' checked={allChecked} onChange={allAgreeHandeler} />
                <label htmlFor="agreeAllTerms">약관 전체동의</label>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeTermsOfService' name='agreeTOS' checked={checkedItems.agreeTermsOfService} onChange={() => handleSingleChecked('agreeTermsOfService')} />
                        <label htmlFor="agreeTermsOfService">(필수) 이용약관</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='confirmAgeOver14' name='age14' checked={checkedItems.confirmAgeOver14} onChange={() => handleSingleChecked('confirmAgeOver14')} />
                        <label htmlFor="confirmAgeOver14">(필수) 만 14세 이상 확인</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreePrivacyPolicy' name='agreePrivacy' checked={checkedItems.agreePrivacyPolicy} onChange={() => handleSingleChecked('agreePrivacyPolicy')} />
                        <label htmlFor="agreePrivacyPolicy">(필수) 개인정보 수집 및 이용 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeOptionalPrivacy' name='optPrivacy' checked={checkedItems.agreeOptionalPrivacy} onChange={() => handleSingleChecked('agreeOptionalPrivacy')} />
                        <label htmlFor="agreeOptionalPrivacy">(선택) 개인정보 수집 및 이용 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeMarketingNotifications' name='marketingOk' checked={checkedItems.agreeMarketingNotifications} onChange={() => handleSingleChecked('agreeMarketingNotifications')} />
                        <label htmlFor="agreeMarketingNotifications">(선택) 마케팅 알림 수신 동의</label>
                    </div>    
                    <button type="button">보기</button>
                </div>
                <div className="agree1">
                    <div className='agree2'>
                        <input type="checkbox" id='agreeLocationService' name='locService' checked={checkedItems.agreeLocationService} onChange={() => handleSingleChecked('agreeLocationService')} />
                        <label htmlFor="agreeLocationService">(선택) 위치기반 서비스 이용약관 동의</label>
                    </div>
                    <button type="button">보기</button>
                </div>
                <Link to='/SignUp2'>
                    <button type="submit" className='agreeBtn' disabled={isDisabledAgree} style={{cursor: mouseCursur ? 'pointer' : 'not-allowed'}}  >다음</button>
                </Link>
            </form>
        </div>
    )
}