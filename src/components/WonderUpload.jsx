import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { SlLocationPin } from 'react-icons/sl'
import { addWonder} from '../store/modules/boardSlice';

const WonderUploadContainer = styled.div`
.popup {
    position: absolute;
    width: 90%;
    height: 50%;
    background: gray;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 46.5%;
    border-radius: 2vw;
    .wonderPopBg {
            position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.9); 
    z-index: 200;
    display: none;

    }
    .request {
        width: 90%;
        margin: 2dvh auto;
        padding: 4vw;
        height: 14.5dvh;
        box-sizing: border-box;
        background: rgb(80, 80, 80);
        font-size: 4.5vw;
        text-align: right;
        border-radius: 1.5vw;

        .who {
            display: flex;
            text-align: left;
            align-items: center;
            padding-bottom: 1dvh;
            font-size: 5.5vw;
            border-bottom: 1px solid gray;

            img {
                width: 7vw;
                height: 7vw;
                margin-right: 2vw;
            }
        }
        .who,
        .where {
            margin-bottom: 1dvh;
        }
    }
    .uploaded {
            overflow: hidden;
            width: 90%;
            height: 24dvh;
            margin:auto;
            text-align: center;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                transform: scale(1.6);
            }
    }
    .btn {
        /* position: absolute; */
        width: 100%;
        height: 7.5dvh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: rgb(80, 80, 80);
        border-bottom-left-radius: 2vw;
        border-bottom-right-radius: 2vw;
        

        button {
            width: 40vw;
            height: 5dvh;
            background: lightgray;
            border: none;
            border-radius: 2vw;
            font-size: 3.5vw;
            font-weight: 700;
            &.goList{
                width: 70vw;
            }
        }
    }
}
`

const WonderUpload = ({ offWonder, setOnWonderUpload, selectedGugun, selectedSido }) => {
    const dispatch = useDispatch()
    const acount = useSelector(state => state.acount.acount)
    const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    const { nickname, treeType, treeLevel, acountId } = localCurrentAcount
    const wonderNickname = acount.find((item) => item.acountId === acountId).nickname;
    const wonderTreeLevel = acount.find((item) => item.acountId === acountId).treeLevel;

    const uploadToday = new Date();
    const uploadYear = uploadToday.getFullYear();
    const uploadMonth = String(uploadToday.getMonth() + 1).padStart(2, '0');
    const uploadDay = String(uploadToday.getDate()).padStart(2, '0');
    const uploadSeconds = String(uploadToday.getSeconds()).padStart(2, '0');
    const uploadHours = ('0' + uploadToday.getHours()).slice(-2);
    const uploadMinutes = ('0' + uploadToday.getMinutes()).slice(-2);
    const uploadDate = `${uploadYear}-${uploadMonth}-${uploadDay}`;
    const uploadTime = `${uploadHours}시 ${uploadMinutes}분`;
    const uploadDateTime = uploadYear + uploadMonth + uploadDay + uploadHours + uploadMinutes + uploadSeconds

    const uploadItem = { uploadDate, uploadTime, uploadDateTime, acountId, selectedGugun, selectedSido }


    const onUploadAnswer = () => {
        dispatch(addWonder(uploadItem))
        offWonder()
    }

    return (
        <WonderUploadContainer>
            <div className="popup">
                <div className="inner">
                    <div className="request">
                        <p className='who'><img src={`./images/trees/tree${wonderTreeLevel}.png`} alt={wonderNickname} />{wonderNickname}</p>
                        <p className='where'><SlLocationPin /> {selectedSido} - {selectedGugun}</p>
                        <p className='when'>{uploadDate} | {uploadTime}</p>
                    </div>
                    <div className="uploaded">
                        <img src='./images/icons/wonder.png' alt="image" />
                    </div>
                    <div className="btn">
                        <button onClick={() => onUploadAnswer()}>궁금해요</button>
                        <button onClick={() => offWonder()}>목록으로</button>
                    </div>
                </div>
            </div>
        </WonderUploadContainer>
    );
};

export default WonderUpload;