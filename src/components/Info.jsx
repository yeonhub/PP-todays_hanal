import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { logout } from '../store/modules/acountSlice';
const InfoContainer = styled.div`
.info {
    width: 100%;
    padding: 10%;
    box-sizing: border-box;
    text-align: center;

    .imgbox {
        margin: 10% auto;
        width: 25dvh;
        height: 25dvh;
        overflow: hidden;
        border: 3px dotted gray;
        border-radius: 50%;
        padding: 2dvh;
        box-sizing: border-box;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .nickname {
        font-size: 8vw;
        margin-bottom: 5dvh;
    }

    .userInfo {
        width: 100%;
        text-align: right;

        div {
            font-size: 4vw;
            height: 6dvh;
            align-items: center;
            padding: 5vw;
            margin-bottom: 2dvh;
            background: rgb(50, 50, 50);
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;

            span {
                margin: 0 2vw;
            }

            &:last-child {
                margin-bottom: 5dvh;
            }
        }
    }

    button {
        display: block;
        margin: auto;
        width: 80%;
        height: 5dvh;
        margin-bottom: 2dvh;
        font-size: 4vw;
        border-radius: 5vw;
        background: lightgray;
        font-weight: 700;
    }
}
`;

const Info = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onLogin = useSelector(state => state.acount.onLogin)

    if (onLogin === false) {
        navigate('/login')
        return null
    }
    const currentAcount = useSelector(state => state.acount.currentAcount)
    const { nickname, treeType, treeLevel, acountId } = currentAcount
    const board = useSelector(state => state.board.board)

    const myBoards = board.filter(item => item.authorAcountId === acountId)
    const myBoardCount = myBoards.length
    const myLikedCount = myBoards.reduce((total, item) => total + item.likesAcountId.length, 0);

    const onLogOut = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <InfoContainer >
            <div className="info">
                <div className="imgbox">
                    <img src={`./images/trees/tree${treeLevel}.png`} alt="userIcon" />
                </div>
                <h3 className='nickname'>{nickname}</h3>
                <div className="userInfo">
                    <div className="tree">
                        <span>{treeType}</span>
                        <span>Lv.{treeLevel}</span>
                    </div>
                    <div className="boardCount">
                        <span>내 하날</span>
                        <span>{myBoardCount} 개</span>
                    </div>
                    <div className="likesCount">
                        <span>받은 좋아요</span>
                        <span>{myLikedCount} 개</span>
                    </div>
                </div>
                <button onClick={onLogOut}>로그아웃</button>
            </div>
        </InfoContainer >
    );
};

export default Info;