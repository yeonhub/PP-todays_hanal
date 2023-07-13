import React from 'react';

const TodaysTopList = ({ item }) => {
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = item
    return (
        <li>
            <img src={images} alt={authorAcountId} />
            <p>
                <span>{loactionCity} - {loactionGu}</span>
            </p>
        </li>
    );
};

export default TodaysTopList;