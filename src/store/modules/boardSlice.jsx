import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const initialState = {
    onUpload: false,
    onAnswer: false,
    onBg: false,
    isOwner: false,
    wonderDel: false,
    detailBoardId: 1,
    detailType: 'todays',
    nearCity: '서울특별시',
    nearGu: '강서구',
    board: [
        {
            boardId: 1,
            date: '2023-08-01',
            time: '09시 20분',
            dateTime: 20230801092000,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '28',
            yesterday: true,
            likesAcountId: [1, 2, 3],
            images: './images/sky/sky1.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '뭐가 예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '댓글입니다', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 2,
            date: '2023-08-01',
            time: '09시 30분',
            dateTime: 20230801093010,
            authorAcountId: 2,
            loactionCity: '서울특별시',
            loactionGu: '광진구',
            weather: 'clear',
            temperatures: '27',
            yesterday: false,
            likesAcountId: [1, 2, 5],
            images: './images/sky/sky2.jpg',
            authorLike: 80,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 예뻐용', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 4, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '안예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 6, text: 'ㅋㅋㅋ', dateTime: 20230721103500 },
                { commentId: 5, commentAuthorId: 2, text: 'ㄹㅇㅋㅋ', dateTime: 20230721103800 },
            ]
        },
        {
            boardId: 3,
            date: '2023-08-01',
            time: '09시 45분',
            dateTime: 20230801094515,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'cloudy',
            temperatures: '32',
            yesterday: true,
            likesAcountId: [1, 3],
            images: './images/sky/sky3.jpg',
            authorLike: 57,
            comment: [
                { commentId: 1, commentAuthorId: 4, text: '안녕하세요', dateTime: 20230721093000 },
                { commentId: 2, commentAuthorId: 5, text: 'ㅎㅇ', dateTime: 20230721103000 },
                { commentId: 3, commentAuthorId: 4, text: '왜 반말?', dateTime: 20230721113000 },
                { commentId: 4, commentAuthorId: 4, text: '왜 반말?', dateTime: 20230721113000 },
                { commentId: 5, commentAuthorId: 4, text: '왜 반말?', dateTime: 20230721113000 }
            ]
        },
        {
            boardId: 4,
            date: '2023-08-01',
            time: '10시 30분',
            dateTime: 20230801103051,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'clear',
            temperatures: '24',
            yesterday: false,
            likesAcountId: [2, 3, 6],
            images: './images/sky/sky4.jpg',
            authorLike: 89,
            comment: [
                { commentId: 1, commentAuthorId: 6, text: '오늘 맞음?', dateTime: 20230721093000 },
                { commentId: 2, commentAuthorId: 5, text: '이거 어디임?', dateTime: 20230721103000 },
                { commentId: 3, commentAuthorId: 4, text: '하하하하하', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 5,
            date: '2023-08-01',
            time: '10시 33분',
            dateTime: 20230801103311,
            authorAcountId: 3,
            loactionCity: '수원시',
            loactionGu: '영통구',
            weather: 'rain',
            temperatures: '34',
            yesterday: true,
            likesAcountId: [3],
            images: './images/sky/sky5.jpg',
            authorLike: 57,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '뭐가 예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '댓글입니다', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 6,
            date: '2023-08-01',
            time: '11시 36분',
            dateTime: 20230801113644,
            authorAcountId: 3,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'clear',
            temperatures: '28',
            yesterday: true,
            likesAcountId: [1, 2, 3],
            images: './images/sky/sky6.jpg',
            authorLike: 24,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 예뻐용', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 4, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '안예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 6, text: 'ㅋㅋㅋ', dateTime: 20230721103500 },
                { commentId: 5, commentAuthorId: 2, text: 'ㄹㅇㅋㅋ', dateTime: 20230721103800 },
            ]
        },
        {
            boardId: 7,
            date: '2023-08-01',
            time: '12시 00분',
            dateTime: 20230801120011,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'rain',
            temperatures: '30',
            yesterday: false,
            likesAcountId: [1, 2, 5, 6],
            images: './images/sky/sky7.jpg',
            authorLike: 67,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '2번댓글', dateTime: 20230721103000 },
            ]
        },
        {
            boardId: 8,
            date: '2023-08-01',
            time: '12시 05분',
            dateTime: 20230801120532,
            authorAcountId: 4,
            loactionCity: '서귀포시',
            loactionGu: '성산읍',
            weather: 'clear',
            temperatures: '31',
            yesterday: true,
            likesAcountId: [],
            images: './images/sky/sky8.jpg',
            authorLike: 78,
            comment: [
                { commentId: 1, commentAuthorId: 6, text: '오늘 맞음?', dateTime: 20230721093000 },
                { commentId: 2, commentAuthorId: 5, text: '이거 어디임?', dateTime: 20230721103000 },
                { commentId: 3, commentAuthorId: 4, text: '하하하하하', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 9,
            date: '2023-08-01',
            time: '12시 25분',
            dateTime: 20230801122541,
            authorAcountId: 2,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'cloudy',
            temperatures: '34',
            yesterday: true,
            likesAcountId: [3],
            images: './images/sky/sky9.jpg',
            authorLike: 75,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '뭐가 예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '댓글입니다', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 10,
            date: '2023-08-01',
            time: '12시 40분',
            dateTime: 20230801124022,
            authorAcountId: 1,
            loactionCity: '서울특별시',
            loactionGu: '서초구',
            weather: 'clear',
            temperatures: '27',
            yesterday: true,
            likesAcountId: [3, 4, 2],
            images: './images/sky/sky10.jpg',
            authorLike: 55,
            comment: []
        },
        {
            boardId: 11,
            date: '2023-08-01',
            time: '13시 20분',
            dateTime: 20230801132011,
            authorAcountId: 3,
            loactionCity: '서울특별시',
            loactionGu: '송파구',
            weather: 'rain',
            temperatures: '25',
            yesterday: true,
            likesAcountId: [1],
            images: './images/sky/sky11.jpg',
            authorLike: 64,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '댓글댓글댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 12,
            date: '2023-08-01',
            time: '13시 25분',
            dateTime: 20230801132511,
            authorAcountId: 2,
            loactionCity: '부산광역시',
            loactionGu: '해운대구',
            weather: 'clear',
            temperatures: '29',
            yesterday: false,
            likesAcountId: [1, 3, 6],
            images: './images/sky/sky12.jpg',
            authorLike: 28,
            comment: [
                { commentId: 1, commentAuthorId: 6, text: '오늘 맞음?', dateTime: 20230721093000 },
                { commentId: 2, commentAuthorId: 5, text: '이거 어디임?', dateTime: 20230721103000 },
                { commentId: 3, commentAuthorId: 4, text: '하하하하하', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 13,
            date: '2023-08-01',
            time: '13시 40분',
            dateTime: 20230801134054,
            authorAcountId: 4,
            loactionCity: '대전광역시',
            loactionGu: '서구',
            weather: 'clear',
            temperatures: '27',
            yesterday: true,
            likesAcountId: [1],
            images: './images/sky/sky13.jpg',
            authorLike: 68,
            comment: [
                { commentId: 1, commentAuthorId: 3, text: '잘찍었네염', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 3, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '대답점', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 3, text: '님들아', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 14,
            date: '2023-08-01',
            time: '14시 20분',
            dateTime: 20230801142012,
            authorAcountId: 3,
            loactionCity: '대구광역시',
            loactionGu: '중구',
            weather: 'rain',
            temperatures: '31',
            yesterday: false,
            likesAcountId: [2],
            images: './images/sky/sky14.jpg',
            authorLike: 75,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 2, text: '댓글댓글댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 15,
            date: '2023-08-01',
            time: '14시 25분',
            dateTime: 20230801142512,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '30',
            yesterday: true,
            likesAcountId: [2, 3, 4, 5, 6],
            images: './images/sky/sky15.jpg',
            authorLike: 68,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 16,
            date: '2023-08-01',
            time: '14시 40분',
            dateTime: 20230801144022,
            authorAcountId: 2,
            loactionCity: '부산광역시',
            loactionGu: '해운대구',
            weather: 'clear',
            temperatures: '29',
            yesterday: true,
            likesAcountId: [1, 3],
            images: './images/sky/sky16.jpg',
            authorLike: 45,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 17,
            date: '2023-08-01',
            time: '15시 20분',
            dateTime: 20230801152030,
            authorAcountId: 3,
            loactionCity: '대전광역시',
            loactionGu: '동구',
            weather: 'clear',
            temperatures: '32',
            yesterday: false,
            likesAcountId: [1, 2, 6],
            images: './images/sky/sky17.jpg',
            authorLike: 35,
            comment: [
                { commentId: 1, commentAuthorId: 6, text: '오늘 맞음?', dateTime: 20230721093000 },
                { commentId: 2, commentAuthorId: 5, text: '이거 어디임?', dateTime: 20230721103000 },
                { commentId: 3, commentAuthorId: 4, text: '하하하하하', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 18,
            date: '2023-08-01',
            time: '15시 25분',
            dateTime: 20230801152512,
            authorAcountId: 1,
            loactionCity: '대구광역시',
            loactionGu: '중구',
            weather: 'cloudy',
            temperatures: '38',
            yesterday: true,
            likesAcountId: [1, 2, 5],
            images: './images/sky/sky18.jpg',
            authorLike: 52,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 예뻐용', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 4, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 5, text: '안예쁨', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 6, text: 'ㅋㅋㅋ', dateTime: 20230721103500 },
                { commentId: 5, commentAuthorId: 2, text: 'ㄹㅇㅋㅋ', dateTime: 20230721103800 },
            ]
        }
    ],
    wonderBoard: [
        {
            wonderBoardId: 1,
            date: '2023-08-01',
            time: '09시 50분',
            dateTime: 20230801095022,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 2,
            date: '2023-08-01',
            time: '09시 55분',
            dateTime: 20230801095511,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/icons/wonder.png'
        },
        {
            answers: [
                {
                    answerAuthorAcountId: 4,
                    answerAuthorLike: 50,
                    answerDate: "2023-08-01",
                    answerTime: "15시 50분",
                    answerWeather: "BsSun",
                    answerYesterday: true,
                    selectedImage: "./images/sky/sky5.jpg"
                }
            ],
            wonderBoardId: 3,
            date: '2023-08-01',
            time: '11시 50분',
            dateTime: 20230801115044,
            authorAcountId: 2,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: "./images/sky/sky5.jpg"
        },
        {
            wonderBoardId: 4,
            date: '2023-08-01',
            time: '10시 50분',
            dateTime: 20230801105012,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 5,
            date: '2023-08-01',
            time: '10시 58분',
            dateTime: 20230801105832,
            authorAcountId: 6,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            answers: [
                {
                    answerAuthorAcountId: 6,
                    answerAuthorLike: 80,
                    answerDate: "2023-08-01",
                    answerTime: "15시 55분",
                    answerWeather: "BsSun",
                    answerYesterday: false,
                    selectedImage: "./images/sky/sky8.jpg"
                }
            ],
            wonderBoardId: 6,
            date: '2023-08-01',
            time: '12시 55분',
            dateTime: 20230801125544,
            authorAcountId: 6,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/sky/sky8.jpg'
        },
        {
            wonderBoardId: 7,
            date: '2023-08-01',
            time: '13시 50분',
            dateTime: 20230801135011,
            authorAcountId: 5,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 8,
            date: '2023-08-01',
            time: '13시 52분',
            dateTime: 20230801135220,
            authorAcountId: 2,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/icons/wonder.png'
        },
        {
            answers: [
                {
                    answerAuthorAcountId: 1,
                    answerAuthorLike: 85,
                    answerDate: "2023-08-01",
                    answerTime: "10시 50분",
                    answerWeather: "BsSun",
                    answerYesterday: true,
                    selectedImage: "./images/sky/sky11.jpg"
                }
            ],
            wonderBoardId: 9,
            date: '2023-08-01',
            time: '13시 59분',
            dateTime: 20230801135910,
            authorAcountId: 3,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/sky/sky11.jpg'
        },
        {
            wonderBoardId: 10,
            date: '2023-08-01',
            time: '14시 00분',
            dateTime: 20230801140022,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 11,
            date: '2023-08-01',
            time: '14시 11분',
            dateTime: 20230801141122,
            authorAcountId: 2,
            loactionCity: '서울특별시',
            loactionGu: '광진구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 12,
            date: '2023-08-01',
            time: '14시 22분',
            dateTime: 20230801142222,
            authorAcountId: 2,
            loactionCity: '서울특별시',
            loactionGu: '광진구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 13,
            date: '2023-08-01',
            time: '14시 55분',
            dateTime: 20230801145522,
            authorAcountId: 1,
            loactionCity: '서울특별시',
            loactionGu: '송파구',
            images: './images/icons/wonder.png'
        },
    ]
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addBoard(state, action) {
            const { selectedImage, authorAcountId, city, gu, date, time, dateTime, weather, temperatures, yesterday, authorLike } = action.payload
            let maxBoardId = 0;
            state.board.forEach((item) => {
                if (item.boardId > maxBoardId) {
                    maxBoardId = item.boardId;
                }
            });
            const boardId = maxBoardId + 1;
            const newBoard =
            {
                boardId,
                date,
                time,
                dateTime,
                authorAcountId,
                loactionCity: city,
                loactionGu: gu,
                weather,
                temperatures,
                yesterday,
                authorLike,
                images: selectedImage,
                likesAcountId: [],
                comment : []
            }
            state.board.push(newBoard)
            state.onUpload = true
        },
        onUploaded(state, action) {
            state.onUpload = false
        },
        onBg(state, action) {
            state.onBg = action.payload
        },
        ownerCheck(state, action) {
            const currentAcount = useSelector(state => state.acount.currentAcount)
            const acountId = currentAcount ? currentAcount.acountId : null
            if (acountId === action.payload) {
                state.isOwner = true
            } else {
                state.isOwner = false
            }
        },
        onWonderDel(state, action) {
            state.wonderBoard = state.wonderBoard.filter(item => item.wonderBoardId !== action.payload)
            state.wonderDel = true
        },
        offWonderDel(state, action) {
            state.wonderDel = false
        },
        addAnswer(state, action) {
            const { selectedImage, answerAuthorAcountId, answerDate, answerTime, answerWeather, answerYesterday, answerAuthorLike, wonderBoardId } = action.payload
            const newAnswer = {
                selectedImage,
                answerAuthorAcountId,
                answerDate,
                answerTime,
                answerWeather,
                answerYesterday,
                answerAuthorLike
            }

            const wonderBoard = state.wonderBoard.find(item => item.wonderBoardId === wonderBoardId);

            if (wonderBoard) {
                if (!wonderBoard.answers) wonderBoard.answers = []
                wonderBoard.answers.push(newAnswer);
                wonderBoard.images = selectedImage
                state.onAnswer = true
            }
        },
        offOnAnswer(state, action) {
            state.onAnswer = false
        },
        addWonder(state, action) {
            const { uploadDate, uploadTime, uploadDateTime, acountId, selectedGugun, selectedSido } = action.payload

            let maxBoardId = 0;
            state.wonderBoard.forEach((item) => {
                if (item.wonderBoardId > maxBoardId) {
                    maxBoardId = item.wonderBoardId;
                }
            });
            const wonderBoardId = maxBoardId + 1;
            const newWonder = {
                wonderBoardId,
                date: uploadDate,
                time: uploadTime,
                dateTime: uploadDateTime,
                authorAcountId: acountId,
                loactionCity: selectedSido,
                loactionGu: selectedGugun,
                images: './images/icons/wonder.png'
            }
            state.wonderBoard.push(newWonder)
        },
        onDetail(state, action) {
            state.detailBoardId = action.payload
        },
        onLike(state, action) {
            const { boardId, currentAcountId } = action.payload
            const currentBoard = state.board.find(item => item.boardId === boardId)
            if (currentBoard) {
                const isLiked = currentBoard.likesAcountId.includes(currentAcountId)
                const updatedLikes = isLiked
                    ? currentBoard.likesAcountId.filter(item => item !== currentAcountId)
                    : [...currentBoard.likesAcountId, currentAcountId]
                const updatedBoard = { ...currentBoard, likesAcountId: updatedLikes }
                return {
                    ...state,
                    board: state.board.map(item => (item.boardId === boardId ? updatedBoard : item)),
                };
            }
            return state;
        },
        addComment(state, action) {
            const { acountId, text, commentDateTime, currentBoardId } = action.payload
            const currentBoard = state.board.find(item => item.boardId === currentBoardId)
            let no
            if(currentBoard.comment){
                no = currentBoard.comment.length + 1
            } else {
                no = 1
            }
            const newComment = {
                commentId: no,
                commentAuthorId: acountId,
                text,
                dateTime: commentDateTime
            }
            currentBoard.comment.push(newComment)
        },
        setDetail(state, action) {
            state.detailType = action.payload
        },
        setNearLocation(state, action) {
            const { locationCity, locationGu } = action.payload;
            state.nearCity = locationCity;
            state.nearGu = locationGu;
        }
    },
});

export const { addBoard, onUploaded, onBg, ownerCheck, onWonderDel, offWonderDel, addAnswer, offOnAnswer, addWonder, onDetail, onLike, addComment, setDetail, setNearLocation } = boardSlice.actions
export default boardSlice.reducer