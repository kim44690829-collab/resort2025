import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResortDateContext } from '../Api/ResortDate';
import 'leaflet/dist/leaflet.css';

export default function Main(){    
    const {RoomData, HotelData} = useContext(ResortDateContext);

    return(
        <>
            <Link to='/detail/1'>ID: 1링크</Link><br /><br />
            <Link to='/detail/2'>ID: 2링크</Link><br /><br />
            <Link to='/detail/3'>ID: 3링크</Link><br /><br />
            <Link to='/detail/4'>ID: 4링크</Link>
        </>
    )
}