import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onDetail, setDetail, setNearLocation } from '../store/modules/boardSlice';


const NearbyList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const goDetail = () => {
        dispatch(setDetail('nearly'))
        dispatch(onDetail(boardId))
        navigate('/hanaldetail')
    }
    return (
        <li onClick={()=>goDetail()}>
            <img src={images} alt={authorAcountId} />
        </li>
    );
};

export default NearbyList;