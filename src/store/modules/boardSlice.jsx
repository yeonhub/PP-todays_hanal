import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    onUpload: false,
    onAnswer: false,
    onBg: false,
    isOwner: false,
    wonderDel: false,
    detailBoardId: 1,
    board: [
        {
            boardId: 1,
            date: '2023-07-01',
            time: '09시 20분',
            dateTime: 230701092022,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2, 3],
            images: './images/sky/sky1.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '1댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 2,
            date: '2023-07-01',
            time: '09시 30분',
            dateTime: 230701093042,
            authorAcountId: 2,
            loactionCity: '서울특별시',
            loactionGu: '광진구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2],
            images: './images/sky/sky2.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '2댓글', dateTime: 20230721103000 },
            ]
        },
        {
            boardId: 3,
            date: '2023-07-02',
            time: '09시 20분',
            dateTime: 230702092000,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 3],
            images: './images/sky/sky3.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 4,
            date: '2023-07-03',
            time: '09시 30분',
            dateTime: 230703093000,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [2, 3],
            images: './images/sky/sky4.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '하하하하하', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 5,
            date: '2023-07-03',
            time: '09시 50분',
            dateTime: 230703095000,
            authorAcountId: 3,
            loactionCity: '수원시',
            loactionGu: '영통구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [3],
            images: './images/sky/sky5.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 3, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 6,
            date: '2023-07-17',
            time: '09시 20분',
            dateTime: 230717092000,
            authorAcountId: 3,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2, 3],
            images: './images/sky/sky6.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 3, text: '1번댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 7,
            date: '2023-07-17',
            time: '09시 40분',
            dateTime: 230717094000,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2],
            images: './images/sky/sky7.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '2번댓글', dateTime: 20230721103000 },
            ]
        },
        {
            boardId: 8,
            date: '2023-07-17',
            time: '10시 20분',
            dateTime: 230717102000,
            authorAcountId: 4,
            loactionCity: '서귀포시',
            loactionGu: '성산읍',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [],
            images: './images/sky/sky8.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 1, text: '3번댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 9,
            date: '2023-07-17',
            time: '10시 25분',
            dateTime: 230717102500,
            authorAcountId: 2,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [3],
            images: './images/sky/sky9.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠 안녕하세요 안녕하세요 둥둥둥딩당당', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 2, text: '4번댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 10,
            date: '2023-07-17',
            time: '10시 40분',
            dateTime: 230717104000,
            authorAcountId: 1,
            loactionCity: '서울특별시',
            loactionGu: '서초구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [3],
            images: './images/sky/sky10.jpg',
            authorLike: 70,
            comment : []
        },
        {
            boardId: 11,
            date: '2023-07-18',
            time: '09시 20분',
            dateTime: 230718092000,
            authorAcountId: 3,
            loactionCity: '서울특별시',
            loactionGu: '송파구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1],
            images: './images/sky/sky11.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '댓글댓글댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 12,
            date: '2023-07-18',
            time: '09시 25분',
            dateTime: 230718092500,
            authorAcountId: 2,
            loactionCity: '부산광역시',
            loactionGu: '해운대구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1],
            images: './images/sky/sky12.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 1, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 13,
            date: '2023-07-18',
            time: '09시 40분',
            dateTime: 230718094000,
            authorAcountId: 4,
            loactionCity: '대전광역시',
            loactionGu: '서구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1],
            images: './images/sky/sky13.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 2, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 1, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 14,
            date: '2023-07-19',
            time: '09시 20분',
            dateTime: 230719092000,
            authorAcountId: 3,
            loactionCity: '대구광역시',
            loactionGu: '중구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [2],
            images: './images/sky/sky14.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 2, text: '댓글댓글댓글', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 15,
            date: '2023-07-19',
            time: '09시 25분',
            dateTime: 230719092500,
            authorAcountId: 1,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [2],
            images: './images/sky/sky15.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 16,
            date: '2023-07-19',
            time: '09시 40분',
            dateTime: 230719094000,
            authorAcountId: 2,
            loactionCity: '부산광역시',
            loactionGu: '해운대구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 3],
            images: './images/sky/sky16.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 17,
            date: '2023-07-20',
            time: '09시 20분',
            dateTime: 230720092000,
            authorAcountId: 3,
            loactionCity: '대전광역시',
            loactionGu: '동구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2],
            images: './images/sky/sky17.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        },
        {
            boardId: 18,
            date: '2023-07-20',
            time: '09시 25분',
            dateTime: 230720092500,
            authorAcountId: 1,
            loactionCity: '대구광역시',
            loactionGu: '중구',
            weather: 'rain',
            temperatures: '20',
            yesterday: true,
            likesAcountId: [1, 2],
            images: './images/sky/sky18.jpg',
            authorLike: 70,
            comment: [
                { commentId: 1, commentAuthorId: 1, text: '하늘이 넘오넘오 예뻐용 쿠쿠', dateTime: 20230721083000 },
                { commentId: 2, commentAuthorId: 2, text: '예뻐용 쿠쿠', dateTime: 20230721093000 },
                { commentId: 3, commentAuthorId: 3, text: '하늘이 넘오넘오 쿠쿠', dateTime: 20230721103000 },
                { commentId: 4, commentAuthorId: 4, text: '쿠쿠루삥뽕', dateTime: 20230721113000 },
            ]
        }
    ],
    wonderBoard: [
        {
            wonderBoardId: 1,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 2,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 3,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 4,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 5,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 6,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 7,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '남동구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 8,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 9,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
            images: './images/icons/wonder.png'
        },
        {
            wonderBoardId: 10,
            date: '2023-07-10',
            time: '09시 50분',
            dateTime: 230717082520,
            authorAcountId: 4,
            loactionCity: '인천광역시',
            loactionGu: '연수구',
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
                likesAcountId: []
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
            const localAcount = localStorage.getItem('localCurrentAcount')
            const acountId = localAcount ? JSON.parse(localAcount).acountId : null;
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
            console.log(action.payload);
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
                if (item.boardId > maxBoardId) {
                    maxBoardId = item.boardId;
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
            console.log(action.payload);
            const newComment = {
                commentId: currentBoard.comment.length + 1,
                commentAuthorId: acountId,
                text,
                dateTime: commentDateTime
            }
            currentBoard.comment.push(newComment)
        }
    },
});

export const { addBoard, onUploaded, onBg, ownerCheck, onWonderDel, offWonderDel, addAnswer, offOnAnswer, addWonder, onDetail, onLike, addComment } = boardSlice.actions
export default boardSlice.reducer