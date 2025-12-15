import '../Common/Footer.css'
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="footer_container">
            {/* <div className='helpDeskWrapper'>
                <div className='helpDesk'>
                    <h1>고객센터</h1>
                    <p>
                        고객행복센터(전화) : 오전 9시 ~ 새벽 3시 운영
                        채팅 상담 문의 : 24시간 운영
                    </p>
                    <div>
                        <h1>
                            <i class="fa-solid fa-phone"></i>
                            1999-9999
                        </h1>
                        <button type='button'>
                            <i class="fa-solid fa-comment"></i>
                            채팅상담
                        </button>
                    </div>
                </div>
                <div>
                    <p>공지사항</p>
                    <p>
                        <i class="fa-solid fa-plus"></i>
                    </p>
                </div>
            </div> */}
            <div className="footerInfo">
                <div className="footer_link">
                    <div className="footer_logo">
                        <Link to='/'>
                            <img src="../public/mainlogo.png" alt="EcoStay 홈으로 바로가기" style={{width:'100px', height:'50px', cursor:'pointer'}} className="mainLogo" />
                        </Link>
                    </div>
                    <div className="footer_sns">
                        <button type="button" className='youtube_btn'>
                            <i class="fa-brands fa-youtube"></i>
                        </button>
                        <button type="button" className='instar_btn'>
                            <i class="bi bi-instagram"></i>
                        </button>
                    </div>
                </div>
                <div className='companyInfoSection'>
                    <p className='companyInfo'>
                        (주)EcoStay <br/>
                        주소 : 서울특별시 환상구 몽환로 123, 5층 (가상동 999-1) | 공동대표이사 : 김광민, 정호준, 신동현 | 사업자 등록번호 : 000-00-00000 
                        <Link to='/'>사업자정보확인</Link> <br/>
                        전자우편주소 : eco@ecostay-travel.com | 통신판매번호 : 2999-서울환상-0000 | 관광사업자 등록번호 : 제 99999-1004호 | 전화번호 : 9999-9999 | 호스팅서비스제공자의 상호표시 : (주)EcoStay<br/>
                        (주)EcoStay는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                    </p>
                </div>
                
            </div>
        </div>
    )
}