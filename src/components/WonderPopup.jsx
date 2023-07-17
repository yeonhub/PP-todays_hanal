import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { SlLocationPin } from 'react-icons/sl'
import { HiCalendarDays } from 'react-icons/hi2'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { BsSun, BsCloud, BsCloudRainHeavy, BsCloudSnow } from 'react-icons/bs'
import { useSelector } from 'react-redux';

const WonderPopupContainer=styled.div`
.popup {
    position: absolute;
    width: 90%;
    height: 90%;
    background: gray;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 46.5%;
    border-radius: 2vw;
    overflow: hidden;

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
        }

        .who,
        .where {
            margin-bottom: 1vh;
        }
    }

    .answer {
        width: 90%;
        margin: auto;

        input {
            display: none;
        }

        .upload {
            overflow: hidden;
            background: white;
            width: 80vw;
            margin: 3vh auto;
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

            /* transition: 0.3s; */
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

        .lieks {
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
        }
    }
}

`


const WonderPopup = ({ currentItem, offWonder }) => {
    const acount = useSelector(state => state.acount.acount)
    const { wonderBoardId, date, time, dateTime, authorAcountId, loactionCity, loactionGu, images } = currentItem
    const wonderNickname = acount.find((item) => item.acountId === authorAcountId).nickname;
    const treeLevel = acount.find((item) => item.acountId === authorAcountId).treeLevel;
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
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

    const [weatherIcon, setWeatherIcon] = useState('sun')

    const onWeather = weather => {
        setWeatherIcon(weather)
    }

    return (
        <WonderPopupContainer>
            <div className="popup">
                <div className="request">
                    <p className='who'><img src={`./images/trees/tree${treeLevel}.png`} alt={wonderNickname} />{wonderNickname}</p>
                    <p className='where'><SlLocationPin /> {loactionCity} - {loactionGu}</p>
                    <p className='when'>{date} | {time}</p>
                </div>
                <div className="answer">
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
                        <BsSun className={weatherIcon === 'sun' ? 'on' : ''} onClick={() => onWeather('sun')} />
                        <BsCloud className={weatherIcon === 'cloud' ? 'on' : ''} onClick={() => onWeather('cloud')} />
                        <BsCloudRainHeavy className={weatherIcon === 'rain' ? 'on' : ''} onClick={() => onWeather('rain')} />
                        <BsCloudSnow className={weatherIcon === 'snow' ? 'on' : ''} onClick={() => onWeather('snow')} />
                    </div>
                    <div className="p yesterday"><HiCalendarDays />어제보다 <div><span className={yesterday ? 'hot' : ''} onClick={() => onYesterday('hot')}>더워요</span><span className={!yesterday ? 'cold' : ''} onClick={() => onYesterday('cold')}>추워요</span></div></div>
                    <div className="p lieks">
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
                <div className="btn">
                    <button>알려줄게요</button>
                    <button onClick={() => offWonder()}>나만알래요</button>
                </div>
            </div>
        </WonderPopupContainer>
    );
};

export default WonderPopup;