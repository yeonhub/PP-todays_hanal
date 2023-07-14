import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { HiCalendarDays } from 'react-icons/hi2'


const MyhanalContainer = styled.div`
.myhanal {
    width: 100%;
    height: 100%;
    position: relative;
    input {
        display: none;
    }
    .upload {
        overflow: hidden;
        background: white;
        width: 90%;
        margin: 3vh auto;
        height: 90vw;
        
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
            object-fit: contain ;
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
            background: rgb(50,50,50);
            border-radius: 2vw;
            margin-bottom: 1vh;
        }
        .location {
            color: lightgray;
            display: flex;
            svg {
                margin-right: 4vw;
            }
            span{
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
                    color : black;
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
        width: 100%;
        height: 7vh;
        border: none;
        background: lightgray;
        margin-top: 5vw;
        bottom: 10%;
        border-radius: 2vw;
        font-size: 6vw;
        font-weight: 700;
        margin-bottom: 5vh;
    }
}

`;


const Myhanal = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
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
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const time = `${hours}시 ${minutes}분`;

    // yesterday
    const [yesterday, setYesterday] = useState(true)
    const onYesterday = (tem) => {
        const todayTem = tem === 'hot' ? true : false
        setYesterday(todayTem)
    }

    // weather
    // const weather = `맑음`
    const temperatures = `15`

    // seekbar
    const [like, setLikes] = useState(50);
    const handleChange = (e) => {
        setLikes(e.target.value);
    };
    console.log(like);

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
                    <div className="p location"><SlLocationPin/><span>{city} - {gu}</span> <span>{time}</span></div>
                    <div className="p weather">{temperatures}°</div>
                    <div className="p yesterday"><HiCalendarDays/>어제보다 <div><span className={yesterday ? 'hot' : ''} onClick={() => onYesterday('hot')}>더워요</span><span className={!yesterday ? 'cold' : ''} onClick={() => onYesterday('cold')}>추워요</span></div></div>
                    <div className="p lieks">
                        <AiOutlineDislike />
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={like}
                            onChange={handleChange}
                        />
                        <AiOutlineLike />
                    </div>
                    <button className="uploadButton">업로드</button>
                </div>
            </div>
        </MyhanalContainer>
    );

}


export default Myhanal;
