import React, { useEffect, useState } from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineLike, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { onLike } from '../store/modules/boardSlice';
import { useNavigate } from 'react-router-dom';

const HanalDetailItem = ({ item }) => {
    const { boardId, date, images, time, authorLike, authorAcountId, loactionCity, loactionGu, yesterday, likesAcountId, temperatures, comment } = item
    const acount = useSelector(state => state.acount.acount)
    const authorAcount = acount.find(item => item.acountId === authorAcountId)
    const authorNickname = authorAcount.nickname
    const authorTree = authorAcount.treeLevel
    const [lastestComment, setLastestComment] = useState({})
    const [likeCount, setLikeCount] = useState(0)
    const [isLike, setIsLike] = useState(false)
    const changeLike = useSelector(state => state.board)
    const localOnLogin = localStorage.getItem('localOnLogin')
    let currentAcountId, localCurrentAcount
    if (localOnLogin === 'true') {
        localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
        currentAcountId = localCurrentAcount.acountId
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        likesAcountId.includes(currentAcountId) ? setIsLike(true) : setIsLike(false)
    }, [changeLike])
    
    useEffect(() => {
        setLikeCount(likesAcountId.length)
    }, [likesAcountId])

    useEffect(() => {
        if (comment && comment.length > 0) {
            const lastComment = comment.slice().sort((a, b) => b.dateTime - a.dateTime)[0]
            setLastestComment(lastComment)
        } else {
            setLastestComment({})
        }
    }, [comment]);
    let commentNickname, commentTree
    const { commentId, commentAuthorId, text, dateTime } = lastestComment
    const commentAcount = acount.find(item => item.acountId === commentAuthorId)
    if (commentAcount) {
        commentTree = commentAcount.treeLevel
        commentNickname = commentAcount.nickname
    }
    const clickLike = () => {
        console.log(1);
        if (localOnLogin === 'true') {
            const likeInfo = { boardId, currentAcountId }
            dispatch(onLike(likeInfo))
        }
    }
    const goComment = () => {
        navigate(`/hanaldetail/${boardId}`)
    }
    return (
        <>
            <div className="profile">
                <p className='who'>
                    <img src={`./images/trees/tree${authorTree}.png`} alt={authorNickname} />{authorNickname}
                    {/* {ownerCheck ? <span className='delete' onClick={() => onDel()}>
                    <TiDeleteOutline /></span> : null} */}
                </p>
            </div>
            <div className="sky">
                <img src={images} alt="skyimage" />
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
                {
                    isLike
                        ? <><AiFillHeart style={{ color: 'orangered' }} onClick={() => clickLike()} />
                            {likeCount} 명이 좋아해요</>
                        : <><AiOutlineHeart style={{ color: 'orangered' }} onClick={() => clickLike()} />
                            {likeCount} 명이 좋아해요</>
                }
            </div>
            <div className="commentBox">
                {
                    Object.keys(lastestComment).length === 0
                        ?
                        <>
                            <div className='comment'>댓글이 없습니다</div>
                            <span className='more' onClick={() => goComment()}>
                                댓글 작성
                            </span>
                        </>
                        :
                        <>
                            <div className='comment'>
                                <img src={`./images/trees/tree${commentTree}.png`} alt='' />
                                <div className="nickname">{commentNickname}</div>
                                <div className="text">{text}</div>
                            </div>
                            <span className='more' onClick={() => goComment()}>
                                댓글 모두 보기
                            </span>
                        </>
                }
            </div>
        </>
    );
};

export default HanalDetailItem;