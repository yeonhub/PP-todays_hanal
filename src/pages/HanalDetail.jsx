import React from 'react';
import styled from "styled-components";
import HanalDetailItem from '../components/HanalDetailItem';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const HanalDetailContainer = styled.div`
width: 100%;
height: 93vh;
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
            height: 3.5vh;
            margin: 3vw;
            box-sizing: border-box;
            align-items: center;
            .who {
                align-items: center;
                display: flex;
                height: 5vh;
                font-size: 5vw;
                img {
                    border: 0.7vw dotted gray;
                    border-radius: 50%;
                    overflow: hidden;
                    height: 4vh;
                    width: 4vh;
                    padding: 1vw;
                    box-sizing: border-box;
                    margin-right: 3vw;
                }
            }
        }
        .sky {
            width: 100%;
            max-height: 60vh;
            overflow: hidden;
            img {
                max-width: 100%;
            }
        }
        .whereBox {
            display: flex;
  justify-content: flex-end;
  height: 4vh;
  padding: 1vw;
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
            height: 4vh;
            padding: 1vw;
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
            background: none;
            background-image: url('images/weather/rain.gif');
            background-repeat: no-repeat;
            background-position: 0 70%;
            height: 5vh;
            align-items: center;
            span {
                margin-right: 3vw;
            }
        }
        .like {
            display: flex;
            align-items: center;
            height: 4vh;
            font-size: 4vw;
            padding: 1vw;
            box-sizing: border-box;
            margin: 2vw 0;
            svg {
                font-size: 8vw;
                margin: 0 3vw;
            }
        }
        .comment {
            height: 4vh;
            font-size: 4vw;
            padding: 1vw;
            box-sizing: border-box;
            margin: 3vw;
            p {
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
                height: 5vh;

            }
        }
            
    }
  }
}
`

const HanalDetail = () => {
    const board = useSelector(state => state.board.board)

    // 현재 날짜 사용시
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate2 = `${year}-${month}-${day}`;
    const formattedDate3 = `${month}월 ${day}일`

    const formattedDate = '2023-07-17'
    const todaysList = board.filter(item => item.date === formattedDate)
    const todaysSortList = todaysList.sort((a, b) => b.dateTime - a.dateTime);

    return (
        <HanalDetailContainer>
            <Swiper
                direction={'vertical'}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    todaysSortList.map(item => <SwiperSlide key={item.boardId}>
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