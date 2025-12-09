import { useState,useEffect } from "react";
import '../Page/Room.css'

export default function Room(){
    /* 필터 목록 */
    const filter_publicService = [{id:1,name:'피트니스'},{id:2,name:'레스토랑'},{id:3,name:'사우나'},{id:4,name:'실내수영장'},{id:5,name:'야외수영장'},{id:6,name:'편의점'},{id:7,name:'바'},{id:8,name:'라운지'},{id:9,name:'엘리베이터'},{id:10,name:'비즈니스센터'},{id:11,name:'건조기'},{id:12,name:'탈수기'},{id:13,name:'바베큐'}]
    const filter_roomservice = [{id:14,name:'무선인터넷'},{id:15,name:'욕실용품'},{id:16,name:'에어컨'},{id:17,name:'드라이기'},{id:18,name:'샤워실'},{id:19,name:'냉장고'},{id:20,name:'TV'},{id:21,name:'객실내취사'},{id:22,name:'욕조'},{id:23,name:'금연'},{id:24,name:'전기주전자'},{id:25,name:'실내수영장'},{id:26,name:'개인콘센트'}]
    const filter_otherService = [{id:27,name:'스프링클러'},{id:28,name:'반려견동반'},{id:29,name:'카드결제'},{id:30,name:'짐보관가능'},{id:31,name:'개인사물함'},{id:32,name:'픽업서비스'},{id:33,name:'캠프파이어'},{id:34,name:'무료주차'},{id:35,name:'조식제공'}]
    /* 필터 된 목록 */
    const [myFilter,setMyfilter] = useState([])
    //
    //
    //
    /* 필터의 항목 클릭시 적용 함수 */
    const filterHandeler=(item)=>{
        const myFilterCopy = [...myFilter]
        console.log(myFilterCopy.findIndex((myFilterCopy)=>myFilterCopy.id === item.id))
        if(myFilterCopy.findIndex((myFilterCopy)=>myFilterCopy.id === item.id) === -1){// 중복 확인용
            myFilterCopy.push(item)
            setMyfilter(myFilterCopy)
        }
        console.log(myFilter)
    }
    /* 필터 해제 함수 */
    const removeFilter =(item)=>{
        //console.log(item)
        //console.log(item.id)
        const myFilterCopy = [...myFilter]
        const dleFilter = myFilterCopy.filter((myFilterCopy)=>myFilterCopy.id !== item.id) // filter을 이용한 삭제
        //console.log(dleFilter)
        setMyfilter(dleFilter)
        
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
                    <div className="right_filter">
                        <div className="map"><span>map</span></div>
                    </div>
                </div>
                {/* 중단 정렬 영역 */}
                <div className="arr_menu">
                    <ul className="arr_group">
                        <li className="arr_list">추천수</li>
                        <li className="arr_list">높은평점순</li>
                        <li className="arr_list">낮은평점순</li>
                        <li className="arr_list">높은가격순</li>
                        <li className="arr_list">낮은가격순</li>
                    </ul>
                </div>
                {/* 방정보 영역 */}
                <div className="room_menu"></div>
            </div>
        </>
    )
}