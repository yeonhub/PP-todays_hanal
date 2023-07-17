import React, { useState } from 'react';
import { SlLocationPin } from 'react-icons/sl'

const WonderList = ({ item, onWonder }) => {
    const { authorAcountId, loactionCity, loactionGu, images } = item

    return (
        <li onClick={() => { onWonder(item) }}>
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