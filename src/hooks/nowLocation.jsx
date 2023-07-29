import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getLocation } from "../store/modules/acountSlice";

const useLocationHook = () => {
    const dispatch = useDispatch()
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        nowLocationCity: '',
        nowLocationGu: '',
        error: null,
    });
    const loading = {
        latitude: 0,
        longitude: 0,
        nowLocationCity: '현재위치',
        nowLocationGu: '조회중',
        error: null,
    }

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
    };

    const error = (err) => {
        setLocation({
            ...location,
            error: '현재위치를 가져올 수 없습니다.',
        });
    };

    const getKakaoAddress = async (latitude, longitude) => {
        const kakaoApiKey = import.meta.env.REACT_APP_KAKAO_API_KEY
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
                error: 'kakao API 호출 실패',
            });
        }
    };
    useEffect(() => {
        // dispatch(getLocation(loading))
        // setTimeout(() => {
        // }, 500);
        dispatch(getLocation(location))
    }, [location])

    return location;
};

export default useLocationHook;