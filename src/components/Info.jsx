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
        img {
            margin-top: 10%;
        }
        h3 {
            margin-top: 10px;
            font-size: 12vw;
        }
        p {
            display: flex;
            justify-content: space-around;
            span{
                font-size: 8vw;

            }
        }
    }
`;

const Info = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    const { nickname, treeType, treeLevel } = localCurrentAcount
    console.log(localCurrentAcount);

    const onLogOut = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <InfoContainer>
            <div className="info">
                <img src="./images/trees/tree.png" alt="" />
                <h3>{nickname}</h3>
                <p>
                    <span>{treeType}</span>
                    <span>레벨.{treeLevel}</span>
                </p>
                <button onClick={onLogOut}>로그아웃</button>
            </div>
        </InfoContainer>
    );
};

export default Info;