import './Detail.css';
import { useState } from 'react';
import { useContext } from 'react';
import { ResortData } from '../Api/ResortDate';

export default function Detail(){
    const {hotelData} = useContext(ResortData);

    return(
        <section className="detail-wrap">
           <ul className="detail-img">
                <li>
                    <img src="/bg1.webp" alt="" />
                </li>
                <li>
                    <img src="/bg2.webp" alt="" />
                </li>
                <li>
                    <img src="/bg3.webp" alt="" />
                </li>
                <li>
                    <img src="/bg4.webp" alt="" />
                </li>
                <li>
                    <img src="/bg5.webp" alt="" />
                </li>
           </ul>
        </section>
    )
}