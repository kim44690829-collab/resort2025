import { useState } from "react";
import { Link } from "react-router-dom";
import '../Common/Header.css';
import { useContext } from 'react';
import { ResortDateContext } from '../Api/ResortDate';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const [menuModal, setMenuModal] = useState(false);
    const navigate = useNavigate();
    const {userNickName, logout, setDomestic} = useContext(ResortDateContext);
    const [headerChange, setHeaderChange] = useState(0);

    const logoutHandeler = () => {
        logout();
        alert('로그아웃 되었습니다.');
        navigate('/');
    }

    return(
        <div className="Header_container">
            {/* 누르면 메인 페이지로 이동하는 로고 */}
            <Link to='/'>
                <img src="../public/mainlogo.png" alt="EcoStay 홈으로 바로가기" style={{width:'100px', height:'50px', cursor:'pointer'}} className="mainLogo" onClick={() => setHeaderChange(0)} />
            </Link>
            {!userNickName ? 
            <ul className="Header_right">
                {/* 비회원 예약조회 */}
                {headerChange !== 1 && 
                <li className="menu_list" onClick={() => setHeaderChange(1)}>
                    <Link to='/guest'>
                        <button type="button" className="HeaderBtn">
                            비회원 예약조회
                        </button>
                    </Link>
                </li>}
                {/* 로그인 */}
                {headerChange !== 2 && 
                    <li className="menu_list" onClick={() => setHeaderChange(2)} >
                        <Link to='/login'>
                            <button type="button" className="HeaderBtn">
                                로그인
                            </button>
                        </Link>
                    </li>
                }
                {/* 회원가입 */}
                {headerChange !== 3 && 
                    <li className="menu_list" onClick={() => setHeaderChange(3)}>
                        <Link to='/signup1'>
                            <button type="button" className="HeaderBtn">
                                회원가입
                            </button>
                        </Link>
                    </li>
                }
                <li className="menu_list menu_btn">
                    {/* 메뉴 */}
                    <button type="button" className="HeaderBtn" onClick={() => setMenuModal(!menuModal)} >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
            :
            <ul className="Header_right2">
                <li className="menu_list2" style={{marginRight:'15px'}}>
                    <span className="login_nickName">{userNickName}</span>님</li>
                <li className="menu_list2">
                    <button type='button' onClick={logoutHandeler} className="HeaderBtn logoutBtn">로그아웃</button>
                </li>
                <li className="menu_list2 menu_btn">
                    {/* 메뉴 */}
                    <button type="button" className="HeaderBtn" onClick={() => setMenuModal(!menuModal)} >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
            }
            {menuModal && 
                <>
                    <ul className="menus">
                        <li className="menus_sub">
                            <Link to ='/hotelSection'>
                                <button type="button" className="domestic-hotels" onClick={() => {setDomestic(0); setMenuModal(false)}}>국내숙소</button>
                            </Link>
                        </li>
                        <li className="menus_sub">
                            <Link to='/hotelSection' >
                                <button type="button" className="international-hotels" onClick={() => {setDomestic(1);  setMenuModal(false)}}>해외숙소</button>
                            </Link>
                        </li>
                        <li className="menus_sub">
                            <Link to='/wish'>
                                <button type="button" className="wishList_menu" onClick={() => setMenuModal(false)}>찜목록</button>
                            </Link>
                        </li>
                        <li className="menus_sub">
                            <Link to='/helpCenter'>
                                <button type="button" className="support-center" onClick={() => setMenuModal(false)}>고객센터</button>
                            </Link>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}