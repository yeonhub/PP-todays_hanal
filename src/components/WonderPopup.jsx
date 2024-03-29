import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { SlLocationPin } from 'react-icons/sl'
import { HiCalendarDays } from 'react-icons/hi2'
import { AiOutlineDislike, AiOutlineLike, AiOutlineDelete } from 'react-icons/ai'
import { BsSun, BsCloud, BsCloudRainHeavy, BsCloudSnow } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, offOnAnswer, offWonderDel, onWonderDel } from '../store/modules/boardSlice';
import { useNavigate } from 'react-router-dom';
// import useLocationHook from '../hooks/nowLocation';
// import useConvertHook from '../hooks/nowConvert';
// import useWeatherHook from '../hooks/nowWeather';
import getCurrentTime from '../utils/dateUtils'

const WonderPopupContainer = styled.div`
.popup {
    position: fixed;
    width: 90%;
    height: 90dvh;
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

        .alert {
            position: absolute;
            top: 40%;
            left: 45%;
            transform: translate(-50%, -50%);
            width: 78vw;
            height: 15dvh;
            background: lightgray;
            border-radius: 5vw;
            text-align: center;
            display: none;
            transition: 0.5s;

            span {
                display: block;
                margin-top: 3dvh;
                color: black;
                font-size: 5.5vw;
                font-weight: 600;
            }

            p {
                margin-top: 2dvh;
                display: flex;
                justify-content: space-around;

                button {
                    padding: 2vw;
                    box-sizing: border-box;
                    width: 28vw;
                    height: 4dvh;
                    border: none;
                    border-radius: 1vw;
                    background: tan;
                    font-size: 4vw;
                    font-weight: 600;

                    &:first-child {
                        background: orange;
                    }
                }
            }
        }
    }

    .inner {
        margin-top: 2dvh;
        height: 88dvh;

        .request {
            width: 90%;
            margin: 2dvh auto;
            margin-top: 0;
            padding: 2dvh;
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
                font-size: 2.5dvh;
                border-bottom: 1px solid gray;
                box-sizing: border-box;
                height: 4.5dvh;
                margin-bottom: 1dvh;

                img {
                    width: 4dvh;
                    height: 4dvh;
                    margin-right: 2vw;
                }

                .delete {
                    margin-left: auto;
                    color: tan;
                    font-size: 6.5vw;
                }
            }

            .where,
            .when {
                height: 2dvh;
                margin-bottom: 1dvh;
                font-size: 2dvh;
            }
        }

        .answer {
            width: 90%;
            margin: auto;
            height: 64dvh;

            .noAnswer {
                height: 62dvh;

                input {
                    display: none;
                }

                .upload {
                    overflow: hidden;
                    background: white;
                    width: 37dvh;
                    margin: 1dvh auto;
                    margin-top: 0;
                    height: 37dvh;

                    .uploadIcon {
                        width: 50%;
                        height: 50%;
                        transform: translate(50%, 50%);

                    }
                }

                .uploaded {
                    overflow: hidden;
                    margin: 1dvh auto;
                    text-align: center;
                    margin-top: 0;

                    img {
                        max-width: 100%;
                        max-height: 37dvh;
                        object-fit: contain;
                    }
                }

                .p {
                    display: block;
                    align-items: center;
                    padding: 4vw;
                    box-sizing: border-box;
                    height: 7dvh;
                    background: rgb(80, 80, 80);
                    border-radius: 2vw;
                    margin-bottom: 1dvh;
                }

                .location {
                    color: lightgray;
                    display: flex;

                    svg {
                        margin-right: 4vw;
                    }

                    span {
                        font-size: 4vw;

                        &:last-child {
                            margin-left: auto;
                        }
                    }
                }

                .weather {
                    display: flex;
                    font-size: 5vw;
                    background-position: 0 70%;
                    justify-content: space-around;
                    font-size: 7vw;

                    svg {
                        &.on {
                            color: orangered;
                            transform: scale(1.2);
                        }
                    }
                }

                .yesterday {

                    font-size: 4vw;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    div {
                        line-height: 4dvh;
                        width: 65%;
                        display: flex;
                        justify-content: space-between;

                        span {
                            text-align: center;
                            width: 23vw;
                            height: 4dvh;
                            border-radius: 2vw;
                            background: gray;
                            color: black;
                            font-weight: 700;

                            &.hot {
                                background: tomato;
                            }

                            &.cold {
                                background: skyblue;
                            }
                        }
                    }
                }

                .likes {
                    display: flex;
                    justify-content: space-between;

                    svg {
                        font-size: 5vw;
                    }

                    input {
                        width: 80%;
                        display: block;
                        box-sizing: border-box;
                    }
                }
            }

            .answered {
                background: rgb(80, 80, 80);
                width: 100%;
                padding: 1.5dvh;
                box-sizing: border-box;
                font-size: 4.5vw;
                text-align: right;
                border-radius: 1.5vw;
                height: 62dvh;
                overflow: auto;

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

                    .delete {
                        margin-left: auto;
                        color: tan;
                        font-size: 6.5vw;
                    }
                }

                .who,
                .where {
                    margin-bottom: 1dvh;
                }

                .answerImage {
                    margin: 2dvh 0;
                    width: 100%;

                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                .p {
                    display: flex;
                    border-bottom: 1px solid gray;
                    padding: 3vw;
                    box-sizing: border-box;
                    height: 6dvh;
                    margin-bottom: 1dvh;
                    align-items: center;

                    .left {
                        margin-right: auto;

                        svg {
                            margin-right: 4vw;
                            font-size: 5.5vw;

                            &.weatherIcon {
                                color: orangered;
                            }

                        }

                    }

                    .right {
                        display: flex;


                    }
                }

                .yesterday {
                    .right {
                        line-height: 3.5dvh;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        span {
                            text-align: center;
                            width: 23vw;
                            height: 4dvh;
                            border-radius: 2vw;
                            background: gray;
                            color: black;
                            font-weight: 700;
                        }

                        .hot {
                            background: tomato;
                        }

                        .cold {
                            background: skyblue;
                        }
                    }
                }
            }

        }

        .btn {
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

                &.goList {
                    width: 70vw;
                }
            }
        }
    }

    .wonderAnswerPopBg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 200;

        .alert {
            position: absolute;
            top: 40%;
            left: 45%;
            transform: translate(-50%, -50%);
            width: 78vw;
            height: 15dvh;
            background: lightgray;
            border-radius: 5vw;
            text-align: center;

            transition: 0.5s;

            span {
                display: block;
                margin-top: 3dvh;
                color: black;
                font-size: 5.5vw;
                font-weight: 600;
            }

            p {
                margin-top: 2dvh;
                display: flex;
                justify-content: space-around;

                button {
                    padding: 2vw;
                    box-sizing: border-box;
                    width: 28vw;
                    height: 4dvh;
                    border: none;
                    border-radius: 1vw;
                    background: tan;
                    font-size: 4vw;
                    font-weight: 600;
                }
            }
        }
    }
}

`


