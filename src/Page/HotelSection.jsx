import { useContext, useState, useEffect } from 'react';
import { ResortDateContext } from '../Api/ResortDate';
import { Link } from 'react-router-dom';
import '../Page/HotelSection.css';

export default function HotelSection(){
    // 받아온 데이터
    const {HotelData, wish, wishHandler, Domestic, setDomestic} = useContext(ResortDateContext)

    const [moreSee1, setMoreSee1] = useState(9);
    const [moreSee2, setMoreSee2] = useState(9);
    const [seeBtn1, setSeeBtn1] = useState(0);
    const [seeBtn2, setSeeBtn2] = useState(0);

    // 더보기 버튼
    const btnHandeler1 = () => {
        if(seeBtn1 < 6){
            setMoreSee1(moreSee1 + 9)
            setSeeBtn1(seeBtn1 + 1)
        }else{
            setSeeBtn1(0)
        }
    }
    const btnHandeler2 = () => {
        if(seeBtn2 < 8){
            setMoreSee2(moreSee2 + 9)
            setSeeBtn2(seeBtn2 + 1)
        }else{
            setSeeBtn2(0)
        }
    }

    // 국내 filter
    const domesticHotel = HotelData.filter(item => item.country === 'Korea');
    const domesticHotelSort = [...domesticHotel].sort((a,b) => b.score - a.score);
    console.log('국내', domesticHotelSort)

    // 해외 filter
    const overseasHotel = HotelData.filter(item => item.country !== 'Korea');
    const overseasHotelSort = [...overseasHotel].sort((a,b) => b.score - a.score);
    console.log('해외', overseasHotelSort)



    return(
        <div className="HotelSection_container">
            <ul className="HotelSection_menu">
                <li className='HotelSection_Hotel HotelAll' onClick={() => setDomestic(0)}>
                    숙소
                </li>
                <li className='HotelSection_Hotel DomesticHotels' onClick={() => setDomestic(0)} style={{fontWeight:Domestic === 0 ? 'bold' : 'normal'}}>
                    국내 숙소
                </li>
                <li className='HotelSection_Hotel overseasHotels' onClick={() => setDomestic(1)} style={{fontWeight:Domestic === 1 ? 'bold' : 'normal'}}>
                    해외 숙소
                </li>
            </ul>
                {Domestic === 0 ?
                (<div>
                    <p className='HotelSection_title'>국내 숙소</p>
                    <div className='HotelSection_wrap'>
                        <ul className='HotelUl' >
                            {domesticHotelSort.slice(0,moreSee1).map((item) => (
                                <li key={item.id} style={{cursor:'pointer'}} className='HotelLi'>
                                    <Link to = {`/detail/${item.id}`}>
                                        <img src={item.img[0]} alt={item.hotelName} className='hotelSectionImg' style={{width:'280px', height:'169px'}} />
                                        <p className='hotelSection_type'>{item.type}</p>
                                        <p className='hotelSection_name'>{item.hotelName}</p>
                                        <div className='hotelSection_review'>
                                            <span className='hotelSection_score'>
                                                <i className="fa-solid fa-star"></i>
                                                <span className='starScore'>{item.score}</span>
                                            </span>
                                            <span className='hotelSection_count'>{item.scoreCount.toLocaleString()}명 참여</span>
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
                                    <button type='button' className='wishBtn2' onClick={()=>wishHandler(item.id)}>
                                    <i className="fa-solid fa-heart" style={
                                    wish.find((hotel) => hotel.id === Number(item.id)) ?
                                        {color:'#f94239'}
                                    :
                                        {color:'#6b6b6b'}
                                    
                                    }></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {seeBtn1 < 6 && <button type='button' className='moreSeeBtn' onClick={btnHandeler1}>더보기</button>}
                    
                </div>) 
                    :
                    (<div>
                        <p className='HotelSection_title'>해외 숙소</p>
                        <div className='HotelSection_wrap'>
                            <ul className='HotelUl' >
                                {overseasHotelSort.slice(0,moreSee2).map((item) => (
                                    <li key={item.id} style={{cursor:'pointer'}} className='HotelLi'>
                                        <Link to = {`/detail/${item.id}`}>
                                            {/* <img src={item.img[0]} alt={item.hotelName} className='popularAccomMainImg' /> */}
                                            <img src='/img/1-1.jpg' alt={item.hotelName} className='hotelSectionImg' style={{width:'280px', height:'169px'}}  />
                                            <p className='hotelSection_type'>{item.type}</p>
                                            <p className='hotelSection_name'>{item.hotelName}</p>
                                            <div className='hotelSection_review'>
                                                <span className='hotelSection_score'>
                                                    {/* <img src='/img/star-one.png' alt='star' style={{width:'15px', height:'15px'}}/> */}
                                                    <i className="fa-solid fa-star"></i>
                                                    <span className='starScore'>{item.score}</span>
                                                </span>
                                                <span className='hotelSection_count'>{item.scoreCount.toLocaleString()}명 참여</span>
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
                                        <button type='button' className='wishBtn2' onClick={()=>wishHandler(item.id)}>
                                        <i className="fa-solid fa-heart" style={
                                        wish.find((hotel) => hotel.id === Number(item.id)) ?
                                            {color:'#f94239'}
                                        :
                                            {color:'#6b6b6b'}
                                        
                                        }></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                        {seeBtn2 < 8 && <button type='button' className='moreSeeBtn' onClick={btnHandeler2}>더보기</button>}
                    </div>)
                }
                
        </div>
    )
    
}