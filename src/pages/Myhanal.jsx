import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { BiCurrentLocation } from 'react-icons/bi'
import { HiCalendarDays } from 'react-icons/hi2'
import { useDispatch, useSelector } from "react-redux";
import { addBoard, onUploaded } from "../store/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import useLocationHook from "../hooks/nowLocation";
import useWeatherHook from "../hooks/nowWeather";
import useConvertHook from "../hooks/nowConvert";


const MyhanalContainer = styled.div` 
.myhanal {
    width: 100%;
    height: 83.5dvh;
    position: relative;
    margin-top: 3dvh;
    margin-bottom: 13dvh;

    input {
        display: none;
    }

    .upload {
        overflow: hidden;
        background: white;
        width: 40dvh;
        margin: 0 auto;
        margin-bottom: 3dvh;
        height: 40dvh;

        .uploadIcon {
            width: 50%;
            height: 50%;
            transform: translate(50%, 50%);

        }
    }

    .uploaded {
        overflow: hidden;
        width: 90%;
        margin: 3dvh auto;
        text-align: center;

        img {
            max-width: 100%;
            max-height: 45dvh;
            object-fit: contain;
        }
    }

    .imageInfo {
        width: 90%;
        margin: auto;

        .p {
            display: block;
            align-items: center;
            padding: 4vw;
            box-sizing: border-box;
            height: 7dvh;
            background: rgb(50, 50, 50);
            border-radius: 2vw;
            margin-bottom: 1dvh;
        }

        .location {
            color: lightgray;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            svg {
                margin-right: 4vw;

            }

            .locationBtn {
                margin-right: 0;
                margin-left: 4vw;
                font-size: 6vw;
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
            justify-content: flex-end;
            background: none;
            background-repeat: no-repeat;
            background-position: 0 30%;
            background-size: cover;
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
                    width: 25vw;
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

    .uploadButton {
        position: fixed;
        width: 90%;
        height: 5dvh;
        border: none;
        background: lightgray;
        bottom: 8dvh;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2vw;
        font-size: 4.5vw;
        font-weight: 700;
    }

    .myhanalPopBg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 200;

        /* display: none; */
        .alert {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 78vw;
            height: 15dvh;
            background: lightgray;
            border-radius: 5vw;
            text-align: center;
            /* display: none; */
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
`;


const Myhanal = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onUpload = useSelector(state => state.board.onUpload);
    const boards = useSelector(state => state.board.board);
    const location = useSelector(state => state.acount.location);
    const nowWeather = useSelector(state => state.acount.weather);
    const v1 = location.nowLatitude
    const v2 = location.nowLongitude
    const city = location.nowLocationCity
    const gu = location.nowLocationGu
    const callLocationHook = useLocationHook()
    const callConvertHook = useConvertHook(v1, v2)
    const callWeatherHook = useWeatherHook()
    const [locationDone, setLocationDone] = useState(true)
    const [bg, setBg] = useState(false)



    useEffect(() => {
        if (gu === '조회 실패') {
            setLocationDone(false)
        } else {
            setLocationDone(true)
        }
    }, [location])


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

    // time
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    // const date = `${year}-${month}-${day}`;

    // test date
    // test date
    const date = '2023-08-01'
    // test date
    // test date

    const seconds = String(today.getSeconds()).padStart(2, '0');
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const time = `${hours}시 ${minutes}분`;
    // const dateTime = year + month + day + hours + minutes + seconds
    const dateTime = '20230801' + hours + minutes + seconds

    // yesterday
    const [yesterday, setYesterday] = useState(true)
    const onYesterday = (tem) => {
        const todayTem = tem === 'hot' ? true : false
        setYesterday(todayTem)
    }

    // weather
    const weather = nowWeather.nowWeather
    const temperatures = nowWeather.nowTem

    // seekbar
    const [authorLike, setAuthorLike] = useState(50);
    const handleChange = (e) => {
        setAuthorLike(e.target.value);
    };
    // authorAcountId
    const localCurrentAcount = localStorage.getItem('localCurrentAcount')
    const authorAcountId = JSON.parse(localCurrentAcount).acountId

    const onUploadBoard = () => {
        if (!locationDone) {
            setBg(true)
            return
        }
        if (!selectedImage || gu === '조회 실패') {
            return
        }
        dispatch(addBoard({ selectedImage, authorAcountId, city, gu, date, time, dateTime, weather, temperatures, yesterday, authorLike }))
    }

    useEffect(() => {
        if (onUpload) navigate('/');
        dispatch(onUploaded())
    }, [onUpload]);


    return (
        <MyhanalContainer>
            <div className="myhanal">
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

                <div className="imageInfo">
                    <div className="p location"><SlLocationPin /><span>{city} - {gu}</span><BiCurrentLocation className="locationBtn" /> <span>{time}</span></div>
                    <div className="p weather" style={{ backgroundImage: `url(images/weather/${weather}.gif)` }}>
                        {temperatures}°
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
                    <button className="uploadButton" onClick={() => onUploadBoard()}>업로드</button>
                </div>
                <div className="myhanalPopBg" style={{ display: bg ? 'block' : 'none' }}>
                    <div className="alert" style={{ display: bg ? 'block' : 'none' }}>
                        <span>
                            현재 위치 정보를 <br /> 불러올 수 없습니다.
                        </span>
                        <p>
                            <button onClick={() => setBg(false)}>확인</button>
                        </p>
                    </div>
                </div>
            </div>
        </MyhanalContainer>
    );

}


export default Myhanal;
