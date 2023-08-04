import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onDetail, setDetail } from '../store/modules/boardSlice';

const TodaysTopList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const goDetail = () => {
        dispatch(setDetail('toplist'))
        dispatch(onDetail(boardId))
        navigate('/hanaldetail')
    }
    return (
        <li onClick={() => goDetail()}>
            <img src={images} alt={authorAcountId} />
            <p>
                <span>{loactionCity} - {loactionGu}</span>
            </p>
        </li>
    );
};

export default TodaysTopList;