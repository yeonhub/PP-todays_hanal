import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import NearbyList from '../components/NearbyList';
import { useSelector } from 'react-redux';
import { BiCurrentLocation } from 'react-icons/bi'
import useLocationHook from '../hooks/nowLocation';


const NearbyContainer = styled.div`
.nearby {
    width: 100%;
    height: 93dvh;
    margin-bottom: 7dvh;
    .nearlyList{
    ul {
            display: flex;
            flex-wrap : wrap;
            li {
                position: relative;
                overflow: hidden;
                width: 33vw;
                height: 33vw;
                margin-right: 0.5vw;
                margin-bottom: 0.5vw;
                &:nth-child(3n){
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
    const location = useSelector(state => state.acount.location);
    const nowWeather = useSelector(state => state.acount.weather);
    const callLocationHook = useLocationHook()
    const resetLocation = () => {
        callLocationHook
        setNearCity(location.nowLocationCity)
        setNearGu(location.nowLocationGu)
        setSelectedSido(location.nowLocationCity)
        setSelectedGugun(location.nowLocationGu)
    }
    const [nearCity, setNearCity] = useState(location.nowLocationCity)
    const [nearGu, setNearGu] = useState(location.nowLocationGu)
    const [allSelect, setAllSelect] = useState(true)

    const board = useSelector(state => state.board.board)

    const [nearList, setNearList] = useState(board)

    const [selectedSido, setSelectedSido] = useState('');
    const [selectedGugun, setSelectedGugun] = useState('');

    useEffect(() => {
        let filteredList = board;
        if (nearCity != '시/도 선택') {
            filteredList = filteredList.filter(item => item.loactionCity === nearCity);
        }
        if (nearGu !== '구/군') {
            filteredList = filteredList.filter(item => item.loactionGu === nearGu);
        }
        setNearList(filteredList.sort((a, b) => b.dateTime - a.dateTime));
    }, [selectedSido, selectedGugun])

    const area = [
        ["시/도 선택", "서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        ["구/군 선택", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
        ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
        ["대덕구", "동구", "서구", "유성구", "중구"],
        ["광산구", "남구", "동구", "북구", "서구"],
        ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
        ["남구", "동구", "북구", "중구", "울주군"],
        ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"],
        ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "여주군", "연천군"],
        ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"],
        ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"],
        ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"],
        ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
        ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
        ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"],
        ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
        ["서귀포시", "제주시", "남제주군", "북제주군"]
    ];



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
    const weather = nowWeather.nowWeather
    const temperatures = nowWeather.nowTem


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