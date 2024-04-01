import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import HanalCommentItem from './HanalCommentItem';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiCommentAdd } from 'react-icons/bi'
import { addComment, onDetail } from '../store/modules/boardSlice';

const CommentContainer = styled.div`
position: relative;

.back {
    width: 100%;
    height: 7dvh;
    background: rgb(50, 50, 50);
    display: flex;
    align-items: center;

    svg {
        margin-left: auto;
        margin-right: 4vw;
        font-size: 7vw;
    }
}

.comments {
    width: 100%;
    height: 79dvh;

    ul {
        padding: 3vw;
        height: 79dvh;
        overflow: auto;

        li {
            border-bottom: 0.3vw solid rgb(50, 50, 50);
            margin-bottom: 1dvh;
            padding-bottom: 1dvh;
            display: flex;
            align-items: center;

            &:last-child {
                border: none;
            }

            img {
                width: 9vw;
                height: 9vw;
                border: 1px dotted gray;
                border-radius: 50%;
                box-sizing: border-box;
                padding: 0.5vw;
                display: inline-block;
                margin-right: 4vw;
            }

            .nickname {
                display: inline-block;
                font-weight: 600;
                font-size: 4vw;
            }
        }

        .text {
            width: 55vw;
            margin-left: 10vw;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
    }
}

.addComment {
    position: fixed;
    bottom: 7dvh;
    left: 0;
    width: 100%;
    height: 7dvh;
    background: rgb(50, 50, 50);
    display: flex;
    align-items: center;

    img {
        width: 9vw;
        height: 9vw;
        border: 1px dotted gray;
        border-radius: 50%;
        box-sizing: border-box;
        padding: 0.5vw;
        margin: 0 4vw;
    }

    form {
        width: 100%;
        display: flex;
        align-items: center;

        input {
            width: 78%;
            height: 4.5dvh;
            margin-right: 3vw;
            background: lightgray;
            outline: none;
            border-radius: 2vw;
            border: none;
            font-size: 4.5vw;
            padding-left: 2vw;
            box-sizing: border-box;
        }

        button {
            background: none;
            border: none;

            svg {
                color: white;
                font-size: 8vw;
            }
        }
    }

    .loginBtn {
        margin: auto;
        border-radius: 2vw;
        width: 40vw;
        height: 4.5dvh;
        font-size: 4vw;
        background: lightgray;
        border: none;
        font-weight: 600;
    }
}
`

const HanalComment = () => {
    const { boardID } = useParams()
    const board = useSelector(state => state.board.board)
    const currentBoard = board.find(item => item.boardId === Number(boardID))
    const currentBoardId = currentBoard.boardId
    const currentComment = currentBoard.comment
    // const localOnLogin = localStorage.getItem('localOnLogin')
    // let localCurrentAcount, nickname, treeType, treeLevel, acountId
    // if (localOnLogin === 'true') {
    //     localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    //     ({ nickname, treeType, treeLevel, acountId } = localCurrentAcount)
    // }
    let nickname, treeType, treeLevel, acountId;
    const onLogin = useSelector(state => state.acount.onLogin);
    const currentAcount = useSelector(state => state.acount.currentAcount);
    ({ nickname, treeType, treeLevel, acountId } = currentAcount);


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const commentToday = new Date();
    const commentYear = commentToday.getFullYear();
    const commentMonth = String(commentToday.getMonth() + 1).padStart(2, '0');
    const commentDay = String(commentToday.getDate()).padStart(2, '0');
    const commentSeconds = String(commentToday.getSeconds()).padStart(2, '0');
    const commentHours = ('0' + commentToday.getHours()).slice(-2);
    const commentMinutes = ('0' + commentToday.getMinutes()).slice(-2);
    const commentDateTime = commentYear + commentMonth + commentDay + commentHours + commentMinutes + commentSeconds
    const goDetail = () => {
        navigate('/hanaldetail')
        dispatch(onDetail(currentBoardId))
    }
    const [text, setText] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        if (!text.trim()) return;
        setText('')
        const comment = { acountId, text, commentDateTime, currentBoardId }
        dispatch(addComment(comment))
    }
    const changeInput = e => {
        const text = e.target.value
        setText(text)
    }


    return (
        <CommentContainer>
            <div className="back" onClick={() => goDetail()}><AiOutlineCloseCircle /></div>
            <div className="comments">
                <ul>
                    {
                        currentComment
                            ? currentComment.map(item => <HanalCommentItem item={item} key={item.commentId} />)
                            : <></>
                    }
                </ul>
            </div>
            <div className="addComment">
                {
                    onLogin
                        ? <>
                            <img src={`../images/trees/tree${treeLevel}.png`} alt="userIcon" />
                            <form onSubmit={onSubmit}>
                                <input type="text" value={text} onChange={changeInput} />
                                <button className='formBtn'><BiCommentAdd /></button>
                            </form>
                        </>
                        :
                        <>
                            <button className='loginBtn' onClick={() => navigate('/login')}>로그인하기</button>
                        </>
                }
            </div>
        </CommentContainer>
    );
};

export default HanalComment;