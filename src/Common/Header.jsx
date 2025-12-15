import { Link } from "react-router-dom";
import '../Common/Header.css';

export default function Header(){
    return(
        <div className="Header_container">
            {/* 누르면 메인 페이지로 이동하는 로고 */}
            <Link to='/'>
                <img src="../public/mainlogo.png" alt="EcoStay 홈으로 바로가기" style={{width:'100px', height:'50px', cursor:'pointer'}} className="mainLogo" />
            </Link>
            <ul className="Header_right">
                {/* 비회원 예약조회 */}
                <li>
                    <Link to='/guest'>
                        <button type="button" className="HeaderBtn">
                            비회원 예약조회
                        </button>
                    </Link>
                </li>
                {/* 로그인 */}
                <li>
                    <Link to='/login'>
                        <button type="button" className="HeaderBtn">
                            로그인
                        </button>
                    </Link>
                </li>
                {/* 회원가입 */}
                <li>
                    <Link to='/signup1'>
                        <button type="button" className="HeaderBtn">
                            회원가입
                        </button>
                    </Link>
                </li>
                <li>
                    <button type="button" className="HeaderBtn">메뉴</button>
                    {/* <ul>
                        <li>
                            <Link to='/login'>
                                <button type="button" className="HeaderBtn">
                                    로그인
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button type="button">국내숙소</button>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </div>
    )
}