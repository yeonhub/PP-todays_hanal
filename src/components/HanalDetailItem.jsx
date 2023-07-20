import React from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const HanalDetailItem = () => {
    const date = '7월 10일'
    const time = '07시 30분'
    const authorLike = 60
    const city = '인천광역시'
    const gu = '남동구'
    const yesterday = true
    const likeNumber = 30

    return (
        <>
            <div className="profile">
                {/* <p className='who'><img src={`./images/trees/tree${wonderTreeLevel}.png`} alt={wonderNickname} />{wonderNickname} {ownerCheck ? <span className='delete' onClick={() => onDel()}><TiDeleteOutline /></span> : null} </p> */}
                <p className='who'><img src={`./images/trees/tree1.png`} alt='' />하입보이</p>
            </div>
            <div className="sky">
                <img src="./images/sky/sky4.jpg" alt="" />
            </div>
            <div className="whereBox">
                <div className="where">
                    <SlLocationPin />{city} - {gu}
                </div>
            </div>
            <div className="info">
                <div className="authorLike"><AiOutlineLike />{authorLike}</div>
                <div className="yesterday">{yesterday ? '더워요' : '추워요'}</div>
                <div className="when">
                    {date} | {time}
                </div>
            </div>
            <div className="weather">
                <span>
                    30°
                </span>
            </div>
            <div className="like">
                {/* <AiOutlineHeart />  */}
                <AiFillHeart style={{ color: 'orangered' }} />
                {likeNumber} 명이 좋아해요
            </div>
            <div className="comment">
                <p><img src={`./images/trees/tree1.png`} alt='' />
                <div className="nickname">하입보이</div><div className="text">하늘이 넘오넘오 예뻐용</div></p>
                <span className='more'>
                    댓글 모두 보기
                </span>
            </div>

        </>
    );
};

export default HanalDetailItem;