import '../Page/Main.css';
import { useContext, useState, useEffect, use } from 'react';
import cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';
import 'leaflet/dist/leaflet.css';
import Calendar from './Calendar';

export default function Main(){    
    // 2025-12-19 병합2
    // 호텔, 객실데이터 useContext로 가져오는 훅
    const {RoomData, HotelData, DayData, setDayData} = useContext(ResortDateContext);
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
    const [spotModalOpen, setSpotModalOpen] = useState(null);
    const [spotModalOpen2, setSpotModalOpen2] = useState(0);
    // 도시별 호텔을 담을 변수
    const [cityAndHotel, setCityAndHotel] = useState([]);

    // 슬라이드 상태저장 변수
    // 인기 호텔 슬라이드
    const [slideMove1, setSlideMove1] = useState(0)
    // 관광명소 슬라이드
    const [slideMove2, setSlideMove2] = useState(0)
    // 평점 슬라이드
    const [slideMove3, setSlideMove3] = useState(0)
    // 중간 배너 슬라이드
    const [slideMove4, setSlideMove4] = useState(0)

    // 관광명소 마스크
    const [citySpotMask, setCitySpotMask] = useState(null)

    // 달력
    const [openC, setOpenC] = useState(false)
    // const [openC, setOpenC] = useState(1)
    // 선택한 날짜를 담을 변수
    // const [DayData,setDayData] = useState([])

    // 호텔 타입별 분류 / 마스크
    const [hotelTypeMask, setHotelTypeMask] = useState(null);
    // 호텔 타입 클릭시 모달
    const [htypeModalOpen, sethTypeModalOpen] = useState(null);
    const [htypeModalOpen2, sethTypeModalOpen2] = useState(0);
    // 타입별 호텔을 담을 변수
    const [typeAndHotel, setTypeAndHotel] = useState([]);

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
        {id:1, image:'/mainImg/b-1.jpg', cityName: '서울', cityInfo:'전통 문화유산과 현대적인 도시 문화가 한곳에 공존하는 도시!'},
        {id:2, image:'/mainImg/c-1.jpg', cityName: '제주도', cityInfo:'아름다운 자연경관과 휴양·체험 관광을 동시에 즐길 수 있는 섬!'},
        {id:3, image:'/mainImg/d-1.jpg', cityName: '부산', cityInfo:'바다와 도심이 어우러진 해양 관광! 맛있는 먹거리까지!'},
        {id:4, image:'/mainImg/e-1.jpg', cityName: '삿포로', cityInfo:'사계절 뚜렷한 자연! 특히 겨울의 축제는 일품!'},
        {id:5, image:'/mainImg/f-1.jpg', cityName: '뉴욕', cityInfo:'세계적인 문화·예술·엔터테인먼트를 경험할 수 있습니다!'},
        {id:6, image:'/mainImg/g-1.jpg', cityName: '파리', cityInfo:'한 도시에 역사적인 건축물과 예술적 분위기를 한번에!'},
    ];

    // 호텔 타입 모달 - map
    useEffect(() => {
        const hotel_modal1 = HotelData.filter((item) => 
            (item.type === 'Hotel' ? '호텔' : 
            item.type === 'Resort' ? '리조트' : 
            item.type === 'Condo' ? '콘도' : 
            item.type === 'GuestHouse' ? '게스트 하우스' : 
            item.type === 'Camping' ? '캠핑' : 
            null ) === hotelType[htypeModalOpen2].typeName)
        setTypeAndHotel(hotel_modal1)
    }, [htypeModalOpen])

    // 관광명소 호텔 모달 - map
    useEffect(() => {
        const hotel_modal2 = HotelData.filter((item) => 
            (item.city === 'Seoul' ? '서울' : 
            item.city === 'Jeju' ? '제주도' : 
            item.city === 'Busan' ? '부산' : 
            item.city === 'Sapporo' ? '삿포로' : 
            item.city === 'NewYork' ? '뉴욕' : 
            item.city === 'Paris' ? '파리' : 
            null )=== popularSpot[spotModalOpen2].cityName)
        setCityAndHotel(hotel_modal2)
    }, [spotModalOpen])

    // 호텔 평점순으로 재배열
    const hotelRating = [...HotelData].sort((a,b) => b.score - a.score);
    
    // 버튼을 클릭한 횟수를 저장하는 상태변수
    const [btnCount1, setBtnCount1] = useState(0);
    const [btnCount2, setBtnCount2] = useState(0);
    const [btnCount3, setBtnCount3] = useState(0);

    // 왼쪽, 오른쪽을 클릭했을때 조건을 만족하면 버튼을 없애는 함수
    const handleRightClick = (num) => {
        if(btnCount1 < 6 && num === 1){
            setBtnCount1(prev => prev + 1)
        }else if(btnCount2 < 3 && num === 2){
            setBtnCount2(prev => prev + 1)
        }else if(btnCount3 < 7 && num === 3){
            setBtnCount3(prev => prev + 1)
        }else{
            null
        }
    }

    const handleLeftClick = (num) => {
        if(btnCount1 > 0 && num === 1){
            setBtnCount1(prev => prev - 1)
        }else if(btnCount2 > 0 && num === 2){
            setBtnCount2(prev => prev - 1)
        }else if(btnCount3 > 0 && num === 3){
            setBtnCount3(prev => prev - 1)
        }else{
            null
        }
    }


    // 슬라이드 함수
    const leftSlide = (num) => {
        if(slideMove1 < 0 && num === 1){
            setSlideMove1(slideMove1 + 300)
            // console.log(slideMove1);
        }else if(slideMove2 < 0 && num === 2){
            setSlideMove2(slideMove2 + 400)
        }else if(slideMove3 < 0 && num === 3){
            setSlideMove3(slideMove3 + 400)
        }else if(slideMove4 < 0 && num === 4){
            setSlideMove4(slideMove4 + 635)
        }else{
            null
        }
    }
    const rightSlide = (num) => {
        if(slideMove1 > -1800 && num === 1){
            setSlideMove1(slideMove1 - 300)
        }else if(slideMove2 > -1200 && num === 2){
            setSlideMove2(slideMove2 - 400)
        }else if(slideMove3 > -4000 && num === 3){
            setSlideMove3(slideMove3 - 400)
        }else if(slideMove4 > -5715 && num === 4){
            setSlideMove4(slideMove4 - 635)
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

    // input 인원수 함수
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
    const closeUl1 = (e) => {
        if (!e.target.closest('.hotelModal')) {
            setIsInput(false);
        }

        if (
            !e.target.closest('.CalendarModal') &&
            !e.target.closest('.calenertBtn')
        ) {
            setOpenC(false);
        }
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return(
        <div className='main_container' onClick={closeUl1}>
            {/* 베너 박스 */}
            <div className='mainImgBenner'>
                {/* 메인 베너 이미지 */}
                <div className='mainBanner'>
                    <img src='../public/bennerImg/benner2.jpg' style={{width:'1920px', height:'600px'}} />
                    <div className='bennerMask'></div>
                </div>
                <h1 className='searchTitle'>여행을 고민중이라면?</h1>
                {/* 국내, 해외 숙박 검색 */}
                <div className='hotelSearch'>
                    
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
                        
                        <button type='button' onClick={() => setOpenC(!openC)} className='calenertBtn'>
                            <i className="fa-solid fa-calendar"></i>
                            <span style={{marginRight:'5px'}}>{DayData.length < 2 ? `${year}-${month}-${date} - ${year}-${month}-${date + 1} ` : `${DayData[0]} - ${DayData[1]}`}</span>
                        </button>
                        <div className='CalendarModal'>
                            {openC && <Calendar setDayData={setDayData}/>}
                        </div>
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
                        <img src={item.image} style={{width:'231px', height:'240px', borderRadius:'10px'}} onMouseOver={() => setHotelTypeMask(item.id)} />
                        <span className='HotelImg'>{item.typeName}</span>
                        {hotelTypeMask === item.id && 
                        <div className='hTypeMask'  onMouseLeave={() => setHotelTypeMask(null)} onClick={() => {sethTypeModalOpen(item.id); sethTypeModalOpen2(item.id - 1)}}></div>
                        }
                        {/* 호텔 타입 클릭 후 모달 */}
                        {htypeModalOpen === item.id && 
                        <div className='hotelType_overlay' onClick={()=>{sethTypeModalOpen(null); setSpotModalOpen(0);}}>
                            <div className='hTypeModal'>
                                <h1 style={{textAlign:'center', margin:'30px', fontSize:'30px'}}>{item.typeName}</h1>
                                <div className='hTypeModal_hotel'>
                                    <ul className='Modal_hType_Ul'>
                                        {typeAndHotel.map((item) => (
                                            <li key={item.id} className='Modal_hType_Li'>
                                                <Link to = {`/detail/${item.id}`}>
                                                    <div>
                                                        <img src = '/img/1-1.jpg' alt={item.hotelName} className='Modal_hType_Img' />
                                                    </div>
                                                    <div className='Modal_hTypeText'>
                                                        <p className='Modal_hTypeText1'>{item.type}</p>
                                                        <p className='Modal_hTypeText2'>{item.hotelName}</p>
                                                        {item.discount === 1 ? (
                                                            <>
                                                                <p className='discount1'><span className='red1'>10% 할인</span> <span className='origin-price1'>{item.price.toLocaleString()}원</span></p>
                                                                <p className='final-price1'>{(item.price - (item.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                                            </>
                                                        ):(
                                                            <>
                                                                <p className='discount1'><span className='red1'>회원가입시 10,000원 할인쿠폰</span></p>
                                                                <p className='final-price1'>{(item.price).toLocaleString()}원<span>/1박</span></p>
                                                            </>
                                                        )}
                                                    </div>
                                                </Link>
                                                <button type='button' className='wishBtn1'>
                                                    <i className="fa-solid fa-heart"></i>
                                                </button>
                                            </li> 
                                        ))}
                                    </ul>
                                </div>
                                <button type='button' onClick={()=>{setSpotModalOpen(null)}} className='hTypeModal_Xbtn'>
                                    <i class="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                        }  
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
                                    <li key={item.id} style={{cursor:'pointer'}} className='popularAccomSub3'>
                                        <Link to = {`/detail/${item.id}`}>
                                            <img src={item.img[0]} alt={item.hotelName} className='popularAccomMainImg' />
                                            <p className='popularAccom_type'>{item.type}</p>
                                            <p className='popularAccom_name'>{item.hotelName}</p>
                                            <div className='popularAccom_review'>
                                                <span className='popularAccom_score'>
                                                    <img src='/img/star-one.png' alt='star' style={{width:'15px', height:'15px'}}/>
                                                    <span className='starScore'>{item.score}</span>
                                                </span>
                                                <span className='popularAccom_count'>{item.scoreCount.toLocaleString()}명 참여</span>
                                            </div>
                                            {item.discount === 1 ? (
                                                <>
                                                    <p className='discount'><span className='red'>10% 할인</span> <span className='origin-price'>{item.price.toLocaleString()}원</span></p>
                                                    <p className='final-price'>{(item.price - (item.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                                </>
                                            ):(
                                                <>
                                                    <p className='discount'><span className='red'>회원가입시 10,000원 할인쿠폰</span></p>
                                                    <p className='final-price'>{(item.price).toLocaleString()}원<span>/1박</span></p>
                                                </>
                                            )}
                                        </Link>
                                        <button type='button' className='wishBtn2'>
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                    </li>
                            ))}
                            {HotelData.slice(61,64).map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}} className='popularAccomSub3'>
                                    <Link to = {`/detail/${item.id}`}>
                                        <img src='/img/1-1.jpg' alt={item.hotelName} className='popularAccomMainImg' />
                                        <p className='popularAccom_type'>{item.type}</p>
                                        <p className='popularAccom_name'>{item.hotelName}</p>
                                        <div className='popularAccom_review'>
                                            <span className='popularAccom_score'>
                                                <img src='/img/star-one.png' alt='star' style={{color:'red'}}/>
                                                <span className='starScore'>{item.score}</span>
                                            </span>
                                            <span className='popularAccom_count'>{item.scoreCount.toLocaleString()}명 참여</span>
                                        </div>
                                        {item.discount === 1 ? (
                                            <>
                                                <p className='discount'><span className='red'>10% 할인</span> <span className='origin-price'>{item.price.toLocaleString()}원</span></p>
                                                <p className='final-price'>{(item.price - (item.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                            </>
                                        ):(
                                            <>
                                                <p className='discount'><span className='red'>회원가입시 10,000원 할인쿠폰</span></p>
                                                <p className='final-price'>{(item.price).toLocaleString()}원<span>/1박</span></p>
                                            </>
                                        )}
                                    </Link>
                                    <button type='button' className='wishBtn2'>
                                        <i className="fa-solid fa-heart"></i>
                                    </button>
                                </li>
                            ))}
                            {HotelData.slice(100,103).map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}} className='popularAccomSub3'>
                                    <Link to = {`/detail/${item.id}`}>
                                        <img src='/img/1-1.jpg' alt={item.hotelName} className='popularAccomMainImg' />
                                        <p className='popularAccom_type'>{item.type}</p>
                                        <p className='popularAccom_name'>{item.hotelName}</p>
                                        <div className='popularAccom_review'>
                                            <span className='popularAccom_score'>
                                                <img src='/img/star-one.png' alt='star' style={{color:'#fff'}}/>
                                                <span className='starScore'>{item.score}</span>
                                            </span>
                                            <span className='popularAccom_count'>{item.scoreCount.toLocaleString()}명 참여</span>
                                        </div>
                                        {item.discount === 1 ? (
                                            <>
                                                <p className='discount'><span className='red'>10% 할인</span> <span className='origin-price'>{item.price.toLocaleString()}원</span></p>
                                                <p className='final-price'>{(item.price - (item.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                            </>
                                        ):(
                                            <>
                                                <p className='discount'><span className='red'>회원가입시 10,000원 할인쿠폰</span></p>
                                                <p className='final-price'>{(item.price).toLocaleString()}원<span>/1박</span></p>
                                            </>
                                        )}
                                    </Link>
                                    <button type='button' className='wishBtn2'>
                                        <i className="fa-solid fa-heart"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 오른쪽 슬라이드 버튼 */}
                    {btnCount1 < 6 && 
                        <button type='button' className='rightBtn1' onClick={() => {rightSlide(1); handleRightClick(1);}}>
                            <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                </div>
            </div>
            {/* EcoStay 회원만의 특별한 혜택 */}
            <div className='EcoMember'>
                <img src='middleBenner.jpg' alt='middleBenner' />
                <div className='EcoMemberInfo'>
                    <p className='EcoMemberInfo-1'><span className='EcoMemberInfo-1' style={{fontWeight:'600', fontSize:'40px'}}>EcoMembers</span> 할인와 함께<br/> 특별한 여행 해보세요!</p>
                    <p className='EcoMemberInfo-2'>오직 EcoStay 회원에게만의 특별한 혜택!</p>
                </div>
                <div className='EcoMemberHotel'>
                    <button type='button' className='leftBtn4' onClick={() => leftSlide(4)}>
                        <i className="bi bi-arrow-left-circle" style={{fontSize:'30px'}}></i>
                    </button>
                    <div className='EcoMemberUlBox'>
                        <ul className='EcoMemberHotelAll' style={{marginLeft:`${slideMove4}px`}}>
                            {HotelData.slice(0,10).map((item) => (
                            <li key={item.id} className='EcoMemberHotelAllLi'>
                                <Link to = {`/detail/${item.id}`} className='EcoMemberA'>
                                    <img src={item.img[0]} alt={item.hotelName} style={{width:'285px', height:'230px',borderRadius:'10px 0 0 10px'}}/>
                                    <div className='EcoMemberHotelAll-2'>
                                        <span className='bennerType'>{item.type}</span><br/>
                                        <p className='bennerClub'>[EcoMembers]</p>
                                        <span className='bennerHotelName'>{item.hotelName}</span>
                                        <p className='bennerText'>- 가족여행 추천</p>
                                        <p className='bennerText'>- 10% 할인</p>
                                        <span className='bennerPrice1'>{(item.price - item.price * 0.1).toLocaleString()}</span> <span className='bennerPrice1-1'>원 ~</span>
                                        <span className='bennerPrice2'>{item.price}원</span><span className='bennerPrice2-1'>~</span> 
                                    </div>
                                </Link>
                            </li> 
                            ))}
                        </ul>
                    </div>
                    <button type='button' className='rightBtn4' onClick={() => rightSlide(4)}>
                        <i className="bi bi-arrow-right-circle" style={{fontSize:'30px'}}></i>
                    </button>
                </div>
            </div>
            {/* 관광명소 - 근처 숙소 */}
            <div className='spotsAndStays'>
                <p className='spotsAndStaysTitle'>관광명소 - 근처 숙소(수정할예정)</p>
                <div className='spotsAndStaysAll'>
                    {/* 왼쪽 슬라이드 버튼 */}
                    {btnCount2 > 0 &&
                        <button type='button' className='leftBtn2' onClick={() => {leftSlide(2); handleLeftClick(2)}}>
                            <i className="bi bi-arrow-left-circle" style={{fontSize:'30px'}}></i>
                        </button>
                    }
                    <div className='citySpotsBox'>
                        <ul className='citySpots' style={{marginLeft:`${slideMove2}px`}}>
                            {popularSpot.map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}} className='SpotsWrap' >
                                    <img src={item.image} style={{width:'390px', height:'500px'}} className='citySpotImg' onMouseOver={() => setCitySpotMask(item.id)}/>
                                    {/* 마스크 */}
                                    {citySpotMask === item.id && 
                                    < div className='SpotsMask'  onMouseLeave={() => setCitySpotMask(null)} onClick={() => {setSpotModalOpen(item.id); setSpotModalOpen2(item.id - 1)}}>
                                        <p className='maskCity'>{item.cityName}</p>
                                        <p className='maskCityInfo'>{item.cityInfo}</p>
                                    </div>}
                                    {/* 관광명소 클릭 후 모달 */}
                                    {spotModalOpen === item.id && 
                                    <div className='overlay' onClick={()=>{setSpotModalOpen(null); setSpotModalOpen2(0);}}>
                                        <div className='spotsModal'>
                                            <div className='spotsModal_in'>
                                                <img src={item.image} alt={item.cityName} className='modalImg'/>
                                            </div>
                                            <div className='spotsModal_hotel'>
                                                <ul className='Modal_hotel_Ul'>
                                                    {cityAndHotel.map((item) => (
                                                        <li key={item.id} className='Modal_hotel_Li'>
                                                            <Link to = {`/detail/${item.id}`} className='hotelLink'>
                                                            <div>
                                                                <img src = '/img/1-1.jpg' alt={item.hotelName} className='Modal_hotel_Img' />
                                                            </div>
                                                            <div className='Modal_hotelText'>
                                                                <p className='Modal_hotelText1'>{item.type}</p>
                                                                <p className='Modal_hotelText2'>{item.hotelName}</p>
                                                                {item.discount === 1 ? (
                                                                    <>
                                                                        <p className='discount2'><span className='red2'>10% 할인</span> <span className='origin-price2'>{item.price.toLocaleString()}원</span></p>
                                                                        <p className='final-price2'>{(item.price - (item.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                                                    </>
                                                                ):(
                                                                    <>
                                                                        <p className='discount2'><span className='red2'>회원가입시 10,000원 할인쿠폰</span></p>
                                                                        <p className='final-price2'>{(item.price).toLocaleString()}원<span>/1박</span></p>
                                                                    </>
                                                                )}
                                                            </div>
                                                            </Link>
                                                            <button type='button' className='wishBtn3'>
                                                                <i className="fa-solid fa-heart"></i>
                                                            </button>
                                                        </li> 
                                                    ))}
                                                </ul>
                                            </div>
                                            <button type='button' onClick={()=>{setSpotModalOpen(null)}} className='spotModal_Xbtn'>
                                                <i class="fa-solid fa-x"></i>
                                            </button>
                                        </div>
                                    </div>
                                    }
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
                                    <Link to = {`/detail/${item.id}`}>
                                        <div className='ratingItemWrapper'>
                                            <img src='/img/5-1.jpg' alt={item.hotelName} className='hotelRatingImg' />
                                            <div className='ratingLabel'>
                                                <img src='/label.png' alt='label'/>
                                                <span className='hotelRatingScore'>
                                                    고객<br/> 평점<br/>{item.score >= 5 ? '5.0' : item.score}
                                                </span>
                                            </div>
                                            <div className='hotelRating_each_sub2'>
                                                <span style={{display:'inline-block', marginBottom:'10px', fontSize:'14px', color:'#42799b'}}>{item.country} / {item.city}</span> <br/>
                                                <span style={{display:'inline-block', marginBottom:'10px', fontSize:'22px'}}>{item.hotelName}</span> <br/>
                                                <span style={{fontWeight:'700', marginLeft:'130px', fontSize:'18px'}}>{item.price.toLocaleString()} ~</span>
                                            </div>
                                        </div>
                                    </Link>
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
        </div>
    )
}