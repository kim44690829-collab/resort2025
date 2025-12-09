import '../Page/SignUp3.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp3(){
    return(
        <div className='signup3_container'>
            <h1>필수 정보 입력</h1>
            <h2>가입을 위해 필수 정보를 입력해주세요</h2>
            <form className='agreeForm'>
                <div className='agree2'>
                    <label htmlFor="">이메일*</label>
                    <input type="email" id='' name='' />
                </div>
                <div className='agree2'>
                    <label htmlFor="">비밀번호*</label>
                    <input type="password" id='' name='' />
                </div>
                <div className='agree2'>
                    <label htmlFor="">비밀번호 확인*</label>
                    <input type="password" id='' name='' />
                </div>
            </form>
        </div>
    )
}