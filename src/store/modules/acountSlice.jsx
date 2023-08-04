import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    onLogin: false,
    onJoin: false,
    currentAcount: {},
    addAcount: {},
    location: {
        nowLocationCity: '서울특별시',
        nowLocationGu: '강서구',
        nowLatitude: 0,
        nowLongitude: 0,
        nowX: 0,
        nowY: 0,
    },
    weather: {
        nowWeather: '',
        nowTem: 0
    },
    acount: [
        { acountId: 1, loginId: 'lsy', loginPw: '123', nickname: '상쌤', treeType: '도토리나무', treeLevel: 5 },
        { acountId: 2, loginId: 'kog', loginPw: '123', nickname: '옥찌', treeType: '사과나무', treeLevel: 1 },
        { acountId: 3, loginId: 'lmk', loginPw: '123', nickname: '명돌', treeType: '도토리나무', treeLevel: 3 },
        { acountId: 4, loginId: 'khj', loginPw: '123', nickname: '하입보이', treeType: '배나무', treeLevel: 2 },
        { acountId: 5, loginId: 'kye', loginPw: '123', nickname: '0=2', treeType: '은행나무', treeLevel: 2 },
        { acountId: 6, loginId: 'lwc', loginPw: '123', nickname: '원추링', treeType: '소나무', treeLevel: 4 },
    ]
}

export const acountSlice = createSlice({
    name: 'acount',
    initialState,
    reducers: {
        login(state, action) {
            const { loginId, loginPw } = action.payload;
            const accountRight = state.acount.find(
                (item) => item.loginId === loginId && item.loginPw === loginPw
            );

            if (accountRight) {
                state.currentAcount = accountRight;
                state.onLogin = true
                localStorage.setItem('localOnLogin', true);
                localStorage.setItem('localCurrentAcount', JSON.stringify(state.currentAcount));
                localStorage.setItem('localIds', JSON.stringify(state.acount));
            } else if (!state.acount.some((item) => item.loginId === loginId)) {
                alert('아이디가 존재하지 않음');
            } else {
                alert('비밀번호를 다시 확인해주세요');
            }
        },
        logout(state, action) {
            state.onLogin = false
            state.onJoin = false;
            localStorage.removeItem('localCurrentAcount');
            localStorage.setItem('localOnLogin', false);
            localStorage.setItem('localOnJoin', false);
        },
        join(state, action) {
            const { loginId, loginPw, nickname } = action.payload;

            const isExistingId = state.acount.some((item) => item.loginId === loginId);
            const isExistingNickname = state.acount.some((item) => item.nickname === nickname);

            if (isExistingId) {
                alert('이미 존재하는 아이디입니다.');
                return;
            } else if (isExistingNickname) {
                alert('이미 존재하는 닉네임입니다.');
                return;
            } else {
                const newAccount = {
                    acountId: state.acount.length + 1,
                    loginId,
                    loginPw,
                    nickname,
                    treeType: '밤나무',
                    treeLevel: 1
                }
                state.acount.push(newAccount)
                state.onLogin = true;
                state.onJoin = true;
                state.currentAcount = newAccount;
                localStorage.setItem('localOnLogin', true);
                localStorage.setItem('localOnJoin', true);
                localStorage.setItem('localIds', JSON.stringify(state.acount));
                localStorage.setItem('localCurrentAcount', JSON.stringify(state.currentAcount));
            }
        },
        getLocation(state, action) {
            const { nowLocationCity, nowLocationGu, latitude, longitude } = action.payload
            state.location.nowLocationCity = nowLocationCity
            state.location.nowLocationGu = nowLocationGu
            state.location.nowLatitude = latitude
            state.location.nowLongitude = longitude
        },
        getConvert(state, action) {
            const { x, y } = action.payload
            state.location.nowX = x
            state.location.nowY = y
        },
        getWeather(state, action) {
            console.log(1);
            const { tem, sky, pty } = action.payload
            const nowTem = tem.fcstValue
            const skyNo = sky.fcstValue
            const ptyNo = pty.fcstValue
            state.weather.nowTem = nowTem
            if (skyNo === 1 || 3 || 4) {
                if (skyNo === 1) {
                    state.weather.nowWeather = 'clear'
                } else {
                    state.weather.nowWeather = 'cloudy'
                }
            } else if (ptyNo === 1 || 2 || 5 || 6) {
                state.weather.nowWeather = 'rain'
            } else if (ptyNo === 3 || 7) {
                state.weather.nowWeather = 'snow'
            }
        },
        offJoin(state, action) {
            state.onJoin = false
        }
    },
});


export const { login, logout, join, getLocation, getConvert, getWeather, offJoin } = acountSlice.actions
export default acountSlice.reducer