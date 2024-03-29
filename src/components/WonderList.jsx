import React, { useEffect, useState } from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WonderList = ({ item, onWonder, acountId }) => {
    const { authorAcountId, loactionCity, loactionGu, images } = item
    const navigate = useNavigate()
    // let localOnLogin = localStorage.getItem('localOnLogin')
    const onLogin = useSelector(state => state.acount.onLogin)

    // useEffect(() => {
    //     localOnLogin = localStorage.getItem('localOnLogin')
    // }, [onLogin])

    return (
        <li onClick={() => { onLogin === true ? onWonder(item) : navigate('/login') }}>
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

export default WonderList;