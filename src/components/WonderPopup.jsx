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

const WonderPopupContainer = styled.div`
.popup {
    position: absolute;
    width: 90%;
    height: 90%;
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
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9); 
    z-index: 200;
    display: none;
    .alert{
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-50%, -50%);
        width: 78vw;
        height: 15vh;
        background: lightgray;
        border-radius: 10vw;
        text-align: center;
        display: none;
        transition: 0.5s;
        span {
            display: block;
            margin-top: 3vh;
            color: black;
            font-size: 5.5vw;
            font-weight: 600;
        }
        p {
            margin-top: 2vh;
            display: flex;
            justify-content: space-around;
            button {
                padding: 2vw;
                box-sizing: border-box;
                width: 28vw;
                height: 4vh;
                border: none;
                border-radius: 1vw;
                background: tan;
                font-size: 4vw;
                font-weight: 600;
                &:first-child{
                    background: orangered;
                }
            }
        }
    }
    }
    .request {
        width: 90%;
        margin: 2vh auto;
        padding: 4vw;
        height: 14.5vh;
        box-sizing: border-box;
        background: rgb(80, 80, 80);
        font-size: 4.5vw;
        text-align: right;
        border-radius: 1.5vw;

        .who {
            display: flex;
            text-align: left;
            align-items: center;
            padding-bottom: 1vh;
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
            margin-bottom: 1vh;
        }
    }

    .answer {
        overflow: auto;
        width: 90%;
        margin: auto;

        height: 64vh;

        .noAnswer{

        input {
            display: none;
        }

        .upload {
            overflow: hidden;
            background: white;
            width: 80vw;
            margin: 3vh auto;
            margin-top: 0;
            height: 80vw;

            .uploadIcon {
                width: 50%;
                height: 50%;
                transform: translate(50%, 50%);

            }
        }

        .uploaded {
            overflow: hidden;
            width: 90%;
            margin: 3vh auto;
            height: 90vw;
            text-align: center;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
        }

        .p {
            display: block;
            align-items: center;
            padding: 4vw;
            box-sizing: border-box;
            height: 7vh;
            background: rgb(80, 80, 80);
            border-radius: 2vw;
            margin-bottom: 1vh;
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
                line-height: 4vh;
                width: 65%;
                display: flex;
                justify-content: space-between;

                span {
                    text-align: center;
                    width: 23vw;
                    height: 4vh;
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


        .answered{
            background: rgb(80, 80, 80);
            width: 100%;
            padding: 4vw;
            box-sizing: border-box;
            
            font-size: 4.5vw;
            text-align: right;
            border-radius: 1.5vw;
            
        .who {
            display: flex;
            text-align: left;
            align-items: center;
            padding-bottom: 1vh;
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
            margin-bottom: 1vh;
        }
        .answerImage {
            margin: 2vh 0;
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
            height: 6vh;
            margin-bottom: 1vh;
            align-items: center;
                .left {
                    margin-right: auto;
                    svg {
                        margin-right: 2vw;
                        font-size: 5.5vw;
                       
                        &.weatherIcon {
                            color : orangered;
                        }
                        
                    }

                }
                .right {
                    display: flex;


                }
            }
            .yesterday {
                .right {
                    line-height: 3.5vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span {
                        text-align: center;
                        width: 23vw;
                        height: 4vh;
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
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: rgb(80, 80, 80);
        

        button {
            width: 40vw;
            height: 5vh;
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


const WonderPopup = ({ currentItem, offWonder, setOnWonderPop }) => {
    const acount = useSelector(state => state.acount.acount)
    const { wonderBoardId, date, time, dateTime, authorAcountId, loactionCity, loactionGu, images, answers } = currentItem
    const wonderNickname = acount.find((item) => item.acountId === authorAcountId).nickname;
    const wonderTreeLevel = acount.find((item) => item.acountId === authorAcountId).treeLevel;
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch()



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
    const ownerCheck = useSelector(state => state.board.isOwner)
    const [bg, setBg] = useState(false)
    const onDel = () => {
        setBg(true)
    }
    const wonderDel = useSelector(state => state.board.wonderDel)
    useEffect(() => {
        if (wonderDel) {
            setBg(false)
            setOnWonderPop(false)
            dispatch(offWonderDel())
        }
    }, [wonderDel])

    const onAnswer = useSelector(state => state.board.onAnswer)
    useEffect(() => {
        if (onAnswer) {
            setBg(false)
            setOnWonderPop(false)
            dispatch(offOnAnswer())
        }
    }, [onAnswer])


    // answer
    const answerToday = new Date();
    const answerYear = answerToday.getFullYear();
    const answerMonth = String(answerToday.getMonth() + 1).padStart(2, '0');
    const answerDay = String(answerToday.getDate()).padStart(2, '0');
    const answerSeconds = String(answerToday.getSeconds()).padStart(2, '0');
    const answerHours = ('0' + answerToday.getHours()).slice(-2);
    const answerMinutes = ('0' + answerToday.getMinutes()).slice(-2);

    const answerAcount = localStorage.getItem('localCurrentAcount')
    const answerAuthorAcountId = JSON.parse(answerAcount).acountId
    const answerDate = `${answerYear}-${answerMonth}-${answerDay}`;
    const answerTime = `${answerHours}시 ${answerMinutes}분`;
    const answerWeather = weatherIcon
    const answerYesterday = yesterday
    const answerAuthorLike = authorLike

    const onUploadAnswer = () => {
        if (!selectedImage) return
        dispatch(addAnswer({ selectedImage, answerAuthorAcountId, answerDate, answerTime, answerWeather, answerYesterday, answerAuthorLike, wonderBoardId }))
    }
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
    }
    return (
        <WonderPopupContainer>
            <div className="popup"
            ><div className="wonderPopBg" style={{ display: bg ? 'block' : 'none' }}>
                    <div className="alert" style={{ display: bg ? 'block' : 'none' }}
                    >
                        <span>
                            궁금해요를 삭제합니다
                        </span>
                        <p>
                            <button onClick={() => dispatch(onWonderDel(wonderBoardId))}>삭제</button>
                            <button onClick={() => setBg(false)}>취소</button>
                        </p>
                    </div>
                </div>
                <div className="inner">
                    <div className="request">
                        <p className='who'><img src={`./images/trees/tree${wonderTreeLevel}.png`} alt={wonderNickname} />{wonderNickname} {ownerCheck ? <span className='delete' onClick={() => onDel()}><TiDeleteOutline /></span> : null} </p>
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
                                    {authorLike} 만큼 좋아요
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
            </div>

        </WonderPopupContainer >
    );
};

export default WonderPopup;