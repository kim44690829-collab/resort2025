import '../Page/Main.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';

export default function Main(){    
    const {RoomData, HotelData} = useContext(ResortDateContext);

    return(
        <div className='main_container'>
            {/* <Link to='/detail/1'>ID: 1링크</Link><br /><br />
            <Link to='/detail/2'>ID: 2링크</Link><br /><br />
            <Link to='/detail/3'>ID: 3링크</Link><br /><br />
            <Link to='/detail/4'>ID: 4링크</Link> */}
            <div className='mainImgBenner'>
                <div>여기는 이미지 배너</div>
                <div className='hotelSearch'>
                    <h1>여행을 고민중이라면?!</h1>
                    <button type='button' className='koreaBtn hotelSearchBtn'>국내</button>
                    <button type='button' className='globalBtn hotelSearchBtn'>해외</button>
                    <form className='hotelInput'>
                        <input type='text' id='citySearch' name='citySearch' />
                        <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                        <div>달력</div>
                        <div>인원</div>
                        <button type='button' className='Search_Btn'>검색</button>
                    </form>
                </div>
            </div>
            
            <div className='hotel_type'>
                <div className='accomCat Category1'>
                    {/* <img src='' /> */}
                    <p>여기는 호텔 사진</p>
                    <span className='HotelImg'>호텔</span>
                </div>
                <div className='accomCat Category2'>
                    {/* <img src='' /> */}
                    <p>여기는 리조트 사진</p>
                    <span className='ResortImg'>리조트</span>
                </div>
                <div className='accomCat Category3'>
                    {/* <img src='' /> */}
                    <p>여기는 콘도 사진</p>
                    <span className='CondoImg'>콘도</span>
                </div>
                <div className='accomCat Category4'>
                    {/* <img src='' /> */}
                    <p>여기는 게하 사진</p>
                    <span className='GuestHouseImg'>게스트 하우스</span>
                </div>
                <div className='accomCat Category5'>
                    {/* <img src='' /> */}
                    <p>여기는 캠핑 사진</p>
                    <span className='CampingImg'>캠핑</span>
                </div>
            </div>
            {/*  */}
            <div className='popularAccom'>
                <p className='popularAccomTitle'>인기 스테이 PICK!</p>
                <div className='popularAccomSub1'>
                    <ul className='popularAccomSub2'>
                        {HotelData.slice(0,10).map((item) => (
                            <li key={item.id}>
                                <img src='/img/1-1.jpg' alt={item.hotelName} className='popularAccomMainImg' />
                                <p>{item.type}</p>
                                <p>{item.hotelName}</p>
                                <span>{item.score}</span>
                                <span>{item.scoreCount}</span>
                                <p>쿠폰적용시</p>
                                <p>{item.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 관광명소 - 근처 숙소 */}
            <div className='spotsAndStays'>
                <p className='spotsAndStaysTitle'>관광명소 - 근처 숙소(수정할예정)</p>
                <div className='spotsAndStaysAll'>
                    <div className='spots1'>
                        <img src='/img/1-1.jpg' className='spotsImg1 spotsAndStaysImg'/>
                    </div>
                    <div className='spots2'>
                        <img src='/img/1-1.jpg' className='spotsImg2 spotsAndStaysImg' />
                    </div>
                    <div className='spots3'>
                        <img src='/img/1-1.jpg' className='spotsImg3 spotsAndStaysImg' />
                    </div>
                    <div className='spots4'>
                        <img src='/img/1-1.jpg' className='spotsImg4 spotsAndStaysImg' />
                    </div>
                    <div className='spots5'>
                        <img src='/img/1-1.jpg' className='spotsImg5 spotsAndStaysImg' />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='staySortByRating'>
                <p>평점순(수정할예정)</p>
                <div>
                    {/* 랭킹순으로 필터해서 map */}
                </div>
            </div>
        </div>
    )
}