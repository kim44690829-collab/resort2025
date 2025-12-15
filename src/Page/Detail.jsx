import './Detail.css';
import { useContext,useState,useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import cookie from 'js-cookie';
import { ResortDateContext } from '../Api/ResortDate';
import LeafletMap from '../Api/LeafletMap';


export default function Detail(){  
    const {id} = useParams();
    //호텔,객실 데이터  
    const {HotelData,RoomData} = useContext(ResortDateContext);
    //아이디값 비교
    const Hotel = HotelData.find((item)=>item.id === Number(id));
    //예외처리
    if(!Hotel) return <p>잠시만 기다려주세요...</p>
    //호텔이름 비교
    const Room = RoomData.filter((item)=>item.hotelName === Hotel.hotelName);
    //예외처리
    if(!Room) return <p>잠시만 기다려주세요...</p>
    
    console.log(Hotel);
    console.log(Room);
    //
    //호텔별점 이미지
    const[starImg, setStarImg] = useState([]);
    //객실당 평균별점 이미지
    const[starRoom, setStarRoom] = useState([]);


    useEffect(()=>{
        //해당호텔 별점 가져오기
        const score = Hotel.score;
        //별점 정수
        const scoreInt = Math.floor(score);
        //별점 소수
        const scoreFloat = Math.floor(score*10)/10 - scoreInt;
        //별점 빈칸
        const scoreZero = Math.floor(5 - scoreInt - scoreFloat);

        const star = [...starImg];

        for(let i=0; i<scoreInt; i++){
            star.push('/img/star-one.png');
            setStarImg(star);
        }
        if(scoreFloat>0){
            star.push('/img/star-half.png');
            setStarImg(star);
        }
        for(let j=0; j<scoreZero; j++){
            star.push('/img/star-zero.png');
            setStarImg(star);
        }

        //객실당 평점 구하기
        
        //객실당 평점합계
        const scoreSum = [];        

        for(let i=0; i<Room.length; i++){
            
            scoreSum[i] = 0;
            
            for(let j=0; j<Room[i].score.length; j++){
                scoreSum[i] += Room[i].score[j];
            }
        }

        //객실당 평점평균
        const scoreAvg = [];
        const roomStar = [];

        for(let i=0; i<scoreSum.length; i++){
            scoreAvg[i] = 0;
            scoreAvg[i] = Math.round(scoreSum[i] / Room[i].score.length);   

            const starTotal = 5;
            roomStar[i] = [];
            
            for(let k=0; k < scoreAvg[i]; k++){
                roomStar[i].push(['/img/star-one.png']);
            }

            for(let l=0; l < starTotal - scoreAvg[i]; l++){
                roomStar[i].push(['/img/star-zero.png']);
            }
        }

        setStarRoom(roomStar);

    },[id]);
  

    
    const [wish, setWish] = useState([]);

    useEffect(()=>{
        //찜목록 불러오기
        let wishList = JSON.parse(cookie.get('wishList') || '[]');          
        let now = Date.now();
        wishList = wishList.filter(item=>item.expires > now);
        cookie.set('wishList', JSON.stringify(wishList), {expires: 30, path:'/'});
        setWish(wishList);
        //console.log(wishList.length);
    },[]);
    //console.log(wish);

    //찜목록 쿠키 저장 및 삭제
    const wishHandler = () =>{
        let wishList = JSON.parse(cookie.get('wishList') || '[]');          
        let now = Date.now();

        wishList = wishList.filter(item=>item.expires > now);

        //이미 추가된 아이디가 있으면 삭제
        for(let i=0; i<wishList.length; i++){
            if(wishList[i].id === Number(id)){
                wishList = wishList.filter((item)=>item.id !== Number(id));
                cookie.set('wishList', JSON.stringify(wishList), {expires: 30, path:'/'});
                setWish(wishList);
                return;
            }
        }
        //갯수 50개 제한
        if(wishList.length >= 50){
            alert('찜은 50개까지만 담으실 수 있습니다.');
            return;
        }
        //30일간 보관(추가한 리스트 개별로)
        wishList.push({id: Number(id), expires: now + 30*24*60*60*1000});

        cookie.set('wishList', JSON.stringify(wishList), {expires: 30, path:'/'});   
        setWish(wishList);
    }

    //공유하기 버튼
    const shareClick = () =>{
        navigator.clipboard.writeText(`${window.location.origin}/detail/${id}`);
        alert("링크가 복사되었습니다!");
    }   
    //공유하기 버튼
    const addressCopy = () =>{
        navigator.clipboard.writeText(`${Hotel.city === 'Sokcho'?'대한민국, 강원도 속초시':Hotel.city === 'Gyeongju'?'대한민국, 경상북도 경주시':Hotel.city === 'Busan'?'대한민국, 부산시':Hotel.city === 'Gangneung'?'대한민국, 강원도 강릉시':Hotel.city === 'Yeosu'?'대한민국, 전라남도 여수시':Hotel.city === 'Daejeon'?'대한민국, 대전시':Hotel.city === 'Gwangju'?'대한민국, 광주시':Hotel.city === 'Jeju'?'대한민국, 제주도':Hotel.city === 'Pohang'?'대한민국, 경상북도 포항시':Hotel.city === 'Seoul'?'대한민국, 서울시':Hotel.city === 'Tokyo'?'일본, 도쿄':Hotel.city === 'Sapporo'?'일본, 훗카이도 삿포로':Hotel.city === 'LosAngeles'?'미국, 캘리포니아 로스앤젤레스':Hotel.city === 'NewYork'?'미국, 뉴욕':Hotel.city === 'Guam'?'미국, 괌':Hotel.city === 'Zhangjiajie'?'중국, 후난성 장가계':Hotel.city === 'Shanghai'?'중국, 상하이':Hotel.city === 'Rome'?'이탈리아, 로마':Hotel.city === 'Venice'?'이탈리아, 베네치아':Hotel.city === 'Paris'?'프랑스, 파리':null} ${Hotel.hotelName}`);
        alert("주소가 복사되었습니다!");
    }  

    //스크롤 내리면 오른쪽 부분 따라 내려오기
    const triggerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
                if (!triggerRef.current) return;

                //getBoundingClientRect().top => top으로 부터 얼마나 떨어졌는지 측정
                const top = triggerRef.current.getBoundingClientRect().top;
                setIsFixed(top <= 0);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
    }, []);

                            

    return(
        <section className="detail-wrap">
           <ul className="detail-img">
                {Hotel.img.map((img,index)=>(
                    <li key={index}>
                        <img src={img} alt={Hotel.hotelName} />
                    </li>
                ))}                
           </ul>
           <div className="detail-content">
                <div className="detail-left" ref={triggerRef}>
                    <div className="detail-title">
                            <div className="title-left">
                                <p className='hotelType'>{Hotel.type==='Hotel'?'호텔':Hotel.type==='Resort'?'리조트':Hotel.type==='GuestHouse'?'게스트하우스/비앤비':Hotel.type==='Condo'?'콘도':'캠핑장'}</p>
                                <h1>{Hotel.hotelName}</h1>
                                <p className='hotelCity'><i className="fa-solid fa-location-dot"></i> {Hotel.city === 'Sokcho'?'대한민국, 강원도 속초시':Hotel.city === 'Gyeongju'?'대한민국, 경상북도 경주시':Hotel.city === 'Busan'?'대한민국, 부산시':Hotel.city === 'Gangneung'?'대한민국, 강원도 강릉시':Hotel.city === 'Yeosu'?'대한민국, 전라남도 여수시':Hotel.city === 'Daejeon'?'대한민국, 대전시':Hotel.city === 'Gwangju'?'대한민국, 광주시':Hotel.city === 'Jeju'?'대한민국, 제주도':Hotel.city === 'Pohang'?'대한민국, 경상북도 포항시':Hotel.city === 'Seoul'?'대한민국, 서울시':Hotel.city === 'Tokyo'?'일본, 도쿄':Hotel.city === 'Sapporo'?'일본, 훗카이도 삿포로':Hotel.city === 'LosAngeles'?'미국, 캘리포니아 로스앤젤레스':Hotel.city === 'NewYork'?'미국, 뉴욕':Hotel.city === 'Guam'?'미국, 괌':Hotel.city === 'Zhangjiajie'?'중국, 후난성 장가계':Hotel.city === 'Shanghai'?'중국, 상하이':Hotel.city === 'Rome'?'이탈리아, 로마':Hotel.city === 'Venice'?'이탈리아, 베네치아':Hotel.city === 'Paris'?'프랑스, 파리':null}</p>
                                {starImg.map((star,index)=>(
                                    <img src={star} alt="score" key={index} />
                                ))}
                            </div>
                            <div className="title-right">
                                {Hotel.discount === 1 ? (
                                    <>
                                        <p className='discount'><span className='red'>10% 할인</span> <span className='origin-price'>{Hotel.price.toLocaleString()}원</span></p>
                                        <p className='final-price'>{(Hotel.price - (Hotel.price*0.1)).toLocaleString()}원<span>/1박</span></p>
                                    </>
                                ):(
                                    <>
                                        <p className='discount'><span className='red'>회원가입시 10,000원 할인쿠폰</span></p>
                                        <p className='final-price'>{(Hotel.price).toLocaleString()}원<span>/1박</span></p>
                                    </>
                                )}
                                <div className="btns">
                                    <button type='button' onClick={wishHandler}>
                                        <i className="fa-solid fa-heart" style={
                                        wish.find((item) => item.id === Number(id)) ?
                                            {color:'#f94239'}
                                        :
                                            {color:'#6b6b6b'}
                                        
                                        }></i>
                                    </button>
                                    <button type='button' onClick={shareClick}>
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </button>
                                    <button type='button'>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </button>                   
                                </div>
                            </div>
                    </div>

                    <div className="service">
                        <p className='service-title'>서비스 및 부대시설</p>
                        <div className="service-icon">
                            {Hotel.publicService.map((item,index)=>(
                                <span key={index} className='icon'>
                                    {item === '피트니스' ? <i className="fa-solid fa-dumbbell"> <span>피트니스</span></i>  : item === '레스토랑' ? <i className="fa-solid fa-utensils"> <span>레스토랑</span></i> : item === '사우나' ? <i className="fa-solid fa-hot-tub-person"> <span>사우나</span></i> : item === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item === '야외수영장' ? <i className="fa-solid fa-person-swimming"> <span>야외수영장</span></i> : item === '편의점' ? <i className="fa-solid fa-store"> <span>편의점</span></i> : item === '바' ?  <i className="fa-solid fa-wine-glass"> <span>바</span></i> : item === '라운지' ? <i className="fa-solid fa-couch"> <span>라운지</span></i> : item === '엘리베이터' ? <i className="fa-solid fa-elevator"> <span>엘리베이터</span></i> : item === '비즈니스센터' ? <i className="fa-solid fa-briefcase"> <span>비즈니스센터</span></i> : item === '건조기' ? <i className="fa-solid fa-sun"> <span>건조기</span></i> : item === '탈수기' ? <i className="fa-solid fa-droplet"> <span>탈수기</span></i>  : item === '바베큐' ? <i className="fa-solid fa-drumstick-bite"> <span>바베큐</span></i> : null}
                                </span>
                            ))}
                            {Hotel.roomservice.map((item,index)=>(
                                <span key={index} className='icon'>
                                    {item === '무선인터넷' ? <i className="fa-solid fa-wifi"> <span>무선인터넷</span></i> : item === '욕실용품' ? <i className="fa-solid fa-soap"> <span>욕실용품</span></i> : item === '샤워실' ? <i className="fa-solid fa-shower"> <span>샤워실</span></i> : item === 'TV' ? <i className="fa-solid fa-tv"> <span>텔레비전</span></i> : item === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item === '욕조' ? <i className="fa-solid fa-bath"> <span>욕조</span></i> : item === '객실내취사' ? <i className="fa-solid fa-kitchen-set"> <span>객실내취사</span></i> : item === '금연' ? <i className="fa-solid fa-ban-smoking"> <span>금연</span></i> : item === '에어컨' ? <i className="fa-solid fa-fan"> <span>에어컨</span></i> : item === '드라이기' ? <i className="fa-solid fa-wind"> <span>드라이기</span></i> : item === '냉장고' ? <i className="fa-solid fa-snowflake"> <span>냉장고</span></i> : item === '개인콘센트' ? <i className="fa-solid fa-plug"> <span>개인콘센트</span></i> : item === '전기주전자' ? <i className="fa-solid fa-blender"> <span>전기주전자</span></i>:null}
                                </span>
                            ))}
                                {Hotel.otherService.map((item,index)=>(
                                <span key={index} className='icon'>
                                    {item === '스프링클러' ? <i className="fa-solid fa-fire-extinguisher"> <span>스프링클러</span></i> : item === '반려견동반' ? <i className="fa-solid fa-dog"> <span>반려견동반</span></i> : item === '카드결제' ? <i className="fa-regular fa-credit-card"> <span>카드결제</span></i> : item === '짐보관가능' ? <i className="fa-solid fa-cart-flatbed-suitcase"> <span>짐보관가능</span></i> : item === '개인사물함' ? <i className="fa-solid fa-lock"> <span>개인사물함</span></i> : item === '픽업서비스' ? <i className="fa-solid fa-taxi"> <span>픽업서비스</span></i> : item === '캠프파이어' ?  <i className="fa-solid fa-campground"> <span>캠프파이어</span></i> : item === '무료주차' ? <i className="fa-solid fa-square-parking"> <span>무료주차</span></i> : item === '조식제공' ? <i className="fa-solid fa-bowl-food"> <span>조식제공</span></i> : null}
                                </span>
                            ))}                                
                        </div>
                    </div>
                    
                    <div className="room-select">
                        <p className='room-title'>객실 선택</p>
                        <ul>
                            {Room.map((item,index)=>(
                                <li key={index}>
                                    <div className="room-left">
                                        <img src={`/img/${Hotel.id}-${index+2}.jpg`} alt={Hotel.hotelName} />
                                    </div>
                                    <div className="room-right">
                                        <h2>{item.roomName}</h2>
                                        <div className="room-intro">
                                            <div className="intro-left">
                                                {starRoom[index] && starRoom[index].map((star, ind) => (
                                                    <img src={star} alt="roomScore" key={ind} />
                                                ))}
                                            </div>
                                            <div className="intro-right">
                                                <button type='button'>상세정보 &gt;</button>
                                            </div>
                                        </div>
                                        <div className="room-info">
                                            <p><i className="fa-solid fa-ban"></i> <span className='bold'>무료 취소불가</span></p>
                                            <p><i className="fa-regular fa-clock"></i> 체크인 <span className='bold'>15:00</span> ~ 체크아웃 <span className='bold'>11:00</span></p>
                                            <p><i className="fa-solid fa-user-group"></i> 최대 투숙객 수 : <span className='bold'>{item.maxOccupancy}명</span></p>
                                            <p><i className="fa-solid fa-tag"></i> <span className='bold'>할인혜택 :</span>
                                                <span className='red'>
                                                    {Hotel.discount === 1 ? 
                                                        '10%할인 이벤트 중'
                                                    :
                                                        '회원가입시 10,000원 할인쿠폰'
                                                    }
                                                </span>
                                            </p>
                                            <div className="room-pay">
                                                {Hotel.discount === 1 ? 
                                                    <>
                                                        <span className='origin-price'>{(Hotel.price + index * 12000).toLocaleString()}원</span>
                                                        <span className='final-price'>{((Hotel.price + index * 12000) - ((Hotel.price + index * 12000)*0.1)).toLocaleString()}원<span>/1박</span></span>
                                                    </>                                                    
                                                :                                                    
                                                    <>
                                                        <span className='final-price'>{(Hotel.price + index * 12000).toLocaleString()}원<span>/1박</span></span>
                                                    </>
                                                }
                                                <button type='button' className='cart'><i className="fa-solid fa-basket-shopping"></i></button>
                                                <button type='button' className='pay'>예약하기</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hotel-map">
                        <p className='map-title'>위치안내</p>
                        <LeafletMap city={Hotel.city} hotelName={Hotel.hotelName} style={{width:'100%',height:'400px',border: '1px solid #e7e7e7',borderRadius:'10px'}}/>
                        <p className='map-address'>
                            <i className="fa-solid fa-location-dot"></i>&nbsp;
                            {Hotel.city === 'Sokcho'?'대한민국, 강원도 속초시':Hotel.city === 'Gyeongju'?'대한민국, 경상북도 경주시':Hotel.city === 'Busan'?'대한민국, 부산시':Hotel.city === 'Gangneung'?'대한민국, 강원도 강릉시':Hotel.city === 'Yeosu'?'대한민국, 전라남도 여수시':Hotel.city === 'Daejeon'?'대한민국, 대전시':Hotel.city === 'Gwangju'?'대한민국, 광주시':Hotel.city === 'Jeju'?'대한민국, 제주도':Hotel.city === 'Pohang'?'대한민국, 경상북도 포항시':Hotel.city === 'Seoul'?'대한민국, 서울시':Hotel.city === 'Tokyo'?'일본, 도쿄':Hotel.city === 'Sapporo'?'일본, 훗카이도 삿포로':Hotel.city === 'LosAngeles'?'미국, 캘리포니아 로스앤젤레스':Hotel.city === 'NewYork'?'미국, 뉴욕':Hotel.city === 'Guam'?'미국, 괌':Hotel.city === 'Zhangjiajie'?'중국, 후난성 장가계':Hotel.city === 'Shanghai'?'중국, 상하이':Hotel.city === 'Rome'?'이탈리아, 로마':Hotel.city === 'Venice'?'이탈리아, 베네치아':Hotel.city === 'Paris'?'프랑스, 파리':null}
                            &nbsp;{Hotel.hotelName}
                            <button type='button' onClick={addressCopy}>주소복사</button>
                        </p>
                    </div>
                    <div className="hotel-score">
                        <p className="score-title">이용자 평점</p>
                        <div className="score-wrap">
                            <div className="score-left">
                                <p className='tit'>이용자 평균 평점</p>
                                <p className='star'>
                                    {starImg.map((star,index)=>(
                                        <img src={star} alt="score" key={index} />
                                    ))}
                                </p>
                                <p className='score'>{Hotel.score}<span>/5</span></p>
                            </div>
                            <div className="score-middle">
                                <p className='tit'>전체 평점 수</p>
                                <p className='icon'><i className="fa-solid fa-user-group"></i></p>
                                <p className='count'>{(Hotel.scoreCount).toLocaleString()}</p>
                            </div>
                            <div className="score-right">
                                <p className='tit'>평점 비율</p>
                                <div className="graph">
                                    <div className="bar-wrap">
                                        <span>5점</span>
                                        <div className="bar-width">
                                            <div className="bar"></div>
                                        </div>
                                    </div>
                                    <div className="bar-wrap">
                                        <span>4점</span>
                                        <div className="bar-width">
                                            <div className="bar"></div>
                                        </div>
                                    </div>
                                    <div className="bar-wrap">
                                        <span>3점</span>
                                        <div className="bar-width">
                                            <div className="bar"></div>
                                        </div>
                                    </div>
                                    <div className="bar-wrap">
                                        <span>2점</span>
                                        <div className="bar-width">
                                            <div className="bar"></div>
                                        </div>
                                    </div>
                                    <div className="bar-wrap">
                                        <span>1점</span>
                                        <div className="bar-width">
                                            <div className="bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{height:'500px'}}></div>
                </div>
                <div className={`detail-right ${isFixed ? 'fixed' : null}`}>
                    <div className="hotel-day">
                        <p className='day-wrap'>
                            <span className='day-tit'>예약일</span>
                            <span className='day-txt'>2025.12.16(화)</span>
                        </p>
                        <p className='day-wrap'>
                            <span className='day-tit'>종료일</span>
                            <span className='day-txt'>2025.12.17(수)</span>
                        </p>
                        <button type='button'>예약일 변경</button>
                    </div>
                    <div className="hotel-headcount">
                        <p className='head-tit'>예약인원 선택</p>
                        <div className="head-select">
                            <span className='head-txt'>인원</span>
                            <div className="btns">
                                <button type='button'>-</button>
                                <span>0</span>
                                <button type='button'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}