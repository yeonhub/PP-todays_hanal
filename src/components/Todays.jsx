import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import TodaysTopList from './TodaysTopList';
import TodaysList from './TodaysList';
import { FaRankingStar } from 'react-icons/fa6'
import { MdOutlineToday } from 'react-icons/md'

const TodaysContainer = styled.div`
.todays {
    width: 100%;
    height: 93dvh;
    overflow: auto;
    .logo {
        margin: auto;
        text-align: center;
        height: 10dvh;
        img {
            margin: 2dvh 0;
            width: 50%;
        }
    }
    .todaysRank {
        width: 100%;
        height: 25dvh;
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
                height: 40vw;
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
            flex-wrap : wrap;
            margin-bottom: 7dvh;
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
    // const topThree = board.find()

    // 현재 날짜 사용시
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate2 = `${year}-${month}-${day}`;
    const formattedDate3 = `${month}월 ${day}일`

    const formattedDate = '2023-07-17'
    const todaysList = board.filter(item => item.date === formattedDate)

    const todaysTopThreeList = todaysList.sort((a, b) => b.likesAcountId.length - a.likesAcountId.length).slice(0, 3)
    const todaysSortList = todaysList.sort((a, b) => b.dateTime - a.dateTime);


    return (
        <TodaysContainer>
            <div className="todays">
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