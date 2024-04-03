import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import NearbyList from '../components/NearbyList';
import { useDispatch, useSelector } from 'react-redux';
import { BiCurrentLocation } from 'react-icons/bi'
import { MdOutlineNearMe } from 'react-icons/md'
import { setNearLocation } from '../store/modules/boardSlice';

import getCurrentTime from '../utils/dateUtils'
import getCurrentLocation from '../utils/locationUtils'
import getCurrentWeather from '../utils/weatherUtils'

import useLocationHook from "../hooks/nowLocation";


const NearbyContainer = styled.div`
.nearby {
    width: 100%;
    height: 93dvh;
    margin-bottom: 7dvh;

    .nearlyList {
        width: 100%;
        .nearlyTitle {
            display: flex;
            margin: 1.5vw;

            svg {
                font-size: 6vw;
                margin-right: 2vw;
            }

            h3 {
                font-size: 5vw;
            }

            span {
                margin-left: auto;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                position: relative;
                overflow: hidden;
                width: 33vw;
                height: 33vw;
                margin-right: 0.5vw;
                margin-bottom: 0.5vw;

                &:nth-child(3n) {
                    margin: 0;
                }

                img {
                    width: 33vw;
                    height: 33vw;
                }
            }
        }
    }

    .weather {
        width: 100%;
        height: 10dvh;
        background-repeat: no-repeat;
        background-position: 0 70%;
        background-size: cover;
        display: flex;
        align-items: end;

        span {
            margin: 3vw;
            margin-left: auto;
            font-size: 8vw;
        }
    }

    .location {
        width: 100%;
        box-sizing: border-box;
        height: 6dvh;
        padding: 1vw;
        font-size: 5.5vw;

        p {
            display: flex;
            align-items: center;
            padding: 2vw;

            span {
                margin-left: auto;
            }


            svg {
                margin-left: 2vw;
                font-size: 7vw;

            }
        }
    }
}

.selectList {
    text-align: right;
    margin-bottom: 2dvh;

    select {
        border-radius: 2vw;
        border: none;
        background: lightgray;
        padding: 1vw;
        box-sizing: border-box;
        width: 27vw;
        font-size: 4vw;
        margin: 1vw;
        outline: none;
        margin-right: 3vw;

    }
}

`

const Nearby = () => {
    useLocationHook()
    const dispatch = useDispatch()

    // utils
    const { location, area } = getCurrentLocation();
    const { nowWeather } = getCurrentWeather();

    useEffect(() => {
        setNearCity(location.nowLocationCity)
        setNearGu(location.nowLocationGu)
        setSelectedSido(location.nowLocationCity)
        setSelectedGugun(location.nowLocationGu)
    }, [location])

    const [nearCity, setNearCity] = useState(location.nowLocationCity)
    const [nearGu, setNearGu] = useState(location.nowLocationGu)

    const board = useSelector(state => state.board.board)

    const [nearList, setNearList] = useState(board)

    const [selectedSido, setSelectedSido] = useState('');
    const [selectedGugun, setSelectedGugun] = useState('');

    useEffect(() => {
        const locationCity = nearCity
        const locationGu = nearGu
        const nearLocation = { locationCity, locationGu }
        dispatch(setNearLocation(nearLocation))
    }, [nearCity])

    // utils
    // 현재 날짜 사용시
    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    // const day = String(currentDate.getDate()).padStart(2, '0');
    // const formattedDate2 = `${year}-${month}-${day}`;
    // const formattedDate3 = `${month}월 ${day}일`
    const { currentToday, currentYear, currentMonth, currentDay, currentSeconds, currentHours, currentMinutes } = getCurrentTime();
    const formattedDate3 = `${currentMonth}월 ${currentDay}일`

    useEffect(() => {
        let filteredList = board.slice();
        // if (nearCity === '시/도 선택' && nearGu === '구/군') {
        //     setNearList(filteredList.sort((a, b) => b.dateTime - a.dateTime));
        // } else {
            if (nearCity !== '시/도 선택') {
                filteredList = filteredList.filter(item => item.loactionCity === nearCity);
            }
            if (nearGu !== '구/군') {
                filteredList = filteredList.filter(item => item.loactionGu === nearGu);
            }
            setNearList(filteredList.sort((a, b) => b.dateTime - a.dateTime));
        // }
    }, [selectedSido, selectedGugun])

    const handleSidoChange = (e) => {
        const selectedSido = e.target.value;
        setSelectedSido(selectedSido);
        setNearCity(selectedSido)
        setSelectedGugun('');
        setNearGu('구/군')
    };

    const handleGugunChange = (e) => {
        const selectedGugun = e.target.value;
        setSelectedGugun(selectedGugun);
        setNearGu(selectedGugun)
    };

    // utils
    // const weather = nowWeather.nowWeather
    // const temperatures = nowWeather.nowTem
    const { weather, temperatures } = getCurrentWeather();

    return (
        <NearbyContainer>
            <div className="nearby">
                <div className="weather" style={{ backgroundImage: `url(images/weather/${weather}.gif)` }}>
                    <span>{temperatures}°</span>
                </div>
                <div className="location">
                    <p>
                        <span>
                            {nearCity} - {nearGu}
                        </span>
                        <BiCurrentLocation onClick={() => resetLocation()} />
                    </p>
                </div>

                <div className='selectList'>
                    <select name="sido" value={selectedSido} onChange={handleSidoChange}>
                        {area[0].map((sido, index) => (
                            <option key={index} value={sido}>{sido}</option>
                        ))}
                    </select>

                    <select name="gugun" value={selectedGugun} onChange={handleGugunChange} disabled={selectedSido === ''}>
                        <option value="">구/군 선택</option>
                        {selectedSido !== '' &&
                            area[area[0].indexOf(selectedSido)].map((gugun, index) => (
                                <option key={index} value={gugun}>{gugun}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="nearlyList">
                    <div className="nearlyTitle">
                        <MdOutlineNearMe />
                        <h3>내 주변</h3>
                        <span>- {formattedDate3}</span>
                    </div>
                    <ul>
                        {
                            nearList.map(item => <NearbyList item={item} key={item.boardId} />)
                        }
                    </ul>
                </div>
            </div>

        </NearbyContainer >
    );
};

export default Nearby;