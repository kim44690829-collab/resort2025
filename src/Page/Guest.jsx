import '../Page/Guest.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Guest(){
    // 이메일, 비밀번호 저장 상태변수
    const [reservationNum, setReservationNum] = useState('')
    const [isDisabledGuest, setIsDisabledGuest] = useState(true);

    // 휴대폰 번호 상태저장 변수
    const [guestNumFront, setGuestNumFront] = useState('');
    const [guestNumBack, setGuestNumBack] = useState('');

    // 이메일, 비밀번호 onchange
    const reservationHandeler = (e) => {
        const reservationValue = e.target.value
        setReservationNum(reservationValue)
    }

    // 마우스 커서 변경
    const [mouseCursor, setMouseCursor] = useState(false);

    useEffect(() => {
        if(reservationNum.length >= 5 && guestNumFront.length === 4 &&  guestNumBack.length === 4){
            setIsDisabledGuest(false)
            setMouseCursor(true)
        }else{
            setIsDisabledGuest(true)
            setMouseCursor(false)
        }
    },[reservationNum, guestNumFront, guestNumBack])

    return(
        <div className="Guest_container">
            <h2 className='Guest_title'>비회원 예약조회</h2>
            <form>
                <div className='Guest_form'>
                    <label htmlFor="guestId">
                        예약번호<span style={{color:'red'}}>*</span>
                    </label>
                    <input type="text" 
                    id="guestId" 
                    name="guestId" 
                    placeholder='예약번호를 입력해주세요'
                    value={reservationNum}
                    onChange={reservationHandeler}
                    />
                    <p className='guestIdInfo'>이메일, 알림톡, 또는 문자로 전송된 예약 번호를 입력해주세요.</p>

                    <label>
                        휴대폰 번호<span style={{color:'red'}}>*</span>
                    </label>
                    <div className='guestPhone'>
                        <input type='text' id='guesttel' name='guesttel' value='010' disabled style={{color:'black'}}/> <span>-</span>
                        <input type='text' id='guesttelFront' name='guesttel' placeholder='1234' value={guestNumFront} onChange={(e) => setGuestNumFront(e.target.value)} /><span>-</span>
                        <input type='text' id='guesttelBack' name='guesttel' placeholder='5678' value={guestNumBack} onChange={(e) => setGuestNumBack(e.target.value)} />
                    </div>
                    <button type="submit" className='guestBtn' disabled={isDisabledGuest} style={{cursor:mouseCursor? 'pointer' : 'not-allowed'}} >인증번호 전송</button>
                </div>
            </form>
            <div className='LoginGo'>
                <Link to='/login'>
                    <button type="button" className='userLogin'>회원 예약조회</button>
                </Link>
            </div>
        </div>
    )
}