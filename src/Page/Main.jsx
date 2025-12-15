import '../Page/Main.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';
import 'leaflet/dist/leaflet.css';

export default function Main(){    
    const {RoomData, HotelData} = useContext(ResortDateContext);
    const [hotelInput, setHotelInput] = useState('');
    const [isInput, setIsInput] = useState(false);
    const cityRanking = [
        {id: 1, localName : '서울'}, 
        {id: 2, localName : '부산'}, 
        {id: 3, localName : '강릉'}, 
        {id: 4, localName : '속초'}, 
        {id: 5, localName : '경주'}, 
        {id: 6, localName : '여수'}, 
        {id: 7, localName : '대전'}, 
        {id: 8, localName : '광주'}, 
        {id: 9, localName : '제주'}, 
        {id: 10, localName : '포항'},
    ]
    const hotelRating = [...HotelData].sort((a,b) => b.score - a.score);

    const inputHandeler = (num) => {
        if(num === 1){
            setHotelInput('서울')
        }else if(num === 2){
            setHotelInput('부산')
        }else if(num === 3){
            setHotelInput('강릉')
        }else if(num === 4){
            setHotelInput('속초')
        }else if(num === 5){
            setHotelInput('경주')
        }else if(num === 6){
            setHotelInput('여수')
        }else if(num === 7){
            setHotelInput('대전')
        }else if(num === 8){
            setHotelInput('광주')
        }else if(num === 9){
            setHotelInput('제주')
        }else{
            setHotelInput('포항')
        }
    }

    const closeUl = (e) => {
        if (!e.target.closest('.hotelInput')) {
            setIsInput(false);
        }
    }

    return(
        <div className='main_container' onClick={closeUl}>
            <div className='mainImgBenner'>
                <div className='mainBanner'>여기는 이미지 배너</div>
                <div className='hotelSearch'>
                    <h1>여행을 고민중이라면?!</h1>
                    <button type='button' className='koreaBtn hotelSearchBtn'>국내</button>
                    <button type='button' className='globalBtn hotelSearchBtn'>해외</button>
                    <form className='hotelInput'>
                            <input type='text' id='citySearch' name='citySearch' 
                            value={hotelInput} 
                            onChange={(e) => setHotelInput(e.target.value)}
                            onClick={() => setIsInput(true)}
                            placeholder='여행지나 숙소를 검색해주세요'
                            />
                            {isInput &&
                            <>
                                <ul className='rankBox'>
                                    <li className='rankBoxLi'>
                                        <span className='inputInfo'>EcoStay 검색 순위</span>
                                    </li>
                                    {cityRanking.map((item) => (
                                    <li className='rankBoxLi' key={item.id} >
                                        <span className='countryInRank' onClick={() => inputHandeler(item.id)}>
                                            {item.id}
                                        </span>
                                        <span className='rankName' onClick={() => inputHandeler(item.id)}>
                                            {item.localName}
                                        </span>    
                                    </li>
                                    ))}
                                </ul>
                            </>}
                            
                                {/* <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(2)}>2</span>
                                    <span className='rankName' onClick={() => inputHandeler(2)}>부산</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(3)}>3</span>
                                    <span className='rankName' onClick={() => inputHandeler(3)}>강릉</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(4)}>4</span>
                                    <span className='rankName' onClick={() => inputHandeler(4)}>속초</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(5)}>5</span>
                                    <span className='rankName' onClick={() => inputHandeler(5)}>경주</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(6)}>6</span>
                                    <span className='rankName' onClick={() => inputHandeler(6)}>여수</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(7)}>7</span>
                                    <span className='rankName' onClick={() => inputHandeler(7)}>대전</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(8)}>8</span>
                                    <span className='rankName' onClick={() => inputHandeler(8)}>광주</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(9)}>9</span>
                                    <span className='rankName' onClick={() => inputHandeler(9)}>제주</span>    
                                </li>
                                <li className='rankBoxLi'>
                                    <span className='countryInRank' onClick={() => inputHandeler(10)}>10</span>
                                    <span className='rankName' onClick={() => inputHandeler(10)}>포항</span>    
                                </li> */}
                            
                        
                        <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                        <div>달력</div>
                        <div>인원</div>
                        <Link to='/room'>
                            <button type='button' className='Search_Btn'>검색</button>
                        </Link>
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
            {/* ㄴㄴ */}
            {/*  */}
            <div className='popularAccom'>
                <p className='popularAccomTitle'>인기 스테이 PICK!</p>
                <div className='popularAccomSub1'>
                    <ul className='popularAccomSub2'>
                        {HotelData.slice(0,10).map((item) => (
                            <li key={item.id}>
                                <img src={item.img[0]} alt={item.hotelName} className='popularAccomMainImg' />
                                <p>{item.type}</p>
                                <p className='popularAccom_name'>{item.hotelName}</p>
                                <div className='popularAccom_review'>
                                    <span className='popularAccom_score'>★{item.score}</span>
                                    <span className='popularAccom_count'>{item.scoreCount.toLocaleString()}명 참여</span>
                                </div>
                                <p>쿠폰적용시</p>
                                <p>{item.price.toLocaleString()}</p>
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
            {/* 평점순 */}
            <div className='staySortByRating'>
                <p className='staySortByRating_title'>평점순(수정할예정)</p>
                <div className='hotelRating_desc'>
                    <ul className='hotelRating_each'>
                        {hotelRating.slice(0,10).map((item) => (
                            <li key={item.id} className='hotelRating_each_sub'>
                                <img src='/img/1-1.jpg' alt={item.hotelName} className='hotelRatingImg' />
                                {/* <span className='hotelRatingScore'>평점 : {item.score}</span> */}
                                <div className='hotelRating_each_sub2'>
                                    <span style={{display:'inline-block', marginBottom:'10px'}}>{item.country} / {item.city}</span> <br/>
                                    <span style={{display:'inline-block', marginBottom:'10px'}}>{item.hotelName}</span> <br/>
                                    <span>{item.price.toLocaleString()}~</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='eventBanner'>여기는 이벤트 배너</div>
        </div>
    )
}