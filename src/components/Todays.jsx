import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import TodaysTopList from './TodaysTopList';
import TodaysList from './TodaysList';
import { FaRankingStar } from 'react-icons/fa6'
import { MdOutlineToday } from 'react-icons/md'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offJoin } from '../store/modules/acountSlice';

const TodaysContainer = styled.div`
.howtouse {
    position: absolute;
    width: 100%;
    height: 100dvh;
    z-index: 10000;

    .swiper-button-prev,
    .swiper-button-next {
        color: tan;
    }

    .logo {
        position: absolute;
        width: 80vw;
        z-index: 1000;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        top: 10%;

        img {
            width: 40vw;
            margin-bottom: 5dvh;
        }

        p {
            margin-bottom: 2dvh;
        }
    }

    .swiper-slide {
        box-sizing: border-box;
        width: 100vw;
        height: 93dvh;
        background: rgba(20, 20, 20, 0.9);

        &:nth-child(1) {
            .line {
                left: 10%;
            }
        }

        &:nth-child(2) {
            .line {
                left: 30%;
            }
        }

        &:nth-child(3) {
            .line {
                left: 50%;
            }
        }

        &:nth-child(4) {
            .line {
                left: 70%;
            }
        }

        &:nth-child(5) {
            .line {
                left: 90%;
            }
        }

        .info {
            position: absolute;
            bottom: 20dvh;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            border: 1px solid white;
            padding: 3vw;
            box-sizing: border-box;
            border-radius: 2vw;

            p {
                font-size: 4vw;
                line-height: 5.5vw;
            }

        }

        .line {
            position: absolute;
            bottom: 0;
            margin-top: 2dvh;
            height: 20dvh;
            border-left: 0.5vw solid white;
        }
    }
}

.todays {

    width: 100%;
    overflow: auto;

    .logo {
        margin: auto;
        text-align: center;
        height: 10vh;

        img {
            margin: 2vh 0;
            width: 50%;
            height: 6vh;
        }
    }

    .todaysRank {
        width: 100%;
        margin-bottom: 1vh;
        padding-bottom: 1vh;

        .rankTitle {
            display: flex;
            margin: 1.5vw;
            align-items: center;

            svg {
                font-size: 6vw;
                margin-right: 2vw;
            }

            h3 {
                font-size: 5vw;
            }
        }

        ul {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8vw;

            li {
                overflow: hidden;
                width: 33vw;
                height: 18dvh;
                position: relative;

                img {

                    width: 33vw;
                    height: 33vw;
                }

                span {
                    margin-left: 1vw;
                    font-size: 3vw;
                }

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-bottom: 6vw solid transparent;
                    border-left: 6vw solid tomato;
                }
            }
        }
    }

    .todaysList {
        width: 100%;

        .todaysTitle {
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
            margin-bottom: 7vh;

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
}
`

const Todays = () => {
    const board = useSelector(state => state.board.board)
    const onJoin = useSelector(state => state.acount.onJoin)
    const dispatch = useDispatch()

    // 현재 날짜 사용시
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate2 = `${year}-${month}-${day}`;
    const formattedDate3 = `${month}월 ${day}일`

    // const formattedDate = `${year}-${month}-${day}`;
    const formattedDate = '2023-08-01'
    const todaysList = board.filter(item => item.date === formattedDate)

    const todaysTopThreeList = todaysList.sort((a, b) => b.likesAcountId.length - a.likesAcountId.length).slice(0, 3)
    const todaysSortList = todaysList.sort((a, b) => b.dateTime - a.dateTime);


    return (
        <TodaysContainer>
            <div className="howtouse" style={{ display: onJoin ? 'block' : 'none' }}>
                <div className="logo">
                    <img src="./images/logo/icon.png" alt="logo" />
                    <p>
                        오늘하날의 회원이 되신걸 환영합니다!
                    </p>
                    <p>
                        여러가지 기능들을 알려드릴게요.
                    </p>
                </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    onReachEnd={() => {
                        dispatch(offJoin())
                    }
                    }
                >
                    <SwiperSlide>
                        <div className="info">
                            <p>
                                다른 회원님들의 오늘 하날을 볼 수 있어요!
                            </p>
                            <p>
                                마음에 드는 하날에 좋아요를 누르고
                            </p>
                            <p>
                                댓글도 달아보세요.
                            </p>
                        </div>
                        <div className="line">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="info">
                            <p>
                                회원님의 하날을  공유해 주세요!
                            </p>
                            <p>
                                하날을 공유하기 위해서 위치정보가 필요해요.
                            </p>
                            <p>
                                위치를 기반으로 날씨와 온도가 업로드돼요.
                            </p>
                        </div>
                        <div className="line">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="info">
                            <p>
                                근처 회원님들의 하날을 확인해 보세요!
                            </p>
                            <p>
                                하날이 궁금한 지역을 직접 선택할 수 있어요.
                            </p>
                        </div>
                        <div className="line">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="info">
                            <p>
                                만약 궁금한 지역의 하날이 없다면,
                            </p>
                            <p>
                                다른 회원님에게 직접 요청할 수 있어요!
                            </p>
                            <p>
                                그리고 내 근처 하날이 궁금한 회원님들에게
                            </p>
                            <p>
                                현재 하날을 알려주세요.
                            </p>
                        </div>
                        <div className="line">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="info">
                            <p>
                                현재 나의 나무와 내 하날 개수, 받은 좋아요
                            </p>
                            <p>
                                수를 확인해 보세요.
                            </p>
                        </div>
                        <div className="line">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="todays" style={{
                height: onJoin ? "100dvh" : "auto",
                overflow: onJoin ? "hidden" : "visible"
            }}>
                <div className="logo">
                    <img src="./images/logo/hanal_logo_b.png" alt="hanal" />
                </div>
                <div className="todaysRank">
                    <div className="rankTitle">
                        <FaRankingStar />
                        <h3>오늘 하날 순위</h3>
                    </div>
                    <ul>
                        {
                            todaysTopThreeList.map(item => <TodaysTopList item={item} key={item.boardId} />)
                        }
                    </ul>
                </div>
                <div className="todaysList">
                    <div className="todaysTitle">
                        <MdOutlineToday />
                        <h3>오늘 하날</h3>
                        <span>- {formattedDate3}</span>
                    </div>
                    <ul>
                        {
                            todaysSortList.map(item => <TodaysList item={item} key={item.boardId} />)
                        }
                    </ul>
                </div>
            </div>
        </TodaysContainer>
    );
};

export default Todays;