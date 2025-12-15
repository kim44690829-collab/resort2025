import { useState,useEffect } from "react";
import { useContext } from "react";
import '../Page/calendar.css'
import { ResortDateContext } from '../Api/ResortDate';
import { data } from "react-router-dom";

export default function Calendar(){
    // 선택한 달
    const [selectMonth,setSelectMonth] = useState(new Date()) //선택한 달력
    const [calArr,setCalArr] = useState(
        Array.from(Array(6),() => new Array(7).fill(''))
    ) //달력에 들어가는 배열

    const nextMonth= new Date(selectMonth.getFullYear(),selectMonth.getMonth() + 1,1) //선택한 다음달 달력
    const [calArr02,setCalArr02] = useState(
        Array.from(Array(6),() => new Array(7).fill(''))
    ) //달력에 들어가는 배열

    //선택한 날짜
    const [selectDate,setSelectDate] = useState({})

    useEffect(()=>{
        //console.log(selectMonth)
        const years = selectMonth.getFullYear() // 선택 연도
        //console.log(years)
        const month = selectMonth.getMonth() //선택 월
        //console.log(month)
        const day = selectMonth.getDay() // 선택 요일
        //console.log(day)
        const date = selectMonth.getDate() // 선택 일자
        //console.log(date)
        const last = new Date(years,month+1,0) //선택 월의 마지막날
        const lastdate = last.getDate() // 마지막 달
        console.log(lastdate,'마지막일자')
        const firstdate = new Date(years,month,1) // 이번달 첫날
        const firstday = firstdate.getDay() // 이번달 첫 요일 0,1,2,3,4,5,6 으로 표기
        console.log(calArr)

        let newArr = Array.from({ length: 6 }, () => Array(7).fill(""));
        let week = firstdate.getDay()
        console.log(week)
        console.log(week)

        let row = 0;
        for(let i=1;i<=lastdate;i++){
            
            newArr[row][week] = i;
            if(week<6){
                week++
            }else{
                week=0
                row++
            }
            
        }
        console.log(newArr)
        setCalArr(newArr)

    },[selectMonth])
    useEffect(()=>{
        //console.log(selectMonth)
        const years = nextMonth.getFullYear() // 선택 연도
        //console.log(years)
        const month = nextMonth.getMonth() //선택 월
        //console.log(month)
        const day = nextMonth.getDay() // 선택 요일
        //console.log(day)
        const date = nextMonth.getDate() // 선택 일자
        //console.log(date)
        const last = new Date(years,month+1,0) //선택 월의 마지막날
        const lastdate = last.getDate() // 마지막 달
        console.log(lastdate,'마지막일자')
        const firstdate = new Date(years,month,1) // 이번달 첫날
        const firstday = firstdate.getDay() // 이번달 첫 요일 0,1,2,3,4,5,6 으로 표기
        console.log(calArr02)

        let newArr = Array.from({ length: 6 }, () => Array(7).fill(""));
        let week = firstdate.getDay()
        console.log(week)
        console.log(week)

        let row = 0;
        for(let i=1;i<=lastdate;i++){
            
            newArr[row][week] = i;
            if(week<6){
                week++
            }else{
                week=0
                row++
            }
            
        }
        console.log(newArr)
        setCalArr02(newArr)

    },[selectMonth])
    const next =()=>{
        setSelectMonth(new Date(selectMonth.getFullYear(),selectMonth.getMonth() + 1,1))
    }
    const back =()=>{
        setSelectMonth(new Date(selectMonth.getFullYear(),selectMonth.getMonth() - 1,1))
    }
    const leftcal =(items)=>{
        const selectDateCopy = [...selectDate]
        if(selectDateCopy.length<2){
            selectDateCopy.push(items)
        }
        console.log(selectDateCopy)
        selectDateCopy.sort((a,b)=> a-b)
        setSelectDate(selectDateCopy)
        console.log(`${selectMonth.getFullYear()}-${selectMonth.getMonth()+1}-${items}`)
    }
    const right = (items)=>{
        console.log(`${nextMonth.getFullYear()}-${nextMonth.getMonth()+1}-${items}`)
    }
    return(
        <>
            <div style={{width:'600px',height:'200px',backgroundColor:'yellowgreen',margin:'0 auto'}} className="calendar">
                <div className="calendar_manu">
                    <h2 className="cal_title">{selectMonth.getFullYear()}년 {selectMonth.getMonth()+1}월</h2>
                    <table className="week" border={1}>
                        <thead className="table_head">
                            <tr>
                                <th>일</th>
                                <th>월</th>
                                <th>화</th>
                                <th>수</th>
                                <th>목</th>
                                <th>금</th>
                                <th>토</th>
                            </tr>
                        </thead>
                        <tbody className="table_body">
                            {calArr.map((item,index) => (
                                    <tr key={index}>
                                        {item.map((items,index) => (
                                            <td key={index} onClick={()=>leftcal(items)} style={{color:item[0]===items?'red':'black'}}>{items}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="calendar_manu">
                    <h2 className="cal_title">{nextMonth.getFullYear()}년 {nextMonth.getMonth()+1}월</h2>
                    <table className="week" border={1}>
                        <thead className="table_head">
                            <tr>
                                <th>일</th>
                                <th>월</th>
                                <th>화</th>
                                <th>수</th>
                                <th>목</th>
                                <th>금</th>
                                <th>토</th>
                            </tr>
                        </thead>
                        <tbody className="table_body">
                            {calArr02.map((item,index) => (
                                    <tr key={index}>
                                        {item.map((items,index) => (
                                            <td key={index} onClick={()=>right(items)} style={{color:item[0]===items?'red':'black'}}>{items}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <button type="button" onClick={back}>이전달</button>
                    <button type="button" onClick={next}>다음달</button>
                    
                </div>
                <p>{selectDate[0]}부터~{selectDate[1]}까지</p>
            </div>
        </>
    )
}