import React from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onDetail } from '../store/modules/boardSlice';

const TodaysList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const goDetail = () => {
        navigate('/hanaldetail')
        dispatch(onDetail(boardId))
    }
    return (
        <li onClick={() => goDetail()}>
            <img src={images} alt={authorAcountId} />
            <div className='loaction'>
                <SlLocationPin />
                <div className='loactionCityGu'>
                    <span>{loactionCity}</span>
                    <span>{loactionGu}</span>
                </div>
            </div>
        </li>
    );
};

export default TodaysList;