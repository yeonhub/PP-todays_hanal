import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { BsPatchQuestion } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import WonderList from '../components/WonderList';
import { onBg, ownerCheck } from '../store/modules/boardSlice';
import WonderPopup from '../components/WonderPopup';
import WonderUpload from '../components/WonderUpload';
import { useNavigate } from 'react-router-dom';


const WonderContainer = styled.div`
.wonder {
    width: 100%;
    .wonderBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9); 
    z-index: 200;
    display: block;
    }
  
    .wonderUpload {
        width: 90%;
        position: fixed;
        left: 50%;
        bottom: 8%;
        transform: translateX(-50%);
        z-index: 100;
        button {
            width: 100%;
        height: 4.5vh;
        border: none;
        background: lightgray;
        margin-top: 5vw;
        bottom: 10%;
        border-radius: 2vw;
        font-size: 4.5vw;
        font-weight: 700;
        }
    }
    .myWnderBtn {
        width: 90%;
        margin: 2vh auto;
        display: flex;
        align-items: center;
        padding: 4vw;
        box-sizing: border-box;
        height: 7vh;
        background: rgb(50,50,50);
        border-radius: 2vw;
        margin-bottom: 1vh;
        justify-content: space-around;
        
        span {
            font-weight: 700;
            border: none;
            font-size: 4vw;
            background: tan;
            box-sizing: border-box;
            padding: 2vw 6vw;
            border-radius: 3vw;
            color: black;
        }
    }
    .location {
            width: 100%;
            box-sizing: border-box;
            height: 6vh;
            padding: 1vw;
            font-size: 5.5vw;
            
            p {
                text-align: right;
                margin-left: auto;
                padding: 2vw;
                
                span {
                    display: inline-block;
                }
            
                    
                        svg {
                            margin-left: 2vw;
                        font-size: 7vw;
                    
                        }
            }
    }
    .selectList {
        text-align: right;
        margin-bottom: 2vh;
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
    .wonderList {
        width: 100%;
        .wonderTitle {
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
                background: rgb(40,40,40);
                img {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40vw;
                    height: 40vw;
                }
                .loaction {
                    display: flex;
                    position: absolute;
                    z-index: 10;
                    bottom: 5%;
                    left: 3%;
                    font-size: 3vw;
                    .loactionCityGu {
                        span {
                            margin-left: 1vw;
                            display: block;
                            margin-bottom: 1vw;
                        }
                    }
                }
            }
        }
    }
    .btnBlock {
        display: block;
        width: 100%;
        height: 6vh;
    }
}

`

const Wonder = () => {
    const wonderBoard = useSelector(state => state.board.wonderBoard)
    const dispatch = useDispatch()

    // 현재 날짜 사용시
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate2 = `${year}-${month}-${day}`;
    const formattedDate3 = `${month}월 ${day}일`

    const [nearCity, setNearCity] = useState('인천광역시')
    const [nearGu, setNearGu] = useState('남동구')

    const [wonderList, setWonderList] = useState(wonderBoard)


    const [selectedSido, setSelectedSido] = useState('');
    const [selectedGugun, setSelectedGugun] = useState('');

    useEffect(() => {
        let filteredList = wonderBoard;
        if (nearCity != '시/도 선택') {
            filteredList = filteredList.filter(item => item.loactionCity === nearCity).sort((a, b) => b.dateTime - a.dateTime);
        }
        if (nearGu !== '구/군') {
            filteredList = filteredList.filter(item => item.loactionGu === nearGu);
        }
        setWonderList(filteredList.sort((a, b) => b.dateTime - a.dateTime))
    }, [selectedSido, selectedGugun, wonderBoard])

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

    // answer
    const [onWonderPop, setOnWonderPop] = useState(false)
    const [onWonderUpload, setOnWonderUpload] = useState(false)
    const [currentItem, setCurrentItem] = useState({})

    const onWonder = item => {
        setOnWonderPop(true)
        dispatch(ownerCheck(item.authorAcountId))
        dispatch(onBg(true))
        setCurrentItem(item)
    }
    const uploadWonder = item => {
        if (selectedSido && selectedGugun) {
            setOnWonderUpload(true)
            dispatch(onBg(true))
            setCurrentItem(item)
        } else {
            alert('궁금한 지역을 선택해 주세요!')
        }
    }

    const offWonder = () => {
        setOnWonderUpload(false)
        setOnWonderPop(false)
        dispatch(onBg(false))
    }

    let localOnLogin = localStorage.getItem('localOnLogin')
    const onLogin = useSelector(state => state.acount.onLogin)
    const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    const { nickname, treeType, treeLevel, acountId } = localCurrentAcount
    useEffect(() => {
        localOnLogin = localStorage.getItem('localOnLogin')
    }, [onLogin])

    const navigator = useNavigate()

    const myWonders = wonderBoard.filter(item => item.authorAcountId === acountId)
    const countMyWonders = myWonders.length
    const myAnswers = wonderBoard.filter(item => item.answers && item.answers.some(answer => answer.answerAuthorAcountId === acountId));
    const countMyAnswers = myAnswers.length

    const onMyWonders = () => {
        setWonderList(myWonders)
    }
    const onMyAnswers = () => {
        setWonderList(myAnswers)
    }

    return (
        <WonderContainer>
            <div className="wonder">
                {
                    onWonderPop && <div className="wonderBg"><WonderPopup currentItem={currentItem} offWonder={offWonder} setOnWonderPop={setOnWonderPop} /></div>
                }
                {
                    onWonderUpload && <div className="wonderBg"><WonderUpload currentItem={currentItem} offWonder={offWonder} setOnWonderUpload={setOnWonderUpload} selectedSido={selectedSido} selectedGugun={selectedGugun} /></div>
                }
                <div className="myWnderBtn">
                    <span onClick={() => onMyWonders()}>내 질문 : {countMyWonders}</span>
                    <span onClick={() => onMyAnswers()}>내 답변 : {countMyAnswers}</span>
                </div>
                <div className="location">
                    <p>
                        <span>
                            {nearCity} - {nearGu}
                        </span>
                        <BiCurrentLocation />
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
                <div className="wonderList">
                    <div className="wonderTitle">
                        <BsPatchQuestion />
                        <h3>오늘 궁금해요</h3>
                        <span>- {formattedDate3}</span>
                    </div>
                    <ul>
                        {
                            wonderList.map(item => <WonderList item={item} key={item.wonderBoardId} onWonder={onWonder} />)
                        }
                    </ul>
                </div>
                <div className="wonderUpload">
                    {
                        localOnLogin === 'true' ? <button onClick={() => uploadWonder()}>궁금해요</button> : <button onClick={() => navigator('/login')}>궁금해요</button>
                    }
                </div>
                <div className="btnBlock"></div>
            </div>
        </WonderContainer>
    );
};

export default Wonder;