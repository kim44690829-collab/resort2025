import { useState,useEffect } from "react";
import { useContext } from "react";
import '../Page/Room.css'
import { ResortDateContext } from '../Api/ResortDate';
import Calendar from "./Calendar";
import { Link } from "react-router-dom";
import LeafletMap from '../Api/LeafletMap';

export default function Room(){
    // 가져오는 호텔, 개실 데이터
    const {HotelData,RoomData, hotelInput, setHotelInput, DayData, setDayData} = useContext(ResortDateContext);
    //const {selectDate,setSelectDate,setSelectday} = useContext(calendarAuth)
    /* console.log(selectDate) */
    /* 필터 목록 */
    const filter_publicService = [{id:1,name:'피트니스'},{id:2,name:'레스토랑'},{id:3,name:'사우나'},{id:4,name:'실내수영장'},{id:5,name:'야외수영장'},{id:6,name:'편의점'},{id:7,name:'바'},{id:8,name:'라운지'},{id:9,name:'엘리베이터'},{id:10,name:'비즈니스센터'},{id:11,name:'건조기'},{id:12,name:'탈수기'},{id:13,name:'바베큐'}]
    const filter_roomservice = [{id:14,name:'무선인터넷'},{id:15,name:'욕실용품'},{id:16,name:'에어컨'},{id:17,name:'드라이기'},{id:18,name:'샤워실'},{id:19,name:'냉장고'},{id:20,name:'TV'},{id:21,name:'객실내취사'},{id:22,name:'욕조'},{id:23,name:'금연'},{id:24,name:'전기주전자'},{id:25,name:'실내수영장'},{id:26,name:'개인콘센트'}]
    const filter_otherService = [{id:27,name:'스프링클러'},{id:28,name:'반려견동반'},{id:29,name:'카드결제'},{id:30,name:'짐보관가능'},{id:31,name:'개인사물함'},{id:32,name:'픽업서비스'},{id:33,name:'캠프파이어'},{id:34,name:'무료주차'},{id:35,name:'조식제공'}]
    /* 필터 된 목록 */
    const [myFilter,setMyfilter] = useState([])
    // 필터 된 호텔 항목
    const [myhotel,setmyhotel] = useState([])
    //가격 필터의 값
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(300000)
    // 정렬 번호
    const [hotelSort,setHotelSort] = useState(1)
    // 종아요 버튼
    const [likeBtn,setLikeBtn] =useState(true)
    // 선택한 날짜를 담을 변수
    //const [DayData,setDayData] = useState([])

    //달력을 여닫기 위한 변수
    const [openC,setOpenC]=useState(false)

    const [town,setTown] = useState('')

    //날짜에 따른 목록 필터
    useEffect(()=>{
        const dateFilter = HotelData.filter((f)=>f.startDate>DayData[0] && f.endDate<DayData[1])
    },[DayData])

    
    
    //
    //
    useEffect(()=>{
        //console.log(myFilter,'현재 마이필터')
        //console.log(myhotel,'현재 마이호텔')
        const myFilterCopy = [...myFilter]

        const selectfilter01 = myFilterCopy.filter((f)=>f.id>0 && f.id <14) // publicService 항목 구분
        const selectfilter02 = myFilterCopy.filter((f)=>f.id>13 && f.id <27) // roomservice 항목 구분
        const selectfilter03 = myFilterCopy.filter((f)=>f.id>26 && f.id <=35) // otherService 항목 구분

        const filterHotel = HotelData.filter((data)=>{ // 각 항목별로 만족하는것 필터링
            const f1 = selectfilter02.every((filter)=>data.roomservice.includes(filter.name)); 
            const f2 = selectfilter01.every((filter)=>data.publicService.includes(filter.name)); 
            const f3 = selectfilter03.every((filter)=>data.otherService.includes(filter.name));
            return f1&&f2&&f3
        })
        const pricefilter = filterHotel.filter((f)=>f.price > minPrice && f.price<=maxPrice)
        //console.log(pricefilter,'가격필터까지')
        const dateFilter = pricefilter.filter((f)=>f.startDate>DayData[0] && f.endDate<DayData[1])
        if(hotelSort===1){
            dateFilter.sort((a,b) => a.id - b.id)
        }else if(hotelSort===2){
            dateFilter.sort((a,b) => b.score - a.score)
        }else if(hotelSort===3){
            dateFilter.sort((a,b) => a.score - b.score)
        }else if(hotelSort===4){
            dateFilter.sort((a,b) => b.price - a.price)
        }else{
            dateFilter.sort((a,b) => a.price - b.price)
        }

        // 가격 최솟값 최대값 조정 함수
      /*    const rangeHandler01 =(e)=>{
            
            if(maxPrice-minPrice<10000){
                setMinPrice(maxPrice-10000)
                setMaxPrice(minPrice+10000)
                console.log(maxPrice,'최대가격1')
                console.log(minPrice,'최소가격1')
            }else{
                setMinPrice(Number(e.target.value))
                console.log(maxPrice,'최대가격2')
                console.log(minPrice,'최소가격2')
            }
        } 
        
        rangeHandler01(e);
        const rangeHandler02 =(e)=>{
            
            if(maxPrice-minPrice<10000){
                setMinPrice(maxPrice-10000)
                setMaxPrice(minPrice+10000)
                console.log(maxPrice,'최대가격3')
                console.log(minPrice,'최소가격3')
            }else{
                setMaxPrice(Number(e.target.value))
                console.log(maxPrice,'최대가격4')
                console.log(minPrice,'최소가격4')
            }
        }
        
         */

    setmyhotel(dateFilter)
        

    },[myFilter,minPrice,maxPrice,hotelSort,DayData])

    useEffect(()=>{
        if(minPrice<0){
            setMinPrice(0)
            setMaxPrice(10000)
        }

        if(maxPrice>300000){
            setMaxPrice(300000)
            setMinPrice(290000)
        }
    },[minPrice,maxPrice])

    

    // 최소가격이 변동될때
   /*  useEffect(()=>{
        const myhotelCopy = [...HotelData]
        const minfilter = myhotelCopy.filter((f)=>f.price>minPrice)
        setmyhotel(minfilter)
    },[minPrice])
    // 최대가격이 변동될때
    useEffect(()=>{
        const myhotelCopy = [...HotelData]
        const maxfilter = myhotelCopy.filter((f)=>f.price<=maxPrice)
        setmyhotel(maxfilter)
    },[maxPrice]) */


    /* 필터의 항목 클릭시 적용 함수 */
    const filterHandeler=(item)=>{
        const myFilterCopy = [...myFilter]
        //console.log(myFilterCopy.findIndex((myFilterCopy)=>myFilterCopy.id === item.id))
        if(myFilterCopy.findIndex((myFilterCopy)=>myFilterCopy.id === item.id) === -1){// 중복 확인용
            myFilterCopy.push(item)
            setMyfilter(myFilterCopy)
        }
        
        console.log(HotelData[0].roomservice)
        //const filterHotel = HotelData.filter((data)=>myFilterCopy.every((filter)=>data.roomservice.includes(filter.name)))
        //console.log(filterHotel)
        //setmyhotel(filterHotel)
        console.log(myFilter,'추가 직후 마이필터')
    }


    /* 필터 해제 함수 */
    const removeFilter =(item)=>{
        const myFilterCopy = [...myFilter]
        const dleFilter = myFilterCopy.filter((myFilterCopy)=>myFilterCopy.id !== item.id) // filter을 이용한 삭제
        setMyfilter(dleFilter)
        console.log(myFilter,'삭제 직후 마이필터')
    }

    //정렬 함수
    const sortHandeler =(num)=>{
        if(num===1){
            setHotelSort(1)
        }else if(num===2){
            setHotelSort(2)
        }else if(num===3){
            setHotelSort(3)
        }else if(num===4){
            setHotelSort(4)
        }else{
            setHotelSort(5)
        }
    }
    // 가격 최솟값 최대값 조정 함수
    const rangeHandler01 =(e)=>{
        
        if(maxPrice-minPrice<10000){
            setMinPrice(maxPrice-10000)
            setMaxPrice(minPrice+10000)
        }else{
            setMinPrice(Number(e.target.value))
        }
    }
    const rangeHandler02 =(e)=>{
        
        if(maxPrice-minPrice<10000){
            setMinPrice(maxPrice-10000)
            setMaxPrice(minPrice+10000)
        }else{
            setMaxPrice(Number(e.target.value))
        }
    }
    
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()

    const townHandler =(e)=>{
        setTown(e.target.value)
    }
    return(
        <>  
            {/* 상품 메뉴영역 */}
            <div className="Room_section">
                <div className="serch_box">
                    <input type="text" placeholder="여행지나 숙소를 검색해주세요" className="city_name" onChange={(e)=>townHandler(e)} value={town}/>
                    <button type='button' onClick={() => setOpenC(!openC)} style={{border:!openC?'2px solid #42799b55':'2px solid #7ED6E4'}} className='calenertBtn'>
                        <i className="fa-solid fa-calendar" style={{color:!openC?'#42799b55':'#7ED6E4'}}></i>
                        <span style={{marginRight:'5px'}}>{DayData.length < 2 ? `${year}-${month}-${date} - ${year}-${month}-${date + 1} ` : `${DayData[0]} - ${DayData[1]}`}</span>
                    </button>
                    {openC && 
                    <div className="calendar_box">
                        <Calendar/>
                    </div>
                    }
                </div>
                {/* 상단 필터 영역 */}
                <div className="filter_menu">
                    <div className="left_filter">
                        <div className="filter01">
                            <h4 className="filter_tag">객내시설</h4>
                            {filter_roomservice.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>
                                    {item.name === '무선인터넷' ? <i className="fa-solid fa-wifi"> <span>무선인터넷</span></i> : item.name === '욕실용품' ? <i className="fa-solid fa-soap"> <span>욕실용품</span></i> : item.name === '샤워실' ? <i className="fa-solid fa-shower"> <span>샤워실</span></i> : item.name === 'TV' ? <i className="fa-solid fa-tv"> <span>텔레비전</span></i> : item.name === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item.name === '욕조' ? <i className="fa-solid fa-bath"> <span>욕조</span></i> : item.name === '객실내취사' ? <i className="fa-solid fa-kitchen-set"> <span>객실내취사</span></i> : item.name === '금연' ? <i className="fa-solid fa-ban-smoking"> <span>금연</span></i> : item.name === '에어컨' ? <i className="fa-solid fa-fan"> <span>에어컨</span></i> : item.name === '드라이기' ? <i className="fa-solid fa-wind"> <span>드라이기</span></i> : item.name === '냉장고' ? <i className="fa-solid fa-snowflake"> <span>냉장고</span></i> : item.name === '개인콘센트' ? <i className="fa-solid fa-plug"> <span>개인콘센트</span></i> : item.name === '전기주전자' ? <i className="fa-solid fa-blender"> <span>전기주전자</span></i>:null}
                                </button>
                            ))}
                        </div>
                        <div className="filter01">
                            <h4 className="filter_tag">공용시설</h4>
                            {filter_publicService.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>
                                    {item.name === '피트니스' ? <i className="fa-solid fa-dumbbell"> <span>피트니스</span></i>  : item.name === '레스토랑' ? <i className="fa-solid fa-utensils"> <span>레스토랑</span></i> : item.name === '사우나' ? <i className="fa-solid fa-hot-tub-person"> <span>사우나</span></i> : item.name === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item.name === '야외수영장' ? <i className="fa-solid fa-person-swimming"> <span>야외수영장</span></i> : item.name === '편의점' ? <i className="fa-solid fa-store"> <span>편의점</span></i> : item.name === '바' ?  <i className="fa-solid fa-wine-glass"> <span>바</span></i> : item.name === '라운지' ? <i className="fa-solid fa-couch"> <span>라운지</span></i> : item.name === '엘리베이터' ? <i className="fa-solid fa-elevator"> <span>엘리베이터</span></i> : item.name === '비즈니스센터' ? <i className="fa-solid fa-briefcase"> <span>비즈니스센터</span></i> : item.name === '건조기' ? <i className="fa-solid fa-sun"> <span>건조기</span></i> : item.name === '탈수기' ? <i className="fa-solid fa-droplet"> <span>탈수기</span></i>  : item.name === '바베큐' ? <i className="fa-solid fa-drumstick-bite"> <span>바베큐</span></i> : null}
                                </button>
                            ))}
                        </div>
                        <div className="filter01">
                            <h4 className="filter_tag">기타시설</h4>
                            {filter_otherService.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>
                                    {item.name === '스프링클러' ? <i className="fa-solid fa-fire-extinguisher"> <span>스프링클러</span></i> : item.name === '반려견동반' ? <i className="fa-solid fa-dog"> <span>반려견동반</span></i> : item.name === '카드결제' ? <i className="fa-regular fa-credit-card"> <span>카드결제</span></i> : item.name === '짐보관가능' ? <i className="fa-solid fa-cart-flatbed-suitcase"> <span>짐보관가능</span></i> : item.name === '개인사물함' ? <i className="fa-solid fa-lock"> <span>개인사물함</span></i> : item.name === '픽업서비스' ? <i className="fa-solid fa-taxi"> <span>픽업서비스</span></i> : item.name === '캠프파이어' ?  <i className="fa-solid fa-campground"> <span>캠프파이어</span></i> : item.name === '무료주차' ? <i className="fa-solid fa-square-parking"> <span>무료주차</span></i> : item.name === '조식제공' ? <i className="fa-solid fa-bowl-food"> <span>조식제공</span></i> : null}
                                </button>
                            ))}
                        </div>
                        <div className="under_filter">
                            {myFilter.map((item,index)=>(
                                <button type="button" className="fil_btn" key={index} onClick={()=>removeFilter(item)}>{item.name} X</button>
                            ))}
                        </div>
                    </div>
                    <div className="right_filter">
                        <div className="top_filter">
                            <div className="price_filter">
                                <div className="price_slide">
                                    <div className="price_inner" style={{left:`${minPrice/300000*100}%`,right:`${100-(maxPrice/300000)*100}%`}}></div>
                                    <input type="range" min='0' max='300000' value={minPrice} onChange={(e)=>rangeHandler01(e)} className="slide_input" step={10000}/>
                                    <input type="range" min='0' max='300000' value={maxPrice} onChange={(e)=>rangeHandler02(e)} className="slide_input" step={10000}/>
                                </div>
                                
                                <div className="minprice">
                                    <p className="price_txt">최소금액</p>
                                    <input className="price_input" type="text" value={`${minPrice.toLocaleString()}`} placeholder="최소금액" onChange={(e)=>setMinPrice(e.target.value)}/>
                                    <span>원</span>
                                </div>
                                <div className="maxprice">
                                    <p className="price_txt">최대금액</p>
                                    <input className="price_input" type="text" value={`${maxPrice.toLocaleString()}`} placeholder="최대금액" onChange={(e)=>setMaxPrice(e.target.value)}/>
                                    <span>원</span>
                                </div>
                            </div>
                        </div>
                        <div className="under_filter">
                            <div className="map">
                                <LeafletMap city={'seoul'} hotelName={'가가가'} style={{width:'100%',height:'300px',border: '1px solid #e7e7e7',borderRadius:'10px'}}/>    
                            </div>
                        </div>
                    </div>
                    {/* <div className="center_filter">
                            <div className="price_filter">
                                <div className="price_slide">
                                    <div className="price_inner" style={{left:`${minPrice/300000*100}%`,right:`${100-(maxPrice/300000)*100}%`}}></div>
                                    <input type="range" min='0' max='300000' value={minPrice} onChange={(e)=>rangeHandler01(e)} className="slide_input" step={10000}/>
                                    <input type="range" min='0' max='300000' value={maxPrice} onChange={(e)=>rangeHandler02(e)} className="slide_input" step={10000}/>
                                </div>
                                
                                <div className="minprice">
                                    <p className="price_txt">최소금액</p>
                                    <input className="price_input" type="text" value={`${minPrice.toLocaleString()}`} placeholder="최소금액" onChange={(e)=>setMinPrice(e.target.value)}/>
                                    <span>원</span>
                                </div>
                                <div className="maxprice">
                                    <p className="price_txt">최대금액</p>
                                    <input className="price_input" type="text" value={`${maxPrice.toLocaleString()}`} placeholder="최대금액" onChange={(e)=>setMaxPrice(e.target.value)}/>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className="reset">
                                <button type="button" onClick={()=>{setMyfilter([]),setMaxPrice(300000),setMinPrice(0)}} className="reset_btn"><i className="fa-solid fa-arrow-rotate-right"></i><span className="resettxt"> 필터 초기화</span></button>
                            </div>
                    </div>
                    <div className="right_filter">
                        <div className="map">
                            <LeafletMap city={'seoul'} hotelName={'가가가'} style={{width:'100%',height:'300px',border: '1px solid #e7e7e7',borderRadius:'10px'}}/>    
                        </div>
                    </div> */}
                </div>
                {/* 중단 정렬 영역 */}
                <div className="arr_menu">
                    <span className="arr_total">총 {myhotel.length}개</span>
                    <ul className="arr_group">
                        <li className="arr_list" onClick={()=>sortHandeler(1)} style={{color:hotelSort===1?'white':'#ccc',fontWeight:hotelSort===1?600:400}}>추천수</li>
                        <li className="arr_list" onClick={()=>sortHandeler(2)} style={{color:hotelSort===2?'white':'#ccc',fontWeight:hotelSort===2?600:400}}>높은평점순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(3)} style={{color:hotelSort===3?'white':'#ccc',fontWeight:hotelSort===3?600:400}}>낮은평점순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(4)} style={{color:hotelSort===4?'white':'#ccc',fontWeight:hotelSort===4?600:400}}>높은가격순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(5)} style={{color:hotelSort===5?'white':'#ccc',fontWeight:hotelSort===5?600:400}}>낮은가격순</li>
                    </ul>
                </div>
                {/* 방정보 영역 */}
                <div className="room_menu">
                    <ul className="room_product">
                        {myhotel.length !== 0?myhotel.map((item)=>(
                            
                            <li key={item.id} className="room_list">
                                <Link to={`/detail/${item.id}`}>
                                <div className="img_box"><img src={item.img[0]} alt={`${item.img[0]}이미지`} className="hotelimg"/></div>
                                </Link>
                                <Link to={`/detail/${item.id}`}>
                                <div className="room_info">
                                    <h2 className="menu_title">{item.hotelName}</h2>
                                    <p className="menu_city">
                                        {item.city === 'Sokcho'?'대한민국, 강원도 속초시':item.city === 'Gyeongju'?'대한민국, 경상북도 경주시':item.city === 'Busan'?'대한민국, 부산시':item.city === 'Gangneung'?'대한민국, 강원도 강릉시':item.city === 'Yeosu'?'대한민국, 전라남도 여수시':item.city === 'Daejeon'?'대한민국, 대전시':item.city === 'Gwangju'?'대한민국, 광주시':item.city === 'Jeju'?'대한민국, 제주도':item.city === 'Pohang'?'대한민국, 경상북도 포항시':item.city === 'Seoul'?'대한민국, 서울시':item.city === 'Tokyo'?'일본, 도쿄':item.city === 'Sapporo'?'일본, 훗카이도 삿포로':item.city === 'LosAngeles'?'미국, 캘리포니아 로스앤젤레스':item.city === 'NewYork'?'미국, 뉴욕':item.city === 'Guam'?'미국, 괌':item.city === 'Zhangjiajie'?'중국, 후난성 장가계':item.city === 'Shanghai'?'중국, 상하이':item.city === 'Rome'?'이탈리아, 로마':item.city === 'Venice'?'이탈리아, 베네치아':item.city === 'Paris'?'프랑스, 파리':null}
                                    </p>
                                    <p className="menu_score">{item.score}점</p>
                                    <div className="service_list">
                                        <p style={{marginBottom:'10px'}}>
                                            기타시설: 
                                            {item.otherService.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '스프링클러' ? <span>#스프링클러</span> : item === '반려견동반' ? <span>#반려견동반</span>: item === '카드결제' ?<span>#카드결제</span>: item === '짐보관가능' ?<span>#짐보관가능</span>: item === '개인사물함' ?<span>#개인사물함</span> : item === '픽업서비스' ?<span>#픽업서비스</span> : item === '캠프파이어' ? <span>#캠프파이어</span> : item === '무료주차' ? <span>#무료주차</span> : item === '조식제공' ?  <span>#조식제공</span> : null}
                                                </span>
                                            ))}
                                        </p>
                                        <p style={{marginBottom:'10px'}}>
                                            공용시설: 
                                            {item.publicService.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '피트니스' ? <span>#피트니스</span>: item === '레스토랑' ?<span>#레스토랑</span>: item === '사우나' ?<span>#사우나</span> : item === '실내수영장' ?<span>#실내수영장</span>: item === '야외수영장' ?<span>#야외수영장</span> : item === '편의점' ? <span>#편의점</span> : item === '바' ? <span>#바</span> : item === '라운지' ? <span>#라운지</span>: item === '엘리베이터' ?<span>#엘리베이터</span> : item === '비즈니스센터' ?<span>#비즈니스센터</span>: item === '건조기' ? <span>#건조기</span> : item === '탈수기' ?<span>#탈수기</span>: item === '바베큐' ? <span>#바베큐</span> : null}
                                                </span>
                                            ))}
                                        </p>
                                        <p style={{marginBottom:'10px'}}>
                                            객내시설: 
                                            {item.roomservice.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '무선인터넷' ? <span>#무선인터넷</span>: item === '욕실용품' ?<span>#욕실용품</span>: item === '샤워실' ?<span>#샤워실</span> : item === 'TV' ?<span>#텔레비전</span>: item === '실내수영장' ?<span>#실내수영장</span> : item === '욕조' ?<span>#욕조</span>: item === '객실내취사' ? <span>#객실내취사</span> : item === '금연' ? <span>#금연</span>: item === '에어컨' ?<span>#에어컨</span>: item === '드라이기' ? <span>#드라이기</span>: item === '냉장고' ?<span>#냉장고</span> : item === '개인콘센트' ? <span>#개인콘센트</span> : item === '전기주전자' ? <span>#전기주전자</span>:null}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                    {/* <ul className="service_list">
                                        <li>
                                            {item.otherService.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '스프링클러' ? <i className="fa-solid fa-fire-extinguisher"> <span>스프링클러</span></i> : item === '반려견동반' ? <i className="fa-solid fa-dog"> <span>반려견동반</span></i> : item === '카드결제' ? <i className="fa-regular fa-credit-card"> <span>카드결제</span></i> : item === '짐보관가능' ? <i className="fa-solid fa-cart-flatbed-suitcase"> <span>짐보관가능</span></i> : item === '개인사물함' ? <i className="fa-solid fa-lock"> <span>개인사물함</span></i> : item === '픽업서비스' ? <i className="fa-solid fa-taxi"> <span>픽업서비스</span></i> : item === '캠프파이어' ?  <i className="fa-solid fa-campground"> <span>캠프파이어</span></i> : item === '무료주차' ? <i className="fa-solid fa-square-parking"> <span>무료주차</span></i> : item === '조식제공' ? <i className="fa-solid fa-bowl-food"> <span>조식제공</span></i> : null}
                                                </span>
                                            ))}
                                        </li>
                                        <li>
                                            {item.publicService.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '피트니스' ? <i className="fa-solid fa-dumbbell"> <span>피트니스</span></i>  : item === '레스토랑' ? <i className="fa-solid fa-utensils"> <span>레스토랑</span></i> : item === '사우나' ? <i className="fa-solid fa-hot-tub-person"> <span>사우나</span></i> : item === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item === '야외수영장' ? <i className="fa-solid fa-person-swimming"> <span>야외수영장</span></i> : item === '편의점' ? <i className="fa-solid fa-store"> <span>편의점</span></i> : item === '바' ?  <i className="fa-solid fa-wine-glass"> <span>바</span></i> : item === '라운지' ? <i className="fa-solid fa-couch"> <span>라운지</span></i> : item === '엘리베이터' ? <i className="fa-solid fa-elevator"> <span>엘리베이터</span></i> : item === '비즈니스센터' ? <i className="fa-solid fa-briefcase"> <span>비즈니스센터</span></i> : item === '건조기' ? <i className="fa-solid fa-sun"> <span>건조기</span></i> : item === '탈수기' ? <i className="fa-solid fa-droplet"> <span>탈수기</span></i>  : item === '바베큐' ? <i className="fa-solid fa-drumstick-bite"> <span>바베큐</span></i> : null}
                                                </span>
                                            ))}
                                        </li>
                                        <li>
                                            {item.roomservice.map((item,index)=>(
                                                <span key={index} className="service_item" style={{color:myFilter.findIndex((f)=>f.name===item)>=0?'#42799b':'#333'}}>
                                                    {item === '무선인터넷' ? <i className="fa-solid fa-wifi"> <span>무선인터넷</span></i> : item === '욕실용품' ? <i className="fa-solid fa-soap"> <span>욕실용품</span></i> : item === '샤워실' ? <i className="fa-solid fa-shower"> <span>샤워실</span></i> : item === 'TV' ? <i className="fa-solid fa-tv"> <span>텔레비전</span></i> : item === '실내수영장' ? <i className="fa-solid fa-water-ladder"> <span>실내수영장</span></i> : item === '욕조' ? <i className="fa-solid fa-bath"> <span>욕조</span></i> : item === '객실내취사' ? <i className="fa-solid fa-kitchen-set"> <span>객실내취사</span></i> : item === '금연' ? <i className="fa-solid fa-ban-smoking"> <span>금연</span></i> : item === '에어컨' ? <i className="fa-solid fa-fan"> <span>에어컨</span></i> : item === '드라이기' ? <i className="fa-solid fa-wind"> <span>드라이기</span></i> : item === '냉장고' ? <i className="fa-solid fa-snowflake"> <span>냉장고</span></i> : item === '개인콘센트' ? <i className="fa-solid fa-plug"> <span>개인콘센트</span></i> : item === '전기주전자' ? <i className="fa-solid fa-blender"> <span>전기주전자</span></i>:null}
                                                </span>
                                            ))}
                                        </li>
                                    </ul> */}
                                    <p className="menu_discount">
                                        {item.discount===1?
                                        <span className="disC">
                                            <span className="s_box">10%할인</span>
                                            <span className="p_box">{item.price.toLocaleString()}원</span>
                                        </span>
                                        :
                                        <span className="coupon">회원가입시 10,000원 할인쿠폰</span>
                                        }
                                    </p>
                                    <p className="menu_price">{item.discount===1?(item.price*0.9).toLocaleString():item.price.toLocaleString()}원</p>
                                    
                                </div>
                                </Link>
                                <button type="button" className="menu_wishbtn" onClick={()=>setLikeBtn(!likeBtn)}>{likeBtn?'❤':'💖'}</button>
                            </li>
                            
                        )): <h2>검색된 상품이 없습니다.</h2>}
                    </ul>
                </div>
            </div>
        </>
    )
}