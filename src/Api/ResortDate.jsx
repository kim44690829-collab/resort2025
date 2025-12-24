import { createContext } from "react";
import { useState, useEffect,useContext } from "react";
import cookie from 'js-cookie';
import { ModalContext } from "../Page/Modal";

export const ResortDateContext = createContext();

export default function ResortDate({children}){
    const RoomData = [
        /* 한국 - 서울 */
        {
        id: 1,
        hotelName: "서울 스카이베이 프라임 호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,4,3,4,5,4],
        comment: ["최고였어요","좋았어요","보통이에요","무난했어요","만족했어요","괜찮았어요"]
        },
        {
        id: 2,
        hotelName: "서울 스카이베이 프라임 호텔",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,3,1,2,3,2],
        comment: ["별로예요","그저 그랬어요","최악이에요","기대이하","무난했어요","아쉬웠어요"]
        },
        {
        id: 3,
        hotelName: "서울 스카이베이 프라임 호텔",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,5,4,5,4,5],
        comment: ["좋았어요","최고예요","만족했어요","완벽했어요","아주좋아요","훌륭했어요"]
        },
        {
        id: 4,
        hotelName: "서울 라이트하버 호텔",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","그저그래요","무난해요","그럭저럭","별로예요"]
        },
        {
        id: 5,
        hotelName: "서울 라이트하버 호텔",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽했어요","좋았어요","아주좋아요","만족했어요","훌륭해요"]
        },
        {
        id: 6,
        hotelName: "서울 라이트하버 호텔",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,1,2,1],
        comment: ["불만이에요","별로예요","최악이에요","끔찍했어요","아쉬워요","별로예요"]
        },
        {
        id: 7,
        hotelName: "서울 헤리티지 스타 라운지",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족했어요","최고예요","괜찮았어요","아주좋아요","좋아요"]
        },
        {
        id: 8,
        hotelName: "서울 헤리티지 스타 라운지",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","불만이에요","무난해요","그럭저럭","아쉬워요"]
        },
        {
        id: 9,
        hotelName: "서울 헤리티지 스타 라운지",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽했어요","최고예요","아주좋아요","좋았어요","만족해요","훌륭했어요"]
        },
        {
        id: 10,
        hotelName: "서울 프레미어 모던 스테이",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 11,
        hotelName: "서울 프레미어 모던 스테이",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족했어요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 12,
        hotelName: "서울 프레미어 모던 스테이",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 13,
        hotelName: "서울 오션루프 스위트",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽했어요","아주좋아요","완벽했어요","좋았어요","최고예요"]
        },
        {
        id: 14,
        hotelName: "서울 오션루프 스위트",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍했어요","불만이에요","최악이에요"]
        },
        {
        id: 15,
        hotelName: "서울 오션루프 스위트",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족했어요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 16,
        hotelName: "서울 리버사이드 프라임 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","무난했어요","아쉬웠어요"]
        },
        {
        id: 17,
        hotelName: "서울 리버사이드 프라임 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽했어요","좋아요","아주좋아요"]
        },
        {
        id: 18,
        hotelName: "서울 리버사이드 프라임 호텔",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍했어요","불만이에요","최악이에요"]
        },

        /* 한국 - 부산 */

        {
        id: 19,
        hotelName: "부산 오션클라우드 호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,4,4,5,5,4],
        comment: ["좋았어요","만족해요","괜찮아요","아주좋아요","최고예요","좋아요"]
        },
        {
        id: 20,
        hotelName: "부산 오션클라우드 호텔",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 21,
        hotelName: "부산 오션클라우드 호텔",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,5,4,5,4,5],
        comment: ["좋았어요","최고예요","만족해요","아주좋아요","좋아요","완벽해요"]
        },
        {
        id: 22,
        hotelName: "부산 마리나 스위트",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","그럭저럭","별로예요"]
        },
        {
        id: 23,
        hotelName: "부산 마리나 스위트",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","훌륭해요"]
        },
        {
        id: 24,
        hotelName: "부산 마리나 스위트",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 25,
        hotelName: "부산 블루웨이브 호텔",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 26,
        hotelName: "부산 블루웨이브 호텔",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 27,
        hotelName: "부산 블루웨이브 호텔",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽해요","최고예요","아주좋아요","좋았어요","만족해요","훌륭해요"]
        },
        {
        id: 28,
        hotelName: "부산 센트럴힐 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 29,
        hotelName: "부산 센트럴힐 호텔",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족해요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 30,
        hotelName: "부산 센트럴힐 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 31,
        hotelName: "부산 더레인 하버 스테이",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽해요","아주좋아요","완벽해요","좋았어요","최고예요"]
        },
        {
        id: 32,
        hotelName: "부산 더레인 하버 스테이",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 33,
        hotelName: "부산 더레인 하버 스테이",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 34,
        hotelName: "부산 글로우 포레스트 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","무난했어요","아쉬워요"]
        },
        {
        id: 35,
        hotelName: "부산 글로우 포레스트 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽해요","좋아요","아주좋아요"]
        },
        {
        id: 36,
        hotelName: "부산 글로우 포레스트 호텔",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },


        /* 한국 - 강릉 */

        {
        id: 37,
        hotelName: "강릉 코랄베이 오션 호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,4,4,5,5,4],
        comment: ["좋았어요","만족해요","괜찮아요","아주좋아요","최고예요","좋아요"]
        },
        {
        id: 38,
        hotelName: "강릉 코랄베이 오션 호텔",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 39,
        hotelName: "강릉 코랄베이 오션 호텔",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,5,4,5,4,5],
        comment: ["좋았어요","최고예요","만족해요","아주좋아요","좋아요","완벽해요"]
        },
        {
        id: 40,
        hotelName: "강릉 마운틴힐 프라임 스테이",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","그럭저럭","별로예요"]
        },
        {
        id: 41,
        hotelName: "강릉 마운틴힐 프라임 스테이",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","훌륭해요"]
        },
        {
        id: 42,
        hotelName: "강릉 마운틴힐 프라임 스테이",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 43,
        hotelName: "강릉 블루하버 씨앤스테이",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 44,
        hotelName: "강릉 블루하버 씨앤스테이",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 45,
        hotelName: "강릉 블루하버 씨앤스테이",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽해요","최고예요","아주좋아요","좋았어요","만족해요","훌륭해요"]
        },
        {
        id: 46,
        hotelName: "강릉 에코브리즈 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 47,
        hotelName: "강릉 에코브리즈 호텔",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족해요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 48,
        hotelName: "강릉 에코브리즈 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 49,
        hotelName: "강릉 소울베이 더스위트",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽해요","아주좋아요","완벽해요","좋았어요","최고예요"]
        },
        {
        id: 50,
        hotelName: "강릉 소울베이 더스위트",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 51,
        hotelName: "강릉 소울베이 더스위트",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 52,
        hotelName: "강릉 씨사이드 리프 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","무난했어요","아쉬워요"]
        },
        {
        id: 53,
        hotelName: "강릉 씨사이드 리프 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽해요","좋아요","아주좋아요"]
        },
        {
        id: 54,
        hotelName: "강릉 씨사이드 리프 호텔",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },


        /* 한국 - 속초 */

        {
        id: 55,
        hotelName: "속초 오션브리즈 시티호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","만족해요","아주좋아요","좋아요","훌륭해요"]
        },
        {
        id: 56,
        hotelName: "속초 오션브리즈 시티호텔",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,2,1,2],
        comment: ["별로예요","최악이에요","무난해요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 57,
        hotelName: "속초 오션브리즈 시티호텔",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,3,4,5,4],
        comment: ["좋았어요","만족해요","그저그래요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 58,
        hotelName: "속초 힐크레스트 베이뷰 리조트",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["무난해요","기대이하","보통이에요","그저그래요","그럭저럭","별로예요"]
        },
        {
        id: 59,
        hotelName: "속초 힐크레스트 베이뷰 리조트",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","괜찮아요"]
        },
        {
        id: 60,
        hotelName: "속초 힐크레스트 베이뷰 리조트",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 61,
        hotelName: "속초 블루문 스테이",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,5,4,4,5,4],
        comment: ["좋았어요","최고예요","만족해요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 62,
        hotelName: "속초 블루문 스테이",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","무난해요","그저그래요","그럭저럭","아쉬워요","무난해요"]
        },
        {
        id: 63,
        hotelName: "속초 블루문 스테이",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽해요","최고예요","아주좋아요","좋았어요","만족해요","훌륭해요"]
        },
        {
        id: 64,
        hotelName: "속초 씨포레스트 마운틴뷰 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 65,
        hotelName: "속초 씨포레스트 마운틴뷰 호텔",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족해요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 66,
        hotelName: "속코 씨포레스트 마운틴뷰 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,1,1,2,1,2],
        comment: ["최악이에요","불만이에요","별로예요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 67,
        hotelName: "속초 클라우드베이 스위트",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽해요","아주좋아요","완벽해요","좋아요","최고예요"]
        },
        {
        id: 68,
        hotelName: "속초 클라우드베이 스위트",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 69,
        hotelName: "속초 클라우드베이 스위트",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 70,
        hotelName: "속초 레이크브리즈 캠프로그",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["무난해요","기대이하","보통이에요","그저그래요","그럭저럭","아쉬워요"]
        },
        {
        id: 71,
        hotelName: "속초 레이크브리즈 캠프로그",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽해요","좋아요","훌륭해요"]
        },
        {
        id: 72,
        hotelName: "속초 레이크브리즈 캠프로그",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },


        /* 한국 - 경주 */

        {
        id: 73,
        hotelName: "경주 로열가든 힐스 호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","만족해요","아주좋아요","좋아요","훌륭해요"]
        },
        {
        id: 74,
        hotelName: "경주 로열가든 힐스 호텔",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,2,1,2],
        comment: ["별로예요","최악이에요","무난해요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 75,
        hotelName: "경주 로열가든 힐스 호텔",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,3,4,5,4],
        comment: ["좋았어요","만족해요","그저그래요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 76,
        hotelName: "경주 크라운레이크 리조트",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","그럭저럭","별로예요"]
        },
        {
        id: 77,
        hotelName: "경주 크라운레이크 리조트",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","괜찮아요"]
        },
        {
        id: 78,
        hotelName: "경주 크라운레이크 리조트",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 79,
        hotelName: "경주 하모니 스테이션 게스트하우스",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,5,4,4,5,4],
        comment: ["좋았어요","최고예요","만족해요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 80,
        hotelName: "경주 하모니 스테이션 게스트하우스",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","무난해요","그저그래요","그럭저럭","아쉬워요","무난해요"]
        },
        {
        id: 81,
        hotelName: "경주 하모니 스테이션 게스트하우스",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽해요","최고예요","아주좋아요","좋았어요","만족해요","훌륭해요"]
        },
        {
        id: 82,
        hotelName: "경주 네이처힐 프리미어 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 83,
        hotelName: "경주 네이처힐 프리미어 호텔",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족해요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 84,
        hotelName: "경주 네이처힐 프리미어 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 85,
        hotelName: "경주 스카이라인 파노라마 콘도",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽해요","아주좋아요","완벽해요","좋아요","최고예요"]
        },
        {
        id: 86,
        hotelName: "경주 스카이라인 파노라마 콘도",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 87,
        hotelName: "경주 스카이라인 파노라마 콘도",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 88,
        hotelName: "경주 포레스트캠프 휴글로우",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["무난해요","기대이하","보통이에요","그저그래요","그럭저럭","아쉬워요"]
        },
        {
        id: 89,
        hotelName: "경주 포레스트캠프 휴글로우",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽해요","좋아요","훌륭해요"]
        },
        {
        id: 90,
        hotelName: "경주 포레스트캠프 휴글로우",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },

        /* 한국 - 여수 */

        {
        id: 91,
        hotelName: "여수 오션프레임 스테이",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","좋아요"]
        },
        {
        id: 92,
        hotelName: "여수 오션프레임 스테이",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 93,
        hotelName: "여수 오션프레임 스테이",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 94,
        hotelName: "여수 블루코스트 리조트",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["보통이에요","기대이하","무난해요","그저그래요","그럭저럭","별로예요"]
        },
        {
        id: 95,
        hotelName: "여수 블루코스트 리조트",
        roomName: "이그제큐티브 303호",
        maxOccupancy: 4,
        score: [5,5,4,5,5,4],
        comment: ["최고예요","완벽해요","좋았어요","아주좋아요","만족해요","괜찮아요"]
        },
        {
        id: 96,
        hotelName: "여수 블루코스트 리조트",
        roomName: "디럭스 305호",
        maxOccupancy: 2,
        score: [1,2,1,2,1,2],
        comment: ["불만이에요","별로예요","최악이에요","아쉬워요","불만이에요","별로예요"]
        },
        {
        id: 97,
        hotelName: "여수 베이하버 게스트하우스",
        roomName: "스텐다드 401호",
        maxOccupancy: 3,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","괜찮아요","아주좋아요","좋아요"]
        },
        {
        id: 98,
        hotelName: "여수 베이하버 게스트하우스",
        roomName: "프리미어 403호",
        maxOccupancy: 4,
        score: [2,3,2,3,2,3],
        comment: ["별로예요","그저그래요","무난해요","그럭저럭","아쉬워요","그저그래요"]
        },
        {
        id: 99,
        hotelName: "여수 베이하버 게스트하우스",
        roomName: "스텐다드 405호",
        maxOccupancy: 2,
        score: [5,5,5,4,5,5],
        comment: ["완벽해요","최고예요","아주좋아요","좋았어요","만족해요","훌륭해요"]
        },
        {
        id: 100,
        hotelName: "여수 클리프사운드 프라임 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 3,
        score: [3,3,2,3,3,2],
        comment: ["보통이에요","무난해요","그저그랬어요","보통이에요","무난해요","그저그래요"]
        },
        {
        id: 101,
        hotelName: "여수 클리프사운드 프라임 호텔",
        roomName: "이그제큐티브 103호",
        maxOccupancy: 4,
        score: [4,4,4,5,4,5],
        comment: ["좋았어요","만족해요","괜찮아요","최고예요","좋아요","아주좋아요"]
        },
        {
        id: 102,
        hotelName: "여수 클리프사운드 프라임 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 103,
        hotelName: "여수 퍼스트라인 오션뷰 콘도",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [5,5,5,5,4,5],
        comment: ["최고예요","완벽해요","아주좋아요","완벽해요","좋아요","최고예요"]
        },
        {
        id: 104,
        hotelName: "여수 퍼스트라인 오션뷰 콘도",
        roomName: "골져스 203호",
        maxOccupancy: 4,
        score: [2,1,2,1,2,1],
        comment: ["불만이에요","최악이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        {
        id: 105,
        hotelName: "여수 퍼스트라인 오션뷰 콘도",
        roomName: "슈페리얼 205호",
        maxOccupancy: 2,
        score: [4,4,5,4,5,4],
        comment: ["좋았어요","만족해요","최고예요","좋았어요","아주좋아요","좋아요"]
        },
        {
        id: 106,
        hotelName: "여수 포레스트캠프 글램존",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,3,2,3,2],
        comment: ["무난해요","기대이하","보통이에요","그저그래요","그럭저럭","아쉬워요"]
        },
        {
        id: 107,
        hotelName: "여수 포레스트캠프 글램존",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [5,4,5,5,4,5],
        comment: ["최고예요","좋았어요","최고예요","완벽해요","좋아요","아주좋아요"]
        },
        {
        id: 108,
        hotelName: "여수 포레스트캠프 글램존",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,1,2,1,2,1],
        comment: ["최악이에요","불만이에요","별로예요","끔찍해요","불만이에요","최악이에요"]
        },
        /*한국 - 대전*/


        {
        id: 109,
        hotelName: "대전 센트럴파크 시티호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 110,
        hotelName: "대전 센트럴파크 시티호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통이요", "좋았어요", "아주좋음", "만족했음"]
        },
        {
        id: 111,
        hotelName: "대전 센트럴파크 시티호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["괜찮아요", "조금아쉬", "전혀별로", "좋았습니다", "좋아요", "최고네요"]
        },

        {
        id: 112,
        hotelName: "대전 포레스트힐 프리미어 리조트",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀아쉬움", "좋았습니다", "최고였음", "꽤좋음"]
        },
        {
        id: 113,
        hotelName: "대전 포레스트힐 프리미어 리조트",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["조금별루", "실망했음", "보통이요", "감동적임", "좋았습니다", "최고에요"]
        },
        {
        id: 114,
        hotelName: "대전 포레스트힐 프리미어 리조트",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "좋았어요", "좋았습니다", "최고네요"]
        },

        {
        id: 115,
        hotelName: "대전 라운지스테이 게스트하우스",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "평범했음", "좋아요", "최고였음", "만족했음"]
        },
        {
        id: 116,
        hotelName: "대전 라운지스테이 게스트하우스",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["조금별루", "보통이요", "전혀별로", "좋았어요", "최고네요", "꽤좋음"]
        },
        {
        id: 117,
        hotelName: "대전 라운지스테이 게스트하우스",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "실망했음", "좀아쉬움", "좋았어요", "최고네요", "만족했음"]
        },

        {
        id: 118,
        hotelName: "대전 브리즈라인 시그니처 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "보통이요", "아쉬웠음", "좋았어요", "괜찮아요", "최고였음"]
        },
        {
        id: 119,
        hotelName: "대전 브리즈라인 시그니처 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "많이별로", "보통이요", "좋아요", "최고였음", "만족했음"]
        },
        {
        id: 120,
        hotelName: "대전 브리즈라인 시그니처 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "감동적임", "좋았어요", "최고네요"]
        },

        {
        id: 121,
        hotelName: "대전 스카이브릿지 오션뷰 콘도",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["좀아쉬움", "보통이요", "전혀별로", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 122,
        hotelName: "대전 스카이브릿지 오션뷰 콘도",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "아쉬웠음", "보통이요", "좋아요", "최고였음", "꽤좋음"]
        },
        {
        id: 123,
        hotelName: "대전 스카이브릿지 오션뷰 콘도",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금별루", "전혀별로", "좋았어요", "괜찮아요", "최고네요"]
        },

        {
        id: 124,
        hotelName: "대전 포레스트캠프 스톤글램",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로였음", "보통이요", "조금아쉬", "좋았습니다", "최고였음", "꽤좋음"]
        },
        {
        id: 125,
        hotelName: "대전 포레스트캠프 스톤글램",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 126,
        hotelName: "대전 포레스트캠프 스톤글램",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "좋아요", "좋았습니다", "최고였음"]
        },

        /*한국 - 광주*/


        {
        id: 127,
        hotelName: "그랜드 스카이힐 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고였음", "좋았음"]
        },
        {
        id: 128,
        hotelName: "그랜드 스카이힐 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통이요", "좋았어요", "아주좋음", "만족함"]
        },
        {
        id: 129,
        hotelName: "그랜드 스카이힐 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "좋았습니다", "좋아요", "최고네요"]
        },

        {
        id: 130,
        hotelName: "라이트하버 리조트",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀아쉬움", "좋았습니다", "최고였음", "좋았음"]
        },
        {
        id: 131,
        hotelName: "라이트하버 리조트",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["좀별루임", "별로였음", "보통이요", "감동적임", "좋았습니다", "최고에요"]
        },
        {
        id: 132,
        hotelName: "라이트하버 리조트",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금아쉬", "전혀별로", "좋아요", "좋았습니다", "최고임"]
        },

        {
        id: 133,
        hotelName: "브리즈 라운드 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "살짝아쉬", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 134,
        hotelName: "브리즈 라운드 호텔",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀별루임", "보통이요", "전혀별로", "좋았어요", "아주좋음", "좋았음"]
        },
        {
        id: 135,
        hotelName: "브리즈 라운드 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "별로였음", "조금아쉬", "좋아요", "최고였음", "만족함"]
        },

        {
        id: 136,
        hotelName: "힐브리즈 콘도",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "좋아요", "최고였음"]
        },
        {
        id: 137,
        hotelName: "힐브리즈 콘도",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 138,
        hotelName: "힐브리즈 콘도",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "감동적임", "좋았어요", "최고임"]
        },

        {
        id: 139,
        hotelName: "블루파크 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금별루", "보통이요", "전혀별로", "좋아요", "최고였음", "좋았음"]
        },
        {
        id: 140,
        hotelName: "블루파크 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "살짝아쉬", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 141,
        hotelName: "블루파크 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금별루", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        {
        id: 142,
        hotelName: "헤리티지 스테이 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 143,
        hotelName: "헤리티지 스테이 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "별로였음", "보통이요", "좋아요", "최고였음", "꽤좋음"]
        },
        {
        id: 144,
        hotelName: "헤리티지 스테이 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        /*한국 - 제주도*/

        {
        id: 145,
        hotelName: "오션브리즈 리조텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 146,
        hotelName: "오션브리즈 리조텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통이요", "좋아요", "최고였음", "괜찮음"]
        },
        {
        id: 147,
        hotelName: "오션브리즈 리조텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금아쉬", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        {
        id: 148,
        hotelName: "제누스 힐라인 호텔",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 149,
        hotelName: "제누스 힐라인 호텔",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["조금별루", "실망했음", "보통이요", "감동적임", "좋아요", "최고에요"]
        },
        {
        id: 150,
        hotelName: "제누스 힐라인 호텔",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "좋아요", "좋았어요", "최고임"]
        },

        {
        id: 151,
        hotelName: "씨에라 콘도 스위트",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "아쉬웠음", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 152,
        hotelName: "씨에라 콘도 스위트",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀별루임", "평범했음", "전혀별로", "좋아요", "아주좋음", "좋았음"]
        },
        {
        id: 153,
        hotelName: "씨에라 콘도 스위트",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "별로였음", "조금아쉬", "좋아요", "최고였음", "만족함"]
        },

        {
        id: 154,
        hotelName: "블랑코 서머힐 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "보통이요", "아쉬웠음", "좋았어요", "좋아요", "최고임"]
        },
        {
        id: 155,
        hotelName: "블랑코 서머힐 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고였음", "괜찮음"]
        },
        {
        id: 156,
        hotelName: "블랑코 서머힐 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["평범했음", "조금아쉬", "전혀별로", "감동적임", "좋아요", "최고임"]
        },

        {
        id: 157,
        hotelName: "에메랄드 베이 로지",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금별루", "보통이요", "전혀별로", "좋아요", "최고였음", "잘지냄"]
        },
        {
        id: 158,
        hotelName: "에메랄드 베이 로지",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "살짝아쉬", "보통이요", "좋았어요", "최고였음", "괜찮음"]
        },
        {
        id: 159,
        hotelName: "에메랄드 베이 로지",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금별루", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        {
        id: 160,
        hotelName: "서머필드 캠프 로지",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "최고였음", "좋았음"]
        },
        {
        id: 161,
        hotelName: "서머필드 캠프 로지",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["살짝별루", "실망했음", "보통이요", "좋아요", "최고였음", "괜찮음"]
        },
        {
        id: 162,
        hotelName: "서머필드 캠프 로지",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "좋아요", "좋았어요", "최고임"]
        },

        /*한국 - 포항*/


        {
        id: 163,
        hotelName: "포항 씨라인 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 164,
        hotelName: "포항 씨라인 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통이요", "좋았어요", "아주좋음", "괜찮음"]
        },
        {
        id: 165,
        hotelName: "포항 씨라인 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금아쉬", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        {
        id: 166,
        hotelName: "포트웨이브 리조트",
        roomName: "스텐다드 404호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "최고였음", "만족함"]
        },
        {
        id: 167,
        hotelName: "포트웨이브 리조트",
        roomName: "프리미엄룸 103호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["조금별루", "실망했음", "보통이요", "감동적임", "좋아요", "최고임"]
        },
        {
        id: 168,
        hotelName: "포트웨이브 리조트",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "좋아요", "좋았어요", "최고임"]
        },

        {
        id: 169,
        hotelName: "포항 마리나 스테이",
        roomName: "프리미엄룸 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 170,
        hotelName: "포항 마리나 스테이",
        roomName: "디럭스 101호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀별루임", "보통이요", "전혀별로", "좋았어요", "아주좋음", "좋았음"]
        },
        {
        id: 171,
        hotelName: "포항 마리나 스테이",
        roomName: "코지룸 302호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "별로였음", "조금아쉬", "좋아요", "최고였음", "만족함"]
        },

        {
        id: 172,
        hotelName: "오션스톤 콘도",
        roomName: "프리미엄스위트 303호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "보통이요", "아쉬웠음", "좋았어요", "좋아요", "최고임"]
        },
        {
        id: 173,
        hotelName: "오션스톤 콘도",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고였음", "괜찮음"]
        },
        {
        id: 174,
        hotelName: "오션스톤 콘도",
        roomName: "스탠다드 205호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["평범했음", "조금아쉬", "전혀별로", "감동적임", "좋아요", "최고임"]
        },

        {
        id: 175,
        hotelName: "블루웨이브 캠프",
        roomName: "골져스 504호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금별루", "보통이요", "전혀별로", "좋아요", "최고였음", "잘지냄"]
        },
        {
        id: 176,
        hotelName: "블루웨이브 캠프",
        roomName: "프리미엄룸 505호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "살짝아쉬", "보통이요", "좋았어요", "최고였음", "괜찮음"]
        },
        {
        id: 177,
        hotelName: "블루웨이브 캠프",
        roomName: "코지룸 402호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["평범했음", "조금별루", "전혀별로", "좋았어요", "좋아요", "최고임"]
        },

        {
        id: 178,
        hotelName: "포항 클리프오션 호텔",
        roomName: "스탠다드 301호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀별루임", "좋았어요", "최고였음", "좋았음"]
        },
        {
        id: 179,
        hotelName: "포항 클리프오션 호텔",
        roomName: "프리미엄스위트 505호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["살짝별루", "실망했음", "보통이요", "좋아요", "최고였음", "괜찮음"]
        },
        {
        id: 180,
        hotelName: "포항 클리프오션 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금아쉬", "전혀별로", "좋아요", "좋았어요", "최고임"]
        },
        //   일본 시작
        /* -------------------- 1. 스카이 브리즈 호텔 -------------------- */
        {
        id: 181,
        hotelName: "스카이 브리즈 호텔",
        roomName: "슈페리얼 201호",
        maxOccupancy: 4,
        score: [1,2,2,3,4,5],
        comment: ["별로예요","아쉬워요","좀 그래요","보통이요","좋았어요","최고예요"]
        },
        {
        id: 182,
        hotelName: "스카이 브리즈 호텔",
        roomName: "골져스 405호",
        maxOccupancy: 3,
        score: [2,1,3,4,4,5],
        comment: ["안좋아요","별로예요","보통이요","좋았어요","만족해요","최고예요"]
        },
        {
        id: 183,
        hotelName: "스카이 브리즈 호텔",
        roomName: "슈페리얼 102호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,4],
        comment: ["보통이요","별로예요","안좋아요","좋아요","최고예요","만족해요"]
        },

        /* -------------------- 2. 블루문 라이트 호텔 -------------------- */
        {
        id: 184,
        hotelName: "블루문 라이트 호텔",
        roomName: "디럭스 303호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["별로예요","보통이요","안좋아요","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 185,
        hotelName: "블루문 라이트 호텔",
        roomName: "이그제큐티브 402호",
        maxOccupancy: 3,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","보통이에요","좋아요","최고예요"]
        },
        {
        id: 186,
        hotelName: "블루문 라이트 호텔",
        roomName: "디럭스 105호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","최고예요","너무좋음"]
        },

        /* -------------------- 3. 그랜드 루미에르 호텔 -------------------- */
        {
        id: 187,
        hotelName: "그랜드 루미에르 호텔",
        roomName: "스텐다드 204호",
        maxOccupancy: 3,
        score: [1,2,3,3,4,5],
        comment: ["별로예요","안좋아요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 188,
        hotelName: "그랜드 루미에르 호텔",
        roomName: "프리미어 501호",
        maxOccupancy: 4,
        score: [2,1,2,3,4,4],
        comment: ["아쉬워요","안좋아요","좀 그래요","보통이요","좋아요","만족해요"]
        },
        {
        id: 189,
        hotelName: "그랜드 루미에르 호텔",
        roomName: "스텐다드 302호",
        maxOccupancy: 2,
        score: [3,3,1,4,5,4],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","최고예요","만족해요"]
        },

        /* -------------------- 4. 라이트 힐즈 스위트 -------------------- */
        {
        id: 190,
        hotelName: "라이트 힐즈 스위트",
        roomName: "슈페리얼 401호",
        maxOccupancy: 3,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 191,
        hotelName: "라이트 힐즈 스위트",
        roomName: "골져스 103호",
        maxOccupancy: 2,
        score: [1,2,2,4,4,5],
        comment: ["별로예요","안좋아요","조금별로","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 192,
        hotelName: "라이트 힐즈 스위트",
        roomName: "슈페리얼 505호",
        maxOccupancy: 4,
        score: [3,3,1,4,5,5],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","최고예요","너무좋음"]
        },

        /* -------------------- 5. 센트럴 오닉스 호텔 -------------------- */
        {
        id: 193,
        hotelName: "센트럴 오닉스 호텔",
        roomName: "디럭스 201호",
        maxOccupancy: 2,
        score: [1,3,2,4,5,4],
        comment: ["별로예요","보통이요","안좋아요","좋아요","최고예요","만족해요"]
        },
        {
        id: 194,
        hotelName: "센트럴 오닉스 호텔",
        roomName: "이그제큐티브 404호",
        maxOccupancy: 3,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 195,
        hotelName: "센트럴 오닉스 호텔",
        roomName: "디럭스 102호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 6. 프리미어노바 호텔 -------------------- */
        {
        id: 196,
        hotelName: "프리미어노바 호텔",
        roomName: "스텐다드 305호",
        maxOccupancy: 2,
        score: [1,2,3,4,4,5],
        comment: ["별로예요","안좋아요","보통이요","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 197,
        hotelName: "프리미어노바 호텔",
        roomName: "프리미어 402호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["안좋아요","보통이요","별로예요","좋아요","최고예요","만족해요"]
        },
        {
        id: 198,
        hotelName: "프리미어노바 호텔",
        roomName: "스텐다드 101호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 7. 모던크레센트 호텔 -------------------- */
        {
        id: 199,
        hotelName: "모던크레센트 호텔",
        roomName: "슈페리얼 503호",
        maxOccupancy: 4,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 200,
        hotelName: "모던크레센트 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,2,4,4,5],
        comment: ["별로예요","안좋아요","조금별로","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 201,
        hotelName: "모던크레센트 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [3,3,1,4,5,5],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","최고예요","너무좋음"]
        },

        /* -------------------- 8. 루프테라스 호텔 -------------------- */
        {
        id: 202,
        hotelName: "루프테라스 호텔",
        roomName: "디럭스 202호",
        maxOccupancy: 2,
        score: [1,3,2,4,5,4],
        comment: ["별로예요","보통이요","안좋아요","좋아요","최고예요","만족해요"]
        },
        {
        id: 203,
        hotelName: "루프테라스 호텔",
        roomName: "이그제큐티브 504호",
        maxOccupancy: 4,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 204,
        hotelName: "루프테라스 호텔",
        roomName: "디럭스 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 9. 스노우바레 호텔 -------------------- */
        {
        id: 205,
        hotelName: "스노우바레 호텔",
        roomName: "스텐다드 304호",
        maxOccupancy: 4,
        score: [1,2,2,3,4,5],
        comment: ["별로예요","안좋아요","조금별로","보통이요","좋아요","최고예요"]
        },
        {
        id: 206,
        hotelName: "스노우바레 호텔",
        roomName: "프리미어 102호",
        maxOccupancy: 2,
        score: [2,1,3,3,5,4],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","최고예요","만족해요"]
        },
        {
        id: 207,
        hotelName: "스노우바레 호텔",
        roomName: "스텐다드 501호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 10. 화이트 마운틴 스위트 -------------------- */
        {
        id: 208,
        hotelName: "화이트 마운틴 스위트",
        roomName: "슈페리얼 205호",
        maxOccupancy: 3,
        score: [2,1,2,4,4,5],
        comment: ["안좋아요","별로예요","조금별로","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 209,
        hotelName: "화이트 마운틴 스위트",
        roomName: "골져스 503호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로예요","보통이요","안좋아요","좋아요","최고예요","만족해요"]
        },
        {
        id: 210,
        hotelName: "화이트 마운틴 스위트",
        roomName: "슈페리얼 104호",
        maxOccupancy: 2,
        score: [3,3,1,4,4,5],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 11. 하이번 크로스 호텔 -------------------- */
        {
        id: 211,
        hotelName: "하이번 크로스 호텔",
        roomName: "디럭스 302호",
        maxOccupancy: 4,
        score: [1,2,3,3,5,4],
        comment: ["별로예요","안좋아요","보통이요","괜찮아요","최고예요","만족해요"]
        },
        {
        id: 212,
        hotelName: "하이번 크로스 호텔",
        roomName: "이그제큐티브 104호",
        maxOccupancy: 2,
        score: [2,1,2,4,4,5],
        comment: ["안좋아요","별로예요","조금별로","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 213,
        hotelName: "하이번 크로스 호텔",
        roomName: "디럭스 501호",
        maxOccupancy: 3,
        score: [3,3,1,4,5,4],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","최고예요","만족해요"]
        },

        /* -------------------- 12. 딥 블리자드 호텔 -------------------- */
        {
        id: 214,
        hotelName: "딥 블리자드 호텔",
        roomName: "스텐다드 103호",
        maxOccupancy: 2,
        score: [1,2,3,4,4,5],
        comment: ["별로예요","안좋아요","보통이요","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 215,
        hotelName: "딥 블리자드 호텔",
        roomName: "프리미어 304호",
        maxOccupancy: 4,
        score: [2,1,3,3,4,5],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 216,
        hotelName: "딥 블리자드 호텔",
        roomName: "스텐다드 505호",
        maxOccupancy: 3,
        score: [3,2,1,4,5,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","최고예요","너무좋음"]
        },

        /* -------------------- 13. 프레시 폴라리스 호텔 -------------------- */
        {
        id: 217,
        hotelName: "프레시 폴라리스 호텔",
        roomName: "슈페리얼 401호",
        maxOccupancy: 3,
        score: [1,2,2,3,4,5],
        comment: ["별로예요","안좋아요","조금별로","보통이요","좋아요","최고예요"]
        },
        {
        id: 218,
        hotelName: "프레시 폴라리스 호텔",
        roomName: "골져스 202호",
        maxOccupancy: 2,
        score: [2,1,3,3,5,4],
        comment: ["안좋아요","별로예요","보통이요","괜찮아요","최고예요","만족해요"]
        },
        {
        id: 219,
        hotelName: "프레시 폴라리스 호텔",
        roomName: "슈페리얼 104호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        /* -------------------- 14. 스노우 브리즈 리조트 -------------------- */
        {
        id: 220,
        hotelName: "스노우 브리즈 리조트",
        roomName: "디럭스 303호",
        maxOccupancy: 4,
        score: [1,3,2,4,4,5],
        comment: ["별로예요","보통이요","안좋아요","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 221,
        hotelName: "스노우 브리즈 리조트",
        roomName: "이그제큐티브 105호",
        maxOccupancy: 3,
        score: [2,1,2,3,4,5],
        comment: ["안좋아요","별로예요","조금별로","보통이요","좋아요","최고예요"]
        },
        {
        id: 222,
        hotelName: "스노우 브리즈 리조트",
        roomName: "디럭스 501호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,4],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","최고예요","만족해요"]
        },

        /* -------------------- 15. 스노우 하모니 호텔 -------------------- */
        {
        id: 223,
        hotelName: "스노우 하모니 호텔",
        roomName: "스텐다드 102호",
        maxOccupancy: 2,
        score: [1,2,3,3,4,5],
        comment: ["별로예요","안좋아요","보통이요","괜찮아요","좋아요","최고예요"]
        },
        {
        id: 224,
        hotelName: "스노우 하모니 호텔",
        roomName: "프리미어 405호",
        maxOccupancy: 4,
        score: [2,1,3,4,4,5],
        comment: ["안좋아요","별로예요","보통이요","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 225,
        hotelName: "스노우 하모니 호텔",
        roomName: "스텐다드 201호",
        maxOccupancy: 3,
        score: [3,3,1,4,5,4],
        comment: ["보통이요","괜찮아요","안좋아요","좋아요","최고예요","만족해요"]
        },

        /* -------------------- 16. 라이트 애스펜 호텔 -------------------- */
        {
        id: 226,
        hotelName: "라이트 애스펜 호텔",
        roomName: "슈페리얼 504호",
        maxOccupancy: 4,
        score: [1,2,2,4,4,5],
        comment: ["별로예요","안좋아요","조금별로","좋아요","괜찮아요","최고예요"]
        },
        {
        id: 227,
        hotelName: "라이트 애스펜 호텔",
        roomName: "골져스 103호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["안좋아요","별로예요","보통이요","좋아요","최고예요","만족해요"]
        },
        {
        id: 228,
        hotelName: "라이트 애스펜 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요","아쉬워요","안좋아요","좋아요","괜찮아요","최고예요"]
        },

        // 일본 끝  미국 시작
        /* -------------------- 1. 포레스트 힐스호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 229,
        hotelName: "포레스트 힐스호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 4,
        score: [1,3,4,2,5,4],
        comment: ["별로예요","그냥그래","좋았어요","실망했음","최고였던","너무좋음"]
        },
        {
        id: 230,
        hotelName: "포레스트 힐스호텔",
        roomName: "골져스 203호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","만족해요","보통이요","불편했음","안좋아요","좋았어요"]
        },
        {
        id: 231,
        hotelName: "포레스트 힐스호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 2,
        score: [2,2,3,4,5,4],
        comment: ["너무심해","별로예요","그냥그래","좋았어요","최고였던","너무좋음"]
        },

        /* -------------------- 2. 오션 클라우드 리조트 (디럭스/이그제큐티브) -------------------- */
        {
        id: 232,
        hotelName: "오션 클라우드 리조트",
        roomName: "디럭스 105호",
        maxOccupancy: 3,
        score: [3,4,5,2,1,3],
        comment: ["보통이요","좋았어요","최고였던","불편했음","안좋아요","그냥그래"]
        },
        {
        id: 233,
        hotelName: "오션 클라우드 리조트",
        roomName: "이그제큐티브 301호",
        maxOccupancy: 4,
        score: [4,4,2,3,1,5],
        comment: ["좋았어요","만족해요","별로예요","보통이요","너무심해","최고였던"]
        },
        {
        id: 234,
        hotelName: "오션 클라우드 리조트",
        roomName: "디럭스 503호",
        maxOccupancy: 2,
        score: [5,5,4,3,2,1],
        comment: ["최고였던","너무좋음","좋았어요","보통이요","별로예요","안좋아요"]
        },

        /* -------------------- 3. 어반 블루 스위트 (스텐다드/프리미어) -------------------- */
        {
        id: 235,
        hotelName: "어반 블루 스위트",
        roomName: "스텐다드 204호",
        maxOccupancy: 2,
        score: [1,3,2,4,5,4],
        comment: ["안좋아요","보통이요","별로예요","좋았어요","너무좋음","만족해요"]
        },
        {
        id: 236,
        hotelName: "어반 블루 스위트",
        roomName: "프리미어 402호",
        maxOccupancy: 4,
        score: [3,2,1,4,5,3],
        comment: ["그냥그래","실망했음","너무심해","좋았어요","최고였던","보통이요"]
        },
        {
        id: 237,
        hotelName: "어반 블루 스위트",
        roomName: "스텐다드 104호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","별로예요","안좋아요","만족해요"]
        },

        /* -------------------- 4. 선셋 마레 호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 238,
        hotelName: "선셋 마레 호텔",
        roomName: "슈페리얼 503호",
        maxOccupancy: 2,
        score: [2,3,4,1,5,4],
        comment: ["별로예요","보통이요","좋았어요","너무심해","최고였던","만족해요"]
        },
        {
        id: 239,
        hotelName: "선셋 마레 호텔",
        roomName: "골져스 301호",
        maxOccupancy: 3,
        score: [4,5,3,2,1,4],
        comment: ["좋았어요","최고였던","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 240,
        hotelName: "선셋 마레 호텔",
        roomName: "슈페리얼 103호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,3],
        comment: ["너무심해","별로예요","보통이요","좋았어요","최고였던","그냥그래"]
        },

        /* -------------------- 5. 레드스톤 힐스 호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 241,
        hotelName: "레드스톤 힐스 호텔",
        roomName: "디럭스 202호",
        maxOccupancy: 3,
        score: [2,4,3,5,1,4],
        comment: ["별로예요","좋았어요","보통이요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 242,
        hotelName: "레드스톤 힐스 호텔",
        roomName: "이그제큐티브 402호",
        maxOccupancy: 2,
        score: [3,2,4,5,1,3],
        comment: ["그냥그래","실망했음","좋았어요","너무좋음","안좋아요","보통이요"]
        },
        {
        id: 243,
        hotelName: "레드스톤 힐스 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","만족해요","그냥그래","별로예요","너무심해","좋았어요"]
        },

        /* -------------------- 6. 하버링크 호텔 (스텐다드/프리미어) -------------------- */
        {
        id: 244,
        hotelName: "하버링크 호텔",
        roomName: "스텐다드 302호",
        maxOccupancy: 4,
        score: [3,3,4,5,1,2],
        comment: ["보통이요","그냥그래","좋았어요","최고였던","안좋아요","별로예요"]
        },
        {
        id: 245,
        hotelName: "하버링크 호텔",
        roomName: "프리미어 105호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["너무심해","안좋아요","보통이요","좋았어요","최고였던","만족해요"]
        },
        {
        id: 246,
        hotelName: "하버링크 호텔",
        roomName: "스텐다드 503호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","별로예요","안좋아요","만족해요"]
        },

        /* -------------------- 7. 그랜드 웨이브 호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 247,
        hotelName: "그랜드 웨이브 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 2,
        score: [2,3,4,5,1,3],
        comment: ["별로예요","보통이요","좋았어요","최고였던","너무심해","그냥그래"]
        },
        {
        id: 248,
        hotelName: "그랜드 웨이브 호텔",
        roomName: "골져스 204호",
        maxOccupancy: 3,
        score: [4,2,3,5,1,4],
        comment: ["좋았어요","실망했음","보통이요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 249,
        hotelName: "그랜드 웨이브 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","별로예요","안좋아요","만족해요"]
        },

        /* -------------------- 8. 라구나브리즈 호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 250,
        hotelName: "라구나브리즈 호텔",
        roomName: "디럭스 502호",
        maxOccupancy: 2,
        score: [5,3,4,2,1,4],
        comment: ["최고였던","보통이요","좋았어요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 251,
        hotelName: "라구나브리즈 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [4,3,2,5,1,4],
        comment: ["좋았어요","보통이요","별로예요","최고였던","너무심해","만족해요"]
        },
        {
        id: 252,
        hotelName: "라구나브리즈 호텔",
        roomName: "디럭스 102호",
        maxOccupancy: 3,
        score: [2,1,3,5,4,4],
        comment: ["실망했음","안좋아요","그냥그래","최고였던","좋았어요","만족해요"]
        },

        /* -------------------- 9. **센트럴 브리즈 호텔** (스텐다드/프리미어) -------------------- */
        {
        id: 253,
        hotelName: "센트럴 브리즈 호텔",
        roomName: "스텐다드 304호",
        maxOccupancy: 3,
        score: [1,3,4,2,5,4],
        comment: ["너무심해","그냥그래","좋았어요","별로예요","최고였던","만족해요"]
        },
        {
        id: 254,
        hotelName: "센트럴 브리즈 호텔",
        roomName: "프리미어 104호",
        maxOccupancy: 4,
        score: [4,2,3,5,1,3],
        comment: ["좋았어요","별로예요","보통이요","최고였던","너무심해","그냥그래"]
        },
        {
        id: 255,
        hotelName: "센트럴 브리즈 호텔",
        roomName: "스텐다드 503호",
        maxOccupancy: 2,
        score: [5,4,2,3,1,4],
        comment: ["최고였던","만족해요","실망했음","보통이요","안좋아요","좋았어요"]
        },

        /* -------------------- 10. 에메랄드파크 리조트 (슈페리얼/골져스) -------------------- */
        {
        id: 256,
        hotelName: "에메랄드파크 리조트",
        roomName: "슈페리얼 203호",
        maxOccupancy: 2,
        score: [2,3,4,5,1,4],
        comment: ["별로예요","보통이요","좋았어요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 257,
        hotelName: "에메랄드파크 리조트",
        roomName: "골져스 402호",
        maxOccupancy: 3,
        score: [4,5,3,2,1,4],
        comment: ["좋았어요","너무좋음","그냥그래","별로예요","안좋아요","만족해요"]
        },
        {
        id: 258,
        hotelName: "에메랄드파크 리조트",
        roomName: "슈페리얼 104호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,3],
        comment: ["너무심해","안좋아요","보통이요","좋았어요","최고였던","그냥그래"]
        },

        /* -------------------- 11. 노바 크라운 스위트 (디럭스/이그제큐티브) -------------------- */
        {
        id: 259,
        hotelName: "노바 크라운 스위트",
        roomName: "디럭스 101호",
        maxOccupancy: 4,
        score: [4,3,2,5,1,4],
        comment: ["좋았어요","보통이요","별로예요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 260,
        hotelName: "노바 크라운 스위트",
        roomName: "이그제큐티브 304호",
        maxOccupancy: 2,
        score: [1,2,4,3,5,4],
        comment: ["너무심해","별로예요","좋았어요","보통이요","최고였던","만족해요"]
        },
        {
        id: 261,
        hotelName: "노바 크라운 스위트",
        roomName: "디럭스 502호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,3],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","그냥그래"]
        },

        /* -------------------- 12. 하모니 프라임 호텔 (스텐다드/프리미어) -------------------- */
        {
        id: 262,
        hotelName: "하모니 프라임 호텔",
        roomName: "스텐다드 204호",
        maxOccupancy: 4,
        score: [2,3,4,5,1,3],
        comment: ["별로예요","보통이요","좋았어요","최고였던","안좋아요","그냥그래"]
        },
        {
        id: 263,
        hotelName: "하모니 프라임 호텔",
        roomName: "프리미어 402호",
        maxOccupancy: 3,
        score: [3,2,4,5,1,4],
        comment: ["그냥그래","별로예요","좋았어요","최고였던","너무심해","만족해요"]
        },
        {
        id: 264,
        hotelName: "하모니 프라임 호텔",
        roomName: "스텐다드 103호",
        maxOccupancy: 2,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","실망했음","안좋아요","만족해요"]
        },

        /* -------------------- 13. 브로드웨이 샤인 호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 265,
        hotelName: "브로드웨이 샤인 호텔",
        roomName: "슈페리얼 301호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["너무심해","안좋아요","보통이요","좋았어요","최고였던","만족해요"]
        },
        {
        id: 266,
        hotelName: "브로드웨이 샤인 호텔",
        roomName: "골져스 105호",
        maxOccupancy: 4,
        score: [4,4,3,2,1,5],
        comment: ["좋았어요","만족해요","보통이요","별로예요","안좋아요","최고였던"]
        },
        {
        id: 267,
        hotelName: "브로드웨이 샤인 호텔",
        roomName: "슈페리얼 503호",
        maxOccupancy: 2,
        score: [5,3,4,2,1,4],
        comment: ["최고였던","보통이요","좋았어요","별로예요","안좋아요","만족해요"]
        },

        /* -------------------- 14. 미드타운 힐즈호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 268,
        hotelName: "미드타운 힐즈호텔",
        roomName: "디럭스 402호",
        maxOccupancy: 3,
        score: [4,3,2,5,1,3],
        comment: ["좋았어요","그냥그래","별로예요","최고였던","너무심해","보통이요"]
        },
        {
        id: 269,
        hotelName: "미드타운 힐즈호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","만족해요","보통이요","별로예요","안좋아요","좋았어요"]
        },
        {
        id: 270,
        hotelName: "미드타운 힐즈호텔",
        roomName: "디럭스 104호",
        maxOccupancy: 2,
        score: [1,3,4,2,5,4],
        comment: ["안좋아요","보통이요","좋았어요","별로예요","최고였던","만족해요"]
        },

        /* -------------------- 15. 센트럴 스카이라인 호텔 (스텐다드/프리미어) -------------------- */
        {
        id: 271,
        hotelName: "센트럴 스카이라인 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [3,2,4,5,1,3],
        comment: ["보통이요","별로예요","좋았어요","최고였던","너무심해","그냥그래"]
        },
        {
        id: 272,
        hotelName: "센트럴 스카이라인 호텔",
        roomName: "프리미어 101호",
        maxOccupancy: 4,
        score: [4,4,3,2,1,5],
        comment: ["좋았어요","만족해요","보통이요","별로예요","안좋아요","최고였던"]
        },
        {
        id: 273,
        hotelName: "센트럴 스카이라인 호텔",
        roomName: "스텐다드 503호",
        maxOccupancy: 2,
        score: [5,3,4,2,1,4],
        comment: ["최고였던","보통이요","좋았어요","실망했음","안좋아요","만족해요"]
        },

        /* -------------------- 16. 브루클린 웨이브 호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 274,
        hotelName: "브루클린 웨이브 호텔",
        roomName: "슈페리얼 203호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 275,
        hotelName: "브루클린 웨이브 호텔",
        roomName: "골져스 402호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,3],
        comment: ["너무심해","안좋아요","그냥그래","좋았어요","최고였던","보통이요"]
        },
        {
        id: 276,
        hotelName: "브루클린 웨이브 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [4,4,3,2,1,5],
        comment: ["좋았어요","만족해요","보통이요","별로예요","안좋아요","최고였던"]
        },

        /* -------------------- 17. 트로피컬 웨이브 호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 277,
        hotelName: "트로피컬 웨이브 호텔",
        roomName: "디럭스 202호",
        maxOccupancy: 2,
        score: [2,3,4,5,1,4],
        comment: ["별로예요","보통이요","좋았어요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 278,
        hotelName: "트로피컬 웨이브 호텔",
        roomName: "이그제큐티브 503호",
        maxOccupancy: 4,
        score: [3,2,4,5,1,3],
        comment: ["보통이요","별로예요","좋았어요","최고였던","너무심해","그냥그래"]
        },
        {
        id: 279,
        hotelName: "트로피컬 웨이브 호텔",
        roomName: "디럭스 402호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","실망했음","안좋아요","만족해요"]
        },

        /* -------------------- 18. 블루샌드 스위트 (스텐다드/프리미어) -------------------- */
        {
        id: 280,
        hotelName: "블루샌드 스위트",
        roomName: "스텐다드 104호",
        maxOccupancy: 3,
        score: [1,3,4,2,5,4],
        comment: ["안좋아요","보통이요","좋았어요","별로예요","최고였던","만족해요"]
        },
        {
        id: 281,
        hotelName: "블루샌드 스위트",
        roomName: "프리미어 304호",
        maxOccupancy: 2,
        score: [4,3,2,5,1,4],
        comment: ["좋았어요","보통이요","별로예요","최고였던","너무심해","만족해요"]
        },
        {
        id: 282,
        hotelName: "블루샌드 스위트",
        roomName: "스텐다드 503호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","그냥그래","별로예요","안좋아요","만족해요"]
        },

        /* -------------------- 19. 아이랜더베이 리조트 (슈페리얼/골져스) -------------------- */
        {
        id: 283,
        hotelName: "아이랜더베이 리조트",
        roomName: "슈페리얼 201호",
        maxOccupancy: 3,
        score: [2,3,4,5,1,4],
        comment: ["별로예요","보통이요","좋았어요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 284,
        hotelName: "아이랜더베이 리조트",
        roomName: "골져스 503호",
        maxOccupancy: 2,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 285,
        hotelName: "아이랜더베이 리조트",
        roomName: "슈페리얼 104호",
        maxOccupancy: 4,
        score: [1,3,4,2,5,3],
        comment: ["너무심해","그냥그래","좋았어요","별로예요","최고였던","보통이요"]
        },

        /* -------------------- 20. 코랄리프 호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 286,
        hotelName: "코랄리프 호텔",
        roomName: "디럭스 402호",
        maxOccupancy: 2,
        score: [1,4,3,5,2,4],
        comment: ["너무심해","좋았어요","보통이요","최고였던","별로예요","만족해요"]
        },
        {
        id: 287,
        hotelName: "코랄리프 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [4,5,3,2,1,4],
        comment: ["좋았어요","너무좋음","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 288,
        hotelName: "코랄리프 호텔",
        roomName: "디럭스 104호",
        maxOccupancy: 3,
        score: [3,2,4,5,1,3],
        comment: ["보통이요","별로예요","좋았어요","최고였던","안좋아요","그냥그래"]
        },

        /* -------------------- 21. 에메랄드비치 호텔 (스텐다드/프리미어) -------------------- */
        {
        id: 289,
        hotelName: "에메랄드비치 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 4,
        score: [3,2,4,5,1,4],
        comment: ["보통이요","실망했음","좋았어요","최고였던","너무심해","만족해요"]
        },
        {
        id: 290,
        hotelName: "에메랄드비치 호텔",
        roomName: "프리미어 101호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,3],
        comment: ["최고였던","좋았어요","그냥그래","별로예요","안좋아요","보통이요"]
        },
        {
        id: 291,
        hotelName: "에메랄드비치 호텔",
        roomName: "스텐다드 503호",
        maxOccupancy: 2,
        score: [1,3,4,2,5,4],
        comment: ["너무심해","보통이요","좋았어요","별로예요","최고였던","만족해요"]
        },

        /* -------------------- 22. 트로피컬코브 호텔 (슈페리얼/골져스) -------------------- */
        {
        id: 292,
        hotelName: "트로피컬코브 호텔",
        roomName: "슈페리얼 203호",
        maxOccupancy: 4,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 293,
        hotelName: "트로피컬코브 호텔",
        roomName: "골져스 402호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,3],
        comment: ["너무심해","안좋아요","그냥그래","좋았어요","최고였던","보통이요"]
        },
        {
        id: 294,
        hotelName: "트로피컬코브 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [4,4,3,2,1,5],
        comment: ["좋았어요","만족해요","보통이요","별로예요","안좋아요","최고였던"]
        },

        /* -------------------- 23. 코코넛하버 호텔 (디럭스/이그제큐티브) -------------------- */
        {
        id: 295,
        hotelName: "코코넛하버 호텔",
        roomName: "디럭스 301호",
        maxOccupancy: 3,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","만족해요"]
        },
        {
        id: 296,
        hotelName: "코코넛하버 호텔",
        roomName: "이그제큐티브 105호",
        maxOccupancy: 2,
        score: [4,3,2,5,1,3],
        comment: ["좋았어요","보통이요","별로예요","최고였던","안좋아요","그냥그래"]
        },
        {
        id: 297,
        hotelName: "코코넛하버 호텔",
        roomName: "디럭스 503호",
        maxOccupancy: 4,
        score: [1,3,4,2,5,4],
        comment: ["너무심해","보통이요","좋았어요","별로예요","최고였던","만족해요"]
        },

        /* -------------------- 24. 블루리프 베이스위트 (스텐다드/프리미어) -------------------- */
        {
        id: 298,
        hotelName: "블루리프 베이스위트",
        roomName: "스텐다드 104호",
        maxOccupancy: 3,
        score: [2,3,4,5,1,4],
        comment: ["별로예요","보통이요","좋았어요","최고였던","안좋아요","만족해요"]
        },
        {
        id: 299,
        hotelName: "블루리프 베이스위트",
        roomName: "프리미어 302호",
        maxOccupancy: 4,
        score: [4,3,2,5,1,3],
        comment: ["좋았어요","보통이요","별로예요","최고였던","안좋아요","그냥그래"]
        },
        {
        id: 300,
        hotelName: "블루리프 베이스위트",
        roomName: "스텐다드 503호",
        maxOccupancy: 2,
        score: [5,4,3,2,1,4],
        comment: ["최고였던","좋았어요","보통이요","별로예요","안좋아요","만족해요"]
        },
        //   미국 끝 중국 시작

        /* 중국 - 장가계 */
        {
        id: 301,
        hotelName: "스카이브리즈 프라임 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로예요", "아쉬워요", "그냥그래요", "좋았어요", "너무좋음", "참좋네요"]
        },
        {
        id: 302,
        hotelName: "스카이브리즈 프라임 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별로임", "실망했음", "무난해요", "괜찮아요", "최고에요", "참좋아요"]
        },
        {
        id: 303,
        hotelName: "스카이브리즈 프라임 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,4],
        comment: ["보통이에요", "조금별로", "나빴어요", "좋았어요", "아주좋음", "상당히좋"]
        },

        {
        id: 304,
        hotelName: "블루웨이브 시그니처 호텔",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로임", "그냥그럼", "좀별로임", "좋네요", "최고에요", "참좋음"]
        },
        {
        id: 305,
        hotelName: "블루웨이브 시그니처 호텔",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["아쉬움", "실망함", "보통임", "매우좋음", "좋았어요", "최고임"]
        },
        {
        id: 306,
        hotelName: "블루웨이브 시그니처 호텔",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["그냥그래", "나쁘네요", "별로임", "좋았음", "괜찮음", "최고에요"]
        },

        {
        id: 307,
        hotelName: "하모니힐 클래식 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["싫었음", "아쉬움", "보통임", "좋네요", "아주좋음", "참좋네요"]
        },
        {
        id: 308,
        hotelName: "하모니힐 클래식 호텔",
        roomName: "골져스 504호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["좀별로", "그냥그럼", "나빴음", "괜찮음", "최고임", "좋아요"]
        },
        {
        id: 309,
        hotelName: "하모니힐 클래식 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이에요", "별로임", "조금별로", "괜찮아요", "매우좋음", "좋아요"]
        },

        {
        id: 310,
        hotelName: "루미너스 파크 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 2,
        score: [1,3,2,4,4,5],
        comment: ["나빴음", "보통임", "좀별로", "좋아요", "괜찮음", "최고임"]
        },
        {
        id: 311,
        hotelName: "루미너스 파크 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["별로임", "실망함", "그냥그럼", "좋았음", "최고임", "괜찮음"]
        },
        {
        id: 312,
        hotelName: "루미너스 파크 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통임", "좀별로", "나빴음", "매우좋음", "좋네요", "최고임"]
        },

        {
        id: 313,
        hotelName: "레브클라우드 시그니처 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["별로임", "그냥그럼", "나빴음", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 314,
        hotelName: "레브클라우드 시그니처 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,4,5],
        comment: ["실망함", "아쉬움", "보통임", "좋아요", "괜찮음", "최고임"]
        },
        {
        id: 315,
        hotelName: "레브클라우드 시그니처 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,5,4],
        comment: ["그냥그래", "조금별로", "나빴음", "좋아요", "아주좋음", "참좋음"]
        },

        {
        id: 316,
        hotelName: "클라우드하버 프리미엄 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로임", "보통임", "좀별로", "좋네요", "최고임", "괜찮음"]
        },
        {
        id: 317,
        hotelName: "클라우드하버 프리미엄 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 2,
        score: [2,1,3,4,5,4],
        comment: ["아쉬움", "실망함", "그냥그럼", "좋네요", "최고임", "좋아요"]
        },
        {
        id: 318,
        hotelName: "클라우드하버 프리미엄 호텔",
        roomName: "프리미어 404호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통임", "조금별로", "나빴음", "괜찮음", "좋아요", "최고임"]
        },

        {
        id: 319,
        hotelName: "에코파크 하모니 호텔",
        roomName: "슈페리얼 105호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["별로임", "보통임", "나빴음", "좋아요", "최고임", "참좋음"]
        },
        {
        id: 320,
        hotelName: "에코파크 하모니 호텔",
        roomName: "골져스 502호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["실망함", "아쉬움", "보통임", "괜찮음", "아주좋음", "좋았음"]
        },
        {
        id: 321,
        hotelName: "에코파크 하모니 호텔",
        roomName: "디럭스 204호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["무난함", "별로임", "조금별로", "좋아요", "최고임", "좋네요"]
        },

        {
        id: 322,
        hotelName: "브릴리언트힐 로얄 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["나빴음", "보통임", "조금별로", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 323,
        hotelName: "브릴리언트힐 로얄 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["아쉬움", "실망함", "보통임", "괜찮음", "좋아요", "최고임"]
        },
        {
        id: 324,
        hotelName: "브릴리언트힐 로얄 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통임", "조금별로", "나빴음", "좋아요", "괜찮음", "최고임"]
        },

        /* 중국 - 상하이 */


        {
        id: 325,
        hotelName: "블루문 프레스티지 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로임", "아쉬움", "그냥그래", "좋아요", "아주좋음", "참좋음"]
        },
        {
        id: 326,
        hotelName: "블루문 프레스티지 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별로", "실망함", "보통임", "좋네요", "최고임", "괜찮음"]
        },
        {
        id: 327,
        hotelName: "블루문 프레스티지 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,4],
        comment: ["무난함", "조금별로", "나빴음", "좋아요", "아주좋음", "참좋음"]
        },

        {
        id: 328,
        hotelName: "레브코스트 디럭스 호텔",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로임", "보통임", "좀별로", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 329,
        hotelName: "레브코스트 디럭스 호텔",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["아쉬움", "실망함", "그냥그럼", "매우좋음", "좋아요", "최고임"]
        },
        {
        id: 330,
        hotelName: "레브코스트 디럭스 호텔",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통임", "조금별로", "나빴음", "괜찮음", "좋아요", "최고임"]
        },

        {
        id: 331,
        hotelName: "오션힐 클래식 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["싫었음", "아쉬움", "보통임", "좋네요", "아주좋음", "참좋음"]
        },
        {
        id: 332,
        hotelName: "오션힐 클래식 호텔",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀별로", "그냥그럼", "나빴음", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 333,
        hotelName: "오션힐 클래식 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통임", "별로임", "조금별로", "좋아요", "최고임", "참좋음"]
        },

        {
        id: 334,
        hotelName: "하모니브릿지 로얄 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 2,
        score: [1,3,2,4,4,5],
        comment: ["나빴음", "보통임", "좀별로", "좋아요", "괜찮음", "최고임"]
        },
        {
        id: 335,
        hotelName: "하모니브릿지 로얄 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["별로임", "실망함", "그냥그럼", "좋네요", "최고임", "괜찮음"]
        },
        {
        id: 336,
        hotelName: "하모니브릿지 로얄 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통임", "좀별로", "나빴음", "매우좋음", "좋아요", "최고임"]
        },

        {
        id: 337,
        hotelName: "라이트베이 모던 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["별로임", "보통임", "나빴음", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 338,
        hotelName: "라이트베이 모던 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,4,5],
        comment: ["실망함", "아쉬움", "보통임", "좋아요", "괜찮음", "최고임"]
        },
        {
        id: 339,
        hotelName: "라이트베이 모던 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,5,4],
        comment: ["그냥그래", "조금별로", "나빴음", "좋아요", "아주좋음", "참좋음"]
        },

        {
        id: 340,
        hotelName: "에메랄드스테이 시그니처 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로임", "보통임", "좀별로", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 341,
        hotelName: "에메랄드스테이 시그니처 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 2,
        score: [2,1,3,4,5,4],
        comment: ["아쉬움", "실망함", "보통임", "좋네요", "최고임", "좋아요"]
        },
        {
        id: 342,
        hotelName: "에메랄드스테이 시그니처 호텔",
        roomName: "프리미어 404호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통임", "조금별로", "나빴음", "괜찮음", "좋아요", "최고임"]
        },

        {
        id: 343,
        hotelName: "피스포레스트 프라임 호텔",
        roomName: "슈페리얼 105호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["별로임", "보통임", "나빴음", "좋아요", "최고임", "참좋음"]
        },
        {
        id: 344,
        hotelName: "피스포레스트 프라임 호텔",
        roomName: "골져스 502호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["실망함", "아쉬움", "보통임", "괜찮음", "아주좋음", "좋았음"]
        },
        {
        id: 345,
        hotelName: "피스포레스트 프라임 호텔",
        roomName: "디럭스 204호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["무난함", "별로임", "조금별로", "좋아요", "최고임", "좋네요"]
        },

        {
        id: 346,
        hotelName: "코발트시티 모던 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["나빴음", "보통임", "조금별로", "좋아요", "최고임", "괜찮음"]
        },
        {
        id: 347,
        hotelName: "코발트시티 모던 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["아쉬움", "실망함", "보통임", "괜찮음", "좋아요", "최고임"]
        },
        {
        id: 348,
        hotelName: "코발트시티 모던 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통임", "조금별로", "나빴음", "좋아요", "괜찮음", "최고임"]
        },

        /* 이탈리아 - 로마*/


        {
        id: 349,
        hotelName: "로마 엘레강트 스위트",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "아쉬운편", "보통정도", "좋았어요", "아주좋음", "꽤좋았음"]
        },
        {
        id: 350,
        hotelName: "로마 엘레강트 스위트",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이실망", "보통이요", "좋은편임", "최고수준", "꽤만족함"]
        },
        {
        id: 351,
        hotelName: "로마 엘레강트 스위트",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,5,4],
        comment: ["무난했음", "조금별루", "전혀안좋", "좋았습니다", "완전좋음", "만족했음"]
        },

        {
        id: 352,
        hotelName: "로마 그랜드 팰리스",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["정말별로", "보통이요", "좀아쉬움", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 353,
        hotelName: "로마 그랜드 팰리스",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["좀아쉬움", "별로였음", "평범했음", "감동적임", "좋았어요", "최고네요"]
        },
        {
        id: 354,
        hotelName: "로마 그랜드 팰리스",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["괜찮았음", "아쉬운편", "전혀별로", "좋은편임", "꽤좋았음", "최고였음"]
        },

        {
        id: 355,
        hotelName: "호텔 로마 클래시코",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통정도", "좋았어요", "아주좋음", "괜찮았음"]
        },
        {
        id: 356,
        hotelName: "호텔 로마 클래시코",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀부족함", "평범했음", "실망했음", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 357,
        hotelName: "호텔 로마 클래시코",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "별로였음", "좀별루임", "좋은편임", "아주좋음", "꽤좋았음"]
        },

        {
        id: 358,
        hotelName: "로마 럭셔리 베이 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 2,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "그냥보통", "아쉬웠음", "좋아요", "좋았습니다", "최고네요"]
        },
        {
        id: 359,
        hotelName: "로마 럭셔리 베이 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통정도", "좋은방임", "최고였음", "만족했음"]
        },
        {
        id: 360,
        hotelName: "로마 럭셔리 베이 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["괜찮았음", "부족했음", "전혀별로", "감동적임", "좋았습니다", "최고네요"]
        },

        {
        id: 361,
        hotelName: "로마 비스타 가든 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["좀별루임", "보통이요", "많이별로", "좋은편임", "최고수준", "꽤좋았음"]
        },
        {
        id: 362,
        hotelName: "로마 비스타 가든 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,4,5],
        comment: ["실망했음", "조금아쉬", "보통이에요", "좋았습니다", "괜찮았음", "최고였음"]
        },
        {
        id: 363,
        hotelName: "로마 비스타 가든 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,5,4],
        comment: ["보통이요", "조금별루", "전혀좋지", "좋았습니다", "아주좋음", "만족했음"]
        },

        {
        id: 364,
        hotelName: "로마 블루 스카이 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로였음", "보통이요", "좀아쉬움", "좋은편임", "아주좋음", "꽤좋았음"]
        },
        {
        id: 365,
        hotelName: "로마 블루 스카이 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 2,
        score: [2,1,3,4,5,4],
        comment: ["조금아쉬", "실망했음", "보통정도", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 366,
        hotelName: "로마 블루 스카이 호텔",
        roomName: "프리미어 404호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["괜찮았음", "조금별루", "전혀별로", "좋아요", "괜찮아요", "최고였음"]
        },

        {
        id: 367,
        hotelName: "로마 임페리얼 스테이",
        roomName: "슈페리얼 105호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["좀별루임", "보통이요", "기대이하", "좋았어요", "아주좋음", "만족했음"]
        },
        {
        id: 368,
        hotelName: "로마 임페리얼 스테이",
        roomName: "골져스 502호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["전혀안좋", "아쉬운편", "보통정도", "좋은숙박", "최고였음", "꽤좋았음"]
        },
        {
        id: 369,
        hotelName: "로마 임페리얼 스테이",
        roomName: "디럭스 204호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "실망했음", "좀아쉬움", "좋았습니다", "아주좋음", "만족함"]
        },

        {
        id: 370,
        hotelName: "로마 모던 라이트 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["많이별로", "보통이요", "조금별루", "좋은편임", "최고였음", "꽤좋았음"]
        },
        {
        id: 371,
        hotelName: "로마 모던 라이트 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금아쉬", "별로였음", "보통정도", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 372,
        hotelName: "로마 모던 라이트 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "좀부족함", "전혀별로", "좋았어요", "괜찮아요", "최고였음"]
        },

        /* 이탈리아 - 베네치아 */


        {
        id: 373,
        hotelName: "베네치아 카날 뷰 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고네요", "꽤좋았음"]
        },
        {
        id: 374,
        hotelName: "베네치아 카날 뷰 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통정도", "좋았습니다", "아주좋음", "만족했음"]
        },
        {
        id: 375,
        hotelName: "베네치아 카날 뷰 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["괜찮았음", "조금별루", "전혀별로", "좋았어요", "좋았습니다", "최고였음"]
        },

        {
        id: 376,
        hotelName: "베네치아 라구나 팰리스",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "좀아쉬움", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 377,
        hotelName: "베네치아 라구나 팰리스",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["조금별루", "실망했음", "평범했음", "감동적임", "괜찮아요", "최고수준"]
        },
        {
        id: 378,
        hotelName: "베네치아 라구나 팰리스",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬운편", "전혀별로", "좋았어요", "좋았습니다", "최고였음"]
        },

        {
        id: 379,
        hotelName: "베네치아 하버 스카이 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았습니다", "아주좋음", "만족했음"]
        },
        {
        id: 380,
        hotelName: "베네치아 하버 스카이 호텔",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀부족함", "보통이요", "실망했음", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 381,
        hotelName: "베네치아 하버 스카이 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "전혀별로", "조금별루", "좋아요", "아주좋음", "만족했음"]
        },

        {
        id: 382,
        hotelName: "베네치아 워터라인 스위트",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 2,
        score: [1,3,2,4,4,5],
        comment: ["별로였음", "보통이요", "아쉬웠음", "좋았어요", "좋았습니다", "최고네요"]
        },
        {
        id: 383,
        hotelName: "베네치아 워터라인 스위트",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "실망했음", "평범했음", "좋은편임", "최고수준", " 만족했음"]
        },
        {
        id: 384,
        hotelName: "베네치아 워터라인 스위트",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통이요", "부족했음", "전혀별로", "감동적임", "좋았어요", "최고네요"]
        },

        {
        id: 385,
        hotelName: "베네치아 씨 브리즈 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금별루", "보통이요", "실망했음", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 386,
        hotelName: "베네치아 씨 브리즈 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "아쉬운편", "보통이요", "좋아요", "최고였음", "만족했음"]
        },
        {
        id: 387,
        hotelName: "베네치아 씨 브리즈 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금별루", "전혀별로", "좋았어요", "괜찮아요", "최고네요"]
        },

        {
        id: 388,
        hotelName: "베네치아 골드 카날 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "조금아쉬", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 389,
        hotelName: "베네치아 골드 카날 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 2,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋은편임", "최고였음", "만족했음"]
        },
        {
        id: 390,
        hotelName: "베네치아 골드 카날 호텔",
        roomName: "프리미어 404호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금별루", "전혀별로", "좋아요", "좋았습니다", "최고였음"]
        },

        {
        id: 391,
        hotelName: "베네치아 클래식 하버 호텔",
        roomName: "슈페리얼 105호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["아쉬웠음", "보통이요", "별로였음", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 392,
        hotelName: "베네치아 클래식 하버 호텔",
        roomName: "골져스 502호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["전혀안좋", "아쉬운편", "보통이요", "좋은편임", "최고네요", "꽤좋음"]
        },
        {
        id: 393,
        hotelName: "베네치아 클래식 하버 호텔",
        roomName: "디럭스 204호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "실망했음", "조금별루", "좋아요", "아주좋음", "만족했음"]
        },

        {
        id: 394,
        hotelName: "베네치아 라군 선셋 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["많이별로", "보통이요", "아쉬웠음", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 395,
        hotelName: "베네치아 라군 선셋 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 396,
        hotelName: "베네치아 라군 선셋 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "좀부족함", "전혀별로", "좋았어요", "좋았습니다", "최고였음"]
        },

        /* 프랑스 - 파리*/


        {
        id: 397,
        hotelName: "파리 에펠 뷰 호텔",
        roomName: "슈페리얼 101호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["별로였음", "조금아쉬", "보통이요", "좋았어요", "최고네요", "꽤좋았음"]
        },
        {
        id: 398,
        hotelName: "파리 에펠 뷰 호텔",
        roomName: "골져스 303호",
        maxOccupancy: 4,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "많이별로", "보통정도", "좋았습니다", "아주좋음", "만족했음"]
        },
        {
        id: 399,
        hotelName: "파리 에펠 뷰 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["괜찮았음", "조금별루", "전혀별로", "좋았어요", "좋았습니다", "최고였음"]
        },

        {
        id: 400,
        hotelName: "파리 루브르 센터 호텔",
        roomName: "이그제큐티브 202호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["안좋았음", "보통이요", "아쉬웠음", "좋았어요", "최고였음", "만족했음"]
        },
        {
        id: 401,
        hotelName: "파리 루브르 센터 호텔",
        roomName: "스텐다드 404호",
        maxOccupancy: 2,
        score: [2,1,3,5,4,5],
        comment: ["조금별루", "실망했음", "보통이요", "감동적임", "좋았습니다", "최고네요"]
        },
        {
        id: 402,
        hotelName: "파리 루브르 센터 호텔",
        roomName: "프리미어 103호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "좋아요", "좋았습니다", "최고였음"]
        },

        {
        id: 403,
        hotelName: "파리 샹젤리제 프리미어 호텔",
        roomName: "슈페리얼 302호",
        maxOccupancy: 3,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "조금아쉬", "보통이요", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 404,
        hotelName: "파리 샹젤리제 프리미어 호텔",
        roomName: "골져스 504호",
        maxOccupancy: 4,
        score: [2,3,1,4,5,4],
        comment: ["좀부족함", "보통이요", "전혀별로", "좋았습니다", "최고였음", "꽤좋음"]
        },
        {
        id: 405,
        hotelName: "파리 샹젤리제 프리미어 호텔",
        roomName: "디럭스 101호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "실망했음", "아쉬웠음", "좋았어요", "최고네요", "만족했음"]
        },

        {
        id: 406,
        hotelName: "파리 몽마르트 트래블 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 2,
        score: [1,3,2,4,4,5],
        comment: ["안좋았음", "보통이요", "아쉬웠음", "좋았어요", "꽤좋음", "최고였음"]
        },
        {
        id: 407,
        hotelName: "파리 몽마르트 트래블 호텔",
        roomName: "스텐다드 205호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "많이별로", "평범했음", "좋은편임", "최고네요", "만족했음"]
        },
        {
        id: 408,
        hotelName: "파리 몽마르트 트래블 호텔",
        roomName: "프리미어 303호",
        maxOccupancy: 4,
        score: [3,2,1,5,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "감동적임", "좋았어요", "최고네요"]
        },

        {
        id: 409,
        hotelName: "파리 노트르담 리버 뷰 호텔",
        roomName: "슈페리얼 402호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금아쉬", "보통이요", "전혀별로", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 410,
        hotelName: "파리 노트르담 리버 뷰 호텔",
        roomName: "골져스 104호",
        maxOccupancy: 2,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "아쉬웠음", "보통이요", "좋았어요", "최고였음", "꽤좋음"]
        },
        {
        id: 411,
        hotelName: "파리 노트르담 리버 뷰 호텔",
        roomName: "디럭스 505호",
        maxOccupancy: 4,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금별루", "전혀별로", "좋았어요", "괜찮아요", "최고네요"]
        },

        {
        id: 412,
        hotelName: "파리 센강 프레스티지 호텔",
        roomName: "이그제큐티브 203호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로였음", "보통이요", "아쉬웠음", "좋았습니다", "최고였음", "꽤좋음"]
        },
        {
        id: 413,
        hotelName: "파리 센강 프레스티지 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 2,
        score: [2,1,3,4,5,4],
        comment: ["조금별루", "실망했음", "보통이요", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 414,
        hotelName: "파리 센강 프레스티지 호텔",
        roomName: "프리미어 404호",
        maxOccupancy: 3,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "아쉬웠음", "전혀별로", "좋아요", "좋았습니다", "최고였음"]
        },

        {
        id: 415,
        hotelName: "파리 라데팡스 스테이 호텔",
        roomName: "슈페리얼 105호",
        maxOccupancy: 3,
        score: [2,3,1,4,5,4],
        comment: ["조금아쉬", "보통이요", "전혀별로", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 416,
        hotelName: "파리 라데팡스 스테이 호텔",
        roomName: "골져스 502호",
        maxOccupancy: 4,
        score: [1,2,3,4,5,4],
        comment: ["많이별로", "아쉬웠음", "보통이요", "좋았어요", "최고네요", "꽤좋음"]
        },
        {
        id: 417,
        hotelName: "파리 라데팡스 스테이 호텔",
        roomName: "디럭스 204호",
        maxOccupancy: 2,
        score: [3,1,2,4,5,4],
        comment: ["보통이요", "실망했음", "아쉬웠음", "좋아요", "최고네요", "만족했음"]
        },

        {
        id: 418,
        hotelName: "파리 오페라 하우스 클래식 호텔",
        roomName: "이그제큐티브 403호",
        maxOccupancy: 4,
        score: [1,3,2,4,5,4],
        comment: ["별로였음", "보통이요", "조금아쉬", "좋았습니다", "최고네요", "꽤좋음"]
        },
        {
        id: 419,
        hotelName: "파리 오페라 하우스 클래식 호텔",
        roomName: "스텐다드 301호",
        maxOccupancy: 3,
        score: [2,1,3,4,5,4],
        comment: ["좀별루임", "실망했음", "보통이요", "좋았어요", "최고네요", "만족했음"]
        },
        {
        id: 420,
        hotelName: "파리 오페라 하우스 클래식 호텔",
        roomName: "프리미어 505호",
        maxOccupancy: 2,
        score: [3,2,1,4,4,5],
        comment: ["보통이요", "조금별루", "전혀별로", "좋아요", "좋았습니다", "최고였음"]
        }
    ]
    const HotelData = [
        /* 한국 - 서울 */
        {
        id: 1,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-03-05",
        endDate: "2026-03-09",
        hotelName: "서울 스카이베이 프라임 호텔",
        price: 164000,
        img: ["/img/1-1.jpg","/img/1-2.jpg","/img/1-3.jpg","/img/1-4.jpg","/img/1-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["피트니스","레스토랑","편의점","라운지","엘리베이터","비즈니스센터"],
        roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","전기주전자"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 4.5,
        scoreCount: 12320,
        discount: 1
        },

        {
        id: 2,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-03-18",
        endDate: "2026-03-22",
        hotelName: "서울 라이트하버 호텔",
        price: 142000,
        img: ["/img/2-1.jpg","/img/2-2.jpg","/img/2-3.jpg","/img/2-4.jpg","/img/2-5.jpg"],
        type: "Condo",
        quality: 3,
        publicService: ["레스토랑","사우나","편의점","라운지","엘리베이터","바베큐"],
        roomservice: ["무선인터넷","욕실용품","에어컨","냉장고","샤워실","TV"],
        otherService: ["카드결제","스프링클러","짐보관가능"],
        score: 3.5,
        scoreCount: 6811,
        discount: 0
        },

        {
        id: 3,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-04-10",
        endDate: "2026-04-14",
        hotelName: "서울 헤리티지 스타 라운지",
        price: 178000,
        img: ["/img/3-1.jpg","/img/3-2.jpg","/img/3-3.jpg","/img/3-4.jpg","/img/3-5.jpg"],
        type: "Hotel",
        quality: 5,
        publicService: ["피트니스","레스토랑","사우나","라운지","바","엘리베이터"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","전기주전자","TV","냉장고"],
        otherService: ["조식제공","무료주차","카드결제"],
        score: 4.5,
        scoreCount: 14952,
        discount: 1
        },

        {
        id: 4,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-04-22",
        endDate: "2026-04-26",
        hotelName: "서울 프레미어 모던 스테이",
        price: 98000,
        img: ["/img/4-1.jpg","/img/4-2.jpg","/img/4-3.jpg","/img/4-4.jpg","/img/4-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["편의점","라운지","레스토랑","엘리베이터","건조기","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고"],
        otherService: ["카드결제","짐보관가능","스프링클러"],
        score: 3.0,
        scoreCount: 4020,
        discount: 1
        },

        {
        id: 5,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-05-03",
        endDate: "2026-05-07",
        hotelName: "서울 오션루프 스위트",
        price: 156000,
        img: ["/img/5-1.jpg","/img/5-2.jpg","/img/5-3.jpg","/img/5-4.jpg","/img/5-5.jpg"],
        type: "Resort",
        quality: 4,
        publicService: ["야외수영장","라운지","피트니스","레스토랑","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","전기주전자","TV","냉장고"],
        otherService: ["무료주차","카드결제","조식제공"],
        score: 4.0,
        scoreCount: 8733,
        discount: 0
        },

        {
        id: 6,
        country: "Korea",
        city: "Seoul",
        startDate: "2026-05-28",
        endDate: "2026-06-01",
        hotelName: "서울 리버사이드 프라임 호텔",
        price: 133000,
        img: ["/img/6-1.jpg","/img/6-2.jpg","/img/6-3.jpg","/img/6-4.jpg","/img/6-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","편의점","라운지","엘리베이터","사우나","비즈니스센터"],
        roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","냉장고","TV"],
        otherService: ["카드결제","스프링클러","무료주차"],
        score: 3.5,
        scoreCount: 6911,
        discount: 1
        },

        /* 한국 - 부산 */

        {
        id: 7,
        country: "Korea",
        city: "Busan",
        startDate: "2026-03-06",
        endDate: "2026-03-10",
        hotelName: "부산 오션클라우드 호텔",
        price: 149000,
        img: ["/img/7-1.jpg","/img/7-2.jpg","/img/7-3.jpg","/img/7-4.jpg","/img/7-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["피트니스","레스토랑","라운지","바","엘리베이터","편의점"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV","전기주전자"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 4.0,
        scoreCount: 8221,
        discount: 0
        },

        {
        id: 8,
        country: "Korea",
        city: "Busan",
        startDate: "2026-03-22",
        endDate: "2026-03-26",
        hotelName: "부산 마리나 스위트",
        price: 172000,
        img: ["/img/8-1.jpg","/img/8-2.jpg","/img/8-3.jpg","/img/8-4.jpg","/img/8-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","바","사우나"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","드라이기","TV"],
        otherService: ["카드결제","짐보관가능","조식제공"],
        score: 4.5,
        scoreCount: 14300,
        discount: 1
        },

        {
        id: 9,
        country: "Korea",
        city: "Busan",
        startDate: "2026-04-04",
        endDate: "2026-04-08",
        hotelName: "부산 블루웨이브 호텔",
        price: 96000,
        img: ["/img/9-1.jpg","/img/9-2.jpg","/img/9-3.jpg","/img/9-4.jpg","/img/9-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["편의점","라운지","레스토랑","엘리베이터","바","건조기"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV"],
        otherService: ["스프링클러","카드결제","짐보관가능"],
        score: 3.0,
        scoreCount: 3890,
        discount: 0
        },

        {
        id: 10,
        country: "Korea",
        city: "Busan",
        startDate: "2026-04-18",
        endDate: "2026-04-22",
        hotelName: "부산 센트럴힐 호텔",
        price: 118000,
        img: ["/img/10-1.jpg","/img/10-2.jpg","/img/10-3.jpg","/img/10-4.jpg","/img/10-5.jpg"],
        type: "Condo",
        quality: 3,
        publicService: ["피트니스","레스토랑","사우나","편의점","엘리베이터","바베큐"],
        roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","전기주전자"],
        otherService: ["무료주차","카드결제","스프링클러"],
        score: 3.5,
        scoreCount: 6143,
        discount: 1
        },

        {
        id: 11,
        country: "Korea",
        city: "Busan",
        startDate: "2026-05-02",
        endDate: "2026-05-06",
        hotelName: "부산 더레인 하버 스테이",
        price: 154000,
        img: ["/img/11-1.jpg","/img/11-2.jpg","/img/11-3.jpg","/img/11-4.jpg","/img/11-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","실내수영장","피트니스","라운지","바","엘리베이터"],
        roomservice: ["무선인터넷","욕실용품","에어컨","전기주전자","샤워실","냉장고","TV"],
        otherService: ["조식제공","무료주차","카드결제"],
        score: 4.0,
        scoreCount: 9122,
        discount: 1
        },

        {
        id: 12,
        country: "Korea",
        city: "Busan",
        startDate: "2026-05-27",
        endDate: "2026-05-31",
        hotelName: "부산 글로우 포레스트 호텔",
        price: 103000,
        img: ["/img/12-1.jpg","/img/12-2.jpg","/img/12-3.jpg","/img/12-4.jpg","/img/12-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 3770,
        discount: 0
        },

        /* 한국 - 강릉 */

        {
        id: 13,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-03-03",
        endDate: "2026-03-07",
        hotelName: "강릉 코랄베이 오션 호텔",
        price: 132000,
        img: ["/img/13-1.jpg","/img/13-2.jpg","/img/13-3.jpg","/img/13-4.jpg","/img/13-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","라운지","피트니스","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고","전기주전자"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 9101,
        discount: 1
        },

        {
        id: 14,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-03-19",
        endDate: "2026-03-23",
        hotelName: "강릉 마운틴힐 프라임 스테이",
        price: 89000,
        img: ["/img/14-1.jpg","/img/14-2.jpg","/img/14-3.jpg","/img/14-4.jpg","/img/14-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["라운지","편의점","건조기","레스토랑","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고"],
        otherService: ["짐보관가능","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 4210,
        discount: 0
        },

        {
        id: 15,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-04-02",
        endDate: "2026-04-06",
        hotelName: "강릉 블루하버 씨앤스테이",
        price: 156000,
        img: ["/img/15-1.jpg","/img/15-2.jpg","/img/15-3.jpg","/img/15-4.jpg","/img/15-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","피트니스","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","TV","냉장고"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.5,
        scoreCount: 13532,
        discount: 0
        },

        {
        id: 16,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-04-21",
        endDate: "2026-04-25",
        hotelName: "강릉 에코브리즈 호텔",
        price: 112000,
        img: ["/img/16-1.jpg","/img/16-2.jpg","/img/16-3.jpg","/img/16-4.jpg","/img/16-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","사우나","엘리베이터","라운지","편의점","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","전기주전자"],
        otherService: ["카드결제","스프링클러","무료주차"],
        score: 3.5,
        scoreCount: 6120,
        discount: 1
        },

        {
        id: 17,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-05-05",
        endDate: "2026-05-09",
        hotelName: "강릉 소울베이 더스위트",
        price: 175000,
        img: ["/img/17-1.jpg","/img/17-2.jpg","/img/17-3.jpg","/img/17-4.jpg","/img/17-5.jpg"],
        type: "Condo",
        quality: 5,
        publicService: ["피트니스","레스토랑","라운지","엘리베이터","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","전기주전자","TV","냉장고","샤워실"],
        otherService: ["카드결제","짐보관가능","조식제공"],
        score: 4.5,
        scoreCount: 14321,
        discount: 1
        },

        {
        id: 18,
        country: "Korea",
        city: "Gangneung",
        startDate: "2026-05-28",
        endDate: "2026-06-01",
        hotelName: "강릉 씨사이드 리프 호텔",
        price: 98000,
        img: ["/img/18-1.jpg","/img/18-2.jpg","/img/18-3.jpg","/img/18-4.jpg","/img/18-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","레스토랑","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 4022,
        discount: 0
        },

        /* 한국 - 속초 */
        {
        id: 19,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-03-04",
        endDate: "2026-03-08",
        hotelName: "속초 오션브리즈 시티호텔",
        price: 128000,
        img: ["/img/19-1.jpg","/img/19-2.jpg","/img/19-3.jpg","/img/19-4.jpg","/img/19-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","라운지","피트니스","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","전기주전자","TV","냉장고"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 8243,
        discount: 1
        },

        {
        id: 20,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-03-21",
        endDate: "2026-03-25",
        hotelName: "속초 힐크레스트 베이뷰 리조트",
        price: 168000,
        img: ["/img/20-1.jpg","/img/20-2.jpg","/img/20-3.jpg","/img/20-4.jpg","/img/20-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","드라이기","TV"],
        otherService: ["무료주차","카드결제","조식제공"],
        score: 4.5,
        scoreCount: 13920,
        discount: 1
        },

        {
        id: 21,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-04-06",
        endDate: "2026-04-10",
        hotelName: "속초 블루문 스테이",
        price: 88000,
        img: ["/img/21-1.jpg","/img/21-2.jpg","/img/21-3.jpg","/img/21-4.jpg","/img/21-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["라운지","편의점","레스토랑","엘리베이터","바","건조기"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV"],
        otherService: ["카드결제","짐보관가능","스프링클러"],
        score: 3.0,
        scoreCount: 3920,
        discount: 0
        },

        {
        id: 22,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-04-23",
        endDate: "2026-04-27",
        hotelName: "속초 씨포레스트 마운틴뷰 호텔",
        price: 113000,
        img: ["/img/22-1.jpg","/img/22-2.jpg","/img/22-3.jpg","/img/22-4.jpg","/img/22-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","사우나","라운지","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","전기주전자","드라이기"],
        otherService: ["무료주차","카드결제","스프링클러"],
        score: 3.5,
        scoreCount: 6022,
        discount: 1
        },

        {
        id: 23,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-05-08",
        endDate: "2026-05-12",
        hotelName: "속초 클라우드베이 스위트",
        price: 151000,
        img: ["/img/23-1.jpg","/img/23-2.jpg","/img/23-3.jpg","/img/23-4.jpg","/img/23-5.jpg"],
        type: "Condo",
        quality: 5,
        publicService: ["피트니스","레스토랑","라운지","엘리베이터","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV","전기주전자"],
        otherService: ["카드결제","짐보관가능","조식제공"],
        score: 4.5,
        scoreCount: 14821,
        discount: 1
        },

        {
        id: 24,
        country: "Korea",
        city: "Sokcho",
        startDate: "2026-05-26",
        endDate: "2026-05-30",
        hotelName: "속초 레이크브리즈 캠프로그",
        price: 98000,
        img: ["/img/24-1.jpg","/img/24-2.jpg","/img/24-3.jpg","/img/24-4.jpg","/img/24-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","레스토랑","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 3801,
        discount: 0
        },

        /* 한국 - 경주 */

        {
        id: 25,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-03-02",
        endDate: "2026-03-06",
        hotelName: "경주 로열가든 힐스 호텔",
        price: 141000,
        img: ["/img/25-1.jpg","/img/25-2.jpg","/img/25-3.jpg","/img/25-4.jpg","/img/25-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","라운지","피트니스","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","전기주전자","TV","냉장고"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 9011,
        discount: 0
        },

        {
        id: 26,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-03-15",
        endDate: "2026-03-19",
        hotelName: "경주 크라운레이크 리조트",
        price: 163000,
        img: ["/img/26-1.jpg","/img/26-2.jpg","/img/26-3.jpg","/img/26-4.jpg","/img/26-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","드라이기","TV"],
        otherService: ["무료주차","조식제공","카드결제"],
        score: 4.5,
        scoreCount: 14012,
        discount: 1
        },

        {
        id: 27,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-04-01",
        endDate: "2026-04-05",
        hotelName: "경주 하모니 스테이션 게스트하우스",
        price: 82000,
        img: ["/img/27-1.jpg","/img/27-2.jpg","/img/27-3.jpg","/img/27-4.jpg","/img/27-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["라운지","편의점","레스토랑","건조기","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV"],
        otherService: ["카드결제","짐보관가능","스프링클러"],
        score: 3.0,
        scoreCount: 3711,
        discount: 0
        },

        {
        id: 28,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-04-18",
        endDate: "2026-04-22",
        hotelName: "경주 네이처힐 프리미어 호텔",
        price: 119000,
        img: ["/img/28-1.jpg","/img/28-2.jpg","/img/28-3.jpg","/img/28-4.jpg","/img/28-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","사우나","라운지","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","드라이기","TV","전기주전자"],
        otherService: ["무료주차","카드결제","스프링클러"],
        score: 3.5,
        scoreCount: 5903,
        discount: 1
        },

        {
        id: 29,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-05-07",
        endDate: "2026-05-11",
        hotelName: "경주 스카이라인 파노라마 콘도",
        price: 152000,
        img: ["/img/29-1.jpg","/img/29-2.jpg","/img/29-3.jpg","/img/29-4.jpg","/img/29-5.jpg"],
        type: "Condo",
        quality: 4,
        publicService: ["피트니스","레스토랑","라운지","엘리베이터","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고","전기주전자"],
        otherService: ["카드결제","조식제공","짐보관가능"],
        score: 4.0,
        scoreCount: 11021,
        discount: 0
        },

        {
        id: 30,
        country: "Korea",
        city: "Gyeongju",
        startDate: "2026-05-25",
        endDate: "2026-05-29",
        hotelName: "경주 포레스트캠프 휴글로우",
        price: 97000,
        img: ["/img/30-1.jpg","/img/30-2.jpg","/img/30-3.jpg","/img/30-4.jpg","/img/30-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","레스토랑","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 4102,
        discount: 1
        },

        /* 한국 - 여수 */

        {
        id: 31,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-03-03",
        endDate: "2026-03-07",
        hotelName: "여수 오션프레임 스테이",
        price: 146000,
        img: ["/img/31-1.jpg","/img/31-2.jpg","/img/31-3.jpg","/img/31-4.jpg","/img/31-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","편의점","라운지","피트니스","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","전기주전자","냉장고"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 9321,
        discount: 0
        },

        {
        id: 32,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-03-17",
        endDate: "2026-03-21",
        hotelName: "여수 블루코스트 리조트",
        price: 170000,
        img: ["/img/32-1.jpg","/img/32-2.jpg","/img/32-3.jpg","/img/32-4.jpg","/img/32-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","드라이기","TV"],
        otherService: ["무료주차","카드결제","조식제공"],
        score: 4.5,
        scoreCount: 14410,
        discount: 1
        },

        {
        id: 33,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-04-04",
        endDate: "2026-04-08",
        hotelName: "여수 베이하버 게스트하우스",
        price: 78000,
        img: ["/img/33-1.jpg","/img/33-2.jpg","/img/33-3.jpg","/img/33-4.jpg","/img/33-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["라운지","편의점","레스토랑","건조기","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV"],
        otherService: ["카드결제","짐보관가능","스프링클러"],
        score: 3.0,
        scoreCount: 3611,
        discount: 1
        },

        {
        id: 34,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-04-19",
        endDate: "2026-04-23",
        hotelName: "여수 클리프사운드 프라임 호텔",
        price: 124000,
        img: ["/img/34-1.jpg","/img/34-2.jpg","/img/34-3.jpg","/img/34-4.jpg","/img/34-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","사우나","라운지","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","드라이기","TV","냉장고"],
        otherService: ["무료주차","카드결제","스프링클러"],
        score: 3.5,
        scoreCount: 5832,
        discount: 1
        },

        {
        id: 35,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-05-09",
        endDate: "2026-05-13",
        hotelName: "여수 퍼스트라인 오션뷰 콘도",
        price: 159000,
        img: ["/img/35-1.jpg","/img/35-2.jpg","/img/35-3.jpg","/img/35-4.jpg","/img/35-5.jpg"],
        type: "Condo",
        quality: 4,
        publicService: ["피트니스","레스토랑","라운지","엘리베이터","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","전기주전자","냉장고"],
        otherService: ["짐보관가능","카드결제","조식제공"],
        score: 4.0,
        scoreCount: 11230,
        discount: 1
        },

        {
        id: 36,
        country: "Korea",
        city: "Yeosu",
        startDate: "2026-05-27",
        endDate: "2026-05-31",
        hotelName: "여수 포레스트캠프 글램존",
        price: 92000,
        img: ["/img/36-1.jpg","/img/36-2.jpg","/img/36-3.jpg","/img/36-4.jpg","/img/36-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","레스토랑","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 3987,
        discount: 0
        },

        /* 한국 - 대전 */

        {
        id: 37,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-03-05",
        endDate: "2026-03-09",
        hotelName: "대전 센트럴파크 시티호텔",
        price: 138000,
        img: ["/img/37-1.jpg","/img/37-2.jpg","/img/37-3.jpg","/img/37-4.jpg","/img/37-5.jpg"],
        type: "Hotel",
        quality: 4,
        publicService: ["레스토랑","라운지","피트니스","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","전기주전자","TV","냉장고","샤워실"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 9210,
        discount: 1
        },

        {
        id: 38,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-03-18",
        endDate: "2026-03-22",
        hotelName: "대전 포레스트힐 프리미어 리조트",
        price: 167000,
        img: ["/img/38-1.jpg","/img/38-2.jpg","/img/38-3.jpg","/img/38-4.jpg","/img/38-5.jpg"],
        type: "Resort",
        quality: 5,
        publicService: ["야외수영장","실내수영장","레스토랑","라운지","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","욕조","샤워실","TV","드라이기"],
        otherService: ["무료주차","카드결제","조식제공"],
        score: 4.5,
        scoreCount: 14222,
        discount: 1
        },

        {
        id: 39,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-04-03",
        endDate: "2026-04-07",
        hotelName: "대전 라운지스테이 게스트하우스",
        price: 76000,
        img: ["/img/39-1.jpg","/img/39-2.jpg","/img/39-3.jpg","/img/39-4.jpg","/img/39-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        publicService: ["라운지","편의점","레스토랑","건조기","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고"],
        otherService: ["스프링클러","카드결제","짐보관가능"],
        score: 3.0,
        scoreCount: 3521,
        discount: 1
        },

        {
        id: 40,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-04-21",
        endDate: "2026-04-25",
        hotelName: "대전 브리즈라인 시그니처 호텔",
        price: 119000,
        img: ["/img/40-1.jpg","/img/40-2.jpg","/img/40-3.jpg","/img/40-4.jpg","/img/40-5.jpg"],
        type: "Hotel",
        quality: 3,
        publicService: ["레스토랑","사우나","라운지","편의점","엘리베이터","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","TV","드라이기","샤워실","전기주전자"],
        otherService: ["무료주차","카드결제","스프링클러"],
        score: 3.5,
        scoreCount: 5744,
        discount: 0
        },

        {
        id: 41,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-05-10",
        endDate: "2026-05-14",
        hotelName: "대전 스카이브릿지 오션뷰 콘도",
        price: 155000,
        img: ["/img/41-1.jpg","/img/41-2.jpg","/img/41-3.jpg","/img/41-4.jpg","/img/41-5.jpg"],
        type: "Condo",
        quality: 4,
        publicService: ["피트니스","레스토랑","라운지","엘리베이터","사우나","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","TV","샤워실","냉장고","전기주전자"],
        otherService: ["카드결제","조식제공","짐보관가능"],
        score: 4.0,
        scoreCount: 11190,
        discount: 1
        },

        {
        id: 42,
        country: "Korea",
        city: "Daejeon",
        startDate: "2026-05-28",
        endDate: "2026-06-01",
        hotelName: "대전 포레스트캠프 스톤글램",
        price: 91000,
        img: ["/img/42-1.jpg","/img/42-2.jpg","/img/42-3.jpg","/img/42-4.jpg","/img/42-5.jpg"],
        type: "Camping",
        quality: 2,
        publicService: ["바베큐","편의점","라운지","탈수기","레스토랑","바"],
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","개인콘센트"],
        otherService: ["캠프파이어","카드결제","스프링클러"],
        score: 3.0,
        scoreCount: 3650,
        discount: 0
        },

        /* 한국 - 광주  */
        {
        id: 43,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-03-07",
        endDate: "2026-03-11",
        hotelName: "그랜드 스카이힐 호텔",
        price: 158000,
        img: ["/img/43-1.jpg","/img/43-2.jpg","/img/43-3.jpg","/img/43-4.jpg","/img/43-5.jpg"],
        type: "Hotel",
        quality: 4,
        roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","냉장고","TV","금연"],
        publicService: ["피트니스","레스토랑","편의점","라운지","엘리베이터","비즈니스센터"],
        otherService: ["카드결제","무료주차","조식제공"],
        score: 4.0,
        scoreCount: 2471,
        discount: 1
        },
        {
        id: 44,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-03-19",
        endDate: "2026-03-23",
        hotelName: "라이트하버 리조트",
        price: 121000,
        img: ["/img/44-1.jpg","/img/44-2.jpg","/img/44-3.jpg","/img/44-4.jpg","/img/44-5.jpg"],
        type: "Resort",
        quality: 3,
        roomservice: ["무선인터넷","에어컨","드라이기","샤워실","TV","전기주전자","금연"],
        publicService: ["레스토랑","사우나","편의점","바","라운지","엘리베이터"],
        otherService: ["스프링클러","카드결제","짐보관가능"],
        score: 3.5,
        scoreCount: 5832,
        discount: 1
        },
        {
        id: 45,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-04-02",
        endDate: "2026-04-06",
        hotelName: "브리즈 라운드 호텔",
        price: 98000,
        img: ["/img/45-1.jpg","/img/45-2.jpg","/img/45-3.jpg","/img/45-4.jpg","/img/45-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        roomservice: ["무선인터넷","샤워실","욕실용품","냉장고","TV","개인콘센트","금연"],
        publicService: ["편의점","바","엘리베이터","비즈니스센터","건조기","바베큐"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 3.0,
        scoreCount: 1140,
        discount: 1
        },
        {
        id: 46,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-04-17",
        endDate: "2026-04-21",
        hotelName: "힐브리즈 콘도",
        price: 142000,
        img: ["/img/46-1.jpg","/img/46-2.jpg","/img/46-3.jpg","/img/46-4.jpg","/img/46-5.jpg"],
        type: "Condo",
        quality: 4,
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV","객실내취사","전기주전자"],
        publicService: ["레스토랑","사우나","편의점","라운지","엘리베이터","건조기"],
        otherService: ["스프링클러","카드결제","무료주차"],
        score: 4.5,
        scoreCount: 8344,
        discount: 0
        },
        {
        id: 47,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-05-03",
        endDate: "2026-05-07",
        hotelName: "블루파크 호텔",
        price: 173000,
        img: ["/img/47-1.jpg","/img/47-2.jpg","/img/47-3.jpg","/img/47-4.jpg","/img/47-5.jpg"],
        type: "Hotel",
        quality: 5,
        roomservice: ["무선인터넷","욕실용품","욕조","에어컨","TV","냉장고","개인콘센트"],
        publicService: ["피트니스","레스토랑","실내수영장","라운지","엘리베이터","바"],
        otherService: ["카드결제","조식제공","짐보관가능"],
        score: 4.5,
        scoreCount: 9040,
        discount: 1
        },
        {
        id: 48,
        country: "Korea",
        city: "Gwangju",
        startDate: "2026-05-22",
        endDate: "2026-05-26",
        hotelName: "헤리티지 스테이 호텔",
        price: 76000,
        img: ["/img/48-1.jpg","/img/48-2.jpg","/img/8-3.jpg","/img/48-4.jpg","/img/48-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        roomservice: ["무선인터넷","샤워실","에어컨","TV","냉장고","금연"],
        publicService: ["편의점","라운지","엘리베이터","건조기","바베큐","비즈니스센터"],
        otherService: ["카드결제","무료주차","개인사물함"],
        score: 2.5,
        scoreCount: 1988,
        discount: 1
        },

        /* 한국-제주 */
        {
        id: 49,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-03-03",
        endDate: "2026-03-07",
        hotelName: "오션브리즈 리조텔",
        price: 169000,
        img: ["/img/49-1.jpg","/img/49-2.jpg","/img/49-3.jpg","/img/49-4.jpg","/img/49-5.jpg"],
        type: "Resort",
        quality: 5,
        roomservice: ["무선인터넷","욕조","에어컨","드라이기","냉장고","TV","실내수영장","금연"],
        publicService: ["실내수영장","야외수영장","레스토랑","피트니스","라운지","엘리베이터"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 4.5,
        scoreCount: 12550,
        discount: 0
        },
        {
        id: 50,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-03-28",
        endDate: "2026-04-01",
        hotelName: "제누스 힐라인 호텔",
        price: 143000,
        img: ["/img/50-1.jpg","/img/50-2.jpg","/img/50-3.jpg","/img/50-4.jpg","/img/50-5.jpg"],
        type: "Hotel",
        quality: 4,
        roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","전기주전자","TV","금연"],
        publicService: ["레스토랑","사우나","야외수영장","엘리베이터","라운지","바"],
        otherService: ["카드결제","스프링클러","짐보관가능"],
        score: 4.0,
        scoreCount: 7894,
        discount: 1
        },
        {
        id: 51,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-04-11",
        endDate: "2026-04-15",
        hotelName: "씨에라 콘도 스위트",
        price: 89000,
        img: ["/img/51-1.jpg","/img/51-2.jpg","/img/51-3.jpg","/img/51-4.jpg","/img/51-5.jpg"],
        type: "Condo",
        quality: 3,
        roomservice: ["무선인터넷","샤워실","객실내취사","냉장고","TV","전기주전자","금연"],
        publicService: ["편의점","엘리베이터","바베큐","건조기","라운지","사우나"],
        otherService: ["무료주차","카드결제","캠프파이어"],
        score: 3.5,
        scoreCount: 3251,
        discount: 0
        },
        {
        id: 52,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-04-29",
        endDate: "2026-05-03",
        hotelName: "블랑코 서머힐 호텔",
        price: 152000,
        img: ["/img/52-1.jpg","/img/52-2.jpg","/img/52-3.jpg","/img/52-4.jpg","/img/52-5.jpg"],
        type: "Hotel",
        quality: 5,
        roomservice: ["무선인터넷","욕조","에어컨","욕실용품","TV","냉장고","개인콘센트"],
        publicService: ["피트니스","레스토랑","실내수영장","엘리베이터","바","라운지"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 4.5,
        scoreCount: 14770,
        discount: 1
        },
        {
        id: 53,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-05-10",
        endDate: "2026-05-14",
        hotelName: "에메랄드 베이 로지",
        price: 62000,
        img: ["/img/53-1.jpg","/img/53-2.jpg","/img/53-3.jpg","/img/53-4.jpg","/img/53-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        roomservice: ["무선인터넷","샤워실","드라이기","TV","냉장고","금연"],
        publicService: ["편의점","라운지","엘리베이터","비즈니스센터","건조기","바베큐"],
        otherService: ["카드결제","개인사물함","조식제공"],
        score: 2.5,
        scoreCount: 1750,
        discount: 0
        },
        {
        id: 54,
        country: "Korea",
        city: "Jeju",
        startDate: "2026-05-25",
        endDate: "2026-05-29",
        hotelName: "서머필드 캠프 로지",
        price: 54000,
        img: ["/img/54-1.jpg","/img/54-2.jpg","/img/54-3.jpg","/img/54-4.jpg","/img/54-5.jpg"],
        type: "Camping",
        quality: 1,
        roomservice: ["무선인터넷","샤워실","개인콘센트","금연","전기주전자","TV"],
        publicService: ["바베큐","편의점","건조기","탈수기","라운지","사우나"],
        otherService: ["캠프파이어","카드결제","무료주차"],
        score: 1.5,
        scoreCount: 1210,
        discount: 1
        },

        /* 한국-포항 */
        {
        id: 55,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-03-14",
        endDate: "2026-03-18",
        hotelName: "포항 씨라인 호텔",
        price: 112000,
        img: ["/img/55-1.jpg","/img/55-2.jpg","/img/55-3.jpg","/img/55-4.jpg","/img/55-5.jpg"],
        type: "Hotel",
        quality: 3,
        roomservice: ["무선인터넷","샤워실","에어컨","TV","냉장고","금연","전기주전자"],
        publicService: ["레스토랑","편의점","엘리베이터","라운지","바","비즈니스센터"],
        otherService: ["카드결제","무료주차","짐보관가능"],
        score: 3.5,
        scoreCount: 3321,
        discount: 1
        },
        {
        id: 56,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-04-01",
        endDate: "2026-04-05",
        hotelName: "포트웨이브 리조트",
        price: 178000,
        img: ["/img/56-1.jpg","/img/56-2.jpg","/img/56-3.jpg","/img/56-4.jpg","/img/56-5.jpg"],
        type: "Resort",
        quality: 5,
        roomservice: ["무선인터넷","욕조","에어컨","드라이기","냉장고","TV","실내수영장"],
        publicService: ["피트니스","실내수영장","야외수영장","레스토랑","라운지","엘리베이터"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 4.5,
        scoreCount: 14980,
        discount: 1
        },
        {
        id: 57,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-04-18",
        endDate: "2026-04-22",
        hotelName: "포항 마리나 스테이",
        price: 73000,
        img: ["/img/57-1.jpg","/img/57-2.jpg","/img/57-3.jpg","/img/57-4.jpg","/img/57-5.jpg"],
        type: "GuestHouse",
        quality: 2,
        roomservice: ["무선인터넷","샤워실","TV","냉장고","드라이기","금연","전기주전자"],
        publicService: ["편의점","라운지","바베큐","건조기","사우나","엘리베이터"],
        otherService: ["카드결제","개인사물함","무료주차"],
        score: 3.0,
        scoreCount: 2984,
        discount: 0
        },
        {
        id: 58,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-04-30",
        endDate: "2026-05-04",
        hotelName: "오션스톤 콘도",
        price: 98000,
        img: ["/img/58-1.jpg","/img/58-2.jpg","/img/58-3.jpg","/img/58-4.jpg","/img/58-5.jpg"],
        type: "Condo",
        quality: 3,
        roomservice: ["무선인터넷","샤워실","냉장고","객실내취사","TV","전기주전자","금연"],
        publicService: ["레스토랑","편의점","엘리베이터","야외수영장","바","라운지"],
        otherService: ["카드결제","조식제공","무료주차"],
        score: 3.5,
        scoreCount: 5900,
        discount: 0
        },
        {
        id: 59,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-05-09",
        endDate: "2026-05-13",
        hotelName: "블루웨이브 캠프",
        price: 55000,
        img: ["/img/59-1.jpg","/img/59-2.jpg","/img/59-3.jpg","/img/59-4.jpg","/img/59-5.jpg"],
        type: "Camping",
        quality: 1,
        roomservice: ["무선인터넷","샤워실","전기주전자","TV","금연","개인콘센트"],
        publicService: ["바베큐","편의점","탈수기","건조기","라운지","사우나"],
        otherService: ["캠프파이어","무료주차","카드결제"],
        score: 1.5,
        scoreCount: 1601,
        discount: 1
        },
        {
        id: 60,
        country: "Korea",
        city: "Pohang",
        startDate: "2026-05-27",
        endDate: "2026-05-31",
        hotelName: "포항 클리프오션 호텔",
        price: 165000,
        img: ["/img/60-1.jpg","/img/60-2.jpg","/img/60-3.jpg","/img/60-4.jpg","/img/60-5.jpg"],
        type: "Hotel",
        quality: 4,
        roomservice: ["무선인터넷","욕실용품","에어컨","냉장고","TV","욕조","금연"],
        publicService: ["피트니스","레스토랑","실내수영장","라운지","엘리베이터","바"],
        otherService: ["조식제공","카드결제","무료주차"],
        score: 4.0,
        scoreCount: 8744,
        discount: 0
        },
        /* 일본 - 도쿄 */ 
        {
            id: 61,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-03-03",
            endDate: "2026-03-07",
            hotelName: "스카이 브리즈 호텔",
            price: 172300,
            img: ["/img/61-1.jpg","/img/61-2.jpg","/img/61-3.jpg","/img/61-4.jpg","/img/61-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","냉장고","TV"],
            publicService: ["레스토랑","라운지","편의점","엘리베이터","사우나","비즈니스센터","바"],
            otherService: ["조식제공","무료주차","카드결제","짐보관가능"],
            score: 4.5,
            scoreCount: 1344,
            discount: 1
        },
        {
            id: 62,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-03-12",
            endDate: "2026-03-16",
            hotelName: "블루문 라이트 호텔",
            price: 141800,
            img: ["/img/62-1.jpg","/img/62-2.jpg","/img/62-3.jpg","/img/62-4.jpg","/img/62-5.jpg"],
            type: "Resort",
            quality: 5,
            roomservice: ["무선인터넷","금연","욕실용품","샤워실","전기주전자","TV","냉장고","개인콘센트"],
            publicService: ["피트니스","레스토랑","사우나","라운지","엘리베이터","야외수영장"],
            otherService: ["스프링클러","카드결제","조식제공","반려견동반"],
            score: 3.5,
            scoreCount: 1022,
            discount: 0
        },
        {
            id: 63,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-04-21",
            endDate: "2026-04-25",
            hotelName: "그랜드 루미에르 호텔",
            price: 198000,
            img: ["/img/63-1.jpg","/img/63-2.jpg","/img/63-3.jpg","/img/63-4.jpg","/img/63-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            roomservice: ["욕조","금연","TV","무선인터넷","욕실용품","냉장고","드라이기"],
            publicService: ["레스토랑","편의점","엘리베이터","바","비즈니스센터","건조기"],
            otherService: ["무료주차","카드결제","짐보관가능","개인사물함"],
            score: 4.0,
            scoreCount: 5377,
            discount: 1
        },
        {
            id: 64,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-05-09",
            endDate: "2026-05-13",
            hotelName: "라이트 힐즈 스위트",
            price: 118400,
            img: ["/img/64-1.jpg","/img/64-2.jpg","/img/64-3.jpg","/img/64-4.jpg","/img/64-5.jpg"],
            type: "Condo",
            quality: 2,
            roomservice: ["무선인터넷","샤워실","전기주전자","개인콘센트","드라이기","에어컨"],
            publicService: ["피트니스","엘리베이터","라운지","편의점","바","사우나"],
            otherService: ["스프링클러","카드결제","짐보관가능"],
            score: 2.5,
            scoreCount: 2044,
            discount: 0
        },
        {
            id: 65,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-03-28",
            endDate: "2026-04-01",
            hotelName: "센트럴 오닉스 호텔",
            price: 160000,
            img: ["/img/65-1.jpg","/img/65-2.jpg","/img/65-3.jpg","/img/65-4.jpg","/img/65-5.jpg"],
            type: "Camping",
            quality: 3,
            roomservice: ["무선인터넷","개인콘센트","전기주전자","TV","에어컨","샤워실"],
            publicService: ["바베큐","편의점","라운지","건조기","탈수기","야외수영장","엘리베이터"],
            otherService: ["캠프파이어","조식제공","무료주차"],
            score: 4.0,
            scoreCount: 9921,
            discount: 1
        },
        {
            id: 66,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-04-08",
            endDate: "2026-04-12",
            hotelName: "프리미어노바 호텔",
            price: 126300,
            img: ["/img/66-1.jpg","/img/66-2.jpg","/img/66-3.jpg","/img/66-4.jpg","/img/66-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["욕실용품","TV","무선인터넷","욕조","냉장고","샤워실","드라이기"],
            publicService: ["피트니스","레스토랑","엘리베이터","비즈니스센터","편의점","라운지"],
            otherService: ["무료주차","카드결제","스프링클러","짐보관가능"],
            score: 5.0,
            scoreCount: 14888,
            discount: 1
        },
        {
            id: 67,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-05-19",
            endDate: "2026-05-23",
            hotelName: "모던크레센트 호텔",
            price: 83000,
            img: ["/img/67-1.jpg","/img/67-2.jpg","/img/67-3.jpg","/img/67-4.jpg","/img/67-5.jpg"],
            type: "Resort",
            quality: 1,
            roomservice: ["금연","무선인터넷","전기주전자","드라이기","샤워실","냉장고"],
            publicService: ["사우나","엘리베이터","라운지","바","편의점","건조기"],
            otherService: ["조식제공","카드결제","무료주차"],
            score: 3.0,
            scoreCount: 3140,
            discount: 1
        },
        {
            id: 68,
            country: "Japan",
            city: "Tokyo",
            startDate: "2026-03-17",
            endDate: "2026-03-21",
            hotelName: "루프테라스 호텔",
            price: 152000,
            img: ["/img/68-1.jpg","/img/68-2.jpg","/img/68-3.jpg","/img/68-4.jpg","/img/68-5.jpg"],
            type: "Hotel",
            quality: 5,
            roomservice: ["무선인터넷","드라이기","전기주전자","금연","욕조","샤워실","에어컨"],
            publicService: ["레스토랑","사우나","엘리베이터","편의점","야외수영장","라운지"],
            otherService: ["카드결제","무료주차","짐보관가능"],
            score: 4.5,
            scoreCount: 6433,
            discount: 1
        },

        /* 일본 - 삿포로 */

        {
            id: 69,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-03-02",
            endDate: "2026-03-06",
            hotelName: "스노우바레 호텔",
            price: 98000,
            img: ["/img/69-1.jpg","/img/69-2.jpg","/img/69-3.jpg","/img/69-4.jpg","/img/69-5.jpg"],
            type: "Condo",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","전기주전자","샤워실","냉장고","TV","금연"],
            publicService: ["피트니스","사우나","편의점","라운지","엘리베이터","비즈니스센터"],
            otherService: ["조식제공","무료주차","카드결제"],
            score: 3.5,
            scoreCount: 2055,
            discount: 0
        },
        {
            id: 70,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-03-29",
            endDate: "2026-04-02",
            hotelName: "화이트 마운틴 스위트",
            price: 140200,
            img: ["/img/70-1.jpg","/img/70-2.jpg","/img/70-3.jpg","/img/70-4.jpg","/img/70-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕조","샤워실","드라이기","냉장고","TV","전기주전자"],
            publicService: ["레스토랑","사우나","라운지","엘리베이터","건조기","편의점"],
            otherService: ["무료주차","짐보관가능","스프링클러"],
            score: 4.0,
            scoreCount: 11300,
            discount: 1
        },
        {
            id: 71,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-05-14",
            endDate: "2026-05-18",
            hotelName: "하이번 크로스 호텔",
            price: 67000,
            img: ["/img/71-1.jpg","/img/71-2.jpg","/img/71-3.jpg","/img/71-4.jpg","/img/71-5.jpg"],
            type: "Camping",
            quality: 2,
            roomservice: ["샤워실","전기주전자","에어컨","개인콘센트","무선인터넷","욕실용품"],
            publicService: ["바베큐","편의점","사우나","라운지","탈수기","건조기"],
            otherService: ["캠프파이어","무료주차","카드결제"],
            score: 2.5,
            scoreCount: 1999,
            discount: 1
        },
        {
            id: 72,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-04-06",
            endDate: "2026-04-10",
            hotelName: "딥 블리자드 호텔",
            price: 175500,
            img: ["/img/72-1.jpg","/img/72-2.jpg","/img/72-3.jpg","/img/72-4.jpg","/img/72-5.jpg"],
            type: "Hotel",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","욕조","냉장고","드라이기","TV","개인콘센트"],
            publicService: ["피트니스","레스토랑","사우나","엘리베이터","라운지","편의점"],
            otherService: ["조식제공","카드결제","무료주차"],
            score: 5.0,
            scoreCount: 14777,
            discount: 0
        },
        {
            id: 73,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-03-19",
            endDate: "2026-03-23",
            hotelName: "프레시 폴라리스 호텔",
            price: 119900,
            img: ["/img/73-1.jpg","/img/73-2.jpg","/img/73-3.jpg","/img/73-4.jpg","/img/73-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            roomservice: ["무선인터넷","전기주전자","금연","드라이기","샤워실","TV"],
            publicService: ["레스토랑","라운지","피트니스","편의점","비즈니스센터","엘리베이터"],
            otherService: ["카드결제","짐보관가능","무료주차"],
            score: 3.0,
            scoreCount: 3321,
            discount: 1
        },
        {
            id: 74,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-04-15",
            endDate: "2026-04-19",
            hotelName: "스노우 브리즈 리조트",
            price: 188000,
            img: ["/img/74-1.jpg","/img/74-2.jpg","/img/74-3.jpg","/img/74-4.jpg","/img/74-5.jpg"],
            type: "Resort",
            quality: 4,
            roomservice: ["무선인터넷","욕조","샤워실","욕실용품","드라이기","전기주전자","냉장고"],
            publicService: ["야외수영장","편의점","바","엘리베이터","라운지","비즈니스센터"],
            otherService: ["카드결제","조식제공","스프링클러"],
            score: 4.5,
            scoreCount: 5022,
            discount: 1
        },
        {
            id: 75,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-05-27",
            endDate: "2026-05-31",
            hotelName: "스노우 하모니 호텔",
            price: 54000,
            img: ["/img/75-1.jpg","/img/75-2.jpg","/img/75-3.jpg","/img/75-4.jpg","/img/75-5.jpg"],
            type: "GuestHouse",
            quality: 1,
            roomservice: ["무선인터넷","샤워실","전기주전자","드라이기","TV","금연"],
            publicService: ["엘리베이터","편의점","건조기","라운지","사우나","바베큐"],
            otherService: ["짐보관가능","카드결제","무료주차"],
            score: 1.5,
            scoreCount: 7811,
            discount: 0
        },
        {
            id: 76,
            country: "Japan",
            city: "Sapporo",
            startDate: "2026-04-26",
            endDate: "2026-04-30",
            hotelName: "라이트 애스펜 호텔",
            price: 133400,
            img: ["/img/76-1.jpg","/img/76-2.jpg","/img/76-3.jpg","/img/76-4.jpg","/img/76-5.jpg"],
            type: "Hotel",
            quality: 3,
            roomservice: ["무선인터넷","샤워실","전기주전자","냉장고","TV","금연","욕조"],
            publicService: ["라운지","엘리베이터","사우나","편의점","비즈니스센터","바"],
            otherService: ["무료주차","조식제공","카드결제"],
            score: 4.0,
            scoreCount: 6900,
            discount: 1
        },
        
        /* 미국 - 로스앤젤레스 */
        {
            id: 77,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-03-04",
            endDate: "2026-03-08",
            hotelName: "포레스트 힐스호텔",
            price: 154000,
            img: ["/img/77-1.jpg","/img/77-2.jpg","/img/77-3.jpg","/img/77-4.jpg","/img/77-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","샤워실","전기주전자","냉장고","TV","금연"],
            publicService: ["레스토랑","피트니스","사우나","라운지","편의점","엘리베이터"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.5,
            scoreCount: 10222,
            discount: 1
        },
        {
            id: 78,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-03-21",
            endDate: "2026-03-25",
            hotelName: "오션 클라우드 리조트",
            price: 176500,
            img: ["/img/78-1.jpg","/img/78-2.jpg","/img/78-3.jpg","/img/78-4.jpg","/img/78-5.jpg"],
            type: "Resort",
            quality: 5,
            roomservice: ["무선인터넷","욕조","드라이기","전기주전자","에어컨","샤워실","TV"],
            publicService: ["야외수영장","라운지","레스토랑","바","엘리베이터","편의점"],
            otherService: ["카드결제","조식제공","짐보관가능"],
            score: 5.0,
            scoreCount: 14110,
            discount: 1
        },
        {
            id: 79,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-04-10",
            endDate: "2026-04-14",
            hotelName: "어반 블루 스위트",
            price: 94000,
            img: ["/img/79-1.jpg","/img/79-2.jpg","/img/79-3.jpg","/img/79-4.jpg","/img/79-5.jpg"],
            type: "GuestHouse",
            quality: 2,
            roomservice: ["무선인터넷","샤워실","전기주전자","금연","드라이기","냉장고"],
            publicService: ["편의점","라운지","피트니스","엘리베이터","바","건조기"],
            otherService: ["스프링클러","무료주차","카드결제"],
            score: 2.5,
            scoreCount: 3444,
            discount: 0
        },
        {
            id: 80,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-04-27",
            endDate: "2026-05-01",
            hotelName: "선셋 마레 호텔",
            price: 131400,
            img: ["/img/80-1.jpg","/img/80-2.jpg","/img/80-3.jpg","/img/80-4.jpg","/img/80-5.jpg"],
            type: "Condo",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","샤워실","에어컨","TV","냉장고","전기주전자"],
            publicService: ["피트니스","사우나","편의점","라운지","엘리베이터","비즈니스센터"],
            otherService: ["무료주차","조식제공","짐보관가능"],
            score: 4.0,
            scoreCount: 8801,
            discount: 1
        },
        {
            id: 81,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-05-13",
            endDate: "2026-05-17",
            hotelName: "레드스톤 힐스 호텔",
            price: 58000,
            img: ["/img/81-1.jpg","/img/81-2.jpg","/img/81-3.jpg","/img/81-4.jpg","/img/81-5.jpg"],
            type: "Camping",
            quality: 1,
            roomservice: ["샤워실","전기주전자","개인콘센트","드라이기","무선인터넷","금연"],
            publicService: ["바베큐","편의점","탈수기","건조기","라운지","사우나"],
            otherService: ["캠프파이어","무료주차","카드결제"],
            score: 1.5,
            scoreCount: 2333,
            discount: 1
        },
        {
            id: 82,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-03-14",
            endDate: "2026-03-18",
            hotelName: "하버링크 호텔",
            price: 166900,
            img: ["/img/82-1.jpg","/img/82-2.jpg","/img/82-3.jpg","/img/82-4.jpg","/img/82-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕조","욕실용품","드라이기","TV","샤워실","에어컨"],
            publicService: ["레스토랑","라운지","편의점","엘리베이터","비즈니스센터","바"],
            otherService: ["카드결제","조식제공","무료주차"],
            score: 4.5,
            scoreCount: 6544,
            discount: 0
        },
        {
            id: 83,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-04-05",
            endDate: "2026-04-09",
            hotelName: "그랜드 웨이브 호텔",
            price: 148000,
            img: ["/img/83-1.jpg","/img/83-2.jpg","/img/83-3.jpg","/img/83-4.jpg","/img/83-5.jpg"],
            type: "Resort",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","에어컨","전기주전자","샤워실","TV","냉장고"],
            publicService: ["피트니스","사우나","라운지","바","레스토랑","엘리베이터"],
            otherService: ["짐보관가능","무료주차","카드결제"],
            score: 5.0,
            scoreCount: 13990,
            discount: 1
        },
        {
            id: 84,
            country: "USA",
            city: "LosAngeles",
            startDate: "2026-05-22",
            endDate: "2026-05-26",
            hotelName: "라구나브리즈 호텔",
            price: 103400,
            img: ["/img/84-1.jpg","/img/84-2.jpg","/img/84-3.jpg","/img/84-4.jpg","/img/84-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            roomservice: ["무선인터넷","전기주전자","샤워실","TV","드라이기","냉장고","금연"],
            publicService: ["편의점","라운지","피트니스","사우나","건조기","엘리베이터"],
            otherService: ["조식제공","카드결제","무료주차"],
            score: 3.5,
            scoreCount: 4421,
            discount: 1
        },

        /* 미국 - 뉴욕 */

        {
            id: 85,
            country: "USA",
            city: "New York",
            startDate: "2026-03-06",
            endDate: "2026-03-10",
            hotelName: "센트럴 브리즈 호텔",
            price: 174400,
            img: ["/img/85-1.jpg","/img/85-2.jpg","/img/85-3.jpg","/img/85-4.jpg","/img/85-5.jpg"],
            type: "Hotel",
            quality: 5,
            roomservice: ["무선인터넷","욕조","욕실용품","TV","드라이기","전기주전자","냉장고"],
            publicService: ["레스토랑","비즈니스센터","엘리베이터","라운지","편의점","사우나"],
            otherService: ["카드결제","무료주차","짐보관가능"],
            score: 5.0,
            scoreCount: 15000,
            discount: 0
        },
        {
            id: 86,
            country: "USA",
            city: "New York",
            startDate: "2026-03-28",
            endDate: "2026-04-01",
            hotelName: "에메랄드파크 리조트",
            price: 159200,
            img: ["/img/86-1.jpg","/img/86-2.jpg","/img/86-3.jpg","/img/86-4.jpg","/img/86-5.jpg"],
            type: "Resort",
            quality: 4,
            roomservice: ["무선인터넷","샤워실","드라이기","전기주전자","TV","욕실용품","에어컨"],
            publicService: ["라운지","레스토랑","야외수영장","편의점","비즈니스센터","바"],
            otherService: ["카드결제","조식제공","무료주차"],
            score: 4.0,
            scoreCount: 9333,
            discount: 1
        },
        {
            id: 87,
            country: "USA",
            city: "New York",
            startDate: "2026-04-17",
            endDate: "2026-04-21",
            hotelName: "노바 크라운 스위트",
            price: 99000,
            img: ["/img/87-1.jpg","/img/87-2.jpg","/img/87-3.jpg","/img/87-4.jpg","/img/87-5.jpg"],
            type: "GuestHouse",
            quality: 2,
            roomservice: ["무선인터넷","금연","샤워실","TV","냉장고","전기주전자","드라이기"],
            publicService: ["피트니스","편의점","라운지","사우나","엘리베이터","건조기"],
            otherService: ["카드결제","무료주차","짐보관가능"],
            score: 2.5,
            scoreCount: 3003,
            discount: 1
        },
        {
            id: 88,
            country: "USA",
            city: "New York",
            startDate: "2026-05-03",
            endDate: "2026-05-07",
            hotelName: "하모니 프라임 호텔",
            price: 184000,
            img: ["/img/88-1.jpg","/img/88-2.jpg","/img/88-3.jpg","/img/88-4.jpg","/img/88-5.jpg"],
            type: "Condo",
            quality: 5,
            roomservice: ["무선인터넷","욕조","욕실용품","샤워실","드라이기","TV","전기주전자"],
            publicService: ["레스토랑","라운지","사우나","엘리베이터","편의점","비즈니스센터"],
            otherService: ["카드결제","짐보관가능","조식제공"],
            score: 4.5,
            scoreCount: 11010,
            discount: 1
        },
        {
            id: 89,
            country: "USA",
            city: "New York",
            startDate: "2026-03-15",
            endDate: "2026-03-19",
            hotelName: "브로드웨이 샤인 호텔",
            price: 57000,
            img: ["/img/89-1.jpg","/img/89-2.jpg","/img/89-3.jpg","/img/89-4.jpg","/img/89-5.jpg"],
            type: "Camping",
            quality: 1,
            roomservice: ["샤워실","전기주전자","드라이기","무선인터넷","금연","TV"],
            publicService: ["바베큐","건조기","편의점","라운지","사우나","탈수기"],
            otherService: ["캠프파이어","무료주차","카드결제"],
            score: 1.5,
            scoreCount: 2800,
            discount: 1
        },
        {
            id: 90,
            country: "USA",
            city: "New York",
            startDate: "2026-04-30",
            endDate: "2026-05-04",
            hotelName: "미드타운 힐즈호텔",
            price: 167000,
            img: ["/img/90-1.jpg","/img/90-2.jpg","/img/90-3.jpg","/img/90-4.jpg","/img/90-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","드라이기","샤워실","TV","에어컨","전기주전자"],
            publicService: ["피트니스","라운지","레스토랑","편의점","사우나","엘리베이터"],
            otherService: ["무료주차","조식제공","카드결제"],
            score: 4.0,
            scoreCount: 6200,
            discount: 0
        },
        {
            id: 91,
            country: "USA",
            city: "New York",
            startDate: "2026-05-20",
            endDate: "2026-05-24",
            hotelName: "센트럴 스카이라인 호텔",
            price: 122300,
            img: ["/img/91-1.jpg","/img/91-2.jpg","/img/91-3.jpg","/img/91-4.jpg","/img/91-5.jpg"],
            type: "Resort",
            quality: 3,
            roomservice: ["무선인터넷","샤워실","전기주전자","TV","드라이기","냉장고","금연"],
            publicService: ["레스토랑","라운지","피트니스","편의점","건조기","사우나"],
            otherService: ["무료주차","카드결제","짐보관가능"],
            score: 3.5,
            scoreCount: 5511,
            discount: 1
        },
        {
            id: 92,
            country: "USA",
            city: "New York",
            startDate: "2026-03-25",
            endDate: "2026-03-29",
            hotelName: "브루클린 웨이브 호텔",
            price: 113800,
            img: ["/img/92-1.jpg","/img/92-2.jpg","/img/92-3.jpg","/img/92-4.jpg","/img/92-5.jpg"],
            type: "GuestHouse",
            quality: 2,
            roomservice: ["무선인터넷","샤워실","전기주전자","TV","금연","냉장고","드라이기"],
            publicService: ["편의점","라운지","피트니스","사우나","엘리베이터","바"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 2.5,
            scoreCount: 3100,
            discount: 1
        },

        /* 미국 - 괌 */

        {
            id: 93,
            country: "USA",
            city: "Guam",
            startDate: "2026-03-11",
            endDate: "2026-03-15",
            hotelName: "트로피컬 웨이브 호텔",
            price: 153300,
            img: ["/img/93-1.jpg","/img/93-2.jpg","/img/93-3.jpg","/img/93-4.jpg","/img/93-5.jpg"],
            type: "Resort",
            quality: 4,
            roomservice: ["무선인터넷","샤워실","욕조","드라이기","에어컨","TV","냉장고"],
            publicService: ["야외수영장","라운지","레스토랑","편의점","바","엘리베이터"],
            otherService: ["조식제공","카드결제","무료주차"],
            score: 4.0,
            scoreCount: 9011,
            discount: 1
        },
        {
            id: 94,
            country: "USA",
            city: "Guam",
            startDate: "2026-04-09",
            endDate: "2026-04-13",
            hotelName: "블루샌드 스위트",
            price: 142000,
            img: ["/img/94-1.jpg","/img/94-2.jpg","/img/94-3.jpg","/img/94-4.jpg","/img/94-5.jpg"],
            type: "Hotel",
            quality: 3,
            roomservice: ["무선인터넷","샤워실","TV","전기주전자","드라이기","냉장고","금연"],
            publicService: ["라운지","피트니스","사우나","편의점","엘리베이터","바"],
            otherService: ["무료주차","짐보관가능","카드결제"],
            score: 3.5,
            scoreCount: 4022,
            discount: 1
        },
        {
            id: 95,
            country: "USA",
            city: "Guam",
            startDate: "2026-05-02",
            endDate: "2026-05-06",
            hotelName: "아이랜더베이 리조트",
            price: 177900,
            img: ["/img/95-1.jpg","/img/95-2.jpg","/img/95-3.jpg","/img/95-4.jpg","/img/95-5.jpg"],
            type: "Resort",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","욕조","드라이기","전기주전자","TV","에어컨"],
            publicService: ["야외수영장","레스토랑","라운지","사우나","비즈니스센터","편의점"],
            otherService: ["무료주차","조식제공","카드결제"],
            score: 5.0,
            scoreCount: 13400,
            discount: 1
        },
        {
            id: 96,
            country: "USA",
            city: "Guam",
            startDate: "2026-03-18",
            endDate: "2026-03-22",
            hotelName: "코랄리프 호텔",
            price: 76000,
            img: ["/img/96-1.jpg","/img/96-2.jpg","/img/96-3.jpg","/img/96-4.jpg","/img/96-5.jpg"],
            type: "GuestHouse",
            quality: 1,
            roomservice: ["무선인터넷","전기주전자","샤워실","금연","드라이기","TV"],
            publicService: ["편의점","라운지","탈수기","건조기","사우나","바베큐"],
            otherService: ["무료주차","카드결제","캠프파이어"],
            score: 1.5,
            scoreCount: 2222,
            discount: 1
        },
        {
            id: 97,
            country: "USA",
            city: "Guam",
            startDate: "2026-04-25",
            endDate: "2026-04-29",
            hotelName: "에메랄드비치 호텔",
            price: 132200,
            img: ["/img/97-1.jpg","/img/97-2.jpg","/img/97-3.jpg","/img/97-4.jpg","/img/97-5.jpg"],
            type: "Hotel",
            quality: 3,
            roomservice: ["무선인터넷","샤워실","에어컨","TV","드라이기","전기주전자","냉장고"],
            publicService: ["라운지","레스토랑","피트니스","사우나","엘리베이터","편의점"],
            otherService: ["무료주차","조식제공","카드결제"],
            score: 4.0,
            scoreCount: 5500,
            discount: 1
        },
        {
            id: 98,
            country: "USA",
            city: "Guam",
            startDate: "2026-05-11",
            endDate: "2026-05-15",
            hotelName: "트로피컬코브 호텔",
            price: 58000,
            img: ["/img/98-1.jpg","/img/98-2.jpg","/img/98-3.jpg","/img/98-4.jpg","/img/98-5.jpg"],
            type: "Camping",
            quality: 2,
            roomservice: ["무선인터넷","전기주전자","샤워실","드라이기","냉장고","금연"],
            publicService: ["바베큐","라운지","편의점","탈수기","사우나","건조기"],
            otherService: ["무료주차","카드결제","캠프파이어"],
            score: 2.0,
            scoreCount: 3101,
            discount: 1
        },
        {
            id: 99,
            country: "USA",
            city: "Guam",
            startDate: "2026-03-23",
            endDate: "2026-03-27",
            hotelName: "코코넛하버 호텔",
            price: 149900,
            img: ["/img/99-1.jpg","/img/99-2.jpg","/img/99-3.jpg","/img/99-4.jpg","/img/99-5.jpg"],
            type: "Condo",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","욕조","드라이기","전기주전자","냉장고","TV"],
            publicService: ["레스토랑","라운지","엘리베이터","사우나","편의점","비즈니스센터"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.0,
            scoreCount: 7700,
            discount: 0
        },
        {
            id: 100,
            country: "USA",
            city: "Guam",
            startDate: "2026-04-13",
            endDate: "2026-04-17",
            hotelName: "블루리프 베이스위트",
            price: 112300,
            img: ["/img/100-1.jpg","/img/100-2.jpg","/img/100-3.jpg","/img/100-4.jpg","/img/100-5.jpg"],
            type: "Hotel",
            quality: 2,
            roomservice: ["무선인터넷","샤워실","전기주전자","금연","TV","드라이기","냉장고"],
            publicService: ["라운지","편의점","사우나","엘리베이터","바","건조기"],
            otherService: ["카드결제","무료주차","짐보관가능"],
            score: 2.5,
            scoreCount: 4322,
            discount: 1
        },
        /* 중국 - 장가계 */

        {
            id: 101,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-03-04",
            endDate: "2026-03-08",
            hotelName: "스카이브리즈 프라임 호텔",
            price: 152000,
            img: ["/img/101-1.jpg","/img/101-2.jpg","/img/101-3.jpg","/img/101-4.jpg","/img/101-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","냉장고","TV","전기주전자"],
            publicService: ["피트니스","레스토랑","사우나","실내수영장","편의점","라운지","엘리베이터"],
            otherService: ["카드결제","무료주차","조식제공","짐보관가능"],
            score: 4.0,
            scoreCount: 8293,
            discount: 1
        },
        {
            id: 102,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-04-12",
            endDate: "2026-04-16",
            hotelName: "블루웨이브 시그니처 호텔",
            price: 98000,
            img: ["/img/102-1.jpg","/img/102-2.jpg","/img/102-3.jpg","/img/102-4.jpg","/img/102-5.jpg"],
            type: "Resort",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","객실내취사","금연"],
            publicService: ["레스토랑","실내수영장","야외수영장","편의점","비즈니스센터","바"],
            otherService: ["무료주차","카드결제","스프링클러"],
            score: 3.5,
            scoreCount: 11294,
            discount: 1
        },
        {
            id: 103,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-05-03",
            endDate: "2026-05-07",
            hotelName: "하모니힐 클래식 호텔",
            price: 67000,
            img: ["/img/103-1.jpg","/img/103-2.jpg","/img/103-3.jpg","/img/103-4.jpg","/img/103-5.jpg"],
            type: "GuestHouse",
            quality: 2,
            roomservice: ["무선인터넷","욕실용품","드라이기","TV","전기주전자","개인콘센트"],
            publicService: ["피트니스","편의점","엘리베이터","바베큐","바","라운지"],
            otherService: ["조식제공","카드결제","짐보관가능"],
            score: 4.5,
            scoreCount: 14521,
            discount: 1
        },
        {
            id: 104,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-04-01",
            endDate: "2026-04-05",
            hotelName: "루미너스 파크 호텔",
            price: 188000,
            img: ["/img/104-1.jpg","/img/104-2.jpg","/img/104-3.jpg","/img/104-4.jpg","/img/104-5.jpg"],
            type: "Condo",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","냉장고","TV","전기주전자","욕조"],
            publicService: ["사우나","실내수영장","야외수영장","편의점","비즈니스센터","라운지"],
            otherService: ["카드결제","무료주차","조식제공","반려견동반"],
            score: 4.5,
            scoreCount: 12012,
            discount: 0
        },
        {
            id: 105,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-04-21",
            endDate: "2026-04-25",
            hotelName: "레브클라우드 시그니처 호텔",
            price: 134000,
            img: ["/img/105-1.jpg","/img/105-2.jpg","/img/105-3.jpg","/img/105-4.jpg","/img/105-5.jpg"],
            type: "Camping",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","금연","개인콘센트"],
            publicService: ["야외수영장","편의점","바베큐","바","라운지","건조기"],
            otherService: ["캠프파이어","조식제공","카드결제"],
            score: 3.0,
            scoreCount: 1003,
            discount: 1
        },
        {
            id: 106,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-05-15",
            endDate: "2026-05-19",
            hotelName: "클라우드하버 프리미엄 호텔",
            price: 198000,
            img: ["/img/106-1.jpg","/img/106-2.jpg","/img/106-3.jpg","/img/106-4.jpg","/img/106-5.jpg"],
            type: "Hotel",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","냉장고","금연","전기주전자"],
            publicService: ["피트니스","사우나","실내수영장","편의점","비즈니스센터","라운지","엘리베이터"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.5,
            scoreCount: 14933,
            discount: 1
        },
        {
            id: 107,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-03-18",
            endDate: "2026-03-22",
            hotelName: "에코파크 하모니 호텔",
            price: 54000,
            img: ["/img/107-1.jpg","/img/107-2.jpg","/img/107-3.jpg","/img/107-4.jpg","/img/107-5.jpg"],
            type: "GuestHouse",
            quality: 1,
            roomservice: ["무선인터넷","욕실용품","드라이기","TV","개인콘센트","전기주전자"],
            publicService: ["편의점","바베큐","야외수영장","바","라운지","엘리베이터"],
            otherService: ["카드결제","짐보관가능","조식제공"],
            score: 2.5,
            scoreCount: 5732,
            discount: 1
        },
        {
            id: 108,
            country: "China",
            city: "Zhangjiajie",
            startDate: "2026-05-28",
            endDate: "2026-06-01",
            hotelName: "브릴리언트힐 로얄 호텔",
            price: 176000,
            img: ["/img/108-1.jpg","/img/108-2.jpg","/img/108-3.jpg","/img/108-4.jpg","/img/108-5.jpg"],
            type: "Resort",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","전기주전자","냉장고","TV","욕조"],
            publicService: ["피트니스","실내수영장","사우나","편의점","바","라운지"],
            otherService: ["무료주차","카드결제","조식제공","스프링클러"],
            score: 4.0,
            scoreCount: 13822,
            discount: 0
        },

        /* 중국 - 상하이 */


        {
            id: 109,
            country: "China",
            city: "Shanghai",
            startDate: "2026-04-02",
            endDate: "2026-04-06",
            hotelName: "블루문 프레스티지 호텔",
            price: 168000,
            img: ["/img/109-1.jpg","/img/109-2.jpg","/img/109-3.jpg","/img/109-4.jpg","/img/109-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","전기주전자","금연"],
            publicService: ["피트니스","레스토랑","사우나","비즈니스센터","편의점","엘리베이터"],
            otherService: ["카드결제","무료주차","조식제공"],
            score: 4.0,
            scoreCount: 12233,
            discount: 1
        },
        {
            id: 110,
            country: "China",
            city: "Shanghai",
            startDate: "2026-03-07",
            endDate: "2026-03-11",
            hotelName: "레브코스트 디럭스 호텔",
            price: 112000,
            img: ["/img/110-1.jpg","/img/110-2.jpg","/img/110-3.jpg","/img/110-4.jpg","/img/110-5.jpg"],
            type: "Condo",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","전기주전자","냉장고"],
            publicService: ["레스토랑","편의점","바","라운지","건조기","엘리베이터"],
            otherService: ["카드결제","짐보관가능","조식제공"],
            score: 3.5,
            scoreCount: 10321,
            discount: 1
        },
        {
            id: 111,
            country: "China",
            city: "Shanghai",
            startDate: "2026-05-12",
            endDate: "2026-05-16",
            hotelName: "오션힐 클래식 호텔",
            price: 95000,
            img: ["/img/111-1.jpg","/img/111-2.jpg","/img/111-3.jpg","/img/111-4.jpg","/img/111-5.jpg"],
            type: "GuestHouse",
            quality: 2,
            roomservice: ["무선인터넷","욕실용품","드라이기","샤워실","TV","금연","전기주전자"],
            publicService: ["피트니스","편의점","라운지","사우나","바베큐","엘리베이터"],
            otherService: ["조식제공","카드결제","스프링클러"],
            score: 3.0,
            scoreCount: 7322,
            discount: 1
        },
        {
            id: 112,
            country: "China",
            city: "Shanghai",
            startDate: "2026-05-28",
            endDate: "2026-06-01",
            hotelName: "하모니브릿지 로얄 호텔",
            price: 172000,
            img: ["/img/112-1.jpg","/img/112-2.jpg","/img/112-3.jpg","/img/112-4.jpg","/img/112-5.jpg"],
            type: "Resort",
            quality: 5,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","냉장고","TV","욕조","전기주전자"],
            publicService: ["실내수영장","사우나","레스토랑","라운지","비즈니스센터","편의점"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.5,
            scoreCount: 14019,
            discount: 1
        },
        {
            id: 113,
            country: "China",
            city: "Shanghai",
            startDate: "2026-04-18",
            endDate: "2026-04-22",
            hotelName: "라이트베이 모던 호텔",
            price: 78000,
            img: ["/img/113-1.jpg","/img/113-2.jpg","/img/113-3.jpg","/img/113-4.jpg","/img/113-5.jpg"],
            type: "Camping",
            quality: 2,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","전기주전자","개인콘센트"],
            publicService: ["야외수영장","바","라운지","편의점","바베큐","건조기"],
            otherService: ["카드결제","짐보관가능","캠프파이어"],
            score: 2.5,
            scoreCount: 5543,
            discount: 1
        },
        {
            id: 114,
            country: "China",
            city: "Shanghai",
            startDate: "2026-03-21",
            endDate: "2026-03-25",
            hotelName: "에메랄드스테이 시그니처 호텔",
            price: 126000,
            img: ["/img/114-1.jpg","/img/114-2.jpg","/img/114-3.jpg","/img/114-4.jpg","/img/114-5.jpg"],
            type: "Hotel",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","금연","TV","전기주전자","냉장고"],
            publicService: ["피트니스","레스토랑","사우나","편의점","라운지","엘리베이터"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.0,
            scoreCount: 13322,
            discount: 1
        },
        {
            id: 115,
            country: "China",
            city: "Shanghai",
            startDate: "2026-05-03",
            endDate: "2026-05-07",
            hotelName: "피스포레스트 프라임 호텔",
            price: 184000,
            img: ["/img/115-1.jpg","/img/115-2.jpg","/img/115-3.jpg","/img/115-4.jpg","/img/115-5.jpg"],
            type: "Resort",
            quality: 4,
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","냉장고","TV","전기주전자","욕조"],
            publicService: ["실내수영장","사우나","비즈니스센터","레스토랑","편의점","엘리베이터"],
            otherService: ["무료주차","조식제공","카드결제"],
            score: 4.5,
            scoreCount: 14722,
            discount: 0
        },
        {
            id: 116,
            country: "China",
            city: "Shanghai",
            startDate: "2026-04-09",
            endDate: "2026-04-13",
            hotelName: "코발트시티 모던 호텔",
            price: 99000,
            img: ["/img/116-1.jpg","/img/116-2.jpg","/img/116-3.jpg","/img/116-4.jpg","/img/116-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","전기주전자","개인콘센트"],
            publicService: ["라운지","편의점","사우나","바","바베큐","엘리베이터"],
            otherService: ["카드결제","조식제공","무료주차"],
            score: 3.5,
            scoreCount: 9088,
            discount: 1
        },


        /* 이탈리아 - 로마 */


        
        {
            id: 117,
            country: "Italy",
            city: "Rome",
            startDate: "2026-03-04",
            endDate: "2026-03-08",
            hotelName: "로마 엘레강트 스위트",
            price: 162000,
            img: ["/img/117-1.jpg","/img/117-2.jpg","/img/117-3.jpg","/img/117-4.jpg","/img/117-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["레스토랑","피트니스","라운지","엘리베이터","비즈니스센터","바"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","냉장고"],
            otherService: ["카드결제","조식제공","무료주차"],
            score: 4.5,
            scoreCount: 13240,
            discount: 1
        },
        {
            id: 118,
            country: "Italy",
            city: "Rome",
            startDate: "2026-04-10",
            endDate: "2026-04-14",
            hotelName: "로마 그랜드 팰리스",
            price: 189000,
            img: ["/img/118-1.jpg","/img/118-2.jpg","/img/118-3.jpg","/img/118-4.jpg","/img/118-5.jpg"],
            type: "Resort",
            quality: 4,
            publicService: ["피트니스","실내수영장","레스토랑","라운지","엘리베이터","야외수영장"],
            roomservice: ["무선인터넷","에어컨","드라이기","TV","욕조","전기주전자","샤워실"],
            otherService: ["카드결제","짐보관가능","조식제공"],
            score: 4.0,
            scoreCount: 9720,
            discount: 1
        },
        {
            id: 119,
            country: "Italy",
            city: "Rome",
            startDate: "2026-05-02",
            endDate: "2026-05-06",
            hotelName: "호텔 로마 클래시코",
            price: 154000,
            img: ["/img/119-1.jpg","/img/119-2.jpg","/img/119-3.jpg","/img/119-4.jpg","/img/119-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            publicService: ["라운지","엘리베이터","편의점","레스토랑","바"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","TV","금연"],
            otherService: ["카드결제","스프링클러","조식제공"],
            score: 3.5,
            scoreCount: 4210,
            discount: 0
        },
        {
            id: 120,
            country: "Italy",
            city: "Rome",
            startDate: "2026-03-18",
            endDate: "2026-03-22",
            hotelName: "로마 럭셔리 베이 호텔",
            price: 178000,
            img: ["/img/120-1.jpg","/img/120-2.jpg","/img/120-3.jpg","/img/120-4.jpg","/img/120-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["레스토랑","바","피트니스","실내수영장","라운지","엘리베이터"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","욕조","TV","전기주전자"],
            otherService: ["카드결제","무료주차","짐보관가능"],
            score: 4.5,
            scoreCount: 15880,
            discount: 1
        },
        {
            id: 121,
            country: "Italy",
            city: "Rome",
            startDate: "2026-04-25",
            endDate: "2026-04-29",
            hotelName: "로마 비스타 가든 호텔",
            price: 133000,
            img: ["/img/121-1.jpg","/img/121-2.jpg","/img/121-3.jpg","/img/121-4.jpg","/img/121-5.jpg"],
            type: "Condo",
            quality: 4,
            publicService: ["라운지","레스토랑","비즈니스센터","편의점","엘리베이터","건조기"],
            roomservice: ["무선인터넷","샤워실","에어컨","드라이기","TV","전기주전자","금연"],
            otherService: ["카드결제","무료주차","조식제공"],
            score: 4.0,
            scoreCount: 11200,
            discount: 1
        },
        {
            id: 122,
            country: "Italy",
            city: "Rome",
            startDate: "2026-05-15",
            endDate: "2026-05-19",
            hotelName: "로마 블루 스카이 호텔",
            price: 148000,
            img: ["/img/122-1.jpg","/img/122-2.jpg","/img/122-3.jpg","/img/122-4.jpg","/img/122-5.jpg"],
            type: "Hotel",
            quality: 3,
            publicService: ["레스토랑","바","엘리베이터","편의점","라운지"],
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","냉장고","드라이기"],
            otherService: ["카드결제","스프링클러","짐보관가능"],
            score: 3.0,
            scoreCount: 6840,
            discount: 0
        },
        {
            id: 123,
            country: "Italy",
            city: "Rome",
            startDate: "2026-03-30",
            endDate: "2026-04-03",
            hotelName: "로마 임페리얼 스테이",
            price: 173000,
            img: ["/img/123-1.jpg","/img/123-2.jpg","/img/123-3.jpg","/img/123-4.jpg","/img/123-5.jpg"],
            type: "Resort",
            quality: 5,
            publicService: ["피트니스","실내수영장","야외수영장","레스토랑","비즈니스센터","라운지"],
            roomservice: ["무선인터넷","욕조","에어컨","드라이기","TV","샤워실","금연"],
            otherService: ["카드결제","무료주차","조식제공"],
            score: 4.5,
            scoreCount: 14300,
            discount: 1
        },
        {
            id: 124,
            country: "Italy",
            city: "Rome",
            startDate: "2026-05-05",
            endDate: "2026-05-09",
            hotelName: "로마 모던 라이트 호텔",
            price: 165000,
            img: ["/img/124-1.jpg","/img/124-2.jpg","/img/124-3.jpg","/img/124-4.jpg","/img/124-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["라운지","엘리베이터","레스토랑","바","편의점","사우나"],
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","드라이기","전기주전자"],
            otherService: ["카드결제","짐보관가능","무료주차"],
            score: 4.0,
            scoreCount: 10950,
            discount: 1
        },

        /* 이탈리아 - 베네치아 */
        {
            id: 125,
            country: "Italy",
            city: "Venice",
            startDate: "2026-03-07",
            endDate: "2026-03-11",
            hotelName: "베네치아 카날 뷰 호텔",
            price: 177000,
            img: ["/img/125-1.jpg","/img/125-2.jpg","/img/125-3.jpg","/img/125-4.jpg","/img/125-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["레스토랑","라운지","바","엘리베이터","실내수영장","피트니스"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","TV","욕조","냉장고"],
            otherService: ["카드결제","유료조식","짐보관가능"],
            score: 4.5,
            scoreCount: 13820,
            discount: 0
        },
        {
            id: 126,
            country: "Italy",
            city: "Venice",
            startDate: "2026-04-02",
            endDate: "2026-04-06",
            hotelName: "베네치아 라구나 팰리스",
            price: 158000,
            img: ["/img/126-1.jpg","/img/126-2.jpg","/img/126-3.jpg","/img/126-4.jpg","/img/126-5.jpg"],
            type: "Resort",
            quality: 4,
            publicService: ["라운지","피트니스","레스토랑","엘리베이터","바베큐","야외수영장"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","샤워실","TV","전기주전자"],
            otherService: ["카드결제","무료주차","조식제공"],
            score: 4.0,
            scoreCount: 11400,
            discount: 1
        },
        {
            id: 127,
            country: "Italy",
            city: "Venice",
            startDate: "2026-05-10",
            endDate: "2026-05-14",
            hotelName: "베네치아 하버 스카이 호텔",
            price: 146000,
            img: ["/img/127-1.jpg","/img/127-2.jpg","/img/127-3.jpg","/img/127-4.jpg","/img/127-5.jpg"],
            type: "Hotel",
            quality: 3,
            publicService: ["엘리베이터","레스토랑","바","편의점","라운지"],
            roomservice: ["무선인터넷","샤워실","에어컨","드라이기","TV","냉장고","금연"],
            otherService: ["카드결제","짐보관가능","스프링클러"],
            score: 3.5,
            scoreCount: 6820,
            discount: 1
        },
        {
            id: 128,
            country: "Italy",
            city: "Venice",
            startDate: "2026-03-28",
            endDate: "2026-04-01",
            hotelName: "베네치아 워터라인 스위트",
            price: 188000,
            img: ["/img/128-1.jpg","/img/128-2.jpg","/img/128-3.jpg","/img/128-4.jpg","/img/128-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["레스토랑","피트니스","엘리베이터","라운지","실내수영장","편의점"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","욕조","TV","개인콘센트"],
            otherService: ["카드결제","조식제공","무료주차"],
            score: 4.5,
            scoreCount: 15210,
            discount: 1
        },
        {
            id: 129,
            country: "Italy",
            city: "Venice",
            startDate: "2026-05-06",
            endDate: "2026-05-10",
            hotelName: "베네치아 씨 브리즈 호텔",
            price: 136000,
            img: ["/img/129-1.jpg","/img/129-2.jpg","/img/129-3.jpg","/img/129-4.jpg","/img/129-5.jpg"],
            type: "GuestHouse",
            quality: 3,
            publicService: ["엘리베이터","라운지","편의점","레스토랑","바"],
            roomservice: ["무선인터넷","욕실용품","에어컨","샤워실","TV","드라이기"],
            otherService: ["카드결제","스프링클러","조식제공"],
            score: 3.0,
            scoreCount: 5020,
            discount: 1
        },
        {
            id: 130,
            country: "Italy",
            city: "Venice",
            startDate: "2026-04-14",
            endDate: "2026-04-18",
            hotelName: "베네치아 골드 카날 호텔",
            price: 159000,
            img: ["/img/130-1.jpg","/img/130-2.jpg","/img/130-3.jpg","/img/130-4.jpg","/img/130-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["라운지","엘리베이터","레스토랑","피트니스","바"],
            roomservice: ["무선인터넷","욕실용품","에어컨","드라이기","전기주전자","TV","냉장고"],
            otherService: ["카드결제","짐보관가능","무료주차"],
            score: 4.0,
            scoreCount: 10300,
            discount: 1
        },
        {
            id: 131,
            country: "Italy",
            city: "Venice",
            startDate: "2026-03-12",
            endDate: "2026-03-16",
            hotelName: "베네치아 클래식 하버 호텔",
            price: 149000,
            img: ["/img/131-1.jpg","/img/131-2.jpg","/img/131-3.jpg","/img/131-4.jpg","/img/131-5.jpg"],
            type: "Condo",
            quality: 4,
            publicService: ["레스토랑","라운지","엘리베이터","편의점","건조기","비즈니스센터"],
            roomservice: ["무선인터넷","샤워실","에어컨","드라이기","TV","전기주전자","금연"],
            otherService: ["카드결제","무료주차","조식제공"],
            score: 4.0,
            scoreCount: 9480,
            discount: 0
        },
        {
            id: 132,
            country: "Italy",
            city: "Venice",
            startDate: "2026-05-21",
            endDate: "2026-05-25",
            hotelName: "베네치아 라군 선셋 호텔",
            price: 168000,
            img: ["/img/132-1.jpg","/img/132-2.jpg","/img/132-3.jpg","/img/132-4.jpg","/img/132-5.jpg"],
            type: "Resort",
            quality: 5,
            publicService: ["피트니스","레스토랑","야외수영장","라운지","바","엘리베이터"],
            roomservice: ["무선인터넷","욕조","에어컨","샤워실","TV","드라이기","전기주전자"],
            otherService: ["카드결제","조식제공","짐보관가능"],
            score: 4.5,
            scoreCount: 15600,
            discount: 1
        },
        


        /* 프랑스 - 파리 */

        
        {
            id: 133,
            country: "France",
            city: "Paris",
            startDate: "2026-03-10",
            endDate: "2026-03-14",
            hotelName: "파리 에펠 뷰 호텔",
            price: 243000,
            img: ["/img/133-1.jpg","/img/133-2.jpg","/img/133-3.jpg","/img/133-4.jpg","/img/133-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["레스토랑","피트니스","바","라운지","엘리베이터","비즈니스센터","편의점"],
            roomservice: ["무선인터넷","욕실용품","샤워실","드라이기","전기주전자","TV","냉장고"],
            otherService: ["카드결제","조식제공","무료주차","짐보관가능"],
            score: 4.5,
            scoreCount: 12500,
            discount: 1
        },
        {
            id: 134,
            country: "France",
            city: "Paris",
            startDate: "2026-03-15",
            endDate: "2026-03-19",
            hotelName: "파리 루브르 센터 호텔",
            price: 221000,
            img: ["/img/134-1.jpg","/img/134-2.jpg","/img/134-3.jpg","/img/134-4.jpg","/img/134-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["엘리베이터","편의점","레스토랑","피트니스","바","비즈니스센터","사우나"],
            roomservice: ["무선인터넷","샤워실","에어컨","욕조","금연","냉장고","개인콘센트"],
            otherService: ["카드결제","조식제공","스프링클러"],
            score: 4,
            scoreCount: 8500,
            discount: 0
        },
        {
            id: 135,
            country: "France",
            city: "Paris",
            startDate: "2026-03-21",
            endDate: "2026-03-25",
            hotelName: "파리 샹젤리제 프리미어 호텔",
            price: 268000,
            img: ["/img/135-1.jpg","/img/135-2.jpg","/img/135-3.jpg","/img/135-4.jpg","/img/135-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["사우나","피트니스","레스토랑","바","비즈니스센터","실내수영장"],
            roomservice: ["무선인터넷","샤워실","욕실용품","드라이기","에어컨","개인콘센트","욕조","TV"],
            otherService: ["조식제공","무료주차","스프링클러","카드결제"],
            score: 5,
            scoreCount: 14500,
            discount: 1
        },
        {
            id: 136,
            country: "France",
            city: "Paris",
            startDate: "2026-04-01",
            endDate: "2026-04-05",
            hotelName: "파리 몽마르트 트래블 호텔",
            price: 187000,
            img: ["/img/136-1.jpg","/img/136-2.jpg","/img/136-3.jpg","/img/136-4.jpg","/img/136-5.jpg"],
            type: "Hotel",
            quality: 3,
            publicService: ["라운지","엘리베이터","편의점","건조기","레스토랑","사우나"],
            roomservice: ["무선인터넷","샤워실","금연","냉장고","TV","욕실용품","에어컨"],
            otherService: ["개인사물함","카드결제","스프링클러"],
            score: 3,
            scoreCount: 3500,
            discount: 0
        },
        {
            id: 137,
            country: "France",
            city: "Paris",
            startDate: "2026-04-07",
            endDate: "2026-04-11",
            hotelName: "파리 노트르담 리버 뷰 호텔",
            price: 233000,
            img: ["/img/137-1.jpg","/img/137-2.jpg","/img/137-3.jpg","/img/137-4.jpg","/img/137-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["실내수영장","레스토랑","라운지","편의점","비즈니스센터","사우나","탈수기"],
            roomservice: ["무선인터넷","욕실용품","샤워실","전기주전자","에어컨","TV"],
            otherService: ["조식제공","무료주차","카드결제"],
            score: 4,
            scoreCount: 5600,
            discount: 0
        },
        {
            id: 138,
            country: "France",
            city: "Paris",
            startDate: "2026-04-13",
            endDate: "2026-04-17",
            hotelName: "파리 센강 프레스티지 호텔",
            price: 255000,
            img: ["/img/138-1.jpg","/img/138-2.jpg","/img/138-3.jpg","/img/138-4.jpg","/img/138-5.jpg"],
            type: "Hotel",
            quality: 5,
            publicService: ["레스토랑","바","실내수영장","피트니스","사우나","라운지"],
            roomservice: ["무선인터넷","욕조","TV","냉장고","개인콘센트","욕실용품","드라이기"],
            otherService: ["카드결제","무료주차","스프링클러","짐보관가능"],
            score: 4.5,
            scoreCount: 7900,
            discount: 1
        },
        {
            id: 139,
            country: "France",
            city: "Paris",
            startDate: "2026-04-20",
            endDate: "2026-04-24",
            hotelName: "파리 라데팡스 스테이 호텔",
            price: 199000,
            img: ["/img/139-1.jpg","/img/139-2.jpg","/img/139-3.jpg","/img/139-4.jpg","/img/139-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["엘리베이터","피트니스","레스토랑","바","편의점","건조기"],
            roomservice: ["무선인터넷","샤워실","냉장고","전기주전자","금연","TV"],
            otherService: ["조식제공","카드결제","스프링클러"],
            score: 4,
            scoreCount: 7750,
            discount: 0
        },
        {
            id: 140,
            country: "France",
            city: "Paris",
            startDate: "2026-04-28",
            endDate: "2026-05-02",
            hotelName: "파리 오페라 하우스 클래식 호텔",
            price: 229000,
            img: ["/img/140-1.jpg","/img/140-2.jpg","/img/140-3.jpg","/img/140-4.jpg","/img/140-5.jpg"],
            type: "Hotel",
            quality: 4,
            publicService: ["레스토랑","라운지","비즈니스센터","편의점","바베큐","피트니스"],
            roomservice: ["무선인터넷","샤워실","냉장고","전기주전자","욕실용품","드라이기","개인콘센트"],
            otherService: ["무료주차","카드결제","조식제공"],
            score: 4.5,
            scoreCount: 9935,
            discount: 1
        }
    ];


    // 휴대폰 번호 상태저장 변수
    const [userNumFront, setUserNumFront] = useState('');
    const [userNumBack, setUserNumBack] = useState('');

    const [DayData,setDayData] = useState(()=>{
        const saved = localStorage.getItem('DayData')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })
    useEffect(()=>{
        localStorage.setItem('DayData',JSON.stringify(DayData))
    },[DayData])

    const [selectDate,setSelectDate] = useState(()=>{
        const saved = localStorage.getItem('selectDate')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })

    useEffect(()=>{
        localStorage.setItem('selectDate',JSON.stringify(selectDate))
    },[DayData])

    const [selectday,setSelectday] = useState(()=>{
        const saved = localStorage.getItem('selectday')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })

    useEffect(()=>{
        localStorage.setItem('selectday',JSON.stringify(selectday))
        console.log(selectDate,selectday,'12-19확인ㅇㅅ')
    },[selectday])

    const [selectMonth,setSelectMonth] = useState(()=>{
        const saved = localStorage.getItem('selectMonth')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ===null ?JSON.parse(saved): new Date("2026-03-01") 
    }) 

    useEffect(()=>{
        localStorage.setItem('selectMonth',JSON.stringify(selectMonth));
    },[selectMonth]) 

    //모달 프로바이더
    const {toggle,setModalContent} = useContext(ModalContext);
    
    //찜목록 id
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
    const wishHandler = (hotel) =>{
        let wishList = JSON.parse(cookie.get('wishList') || '[]');          
        let now = Date.now();

        wishList = wishList.filter(item=>item.expires > now);

        //이미 추가된 아이디가 있으면 삭제
        for(let i=0; i<wishList.length; i++){
            if(wishList[i].id === Number(hotel)){
                wishList = wishList.filter((item)=>item.id !== Number(hotel));
                cookie.set('wishList', JSON.stringify(wishList), {expires: 30, path:'/'});
                setWish(wishList);
                return;
            }
        }
        //갯수 50개 제한
        if(wishList.length > 50){
            setModalContent(
                <>
                    <p className='icon' style={{border: '0',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        margin: '0 auto',
                        textAlign: 'center',
                        backgroundColor: '#e7e7e7'}}>
                        <i className="fa-solid fa-exclamation" style={{
                            fontSize: '21px',
                            color: '#6b6b6b',
                            lineHeight: '41px'
                        }}></i>
                    </p>
                    <p className='txt' style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#000',
                        margin: '15px 0 11px'
                    }}>찜은 50개까지 추가 가능합니다.</p>
                </>
            );
            toggle();
            return;
        }
        //30일간 보관(추가한 리스트 개별로)
        wishList.push({id: Number(hotel), expires: now + 30*24*60*60*1000});

        cookie.set('wishList', JSON.stringify(wishList), {expires: 30, path:'/'});   
        setWish(wishList);
    }

    //찜목록 id불러온후 해당 호텔정보 배열로 저장
    const [wishArray, setWishArray] = useState([]);
    //찜한호텔 별점 이미지
    const[wishStar, setWishStar] = useState([]);
    
    useEffect(()=>{
        if(wish.length === 0){
            setWishArray([]);
            return;
        }     
        let wishIdArray = [];
        wishIdArray = wish.map(item=>item.id);

        let wishArray2= [];
        wishArray2 = HotelData.filter(item=>wishIdArray.includes(item.id));
        
        setWishArray(wishArray2);

        //찜한호텔 별점
        const wishStar2 = [];
        const wishStarImg = [];

        for(let i=0; i<wishArray2.length; i++){
            wishStar2.push(wishArray2[i].score);

            wishStarImg[i] = [];
                        
            //별점 정수
            const starInt2 = Math.floor(wishStar2[i]);
            //별점 소수
            const starFloat2 = Math.floor(wishStar2[i]*10)/10 - starInt2;
            //별점 빈칸
            const starZero2 = Math.floor(5 - starInt2- starFloat2);
            
            for(let k=0; k<starInt2; k++){
                wishStarImg[i].push('/img/star-one.png');                  
            }
            if(starFloat2>0){
                wishStarImg[i].push('/img/star-half.png');                    
            }
            for(let j=0; j<starZero2; j++){
                wishStarImg[i].push('/img/star-zero.png');                    
            }
        }
        setWishStar(wishStarImg);
        console.log(wishStarImg);
        
    },[wish]);        
        //console.log(wishArray);
        // 로그인 한 후 닉네임 저장
        const [userNickName, setUserNickName] = useState(null);

        useEffect(() => {
            const saveNickName = localStorage.getItem('userNickName');
            if(saveNickName){
                setUserNickName(JSON.parse(saveNickName))
            }
        },[]);

        // 로그인
        const loginSave = (userData) => {
            setUserNickName(userData);
            localStorage.setItem('userNickName', JSON.stringify(userData));
        }

        // 로그아웃
        const logout = () => {
            setUserNickName(null);
            localStorage.removeItem('userNickName');
        }
    
    //상세페이지- 예약하기 정보
    //인원수
    const [payHead, setPayHead] = useState(1);
    //객실아이디
    const [payRoom, setPayRoom] = useState(null);
    // 도시, 나라이름 검색입력
    const [town,setTown] = useState('')
    // 정렬 번호
    const [hotelSort,setHotelSort] = useState(1)
    // 필터 된 호텔 항목
    const [myhotel,setmyhotel] = useState([])

    // 국내호텔 해외호텔 나누기 위한 변수
    const [Domestic, setDomestic] = useState(0)
        
    const countryEn = town === '대한민국' || town ===  '한국' || town ===  '한' || town ===  'gksrnr'? 'Korea' : town === '일본' || town ===  '일'? 'Japan' : town === '미국'? 'USA' : town === '중국'? 'China': town === '이탈리아' || town ===  '이테리'? 'Italy' : town === '프랑스'? 'France':null
    const cityEn = town === '속초'? 'Sokcho':town === '경주'? 'Gyeongju':town === '부산'? 'Busan':town === '강릉'? 'Gangneung':town === '여수'? 'Yeosu':town === '대전'? 'Daejeon':town === '광주'? 'Gwangju':town === '제주' || town ===  '제주도'? 'Jeju':town === '포항'? 'Pohang':town === '서울'? 'Seoul':town === '도쿄'? 'Tokyo':town === '삿포로'? 'Sapporo':town === '로스앤젤레스'? 'LosAngeles':town === '뉴욕'? 'New York':town === '괌'? 'Guam':town === '장가계'? 'Zhangjiajie':town === '상하이'? 'Shanghai':town === '로마'? 'Rome':town === '베네치아'? 'Venice':town === '파리'? 'Paris':null
    //검색 핸들러
    const serchHandler =()=>{
        const dateFilter = HotelData.filter((f)=>f.startDate>DayData[0] && f.endDate<DayData[1])
    
        let overFilter = []
        if(cityEn !== null){
            overFilter = dateFilter.filter((f)=>f.city===cityEn)
        }else if(countryEn !== null){
            overFilter = dateFilter.filter((f)=>f.country===countryEn)
        }else if(town===''){
            overFilter = dateFilter
        }
        console.log(overFilter)
        // 필터한 내용 정렬
        if(hotelSort===1){
            overFilter.sort((a,b) => a.id - b.id)
        }else if(hotelSort===2){
            overFilter.sort((a,b) => b.score - a.score)
        }else if(hotelSort===3){
            overFilter.sort((a,b) => a.score - b.score)
        }else if(hotelSort===4){
            overFilter.sort((a,b) => b.price - a.price)
        }else{
            overFilter.sort((a,b) => a.price - b.price)
        }
        setmyhotel(overFilter)
    }
    

    return(
        <ResortDateContext.Provider value={{RoomData, HotelData,DayData,setDayData,selectDate,setSelectDate,selectday,setSelectday,selectMonth,setSelectMonth,wish,wishStar,wishArray,wishHandler, payHead,setPayHead,payRoom,setPayRoom, userNumFront, setUserNumFront, userNumBack, setUserNumBack, userNickName, loginSave, logout,town,setTown,serchHandler,hotelSort,setHotelSort,myhotel,setmyhotel,cityEn,countryEn, Domestic, setDomestic}}>
            {children}
        </ResortDateContext.Provider>
    );
}