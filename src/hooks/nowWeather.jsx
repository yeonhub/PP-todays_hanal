import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../store/modules/acountSlice';

const useWeatherHook = () => {
    
    const dispatch = useDispatch()
    const { nowX, nowY } = useSelector(state => state.acount.location)
    // const nowX = 54
    // const nowY = 124
    const [weatherData, setWeatherData] = useState()
    const setWeather = async () => {
        const KMAAPikey = import.meta.env.REACT_APP_KMA_API_KEY
        // const KMAAPikey = ''
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hours = hours - 1;
        if (hours < 0) {
            now.setDate(now.getDate() - 1);
            year = now.getFullYear();
            month = now.getMonth() + 1;
            day = now.getDate();
            hours = 24 + hours;
        }
        hours = hours < 10 ? '0' + hours : hours;
        minutes = '00';

        const baseDate = `${year}${month}${day}`;
        const baseTime = `${hours}${minutes}`;
        const dataType = 'JSON';
        try {
            const response = await axios.get(
                `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${KMAAPikey}&pageNo=1&numOfRows=1000&dataType=${dataType}&base_date=${baseDate}&base_time=${baseTime}&nx=${nowX}&ny=${nowY}`
            );
            const weatherItem = response.data.response.body.items.item
            const tem = weatherItem.find(item => item.category === 'T1H')
            const sky = weatherItem.find(item => item.category === 'SKY')
            const pty = weatherItem.find(item => item.category === 'PTY')
            setWeatherData({ tem, sky, pty });
        } catch (error) {
            console.error('--- ERROR ---', error);
        }
    };
    useEffect(() => {
        setWeather();
    }, [nowX, nowY]);
    useEffect(() => {
        if (weatherData) {
            dispatch(getWeather(weatherData))
        }
    }, [weatherData]);

    return weatherData
}

export default useWeatherHook;