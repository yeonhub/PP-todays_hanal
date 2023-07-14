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
            margin-top: 10%;
            width: 100%;
            height: 35vh;
            overflow: hidden;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        .nickname {
            font-size: 10vw;
            margin-bottom: 5vh;
        }
        .userInfo{
            width: 100%;
            text-align: right;

            div {
                font-size: 6vw;
                height: 7vh;
                align-items: center;
                padding: 8vw;
                margin-bottom: 2vh;
                background: rgb(50,50,50);
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                span {
                    margin: 0 2vw;
                }
                &:last-child {
                    margin-bottom: 5vh;
                }
            }
        }
        button {
        display: block;
        margin: auto;
        width: 80%;
        height: 5vh;
        margin-bottom: 2vh;
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
    const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    const { nickname, treeType, treeLevel, acountId } = localCurrentAcount
    const board = useSelector(state => state.board.board)

    const myBoards = board.filter(item => item.authorAcountId === acountId)
    const myBoardCount = myBoards.length
    const myLikedCount = myBoards.reduce((total, item) => total + item.likesAcountId.length, 0);

    const onLogOut = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <InfoContainer>
            <div className="info">
                <div className="imgbox">
                    <img src={`./images/trees/tree${treeLevel}.png`} alt="" />
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
        </InfoContainer>
    );
};

export default Info;