// Redux 날씨
import { useSelector } from 'react-redux';

const getCurrentWeather = () => {
    const nowWeather = useSelector(state => state.acount.weather);
    const weather = nowWeather.nowWeather
    const temperatures = nowWeather.nowTem
    return {
        nowWeather,
        weather,
        temperatures
    };
};
export default getCurrentWeather