const WonderPopup = ({ currentItem, offWonder, setOnWonderPop }) => {

    // 데이터 + 계산 ?
    const location = useSelector(state => state.acount.location);
    const city = location.nowLocationCity
    const gu = location.nowLocationGu
    const acount = useSelector(state => state.acount.acount)
    const { wonderBoardId, date, time, dateTime, authorAcountId, loactionCity, loactionGu, images, answers } = currentItem

    // 계산
    const wonderNickname = acount.find((item) => item.acountId === authorAcountId).nickname;
    const wonderTreeLevel = acount.find((item) => item.acountId === authorAcountId).treeLevel;

    // 파일 업로드 액션
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // 위치 정보 액션
    const [sameLocation, setSameLocation] = useState(false)
    const [alertBg, setAlertBg] = useState(false)
    useEffect(() => {
        if (gu === loactionGu) {
            setSameLocation(true)
        } else {
            setSameLocation(false)
        }
    }, [location])

    // 사진 업로드 액션
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    // 현재 날씨 액션
    // yesterday
    const [yesterday, setYesterday] = useState(true)
    const onYesterday = (tem) => {
        const todayTem = tem === 'hot' ? true : false
        setYesterday(todayTem)
    }
    // seekbar
    const [authorLike, setAuthorLike] = useState(50);
    const handleChange = (e) => {
        setAuthorLike(e.target.value);
    };
    const [weatherIcon, setWeatherIcon] = useState('BsSun')
    const onWeather = weather => {
        setWeatherIcon(weather)
    }

    // 게시글 삭제 액션
    const ownerCheck = useSelector(state => state.board.isOwner)
    const [bg, setBg] = useState(false)
    const onDel = () => {
        setBg(true)
    }
    const sureDel = () => {
        setBg(false)
        setOnWonderPop(false)
        dispatch(offWonderDel())
        navigate('/wonder')
        dispatch(onWonderDel(wonderBoardId))
    }
    const wonderDel = useSelector(state => state.board.wonderDel)
    useEffect(() => {
        if (wonderDel) {
            setBg(false)
            setOnWonderPop(false)
            dispatch(offWonderDel())
        }
    }, [wonderDel])

    // 게시글 답변 추가 액션
    const onAnswer = useSelector(state => state.board.onAnswer)
    useEffect(() => {
        if (onAnswer) {
            setBg(false)
            setOnWonderPop(false)
            dispatch(offOnAnswer())
        }
    }, [onAnswer])

    // answer
    // 날짜 계산
    const answerToday = new Date();
    const answerYear = answerToday.getFullYear();
    const answerMonth = String(answerToday.getMonth() + 1).padStart(2, '0');
    const answerDay = String(answerToday.getDate()).padStart(2, '0');
    const answerSeconds = String(answerToday.getSeconds()).padStart(2, '0');
    const answerHours = ('0' + answerToday.getHours()).slice(-2);
    const answerMinutes = ('0' + answerToday.getMinutes()).slice(-2);

    // 답변 날짜 계산
    // const answerAcount = localStorage.getItem('localCurrentAcount')
    // const answerAuthorAcountId = JSON.parse(answerAcount).acountId
    const currentAcount = useSelector(state => state.acount.currentAcount)
    const answerAuthorAcountId = currentAcount.acountId
    const answerDate = `${answerYear}-${answerMonth}-${answerDay}`;
    const answerTime = `${answerHours}시 ${answerMinutes}분`;
    const answerWeather = weatherIcon
    const answerYesterday = yesterday
    const answerAuthorLike = authorLike

    // 답변 추가 액션
    const onUploadAnswer = () => {
        if (!sameLocation) {
            setAlertBg(true)
            return
        }
        if (!selectedImage || loactionCity !== city) {
            return
        }
        dispatch(addAnswer({ selectedImage, answerAuthorAcountId, answerDate, answerTime, answerWeather, answerYesterday, answerAuthorLike, wonderBoardId }))
    }

    // 게시글 데이터
    const wonderBoard = useSelector(state => state.board.wonderBoard)
    let currentAnswers
    if (answers) {
        currentAnswers = wonderBoard.find(item => item.wonderBoardId === wonderBoardId).answers
    }
    let answerShowAuthorAcountId, answerShowAuthorLike, answerShowDate, answerShowTime, answerShowWeather, answerShowYesterday, selectedShowImage, answerShowNickname, answerShowTreeLevel
    if (currentAnswers) {
        const { selectedImage, answerAuthorAcountId, answerDate, answerTime, answerWeather, answerYesterday, answerAuthorLike } = currentAnswers[0]
        answerShowAuthorAcountId = answerAuthorAcountId
        answerShowAuthorLike = answerAuthorLike
        answerShowDate = answerDate
        answerShowTime = answerTime
        answerShowYesterday = answerYesterday
        selectedShowImage = selectedImage
        answerShowWeather = answerWeather
        answerShowNickname = acount.find((item) => item.acountId === answerAuthorAcountId).nickname;
        answerShowTreeLevel = acount.find((item) => item.acountId === answerAuthorAcountId).treeLevel;
        console.log(currentItem);
    }
    return (
        <WonderPopupContainer>
            <div className="popup">
                <div className="wonderPopBg" style={{ display: bg ? 'block' : 'none' }}>
                    <div className="alert" style={{ display: bg ? 'block' : 'none' }}>
                        <span>
                            궁금해요를 삭제합니다
                        </span>
                        <p>
                            <button onClick={() => sureDel()}>삭제</button>
                            <button onClick={() => setBg(false)}>취소</button>
                        </p>
                    </div>
                </div>
                <div className="inner">
                    <div className="request">
                        <p className='who'>
                            <img src={`./images/trees/tree${wonderTreeLevel}.png`} alt={wonderNickname} />
                            {wonderNickname}
                            {ownerCheck && !currentAnswers
                                ?
                                <span className='delete' onClick={() => onDel()}><TiDeleteOutline /></span>
                                : null
                            }
                        </p>
                        <p className='where'><SlLocationPin /> {loactionCity} - {loactionGu}</p>
                        <p className='when'>{date} | {time}</p>
                    </div>
                    <div className="answer">
                        <div className="answered" style={{ display: answers === undefined ? 'none' : 'block' }} >
                            <p className='who'>
                                <img src={`./images/trees/tree${answerShowTreeLevel}.png`} alt={answerShowNickname} />{answerShowNickname}
                                {/* {
                                    ownerCheck ? <span className='delete' onClick={() => onDel()}><TiDeleteOutline /></span> : null
                                } */}
                            </p>
                            <p className='when'>{answerShowDate} | {answerShowTime}</p>
                            <div className="answerImage">
                                <img src={selectedShowImage} alt="answerImage" />
                            </div>
                            <div className="p yesterday">
                                <div className="left">
                                    <HiCalendarDays />어제보다
                                </div>
                                <div className='right'>
                                    <span className='hot' style={{ display: answerShowYesterday ? 'block' : 'none' }}>더워요</span><span className='cold' style={{ display: answerShowYesterday ? 'none' : 'block' }}>추워요</span>
                                </div>
                            </div>
                            <div className="p likes">
                                <div className='left'>
                                    {
                                        answerShowWeather === 'BsSun' ? <BsSun className='weatherIcon' /> :
                                            answerShowWeather === 'BsCloud' ? <BsCloud className='weatherIcon' /> :
                                                answerShowWeather === 'BsCloudRainHeavy' ? <BsCloudRainHeavy className='weatherIcon' /> :
                                                    <BsCloudSnow className='weatherIcon' />
                                    }
                                    날씨
                                </div>
                                <div className='right'>
                                    {answerShowAuthorLike} 만큼 좋아요
                                </div>
                            </div>

                        </div>
                        <div className="noAnswer" style={{ display: answers === undefined ? 'block' : 'none' }} >
                            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} />
                            {
                                selectedImage ? (
                                    <div className="uploaded">
                                        <img src={selectedImage} alt="image" onClick={handleButtonClick} />
                                    </div>
                                )
                                    :
                                    <div className="upload">
                                        <img className="uploadIcon" src="./images/icons/upload.png" alt="uploadbutton" onClick={handleButtonClick} />
                                    </div>
                            }
                            <div className="p weather">
                                <BsSun className={weatherIcon === 'BsSun' ? 'on' : ''} onClick={() => onWeather('BsSun')} />
                                <BsCloud className={weatherIcon === 'BsCloud' ? 'on' : ''} onClick={() => onWeather('BsCloud')} />
                                <BsCloudRainHeavy className={weatherIcon === 'BsCloudRainHeavy' ? 'on' : ''} onClick={() => onWeather('BsCloudRainHeavy')} />
                                <BsCloudSnow className={weatherIcon === 'BsCloudSnow' ? 'on' : ''} onClick={() => onWeather('BsCloudSnow')} />
                            </div>
                            <div className="p yesterday"><HiCalendarDays />어제보다 <div><span className={yesterday ? 'hot' : ''} onClick={() => onYesterday('hot')}>더워요</span><span className={!yesterday ? 'cold' : ''} onClick={() => onYesterday('cold')}>추워요</span></div></div>
                            <div className="p likes">
                                <AiOutlineDislike />
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={authorLike}
                                    onChange={handleChange}
                                />
                                <AiOutlineLike />
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        {
                            answers ?
                                <button className='goList' onClick={() => offWonder()}>목록으로</button>
                                :
                                <>
                                    <button onClick={() => onUploadAnswer()}>알려줄게요</button>
                                    <button onClick={() => offWonder()}>나만알래요</button>
                                </>
                        }
                    </div>
                </div>
                <div className="wonderAnswerPopBg" style={{ display: alertBg ? 'block' : 'none' }}>
                    <div className="alert" style={{ display: alertBg ? 'block' : 'none' }}>
                        <span>
                            현재 위치와 궁금해요의 <br /> 위치가 같아야 가능합니다.
                        </span>
                        <p>
                            <button onClick={() => setAlertBg(false)}>확인</button>
                        </p>
                    </div>
                </div>
            </div>
        </WonderPopupContainer >
    );
};

export default WonderPopup;