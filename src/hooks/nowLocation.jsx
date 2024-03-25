import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getLocation } from "../store/modules/acountSlice";
import useConvertHook from "./nowConvert";

const useLocationHook = () => {
    let v1, v2
    const dispatch = useDispatch()
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        nowLocationCity: '',
        nowLocationGu: '',
        error: null,
    });
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            setLocation({
                ...location,
                error: '현재위치 기능을 지원하지 않는 브라우저입니다.',
            });
        }
    }, []);
    const success = (position) => {
        const { latitude, longitude } = position.coords;
        getKakaoAddress(latitude, longitude);
        v1 = latitude
        v2 = longitude
    };
    const error = (err) => {
        setLocation({
            ...location,
            nowLocationCity: '현재위치',
            nowLocationGu: '조회 실패',
            error: '현재위치를 가져올 수 없습니다.',
        });
    };

    const getKakaoAddress = async (latitude, longitude) => {
        const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY
        // const kakaoApiKey = ''
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`, {
                headers: {
                    Authorization: `KakaoAK ${kakaoApiKey}`,
                },
            });
            const data = response.data;
            const nowLocationCity = data.documents.length > 0 ? data.documents[0].region_1depth_name : 'unknown';
            const nowLocationGu = data.documents.length > 0 ? data.documents[0].region_2depth_name : 'unknown';
            setLocation(
                {
                    ...location,
                    latitude,
                    longitude,
                    nowLocationCity,
                    nowLocationGu,
                }
            );
        } catch (error) {
            setLocation({
                ...location,
                nowLocationCity: '현재위치',
                nowLocationGu: '조회 실패',
                error: 'kakao API 호출 실패',
            });
        }
    };
    useEffect(() => {
        dispatch(getLocation(location))
    }, [location])

    useConvertHook(location.latitude, location.longitude)

    return location;
};

export default useLocationHook;