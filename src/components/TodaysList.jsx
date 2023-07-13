import React from 'react';

const TodaysList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    return (
        <li><img src={images} alt={authorAcountId} /></li>
    );
};

export default TodaysList;