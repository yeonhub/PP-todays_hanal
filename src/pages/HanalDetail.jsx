import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import HanalDetailItem from '../components/HanalDetailItem';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const HanalDetailContainer = styled.div`
width: 100%;
height: 92dvh;
margin-top: 1dvh;
margin-bottom: 7dvh;

.swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
        display: block;
        width: 100%;
        height: 100%;

        .inner {
            width: 100%;
            height: 100%;
            overflow: hidden;

            .profile {
                display: flex;
                width: 100%;
                height: 4dvh;
                margin: 1dvh 2dvh;
                margin-top: 0;
                box-sizing: border-box;
                align-items: center;

                .who {
                    align-items: center;
                    display: flex;
                    height: 5dvh;
                    font-size: 5vw;

                    img {
                        border: 0.7vw dotted gray;
                        border-radius: 50%;
                        overflow: hidden;
                        height: 4dvh;
                        width: 4dvh;
                        padding: 0.5dvh;
                        box-sizing: border-box;
                        margin-right: 3vw;
                    }
                }
            }

            .sky {
                width: 100%;
                max-height: 60dvh;
                overflow: hidden;

                img {
                    max-width: 100%;
                }
            }

            .whereBox {
                display: flex;
                justify-content: flex-end;
                height: 4dvh;
                padding: 0.5dvh;
                box-sizing: border-box;
                padding-bottom: 0;
                margin-bottom: 0;
                margin-right: 2vw;

                .where {
                    display: flex;
                    align-items: center;

                    svg {
                        margin-right: 3vw;
                    }
                }
            }

            .info {
                display: flex;
                height: 4dvh;
                padding: 0.5dvh;
                padding-top: 0;
                margin: 0 2vw;
                box-sizing: border-box;
                font-size: 4vw;
                align-items: center;
                justify-content: space-between;

                .authorLike {
                    display: flex;
                    align-items: center;

                    svg {
                        font-size: 5vw;
                        margin-right: 3vw;
                    }
                }
            }

            .weather {
                display: flex;
                font-size: 5vw;
                justify-content: flex-end;
                background-repeat: no-repeat;
                background-position: 0 35%;
                background-size: cover;
                height: 5dvh;
                align-items: center;

                span {
                    margin-right: 3vw;
                }
            }

            .like {
                display: flex;
                align-items: center;
                height: 4dvh;
                font-size: 4vw;
                padding: 0.5dvh;
                box-sizing: border-box;
                margin: 0.5dvh 0;

                svg {
                    font-size: 8vw;
                    margin: 0 3vw;
                }
            }

            .commentBox {
                height: 4dvh;
                font-size: 4vw;
                padding: 0.5dvh;
                box-sizing: border-box;
                margin: 0.5dvh 3vw;
                box-sizing: border-box;

                .comment {
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .nickname {
                        max-width: 20%;
                        margin-right: 3vw;
                        font-weight: 600;
                    }

                    .text {
                        max-width: 80%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    img {
                        width: 5vw;
                        margin-right: 3vw;
                    }
                }

                .more {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 4dvh;

                }
            }

        }
    }
}

`

const HanalDetail = () => {
    const detailType = useSelector(state => state.board.detailType)
    const board = useSelector(state => state.board.board)
    const boardId = useSelector(state => state.board.detailBoardId)
    const swiperRef = useRef(null);

    const nearlyCity = useSelector(state => state.board.nearCity)
    const nearlyGu = useSelector(state => state.board.nearGu)


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    // const formattedDate = `${year}-${month}-${day}`;
    const formattedDate = '2023-08-01'

    // todays
    const todaysList = board.filter(item => item.date === formattedDate)
    const todaysSortList = todaysList.slice().sort((a, b) => b.dateTime - a.dateTime);

    // nearly
    const nearlyList = board.filter(item => item.loactionCity === nearlyCity || item.loactionGu === nearlyGu)
    const nearlySortList = nearlyList.sort((a, b) => b.dateTime - a.dateTime);

    // toplist
    const todaysTopThreeList = todaysList.slice().sort((a, b) => b.likesAcountId.length - a.likesAcountId.length).slice(0, 3)

    useEffect(() => {
        if (detailType === 'todays') {
            const scrollToBoardId = boardId;
            if (swiperRef.current && scrollToBoardId !== null) {
                const indexToScroll = todaysSortList.findIndex(item => item.boardId === scrollToBoardId);
                if (indexToScroll !== -1) {
                    swiperRef.current.swiper.slideTo(indexToScroll, 0);
                }
            }
        } else if (detailType === 'nearly') {
            const scrollToBoardId = boardId;
            if (swiperRef.current && scrollToBoardId !== null) {
                const indexToScroll = nearlySortList.findIndex(item => item.boardId === scrollToBoardId);
                if (indexToScroll !== -1) {
                    swiperRef.current.swiper.slideTo(indexToScroll, 0);
                }
            }
        } else if (detailType === 'toplist') {
            const scrollToBoardId = boardId;
            if (swiperRef.current && scrollToBoardId !== null) {
                const indexToScroll = todaysTopThreeList.findIndex(item => item.boardId === scrollToBoardId);
                if (indexToScroll !== -1) {
                    swiperRef.current.swiper.slideTo(indexToScroll, 0);
                }
            }
        }
    }, []);

    return (
        <HanalDetailContainer>
            <Swiper
                ref={swiperRef}
                direction={'vertical'}
                modules={[Pagination]}
                className="mySwiper"
            >
                {(`${detailType}` === 'todays'
                    ? todaysSortList
                    : `${detailType}` === 'nearly'
                        ? nearlySortList
                        : `${detailType}` === 'toplist'
                            ? todaysTopThreeList
                            : []
                ).map(item =>
                    <SwiperSlide key={item.boardId}>
                        <div className="inner">
                            <HanalDetailItem item={item} />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </HanalDetailContainer>
    );
};

export default HanalDetail;