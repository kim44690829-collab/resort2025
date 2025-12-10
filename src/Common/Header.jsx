import { Link } from "react-router-dom";
import '../Common/Header.css';

export default function Header(){
    return(
        <div className="Header_container">
            {/* 누르면 메인 페이지로 이동하는 로고 */}
            <Link to='/'>
                <img src="../public/mainlogo.png" alt="EcoStay 홈으로 바로가기" style={{width:'100px', height:'50px', cursor:'pointer'}} className="mainLogo" />
            </Link>
            <div className="Header_right">
                {/* 비회원 예약조회 */}
                <Link to='/guest'>
                    <button type="button" className="HeaderBtn">
                        비회원 예약조회
                    </button>
                </Link>
                {/* 로그인 및 회원가입 */}
                <Link to='/login'>
                    <button type="button" className="HeaderBtn">
                        로그인/회원가입
                    </button>
                </Link>
                <button type="button" className="HeaderBtn">메뉴</button>
            </div>
        </div>
    )
}