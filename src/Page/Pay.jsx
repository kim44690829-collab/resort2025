import { useState,useEffect } from "react";
import '../Page/pay.css'

export default function Pay(){
    //전체 동의 변수
    const [chking,setchking] = useState([{id:1,state:false},{id:2,state:false},{id:3,state:false},{id:4,state:false},{id:5,state:false}])
    //예약내역 확인창 변수
    const [open,setOpen] = useState(false)
    //전체 선택 함수
    const chkAllHandler=()=>{
        if(chking[0].state===false){
            setchking([{id:1,state:true},{id:2,state:true},{id:3,state:true},{id:4,state:true},{id:5,state:true}])
        }else{
            setchking([{id:1,state:false},{id:2,state:false},{id:3,state:false},{id:4,state:false},{id:5,state:false}])
        }
    }
    //개별 선택 함수
    const chkHandler=(num)=>{
        const chkingCopy = [...chking]
        // num 번호에 때라 input 체크 상태 변환
        if(num===1 && chking[1].state===false){
            chkingCopy[1].state=true
            // 전부 선택시 전체선택 활성화 조건
            if(chkingCopy[1].state===true && chkingCopy[2].state===true && chkingCopy[3].state===true &&chkingCopy[4].state===true){
                chking[0].state=true
            }
            setchking(chkingCopy)
        }else if(num===1 && chking[1].state===true){
            chkingCopy[0].state=false
            chkingCopy[1].state=false
            setchking(chkingCopy)
        }else if(num===2 && chking[2].state===false){
            chkingCopy[2].state=true
            if(chkingCopy[1].state===true && chkingCopy[2].state===true && chkingCopy[3].state===true &&chkingCopy[4].state===true){
                chking[0].state=true
            }
            setchking(chkingCopy)
        }else if(num===2 && chking[2].state===true){
            chkingCopy[0].state=false
            chkingCopy[2].state=false
            setchking(chkingCopy)
        }else if(num===3 && chking[3].state===false){
            chkingCopy[3].state=true
            if(chkingCopy[1].state===true && chkingCopy[2].state===true && chkingCopy[3].state===true &&chkingCopy[4].state===true){
                chking[0].state=true
            }
            setchking(chkingCopy)
        }else if(num===3 && chking[3].state===true){
            chkingCopy[0].state=false
            chkingCopy[3].state=false
            setchking(chkingCopy)
        }else if(num===4 && chking[4].state===false){
            chkingCopy[4].state=true
            if(chkingCopy[1].state===true && chkingCopy[2].state===true && chkingCopy[3].state===true &&chkingCopy[4].state===true){
                chking[0].state=true
            }
            setchking(chkingCopy)
        }else if(num===4 && chking[4].state===true){
            chkingCopy[0].state=false
            chkingCopy[4].state=false
            setchking(chkingCopy)
        }
    }
    return(
        <>
            <div className="paysection">
                <h2 className="pay_title"><i className="fa-solid fa-arrow-left"></i>예약 확인 및 결제</h2>
                <div className="pay_info">
                    <div className="user_info">
                        <h4 className="pay_left_title">예약자 정보</h4>
                        <ul className="guest_info">
                            <li className="guest_list">
                                <p className="guest_sub_title">예약자 이름</p>
                                <input type="text" placeholder="홍길동" className="guest_name"/>
                            </li>
                            <li className="guest_list">
                                <p className="guest_sub_title">예약자 생년월일</p>
                                <input type="text" className="guest_birth01" placeholder="ex) 19800101"/>
                                <span> - </span>
                                <input type="text" className="guest_birth02"/>
                                <span> ● ● ● ● ● ●</span>
                            </li>
                            <li className="guest_list">
                                <p className="guest_sub_title">휴대폰 번호</p>
                                <input type="text" placeholder="010-1234-5678" className="guest_phone"/>
                                <button type="button" className="phone_btn">인증번호 발송 </button>
                                <div className="phone_txt">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <button type="button" className="phone_under">입력된 휴대폰 번호는 안심번호로 변경되어 숙소에 전달돼요.</button>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="payline"></div>
                        <h4 className="pay_left_title">결제 수단</h4>
                        <ul className="pay_type">
                            <li className="type_list"><span style={{color:'#ffcd00', fontWeight:700}}>카카오페이</span></li>
                            <li className="type_list"><span style={{color:'#034ea2', fontWeight:700}}>토스페이</span></li>
                            <li className="type_list"><span style={{fontWeight:500}}>신용/체크 카드</span></li>
                            <li className="type_list"><span style={{fontWeight:500}}>퀵계좌이체</span></li>
                            <li className="type_list"><span style={{color:'#ffee00', fontWeight:700}}>KB페이</span></li>
                            <li className="type_list"><span style={{color:'#03cf5d', fontWeight:700}}>N PAY</span></li>
                            <li className="type_list"><span style={{color:'#b8092fff', fontWeight:700}}>PAYCO</span></li>
                            <li className="type_list"><span style={{fontWeight:500}}>법인 카드</span></li>
                            <li className="type_list"><span style={{fontWeight:500}}>휴대폰 결제</span></li>
                        </ul>
                        <div className="paychk">
                            <input type="checkbox" name="pay_chk" id="pay_chk" />
                            <label htmlFor="pay_chk" className="pay_chking">이 결제 수단을 다음에도 사용</label>
                        </div>
                    </div>
                    <div className="room_info">
                        <div className="room_box">
                            <h2 className="room_name">호텔명</h2>
                            <img src="/img/1-2.jpg" alt="roomImg" className="room_img"/>
                            <table className="room_table">
                                <tbody>
                                    <tr>
                                        <td className="ta_list ta_sub">객실</td>
                                        <td className="ta_list">D type. FLAT FAMILY (저층/시티뷰)</td>
                                    </tr>
                                    <tr>
                                        <td className="ta_list ta_sub">일정</td>
                                        <td className="ta_list">12.21 (일) 15:00 ~ <br />12.22 (월) 11:00 (1박)</td>
                                    </tr>
                                    <tr>
                                        <td className="ta_list ta_sub">기준인원</td>
                                        <td className="ta_list">2인기준, 최대 2인</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="paybox">
                            <h2 className="paybox_title">결제 정보</h2>
                            <table className="paybox_table">
                                <tbody>
                                    <tr style={{borderBottom:'1px solid #e4e4e4'}}>
                                        <td className="paybox_list">객실 가격(1박)</td>
                                        <td className="paybox_list" style={{textAlign:'right'}}>169,200</td>
                                    </tr>
                                    <tr>
                                        <td className="paybox_list">총 결제 금액</td>
                                        <td className="paybox_list" style={{color:'red',textAlign:'right',fontWeight:600,fontSize:'24px'}}>169,200</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                            <div className="labelAll_item">
                                <input type="checkbox" name="terms_all" style={{display:'none'}} id="terms" checked={chking[0].state} onClick={()=>chkAllHandler()}/>
                                <label htmlFor="terms" className="labelAll_txt">약관 전체동의</label>
                            </div>
                            <div className="label_list">
                                <div className="label_item">
                                    <input type="checkbox" name="chk1" style={{display:'none'}} id="agreement01" checked={chking[1].state} onClick={()=>chkHandler(1)}/>
                                    <label htmlFor="agreement01" className="paybox_item">숙소 이용규칙 및 취소/환불규정 동의 (필수)</label>
                                </div>
                                <div className="label_item">
                                    <input type="checkbox" name="chk2" style={{display:'none'}} id="agreement02" checked={chking[2].state} onClick={()=>chkHandler(2)}/>
                                    <label htmlFor="agreement02" className="paybox_item">개인정보 수집 및 이용 동의 (필수)</label>
                                </div>
                                <div className="label_item">
                                    <input type="checkbox" name="chk3" style={{display:'none'}} id="agreement03" checked={chking[3].state} onClick={()=>chkHandler(3)}/>
                                    <label htmlFor="agreement03" className="paybox_item">개인정보 제3자 제공 동의 (필수)</label>
                                </div>
                                <div className="label_item">
                                    <input type="checkbox" name="chk4" style={{display:'none'}} id="agreement04" checked={chking[4].state} onClick={()=>chkHandler(4)}/>
                                    <label htmlFor="agreement04" className="paybox_item">만 14세 이상 확인 (필수)</label>
                                </div>
                            </div>
                            <button type="button" className="paybox_btn" onClick={chking[0].state===true?()=>setOpen(!open):''}>169,200원 결제하기</button>
                        </div>
                    </div>
                </div>
                {open?
                <div className="pay_modal">
                    <div className="backimg" onClick={()=>setOpen(!open)}></div>
                    <div className="modal_content">
                        <h2 className="pay_modal_title">예약내역 확인</h2>
                        <div className="modal_info">
                            <h4 className="modal_hotel">호텔명</h4>
                            <p className="modal_room">객실명</p>
                        </div>
                        <table className="modal_table">
                            <tr>
                                <td className="modal_list">체크인</td>
                                <td className="modal_list">시작날짜</td>
                            </tr>
                            <tr>
                                <td className="modal_list">체크아웃</td>
                                <td className="modal_list">끝날짜</td>
                            </tr>
                        </table>
                        <ul className="modal_txt">
                            <li className="modal_txt_list"><p>19세 미만 청소년은 보호자 동반 시 투숙이 가능합니다</p></li>
                            <li className="modal_txt_list"><p><span style={{color:'red'}}>취소/환불 규정</span>에 따라 앱/웹내에서 예약취소 가능한 상품입니다. 예약취소 시 취소수수료가 발생할 수 있습니다.</p></li>
                        </ul>
                        <div className="pay_modal_btn">
                            <button type="button" className="btns" style={{width:'125px'}} onClick={()=>setOpen(!open)}>취소</button>
                            <button type="button" className="btns"style={{color:'#fff',backgroundColor:'#42799b'}} onClick={()=>setOpen(!open)}>동의 후 결제</button>
                        </div>
                    </div>
                </div>:''}
            </div>
        </>
    )
}