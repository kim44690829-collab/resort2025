import { useState,useEffect } from "react";
import '../Page/pay.css'

export default function Pay(){
    return(
        <>
            <div className="paysection">
                <h2 className="pay_title">결제 페이지 입니다</h2>
                <div className="pay_info">
                    <div className="user_info">
                        <h4>예약자 정보</h4>
                        <ul>
                            <li>
                                <p>예약자 이름</p>
                                <input type="text" placeholder="홍길동" />
                            </li>
                            <li>
                                <p>예약자 생년월일</p>
                                <input type="text" />
                                <input type="text" />
                            </li>
                            <li>
                                <p>휴대폰 번호</p>
                                <input type="text" placeholder="010-1234-5678" />
                                <button type="button">인증번호 발송 </button>
                                <button type="button">입력된 휴대폰 번호는 안심번호로 변경되어 숙소에 전달돼요.</button>
                            </li>
                            <li></li>
                        </ul>
                        <div className="payline"></div>
                        <h4>결제 수단</h4>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <div className="paychk">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor=""></label>
                        </div>
                    </div>
                    <div className="room_info">
                        <div className="room_box">
                            <h2>호텔명</h2>
                            <img src="/img/1-2.jpg" alt="" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="ta_"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="paybox"></div>
                    </div>
                </div>
            </div>
        </>
    )
}