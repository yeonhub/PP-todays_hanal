import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import TodaysTopList from './TodaysTopList';
import TodaysList from './TodaysList';


const TodaysContainer = styled.div`
.todays {
    width: 100%;
    .todaysRank {
        width: 100%;
        h3 {
            font-size: 8vw;
            margin: 3vw;
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
        h3 {
            font-size: 8vw;
            margin: 3vw;
        }
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap : wrap;
            li {
                overflow: hidden;
                width: 33vw;
                height: 33.5vw;
                img {
            
                    width: 33vw;
                    height: 33vw;
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
    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    // const day = String(currentDate.getDate()).padStart(2, '0');
    // const formattedDate = `${year}-${month}-${day}`;
    
    const formattedDate = '2023-07-10'
    const todaysList = board.filter(item => item.date === formattedDate)

    const todaysTopThreeList = todaysList.sort((a, b) => b.likesAcountId.length - a.likesAcountId.length).slice(0, 3)

    return (
        <TodaysContainer>
            <div className="todays">
                <div className="todaysRank">
                    <h3>오늘 하날 랭킹</h3>
                    <ul>
                        {
                            todaysTopThreeList.map(item => <TodaysTopList item={item} key={item.boardId} />)
                        }
                    </ul>
                </div>
                <div className="todaysList">
                    <h3>오늘 하날</h3>
                    <ul>
                        {
                            todaysList.map(item => <TodaysList item={item} key={item.boardId} />)
                        }

                    </ul>
                </div>

            </div>

        </TodaysContainer>
    );
};

export default Todays;