import React, { useEffect } from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const HanalDetailItem = ({ item }) => {

    const { date, images, time, authorLike, authorAcountId, loactionCity, loactionGu, yesterday, likesAcountId, temperatures, comment } = item

    const acount = useSelector(state => state.acount.acount)
    const authorAcount = acount.find(item => item.acountId === authorAcountId)
    const { nickname, treeLevel } = authorAcount

    let likeNumber = likesAcountId.length
    useEffect(() => {
        likeNumber = likesAcountId.length
    }, [likesAcountId])

    // let showComment, commentAuthorId, commentAuthorTree, commentAuthorNickname, text, dateTime

    // useEffect(() => {
    //     if (comment.length > 0) {
    //         showComment = comment.reduce((prev, current) => prev.dateTime > current.dateTime ? prev : current);
    //         commentAuthorId = comment.commentAuthorId;
    //         foundAcount = acount.find(item => item.acountId === commentAuthorId);
    //         commentAuthorNickname = foundAcount ? foundAcount.nickname : '';
    //         commentAuthorTree = foundAcount ? foundAcount.treeLevel : '';
    //         text = comment.text
    //         dateTime = comment.dateTime
    //     }
    // }, [comment]);


    return (
        <>
            <div className="profile">
                {/* <p className='who'><img src={`./images/trees/tree${wonderTreeLevel}.png`} alt={wonderNickname} />{wonderNickname} {ownerCheck ? <span className='delete' onClick={() => onDel()}><TiDeleteOutline /></span> : null} </p> */}
                <p className='who'><img src={`./images/trees/tree${treeLevel}.png`} />{nickname}</p>
            </div>
            <div className="sky">
                <img src={images} alt="" />
            </div>
            <div className="whereBox">
                <div className="where">
                    <SlLocationPin />{loactionCity} - {loactionGu}
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
                    {temperatures}°
                </span>
            </div>
            <div className="like">
                {/* <AiOutlineHeart />  */}
                <AiFillHeart style={{ color: 'orangered' }} />
                {likeNumber} 명이 좋아해요
            </div>
            {/* <div className="comment">
                <p><img src={`./images/trees/tree${commentAuthorTree}.png`} alt='' />
                    <div className="nickname">{commentAuthorNickname}</div><div className="text">{text}</div></p>
                <span className='more'>
                    댓글 모두 보기
                </span>
            </div> */}
        </>
    );
};

export default HanalDetailItem;