import React from 'react';
import { SlLocationPin } from 'react-icons/sl'

const TodaysList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    return (
        <li>
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