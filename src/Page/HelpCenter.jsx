import '../Page/HelpCenter.css'

export default function HelpCenter(){
    return(
        <div className="helpCenter_container">
            <div className='helpCenter_list'>
                <ul>
                    <li className='list_title'>고객센터</li>
                    <li className='list_menu'>
                        <button type='button' className='list_menuBtn'>
                            자주 찾는 질문
                        </button>
                    </li>
                    <li className='list_menu'>
                        <button type='button' className='list_menuBtn'>
                            공지사항
                        </button>
                    </li>
                    <li className='list_menu'>
                        <button type='button' className='list_menuBtn'>
                            1 대 1 문의
                        </button>
                    </li>
                </ul>
            </div>
            <div className='helpCenter_text'>
                <h1 className='text_title'>자주 찾는 질문</h1>
                <div className='helpCenter_texts'>
                    <div>
                        <p>Q. [숙소] 예약을 취소하고 싶어요.</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <p className='text_contents'>
                    A. <br/> 예약 취소는 EcoStay앱 또는 웹의 ‘내 정보 → 예약/구매 내역’에서 직접 진행하실 수 있습니다. <br/>

                    취소 및 환불은 예약·결제 시 안내된 취소/환불 규정에 따라 처리되며, <br/>
                    취소 수수료가 발생하는 경우 해당 금액을 제외한 금액이 환불됩니다.<br/>

                    일부 숙소의 경우 앱에서 취소가 제한될 수 있으며, <br/>
                    이 경우 고객센터를 통해 취소 요청을 해주시기 바랍니다. 
                </p>
                <div  className='helpCenter_texts'>
                    <div>
                        <p>Q. [공통] 천재지변 또는 감염병으로 예약을 취소해야 할 경우 어떻게 하나요?</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <p className='text_contents'>
                    A. <br/> 기상 악화, 감염병 확산 등 불가항력적인 사유로 숙소 이용이 어려운 경우, <br/>
                    고객센터로 예약 내역과 증빙 서류를 접수해 주시면 확인 후 취소 가능 여부를 안내드립니다. <br/>

                    다만, 당사는 숙소와 고객을 연결하는 중개 플랫폼으로, <br/>
                    취소 및 환불 여부는 각 숙소의 운영 정책에 따라 결정됩니다. <br/>
                    상황에 따라 취소 수수료가 발생하거나 취소가 제한될 수 있는 점 양해 부탁드립니다. 
                </p>
                <div  className='helpCenter_texts'>
                    <div>
                        <p>Q. [숙소] 예약 대기 중인 예약을 취소하고 싶어요.</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>

                <p className='text_contents'>
                    A. <br/> 예약이 대기 상태인 경우, <br/>
                    고객센터를 통해 예약 취소 요청을 해주시기 바랍니다. <br/>

                    다만, 예약이 확정된 이후에는 <br/>
                    숙소의 취소 규정에 따라 취소 수수료가 발생하거나 취소가 제한될 수 있습니다.
                </p>
                <div  className='helpCenter_texts'>
                    <div>
                        <p>Q. [숙소] 체크인 날짜 또는 객실 타입을 변경하고 싶어요.</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <p className='text_contents'>
                    A. <br/> 예약 결제가 완료된 이후에는 체크인 날짜 및 객실 타입 변경이 불가능합니다. <br/>

                    변경이 필요한 경우, <br/>
                    예약 취소 및 환불 규정에 따라 기존 예약을 취소한 후 재예약해 주셔야 합니다.<br/>
                    예약 취소가 가능한 기간이라면 취소 후 재결제하여 이용해 주시기 바랍니다.<br/>

                    만약 취소가 어렵거나 취소 수수료가 발생하는 경우에는<br/>
                    고객센터로 문의해 주시면 안내해 드리겠습니다.
                </p>
                <div  className='helpCenter_texts'>
                    <div>
                        <p>Q. [공통] 현금영수증을 발급받고 싶어요.</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <p className='text_contents'>
                    A. <br/> 현금영수증은 현금성 결제 수단으로 결제한 경우에 한해 발급이 가능합니다.<br/>

                    결제 과정에서 현금영수증을 신청하신 경우 자동으로 발급되며,<br/>
                    신청을 누락했거나 발급 내역이 확인되지 않는 경우에는<br/>
                    각 결제 수단별 발급 경로를 통해 확인해 주시기 바랍니다.<br/><br/>

                    <div>
                    [결제 수단별 발급 안내] <br/><br/>

                        네이버페이 <br/>

                        결제 단계에서 현금영수증 신청 시 자동 발급<br/>

                        자진 발급: 네이버페이 → 결제내역 → 주문 상세 → 영수증 발급 내역 확인<br/><br/>

                        간편계좌이체 (TOSS / PAYCO)<br/>

                        결제 단계에서 현금영수증 신청 시 자동 발급<br/>

                        신청 누락 시 고객센터를 통해 문의해 주세요<br/><br/>

                        카카오페이<br/>

                        카카오페이머니 결제 시 자동 발급<br/>

                        카카오톡 → Pay → 이용내역 → 결제 상세 → 현금영수증 확인
                    </div>
                </p>
                <div  className='helpCenter_texts'>
                    <div>
                        <p>Q. [공통] 영수증 또는 거래내역서를 발급받고 싶어요.</p>
                    </div>
                    <div>
                        <button type="button" className='textDownBtn'>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <p className='text_contents'>
                    A. <br/> 예약 및 결제 정보가 포함된 영수증 또는 거래내역서는<br/>
                    아래 경로를 통해 직접 확인 및 발급하실 수 있습니다.<br/>

                    [영수증 발급 방법]<br/><br/>

                    앱/웹 → 내 정보 → 예약 내역 → 예약 상세
                    → 결제 증빙 보기 → 영수증 확인<br/>
                    ※ 네이버페이 결제 건은 네이버페이 결제 페이지에서 확인 가능합니다.<br/><br/>

                    [거래내역서 발급 방법]<br/><br/>

                    앱/웹 → 내 정보 → 예약 내역 → 예약 상세
                    → 결제 증빙 보기 → 거래내역서 발급
                    → 수령할 이메일 주소 입력 후 발송<br/><br/>

                    ※ 거래내역서는 단순 거래 확인용 자료로, 세금계산서 등 법적 효력은 없습니다.<br/>
                    ※ 예약 완료(이용 확정), 이용 완료, 예약 취소 건에 대해서만 발급 가능하며<br/>
                    예약 실패 또는 예약 대기 상태의 건은 발급이 제한됩니다.
                </p>
            </div>
            <div className='helpCenter_tel'>
                <div className='helpCenter_tel1'>
                    <h1 className='tel1_title'>EcoStay 고객 센터</h1>
                    <ul>
                        <li className='tel_list'>
                            <i className="fa-solid fa-phone"></i>
                            여행 상담센터
                            <p className='info_tel'>9999-9996</p>
                        </li>
                        <li className='tel_list'>
                            <i className="fa-solid fa-phone"></i>
                            국내 숙소 상담센터
                            <p className='info_tel'>9999-9997</p>
                        </li>
                        <li className='tel_list'>
                            <i className="fa-solid fa-phone"></i>
                            해외 숙소 상담센터
                            <p className='info_tel'>9999-9998</p>
                        </li>
                        <li className='tel_list' style={{border:'none'}}>
                            <i className="fa-solid fa-phone"></i>
                            고객센터
                            <p className='info_tel'>9999-9999</p>
                        </li>
                    </ul>
                </div>
                <div className='helpCenter_tel2'>
                    <p className='tel2_title'>
                        <i class="fa-solid fa-circle-info"></i>
                        상담시간 안내
                    </p>
                    <ul>
                        <li>
                            <p className='tel2_info'>* 해외/국내 여행 상담</p>
                            <p className='tel2_info2'>평일 9:00 ~ 18:00 (토/일요일 및 공휴일 휴무)</p>
                        </li>
                        <il>
                            <p className='tel2_info'>* 채팅상담</p>
                            <p className='tel2_info2'>24시간 운영</p>
                        </il>
                    </ul>
                </div>
            </div>
        </div>
    )
}