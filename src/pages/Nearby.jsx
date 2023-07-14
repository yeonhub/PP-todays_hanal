import React from 'react';
import styled from "styled-components";
import NearbyList from '../components/NearbyList';
import { useSelector } from 'react-redux';


const NearbyContainer = styled.div`
.nearby {
    width: 100%;
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
`

const Nearby = () => {
    const nearCity = '인천광역시'
    const nearGu = '남동구'
    const list = useSelector(state => state.board.board)
    const nearList = list.filter(item => item.loactionCity === nearCity && item.loactionGu === nearGu)
    const { boardId, date, authorAcountId, loactionCity, loactionGu, likesAcountId, images } = nearList



    return (
        <NearbyContainer>
            <div className="nearby">
                <div className="weather">
                    <h3>
                        현재 위치 날씨 : 비
                    </h3>
                </div>
                <div className="location">
                    <p>
                        <span>
                            현재 위치 : 인천광역시 - 남동구
                        </span>
                        <button>현재위치</button>
                    </p>
                    <p>
                        <form>
                            <select name="" id="">
                                <option value="">서울특별시</option>
                                <option value="">서울특별시</option>
                                <option value="">서울특별시</option>
                                <option value="">서울특별시</option>
                                <option value="">서울특별시</option>
                                <option value="">서울특별시</option>
                            </select>
                            <select name="" id="">
                                <option value="">성북구</option>
                                <option value="">성북구</option>
                                <option value="">성북구</option>
                                <option value="">성북구</option>
                                <option value="">성북구</option>
                                <option value="">성북구</option>
                            </select>
                        </form>
                    </p>
                </div>
                <h3>인천광역시 - 남동구 오늘 하날</h3>
                <ul>
                    {
                        nearList.map(item => <NearbyList item={item} key={item.boardId} />)
                    }
                </ul>

            </div>
        </NearbyContainer>
    );
};

export default Nearby;