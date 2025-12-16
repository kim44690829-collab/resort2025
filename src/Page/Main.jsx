import '../Page/Main.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';
import 'leaflet/dist/leaflet.css';

export default function Main(){    
    // 호텔, 객실데이터 useContext로 가져오는 훅
    const {RoomData, HotelData} = useContext(ResortDateContext);
    // 호텔 input에 들어가는 지역, 호텔명 상태변수
    const [hotelInput, setHotelInput] = useState('');
    // 호텔 input 아래 모달 상태변수
    const [isInput, setIsInput] = useState(false);
    // 호텔 input 아래 모달 map 사용할 오브젝트 배열
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
    // 인원 상태변수
    const [guestCount, setGuestCount] = useState(1)
    // 관광지 클릭시 모달
    const [spotModalOpen, setSpotModalOpen] = useState(false);
    // 슬라이드 상태저장 변수
    const [slideMove, setSlideMove] = useState(0)

    // 슬라이드 함수
    const leftSlide = () => {
        if(slideMove > -2419){
            setSlideMove(slideMove - 232)
            console.log(slideMove);
        }
        
    }

    // 관광명소 map돌리기 위한 오브젝트 배열
    const popularSpot = [
        {id:1, image:'/mainImg/b-1.jpg', cityName: '서울'},
        {id:2, image:'/mainImg/c-1.jpg', cityName: '서울'},
        {id:3, image:'/mainImg/d-1.jpg', cityName: '서울'},
        {id:4, image:'/mainImg/e-1.jpg', cityName: '서울'},
        {id:5, image:'/mainImg/f-1.jpg', cityName: '서울'},
        {id:6, image:'/mainImg/g-1.jpg', cityName: '서울'},
    ];

    // 슬라이드 로직 마우스오버 상태변수
    const [slideOn,setSlideOn] = useState(false);

    // 인원 버튼 비활성화 상태변수 -> 처음에 활성화 상태 / 조건에따라 비활성화
    // const [isGuest, setIsGuest] = useState(false)
    // 호텔 평점순으로 재배열
    const hotelRating = [...HotelData].sort((a,b) => b.score - a.score);

    // num에 해당하는 번호를 누르면 그에 해당하는 지역이 input에 들어가는 함수
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

    const minusBtn = () => {
        if(guestCount > 1){
            const minus = guestCount - 1
            setGuestCount(minus)
            
        }else if(guestCount < 1){
            
        }
    }
    const plusBtn = () => {
        if(guestCount < 4){
            const plus = guestCount + 1
            setGuestCount(plus)
        }else{
            
        }
    }

    // e.target.closest(.className) : .className의 하위 클래스들을 범위로 묶어서 한묶음으로 지정
    // 즉, 현재 .className 에 들어간 hotelModal의 하위 input, ul, li 만 묶음으로 지정
    // !!e.target.closest('.hotelModal') 를 통해 부정하여 반대로 적용시켜서 input, ul, li 이외에 다른곳을 클릭하면
    // setIsInput(false) 로 모달 닫기
    const closeUl = (e) => {
        if (!e.target.closest('.hotelModal')) {
            setIsInput(false);
        }
    }

    return(
        <div className='main_container' onClick={closeUl}>
            {/* 베너 박스 */}
            <div className='mainImgBenner'>
                {/* 메인 베너 이미지 */}
                <div className='mainBanner'>
                    <img src='../public/img/10-1.jpg' style={{width:'1920px', height:'600px'}} />
                </div>
                {/* 국내, 해외 숙박 검색 */}
                <div className='hotelSearch'>
                    <h1>여행을 고민중이라면?!</h1>
                    {/* 국내, 해외 change 버튼 */}
                    <button type='button' className='koreaBtn hotelSearchBtn'>국내</button>
                    <button type='button' className='globalBtn hotelSearchBtn'>해외</button>
                    {/* input form */}
                    <form className='hotelInput'>
                        <div className='hotelModal'>
                            <input type='text' id='citySearch' name='citySearch' 
                            value={hotelInput} 
                            onChange={(e) => setHotelInput(e.target.value)}
                            onClick={() => setIsInput(true)}
                            placeholder='여행지나 숙소를 검색해주세요'
                            />
                            {/* input 클릭시 나오는 순위 */}
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
                        </div>
                        <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                        <div>달력</div>
                        {/* 인원 */}
                        <div className='guestSum'>
                            {/* 버튼 */}
                            <button type='button' 
                            onClick={minusBtn} 
                            className='minus_btn' 
                            style={{
                                backgroundColor : guestCount === 1 ? '#e7e7e7ff' : '#42799b',
                                color:'#fff',
                                cursor:guestCount === 1 ? 'not-allowed' : 'pointer'
                            }}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <span className='guests'>{guestCount}</span>
                            <button type='button' 
                            onClick={plusBtn} 
                            className='plus_btn' 
                            style={{
                                backgroundColor : guestCount === 4 ? '#e7e7e7ff' : '#42799b',
                                color:'#fff',
                                cursor:guestCount === 4 ? 'not-allowed' : 'pointer'
                            }}>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        {/* 검색 */} 
                        <Link to='/room'>
                            <button type='button' className='Search_Btn'>검색</button>
                        </Link>
                    </form>
                </div>
            </div>
            {/* 호텔 유형에 따라 나눔 */}
            <div className='hotel_type'>
                <div className='accomCat Category1'>
                    <img src='../public/mainImg/a-1.jpg' style={{width:'232px', height:'240px'}} />
                    <span className='HotelImg'>호텔</span>
                </div>
                <div className='accomCat Category2'>
                    <img src='../public/mainImg/a-2.jpg' style={{width:'232px', height:'240px'}} />
                    <span className='ResortImg'>리조트</span>
                </div>
                <div className='accomCat Category3'>
                    <img src='../public/mainImg/a-3.jpg' style={{width:'232px', height:'240px'}} />
                    <span className='CondoImg'>콘도</span>
                </div>
                <div className='accomCat Category4'>
                    <img src='../public/mainImg/a-4.jpg' style={{width:'232px', height:'240px'}} />
                    <span className='GuestHouseImg'>게스트 하우스</span>
                </div>
                <div className='accomCat Category5'>
                    <img src='../public/mainImg/a-5.jpg' style={{width:'232px', height:'240px'}} />
                    <span className='CampingImg'>캠핑</span>
                </div>
            </div>
            {/* 인기 호텔 모음 */}
            <div className='popularAccom'>
                <p className='popularAccomTitle'>인기 스테이 PICK!</p>
                <div className='popularAccomSub1'>
                    {/* 왼쪽 슬라이드 버튼 */}
                    <button type='button' className='leftBtn1' onClick={leftSlide}>  {/* -----------------------아래 버튼------------------------------- */}
                        <i className="bi bi-arrow-left-circle" style={{fontSize:'30px', color:''}}></i>
                    </button>
                    {/* 호텔 map */}
                    <ul className='popularAccomSub2' style={{marginLeft:`${slideMove}px`}} >
                        <div className='slideBox'>
                        {HotelData.slice(0,10).map((item) => (
                            
                                <li key={item.id} style={{cursor:'pointer'}}>
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
                        </div>
                    </ul>
                    {/* 오른쪽 슬라이드 버튼 */}
                    <button type='button' className='rightBtn1'>
                        <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                    </button>
                </div>
            </div>
            {/* 관광명소 - 근처 숙소 */}
            <div className='spotsAndStays'>
                <p className='spotsAndStaysTitle'>관광명소 - 근처 숙소(수정할예정)</p>
                <div className='spotsAndStaysAll'>
                    {/* 왼쪽 슬라이드 버튼 */}
                    <button type='button' className='leftBtn2'>
                        <i className="bi bi-arrow-left-circle" style={{fontSize:'30px', color:''}}></i>
                    </button>
                    <ul className='citySpots'>
                        {/* <img src='/img/1-1.jpg' className='spotsImg1 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/> */}
                        {popularSpot.map((item) => (
                            <li key={item.id} style={{cursor:'pointer'}} onClick={() => setSpotModalOpen(true)}>
                                <img src={item.image} style={{width:'390px', height:'500px'}} className='citySpotImg' />
                            </li>
                        ))}
                    </ul>
                    {/* <div className='spots2'>
                        <img src='/img/1-1.jpg' className='spotsImg2 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/>
                    </div>
                    <div className='spots3'>
                        <img src='/img/1-1.jpg' className='spotsImg3 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/>
                    </div>
                    <div className='spots4'>
                        <img src='/img/1-1.jpg' className='spotsImg4 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/>
                    </div>
                    <div className='spots5'>
                        <img src='/img/1-1.jpg' className='spotsImg5 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/>
                    </div>
                    <div className='spots6'>
                        <img src='/img/1-1.jpg' className='spotsImg5 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/>
                    </div> */}
                    {/* 오른쪽 슬라이드 버튼 */}
                    <button type='button' className='rightBtn2'>
                        <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                    </button>
                </div>
            </div>
            {/* 평점순 */}
            <div className='staySortByRating'>
                <p className='staySortByRating_title'>평점순(수정할예정)</p>
                <div className='hotelRating_desc'>
                    <button type='button' className='leftBtn2'>
                        <i className="bi bi-arrow-left-circle" style={{fontSize:'30px', color:''}}></i>
                    </button>
                    <ul className='hotelRating_each'>
                        {hotelRating.slice(0,10).map((item) => (
                            <li key={item.id} className='hotelRating_each_sub' style={{cursor:'pointer'}}>
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
                    <button type='button' className='rightBtn2'>
                        <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                    </button>
                </div>
            </div>
            <div className='eventBanner'>
                <img src='../public/img/22-1.jpg' style={{width:'1920px', height:'400px'}} />
            </div>
            {/* 관광명소 클릭 후 모달 */}
            {spotModalOpen && 
            <>
                <div className='overlay'></div>
                <div className='spotsModal'>
                    {/* <img src='' /> */}
                    <button type='button' onClick={() => setSpotModalOpen(false)}>닫기</button>
                </div> 
            </>
            }
        </div>
    )
}