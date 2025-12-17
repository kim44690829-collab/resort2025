import '../Page/Main.css';
import { useContext, useState, useEffect } from 'react';
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
    // 인기 호텔 슬라이드
    const [slideMove1, setSlideMove1] = useState(0)
    // 관광명소 슬라이드
    const [slideMove2, setSlideMove2] = useState(0)
    // 평점 슬라이드
    const [slideMove3, setSlideMove3] = useState(0)
    // 평점순의 라벨을 넣기위해 빈 배열 생성
    const [isLabel, setIsLabel] = useState([]);

    // 호텔 유형별로 접근하기 위한 사진 map돌리기 위한 오브젝트 배열
    const hotelType = [
        {id:1, image:'/mainImg/a-1.jpg', typeName: '호텔'},
        {id:2, image:'/mainImg/a-2.jpg', typeName: '리조트'},
        {id:3, image:'/mainImg/a-3.jpg', typeName: '콘도'},
        {id:4, image:'/mainImg/a-4.jpg', typeName: '게스트 하우스'},
        {id:5, image:'/mainImg/a-5.jpg', typeName: '캠핑'},
    ];

    // 관광명소 map돌리기 위한 오브젝트 배열
    const popularSpot = [
        {id:1, image:'/mainImg/b-1.jpg', cityName: '서울'},
        {id:2, image:'/mainImg/c-1.jpg', cityName: '제주도'},
        {id:3, image:'/mainImg/d-1.jpg', cityName: '부산'},
        {id:4, image:'/mainImg/e-1.jpg', cityName: '삿포로'},
        {id:5, image:'/mainImg/f-1.jpg', cityName: '뉴욕'},
        {id:6, image:'/mainImg/g-1.jpg', cityName: '파리'},
    ];


    // 호텔 평점순으로 재배열
    const hotelRating = [...HotelData].sort((a,b) => b.score - a.score);
    // const aaa = hotelRating.slice(0,10);
    // console.log('호텔레이팅')
    // console.log(aaa)
    // const hotlRateingcopy = [...HotelData]
    // const hotelRating10 = hotlRateingcopy.slice(0,10);
    // console.log('이거 슬라이드 된거 맞아?')
    // console.log(hotelRating10)

    // const labelCopy = [...isLabel]
    // labelCopy.push({...hotelRating10, labelImg:'/label.png'})
    // setIsLabel(labelCopy)
    // console.log(isLabel)
    // const hotelRatingCopy = {...hotelRating10, labelImg:'/label.png'}

    

    // const labelCopy = [
    //     hotelRating10.map(() => (
    //         {...hotelRating10, labelImg:'/label.png'}
    //     ))
    // ]
    // console.log(labelCopy)

    // 버튼을 클릭한 횟수를 저장하는 상태변수
    const [btnCount1, setBtnCount1] = useState(0);
    const [btnCount2, setBtnCount2] = useState(0);
    const [btnCount3, setBtnCount3] = useState(0);

    // 왼쪽, 오른쪽을 클릭했을때 조건을 만족하면 버튼을 없애는 함수
    const handleRightClick = (num) => {
        if(btnCount1 < 5 && num === 1){
            setBtnCount1(prev => prev + 1)
        }else if(btnCount2 < 3 && num === 2){
            setBtnCount2(prev => prev + 1)
        }else if(btnCount3 < 7 && num === 3){
            setBtnCount3(prev => prev + 1)
        }
    }

    const handleLeftClick = (num) => {
        if(btnCount1 > 0 && num === 1){
            setBtnCount1(prev => prev - 1)
        }else if(btnCount2 > 0 && num === 2){
            setBtnCount2(prev => prev - 1)
        }else if(btnCount3 > 0 && num === 3){
            setBtnCount3(prev => prev - 1)
        }
    }
    console.log(btnCount3)


    // 슬라이드 함수
    const leftSlide = (num) => {
        if(slideMove1 < 0 && num === 1){
            setSlideMove1(slideMove1 + 241)
            // console.log(slideMove1);
        }else if(slideMove2 < 0 && num === 2){
            setSlideMove2(slideMove2 + 400)
        }else if(slideMove3 < 0 && num === 3){
            setSlideMove3(slideMove3 + 400)
        }else{
            null
        }
    }
    const rightSlide = (num) => {
        if(slideMove1 > -1200 && num === 1){
            setSlideMove1(slideMove1 - 241)
            // setSlideOnLeft1(true)
            // console.log(slideMove1);
        }else if(slideMove2 > -1200 && num === 2){
            setSlideMove2(slideMove2 - 400)
            // setSlideOnLeft2(true)
        }else if(slideMove3 > -4000 && num === 3){
            setSlideMove3(slideMove3 - 400)
            // setSlideOnLeft3(true)
        }else{
            null
        }
    }

    

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
        }
    }
    const plusBtn = () => {
        if(guestCount < 4){
            const plus = guestCount + 1
            setGuestCount(plus)
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
            <ul className='hotel_type'>
                {hotelType.map((item) => (
                    <li key={item.id} className='accomCat'>
                        <img src={item.image} style={{width:'231px', height:'240px', borderRadius:'10px'}} />
                        <span className='HotelImg'>{item.typeName}</span>    
                    </li>
                ))}
            </ul>
            {/* 인기 호텔 모음 */}
            <div className='popularAccom'>
                <p className='popularAccomTitle'>인기 스테이 PICK!</p>
                <div className='popularAccomSub1'>
                    {/* 왼쪽 슬라이드 버튼 */}
                    {btnCount1 > 0 &&
                        <button type='button' className='leftBtn1' onClick={() => {leftSlide(1); handleLeftClick(1);}}> 
                            <i className="bi bi-arrow-left-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                    {/* 호텔 map */}
                    <div className='slideBox'>
                        <ul className='popularAccomSub2' style={{marginLeft:`${slideMove1}px`}} >
                            {HotelData.slice(0,4).map((item) => (
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
                            {HotelData.slice(61,64).map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}}>
                                    <img src='/img/1-1.jpg' alt={item.hotelName} className='popularAccomMainImg' />
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
                            {HotelData.slice(100,103).map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}}>
                                    <img src='/img/1-1.jpg' alt={item.hotelName} className='popularAccomMainImg' />
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
                    {/* 오른쪽 슬라이드 버튼 */}
                    {btnCount1 < 5 && 
                        <button type='button' className='rightBtn1' onClick={() => {rightSlide(1); handleRightClick(1);}}>
                            <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                </div>
            </div>
            {/* 관광명소 - 근처 숙소 */}
            <div className='spotsAndStays'>
                <p className='spotsAndStaysTitle'>관광명소 - 근처 숙소(수정할예정)</p>
                <div className='spotsAndStaysAll'>
                    {/* 왼쪽 슬라이드 버튼 */}
                    {btnCount2 > 0 &&
                        <button type='button' className='leftBtn2' onClick={() => {leftSlide(2); handleLeftClick(2)}}>
                            <i className="bi bi-arrow-left-circle" style={{fontSize:'30px', color:''}}></i>
                        </button>
                    }
                    
                    <div className='citySpotsBox'>
                        <ul className='citySpots' style={{marginLeft:`${slideMove2}px`}}>
                            {/* <img src='/img/1-1.jpg' className='spotsImg1 spotsAndStaysImg' onClick={() => setSpotModalOpen(1)}/> */}
                            {popularSpot.map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}} onClick={() => setSpotModalOpen(true)}>
                                    <img src={item.image} style={{width:'390px', height:'500px'}} className='citySpotImg' />
                                    <div>
                                        {/* <img src={}/> */}
                                        <span>{item.cityName}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 오른쪽 슬라이드 버튼 */}
                    {btnCount2 < 3 &&
                        <button type='button' className='rightBtn2' onClick={() => {rightSlide(2); handleRightClick(2);}}>
                            <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                </div>
            </div>
            {/* 평점순 */}
            <div className='staySortByRating'>
                <p className='staySortByRating_title'>평점순(수정할예정)</p>
                <div className='hotelRating_desc'>
                    {btnCount3 > 0 && 
                        <button type='button' className='leftBtn3' onClick={() => {leftSlide(3);  handleLeftClick(3);}}>
                            <i className="bi bi-arrow-left-circle" style={{fontSize:'30px', color:''}}></i>
                        </button>
                    }
                    <div className='hotelRatingBox'>
                        <ul className='hotelRating_each' style={{marginLeft:`${slideMove3}px`}}>
                            {hotelRating.slice(0,10).map((item) => (
                                <li key={item.id} className='hotelRating_each_sub' style={{cursor:'pointer'}}>
                                    <div className='ratingItemWrapper'>
                                        <img src='/img/1-1.jpg' alt={item.hotelName} className='hotelRatingImg' />
                                        <div className='ratingLabel'>
                                            <img src='/label.png' alt='imgLabel' className='labelImg'/>
                                            <span className='hotelRatingScore'>평점 : {item.score}</span>
                                        </div>
                                    </div>
                                    <div className='hotelRating_each_sub2'>
                                        <span style={{display:'inline-block', marginBottom:'10px'}}>{item.country} / {item.city}</span> <br/>
                                        <span style={{display:'inline-block', marginBottom:'10px'}}>{item.hotelName}</span> <br/>
                                        <span>{item.price.toLocaleString()}~</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {btnCount3 < 7 && 
                        <button type='button' className='rightBtn3' onClick={() => {rightSlide(3); handleRightClick(3);}}>
                            <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                    
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