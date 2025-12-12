import { useState,useEffect } from "react";
import { useContext } from "react";
import '../Page/Room.css'
import { ResortDateContext } from '../Api/ResortDate';

export default function Room(){
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


    // 가져오는 호텔, 개실 데이터
    const {HotelData,RoomData} = useContext(ResortDateContext);
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

        if(hotelSort===1){
            pricefilter.sort((a,b) => a.id - b.id)
        }else if(hotelSort===2){
            pricefilter.sort((a,b) => b.score - a.score)
        }else if(hotelSort===3){
            pricefilter.sort((a,b) => a.score - b.score)
        }else if(hotelSort===4){
            pricefilter.sort((a,b) => b.price - a.price)
        }else{
            pricefilter.sort((a,b) => a.price - b.price)
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

    setmyhotel(pricefilter)
        

    },[myFilter,minPrice,maxPrice,hotelSort])



    

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

    return(
        <>  
            {/* 상품 메뉴영역 */}
            <div className="Room_section">
                {/* 상단 필터 영역 */}
                <div className="filter_menu">
                    <div className="left_filter">
                        <div className="filter01">
                            <h4 className="filter_tag">객내시설</h4>
                            {filter_roomservice.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>{item.name}</button>
                            ))}
                        </div>
                        <div className="filter01">
                            <h4 className="filter_tag">공용시설</h4>
                            {filter_publicService.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>{item.name}</button>
                            ))}
                        </div>
                        <div className="filter01">
                            <h4 className="filter_tag">기타시설</h4>
                            {filter_otherService.map((item,index)=>(
                                <button key={index} className="fil_btn" type="button" onClick={()=>filterHandeler(item)}>{item.name}</button>
                            ))}
                        </div>
                        <div className="under_filter">
                            {myFilter.map((item,index)=>(
                                <button type="button" className="fil_btn" key={index} onClick={()=>removeFilter(item)}>{item.name} X</button>
                            ))}
                        </div>
                    </div>
                    <div className="center_filter">
                            <div className="price_filter">
                                <div className="price_slide">
                                    <div className="price_inner" style={{left:`${minPrice/300000*100}%`,right:`${100-(maxPrice/300000)*100}%`}}></div>
                                    <input type="range" min='0' max='300000' value={minPrice} onChange={(e)=>rangeHandler01(e)} className="slide_input" step={10000}/>
                                    <input type="range" min='0' max='300000' value={maxPrice} onChange={(e)=>rangeHandler02(e)} className="slide_input" step={10000}/>
                                </div>
                                
                                <div className="minprice">
                                    <p className="price_txt">최소금액</p>
                                    <input className="price_input" type="text" value={`${minPrice}원`} placeholder="최소금액" onChange={(e)=>setMinPrice(e.target.value)}/>
                                </div>
                                <div className="maxprice">
                                    <p className="price_txt">최대금액</p>
                                    <input className="price_input" type="text" value={`${maxPrice}원`} placeholder="최대금액" onChange={(e)=>setMaxPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className="reset">
                                <button type="button" onClick={()=>{setMyfilter([]),setMaxPrice(300000),setMinPrice(0)}} className="reset_btn">🔄<span className="resettxt">필터 초기화</span></button>
                            </div>
                    </div>
                    <div className="right_filter">
                        <div className="map"><span>map</span></div>
                    </div>
                </div>
                {/* 중단 정렬 영역 */}
                <div className="arr_menu">
                    <ul className="arr_group">
                        <li className="arr_list" onClick={()=>sortHandeler(1)} style={{color:hotelSort===1?'black':'#aaa'}}>추천수</li>
                        <li className="arr_list" onClick={()=>sortHandeler(2)} style={{color:hotelSort===2?'black':'#aaa'}}>높은평점순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(3)} style={{color:hotelSort===3?'black':'#aaa'}}>낮은평점순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(4)} style={{color:hotelSort===4?'black':'#aaa'}}>높은가격순</li>
                        <li className="arr_list" onClick={()=>sortHandeler(5)} style={{color:hotelSort===5?'black':'#aaa'}}>낮은가격순</li>
                    </ul>
                </div>
                {/* 방정보 영역 */}
                <div className="room_menu">
                    <ul className="room_product">
                        {myhotel.length !== 0?myhotel.map((item)=>(
                            <li key={item.id} className="room_list">
                                <div className="img_box"><img src={item.img[0]} alt={`${item.img[0]}이미지`} className="hotelimg"/></div>
                                <div className="room_info">
                                    <h2 className="menu_title">{item.hotelName}</h2>
                                    <p className="menu_city">{item.city}</p>
                                    <p className="menu_score">{item.score}점</p>
                                    <p className="menu_discount">
                                        {item.discount===1?
                                        <span className="disC">
                                            <span className="s_box">10%할인</span>
                                            <span className="p_box">{item.price.toLocaleString()}원</span>
                                        </span>
                                        :
                                        <span className="coupon">회원가입시 10,000원 할인 쿠폰지급</span>
                                        }
                                    </p>
                                    <p className="menu_price">{item.discount===1?(item.price*0.9).toLocaleString():item.price.toLocaleString()}원</p>
                                    <button type="button" className="menu_wishbtn" onClick={()=>setLikeBtn(!likeBtn)}>{likeBtn?'❤':'💖'}</button>
                                </div>
                            </li>
                        )): <h2>검색된 상품이 없습니다.</h2>}
                    </ul>
                </div>
            </div>
        </>
    )
}