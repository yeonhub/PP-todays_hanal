import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getConvert } from '../store/modules/acountSlice';
import { useEffect } from 'react';
import useWeatherHook from "../hooks/nowWeather";

const useConvertHook = (v1, v2) => {
    const dispatch = useDispatch()
    const RE = 6371.00877;
    const GRID = 5.0;
    const SLAT1 = 30.0;
    const SLAT2 = 60.0;
    const OLON = 126.0;
    const OLAT = 38.0;
    const XO = 43;
    const YO = 136;

    const [convertXY, setConvertXY] = useState({ x: 0, y: 0 })

    const toXY = (v1, v2) => {
        let DEGRAD = Math.PI / 180.0;
        let re2 = RE / GRID;
        let slat3 = SLAT1 * DEGRAD;
        let slat4 = SLAT2 * DEGRAD;
        let olon2 = OLON * DEGRAD;
        let olat2 = OLAT * DEGRAD;
        const xy = {}
        let sn = Math.tan(Math.PI * 0.25 + slat4 * 0.5) / Math.tan(Math.PI * 0.25 + slat3 * 0.5);
        sn = Math.log(Math.cos(slat3) / Math.cos(slat4)) / Math.log(sn);
        let sf = Math.tan(Math.PI * 0.25 + slat3 * 0.5);
        sf = Math.pow(sf, sn) * Math.cos(slat3) / sn;
        let ro = Math.tan(Math.PI * 0.25 + olat2 * 0.5);
        ro = re2 * sf / Math.pow(ro, sn);
        xy['lat'] = v1;
        xy['lng'] = v2;
        let ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
        ra = re2 * sf / Math.pow(ra, sn);
        let theta = v2 * DEGRAD - olon2;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        xy['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        xy['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
        setConvertXY({ x: xy.x, y: xy.y })
    };
    useEffect(() => {
        toXY(v1, v2);
    }, [v1, v2]);
    useEffect(()=>{
        dispatch(getConvert(convertXY));
    },[convertXY])

    useWeatherHook()

    return convertXY;
}

export default useConvertHook;