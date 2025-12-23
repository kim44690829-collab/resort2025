import './Wish.css';
import { useEffect,useContext, useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';
import Calendar from './Calendar';

export default function Wish(){
    const navigate = useNavigate();

    const {RoomData, HotelData,DayData,wish,wishStar,wishArray,wishHandler,setPayHead,setPayRoom} = useContext(ResortDateContext);


    //달력 
    const [Cal, setCal] = useState(false);

    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()


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


    //객실 인원수 버튼
    const [head, setHead] = useState(1);

    ////플러스 버튼 클릭
    const plusClick = () =>{
        let copyHead = head;
        if(copyHead === 30){
            copyHead = 30;
        }else{
            copyHead++;
        }
        setHead(copyHead);
    }

    //마이너스 버튼 클릭
    const minusClick = () =>{
        let copyHead = head;
        if(copyHead === 1){
            copyHead = 1;
        }else{
            copyHead--;
        }
        setHead(copyHead);
    }


    //검색버튼 클릭여부
    const [search, setSearch] = useState(false);

    //날짜 필터링
    const [dateFilter, setDateFilter] = useState(null);
    //인원수 필터링
    const [headFilter, setHeadFilter] = useState([]);

    //객실검색
    const searchClick = () =>{        

        if(Hotel.startDate > DayData[0] && Hotel.endDate < DayData[1]){
            setDateFilter(true);
            const headFilter2 = Room.filter((item)=>item.maxOccupancy >= head);
            setHeadFilter(headFilter2);
        }else{
            setDateFilter(false);
            setHeadFilter([]);
        }
        setSearch(true);
    }

    //예약하기 버튼클릭시 예약정보 보내기
    const payClick = (headCount,roomId) =>{
        setPayHead(headCount);
        setPayRoom(roomId);
        navigate('/pay');
    }


    return(
        
        wishArray.length > 0 && 
        <section className="detail-wrap" onClick={()=>setCal(false)}>
            <div className="detail-content">
                <div className="detail-left" ref={triggerRef}>                       
                    <div className="room-select">
                        <p className='room-title'>찜한 목록</p>
                        {search && !dateFilter
                        ?(
                            <div className="empty-room">
                                <p className='x-icon'>
                                    <i className="fa-solid fa-xmark"></i>
                                </p>
                                <p className='empty-tit'>설정한 날짜에 부합하는 객실이 없습니다.</p>
                                <p className='empty-txt'>예약날짜를 다시 설정해주세요.</p>
                                <p className='empty-bottom'>아래 객실들은 설정한 날짜 외 다른 날짜에 투숙 가능한 객실입니다.</p>
                            </div>
                        ): search && dateFilter && headFilter.length === 0
                        ?(
                            <div className="empty-room">
                                <p className='x-icon'>
                                    <i className="fa-solid fa-xmark"></i>
                                </p>
                                <p className='empty-tit'>설정한 인원에 부합하는 객실이 없습니다.</p>
                                <p className='empty-txt'>객실별 투숙 가능 인원을 다시 확인해주세요.</p>
                                <p className='empty-bottom'>아래 객실들은 설정한 인원보다 투숙 가능한 인원이 적은 객실입니다.</p>
                            </div>
                        ) : null}
                        <ul>
                            {(search && headFilter.length >= 1 ? headFilter : wishArray).map((item,index)=>(
                                <li key={index}>
                                    <div className="room-left">
                                        <img src={`/img/${item.id}-${index+2}.jpg`} alt={item.hotelName} />
                                    </div>
                                    <div className="room-right">
                                        <h2>{item.roomName}</h2>
                                        <div className="room-intro">
                                            <div className="intro-left">
                                                {wishStar[index] && wishStar[index].map((star, ind) => (
                                                    <img src={star} alt="roomScore" key={ind} />
                                                ))}
                                                <span className='starScore'>
                                                    {(item.score[index] - Math.floor(item.score[index]) === 0) ? item.score[index]+'.0' : item.score[index]}
                                                </span>
                                            </div>
                                            <div className="intro-right">
                                                <button type='button' onClick={()=>{setModalContent(<p>상세정보 준비중</p>);toggle();}}>상세정보 <i className="fa-solid fa-angle-right"></i></button>
                                            </div>
                                        </div>
                                        <div className="room-info">
                                            <p><i className="fa-solid fa-ban"></i> <span className='bold'>무료 취소불가</span></p>
                                            <p><i className="fa-regular fa-clock"></i> 체크인 <span className='bold'>15:00</span> ~ 체크아웃 <span className='bold'>11:00</span></p>
                                            <p><i className="fa-solid fa-user-group"></i> 최대 투숙객 수 : <span className='bold'>{item.maxOccupancy}명</span></p>
                                            <p><i className="fa-solid fa-tag"></i> <span className='bold'>할인혜택 :</span>
                                                <span className='red'>
                                                    {item.discount === 1 ? 
                                                        '10%할인 이벤트 중'
                                                    :
                                                        '회원가입시 10,000원 할인쿠폰'
                                                    }
                                                </span>
                                            </p>
                                            <div className="room-pay">
                                                {item.discount === 1 ? 
                                                    <>
                                                        <span className='origin-price'>{(item.price + index * 12000).toLocaleString()}원</span>
                                                        <span className='final-price'>{((item.price + index * 12000) - ((item.price + index * 12000)*0.1)).toLocaleString()}원<span>/1박</span></span>
                                                    </>                                                    
                                                :                                                    
                                                    <>
                                                        <span className='final-price'>{(item.price + index * 12000).toLocaleString()}원<span>/1박</span></span>
                                                    </>
                                                }
                                                <button type='button' className='cart'><i className="fa-solid fa-basket-shopping"></i></button>
                                                <button type='button' className='pay' onClick={()=>payClick(head,item.id)} >예약하기</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`detail-right ${isFixed ? 'fixed' : null}`}>
                    {Cal &&
                        <div className="Cal" style={{position:'absolute',left:'-655px'}} onClick={ e =>{
                            setCal((Cal === true) ? true : false);
                            e.stopPropagation();
                        }}>
                            <Calendar/>
                        </div>
                    }
                    <div className="hotel-day">
                        <p className='day-wrap'>
                            <span className='day-tit'>예약일</span>
                            <span className='day-txt'>{DayData.length < 2 ? `${year}-${month}-${date}` : `${DayData[0]}`}</span>
                        </p>
                        <p className='day-wrap'>
                            <span className='day-tit'>종료일</span>
                            <span className='day-txt'>{DayData.length < 2 ? `${year}-${month}-${date + 1}` : `${DayData[1]}`}</span>
                        </p>
                        <button type='button' onClick={ e =>{
                            setCal((Cal === true) ? false : true);
                            e.stopPropagation();
                        }}>예약일 변경</button>
                    </div>
                    <div className="hotel-headcount">
                        <p className='head-tit'>예약인원 선택</p>
                        <div className="head-select">
                            <span className='head-txt'>인원</span>
                            <div className="btns">
                                <button type='button' onClick={minusClick} className={head === 1 ? 'die' : null} ><i className="fa-solid fa-minus"></i></button>
                                <span>{head}</span>
                                <button type='button' onClick={plusClick} className={head === 30 ? 'die' : null}><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <button type='button' className='search' onClick={()=>{searchClick();setCal(false);}}>객실 검색</button>
                    </div>
                    <div className="hotel-select">
                        <p className='select-tit'>예약 전 참고사항</p>
                        <p className='select-txt'>· 좌측 <span className='bold'> '객실선택'</span>란에서 <span className='bold'>객실종류 확인 및 예약</span>이 가능합니다.</p>
                        <p className='select-txt'>· 객실종류별 <span className='bold'>최대 투숙객 수</span>를 참고하셔서 인원변경 해주시기 바랍니다.</p>
                        <p className='select-txt'>· <span className='bold red'>회원가입시 10,000원 할인쿠폰</span>이 지급됩니다.</p>
                    </div>
                </div>
            </div>               
        </section>    
    )               
}