import './Detail.css';
import { useContext,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cookie from 'js-cookie';
import { ResortDateContext } from '../Api/ResortDate';


export default function Detail(){  
    //호텔,객실 데이터  
    const {HotelData,RoomData} = useContext(ResortDateContext);
    //아이디값 비교
    const {id} = useParams();
    const Hotel = HotelData.find((item)=>item.id === Number(id));
    const Room = RoomData.filter((item)=>item.hotelName === Hotel.hotelName);
    
    console.log(Hotel);
    console.log(Room);

    //별점이미지
    const[starImg, setStarImg] = useState([]);

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


    //예외처리
    if(!Hotel) return <p>잠시만 기다려주세요...</p>

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
                <div className="detail-left">
                    <div className="detail-title">
                            <div className="title-left">
                                <p className='hotelType'>{Hotel.type==='Hotel'?'호텔':Hotel.type==='Resort'?'리조트':Hotel.type==='GuestHouse'?'게스트하우스/비앤비':Hotel.type==='Condo'?'콘도':'캠핑장'}</p>
                                <h1>{Hotel.hotelName}</h1>
                                <p className='hotelCity'><i class="fa-solid fa-location-dot"></i> {Hotel.city === 'Sokcho'?'대한민국, 강원도 속초시':Hotel.city === 'Gyeongju'?'대한민국, 경상북도 경주시':Hotel.city === 'Busan'?'대한민국, 부산시':Hotel.city === 'Gangneung'?'대한민국, 강원도 강릉시':Hotel.city === 'Yeosu'?'대한민국, 전라남도 여수시':Hotel.city === 'Daejeon'?'대한민국, 대전시':Hotel.city === 'Gwangju'?'대한민국, 광주시':Hotel.city === 'Jeju'?'대한민국, 제주도':Hotel.city === 'Pohang'?'대한민국, 경상북도 포항시':Hotel.city === 'Seoul'?'대한민국, 서울시':Hotel.city === 'Tokyo'?'일본, 도쿄':Hotel.city === 'Sapporo'?'일본, 훗카이도 삿포로':Hotel.city === 'LosAngeles'?'미국, 캘리포니아 로스앤젤레스':Hotel.city === 'NewYork'?'미국, 뉴욕':Hotel.city === 'Guam'?'미국, 괌':Hotel.city === 'Zhangjiajie'?'중국, 후난성 장가계':Hotel.city === 'Shanghai'?'중국, 상하이':Hotel.city === 'Rome'?'이탈리아, 로마':Hotel.city === 'Venice'?'이탈리아, 베네치아':Hotel.city === 'Paris'?'프랑스, 파리':null}</p>
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
                                        <p className='final-price'>{(Hotel.price - (Hotel.price*0.1)).toLocaleString()}원<span>/1박</span></p>
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
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </button>
                                    <button type='button'>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </button>                   
                                </div>
                            </div>
                    </div>
                    
                    <div className="room-select">
                            <ul>
                                {/* {Room.map((item,index)=>(
                                    <li key={index}>{item.roomName}
                                        <img src={`/img/${Hotel.id}-${index+2}.jpg`} alt="" />
                                    </li>
                                ))} */}
                            </ul>
                    </div>
                </div>
                <div className="detail-right">

                </div>
            </div>
        </section>
    )
}