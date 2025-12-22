import { useState } from "react";
import { Link } from "react-router-dom";
import '../Common/Header.css';

export default function Header(){
    const [menuModal, setMenuModal] = useState(false)
    return(
        <div className="Header_container">
            {/* 누르면 메인 페이지로 이동하는 로고 */}
            <Link to='/'>
                <img src="../public/mainlogo.png" alt="EcoStay 홈으로 바로가기" style={{width:'100px', height:'50px', cursor:'pointer'}} className="mainLogo" />
            </Link>
            <ul className="Header_right">
                {/* 비회원 예약조회 */}
                <li className="menu_list">
                    <Link to='/guest'>
                        <button type="button" className="HeaderBtn">
                            비회원 예약조회
                        </button>
                    </Link>
                </li>
                {/* 로그인 */}
                <li className="menu_list">
                    <Link to='/login'>
                        <button type="button" className="HeaderBtn">
                            로그인
                        </button>
                    </Link>
                </li>
                {/* 회원가입 */}
                <li className="menu_list">
                    <Link to='/signup1'>
                        <button type="button" className="HeaderBtn">
                            회원가입
                        </button>
                    </Link>
                </li>
                <li className="menu_list">
                    {/* 메뉴 */}
                    <button type="button" className="HeaderBtn" onClick={() => setMenuModal(!menuModal)} >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
            {menuModal && 
                <>
                    <ul className="menus">
                        <li className="menus_sub">
                            <button type="button" className="domestic-hotels">국내숙소</button>
                        </li>
                        <li className="menus_sub">
                            <button type="button" className="wishList_menu">찜목록</button>
                        </li>
                        <li className="menus_sub">
                            <button type="button" className="international-hotels">해외숙소</button>
                        </li>
                        <li className="menus_sub">
                            <Link to='/helpCenter'>
                                <button type="button" className="support-center">고객센터</button>
                            </Link>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}