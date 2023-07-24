import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { HiCalendarDays } from 'react-icons/hi2'
import { useDispatch, useSelector } from "react-redux";
import { addBoard, onUploaded } from "../store/modules/boardSlice";
import { useNavigate } from "react-router-dom";


const MyhanalContainer=styled.div` 
.myhanal {
    width: 100%;
    height: 84vh;
    position: relative;
    margin-top: 3vh;
    margin-bottom: 13vh;

    input {
        display: none;
    }

    .upload {
        overflow: hidden;
        background: white;
        width: 40vh;
        margin: 0 auto;
        margin-bottom: 3vh;
        height: 40vh;

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
        text-align: center;

        img {
            max-width: 100%;
            max-height: 100%;
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
            height: 7vh;
            background: rgb(50, 50, 50);
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
            justify-content: flex-end;
            background: none;
            background-image: url('images/weather/rain.gif');
            background-repeat: no-repeat;
            background-position: 0 70%;
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
                    width: 25vw;
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

    .uploadButton {
        position: fixed;
        width: 90%;
        height: 4.5vh;
        border: none;
        background: lightgray;
        bottom: 7.5vh;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2vw;
        font-size: 4.5vw;
        font-weight: 700;
    }
}

`;


const Myhanal = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onUpload = useSelector(state => state.board.onUpload);

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



    // location
    const city = `인천광역시`
    const gu = `연수구`

    // time
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const date = `${year}-${month}-${day}`;
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const time = `${hours}시 ${minutes}분`;
    const dateTime = year + month + day + hours + minutes + seconds

    // yesterday
    const [yesterday, setYesterday] = useState(true)
    const onYesterday = (tem) => {
        const todayTem = tem === 'hot' ? true : false
        setYesterday(todayTem)
    }

    // weather
    const weather = `rain`
    const temperatures = `15`

    // seekbar
    const [authorLike, setAuthorLike] = useState(50);
    const handleChange = (e) => {
        setAuthorLike(e.target.value);
    };
    // authorAcountId
    const localCurrentAcount = localStorage.getItem('localCurrentAcount')
    const authorAcountId = JSON.parse(localCurrentAcount).acountId

    const onUploadBoard = () => {
        if (!selectedImage) return
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
                    <div className="p location"><SlLocationPin /><span>{city} - {gu}</span> <span>{time}</span></div>
                    <div className="p weather">{temperatures}°</div>
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
            </div>
        </MyhanalContainer>
    );

}


export default Myhanal;
