import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    onUpload: false,
    onBg: false,
    board: [
        { boardId: 1, date: '2023-07-01', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '연수구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 2, 3], images: './images/sky/sky1.jpg', authorLike: 70 },
        { boardId: 2, date: '2023-07-01', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 2, loactionCity: '서울특별시', loactionGu: '광진구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 2], images: './images/sky/sky2.jpg', authorLike: 70 },
        { boardId: 3, date: '2023-07-02', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 3], images: './images/sky/sky3.jpg', authorLike: 70 },
        { boardId: 4, date: '2023-07-03', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '연수구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [2, 3], images: './images/sky/sky4.jpg', authorLike: 70 },
        { boardId: 5, date: '2023-07-03', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 3, loactionCity: '수원시', loactionGu: '영통구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky5.jpg', authorLike: 70 },
        { boardId: 6, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [2, 3], images: './images/sky/sky6.jpg', authorLike: 70 },
        { boardId: 7, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 2], images: './images/sky/sky7.jpg', authorLike: 70 },
        { boardId: 8, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 4, loactionCity: '서귀포시', loactionGu: '성산읍', likesAcountId: [3], images: './images/sky/sky8.jpg', authorLike: 70 },
        { boardId: 9, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '연수구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky9.jpg', authorLike: 70 },
        { boardId: 10, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky10.jpg', authorLike: 70 },
        { boardId: 11, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky11.jpg', authorLike: 70 },
        { boardId: 12, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky12.jpg', authorLike: 70 },
        { boardId: 13, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '연수구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3], images: './images/sky/sky13.jpg', authorLike: 70 },
        { boardId: 14, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '서구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 2, 3], images: './images/sky/sky14.jpg', authorLike: 70 },
        { boardId: 15, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [3, 4], images: './images/sky/sky15.jpg', authorLike: 70 },
        { boardId: 16, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [2, 3], images: './images/sky/sky16.jpg', authorLike: 70 },
        { boardId: 17, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '서구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 3], images: './images/sky/sky17.jpg', authorLike: 70 },
        { boardId: 18, date: '2023-07-17', time: '09시 20분', dateTime: '20230717082510', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', weather: 'rain', temperatures: '20', yesterday: true, likesAcountId: [1, 2, 3, 4], images: './images/sky/sky18.jpg', authorLike: 70 },
    ],
    wonderBoard: [
        {
            wonderBoardId: 1, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 2, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 3, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 4, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 5, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 6, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 7, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 8, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 9, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },
        {
            wonderBoardId: 10, date: '2023-07-10', time: '09시 50분', dateTime: '20230717082520', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', images: './images/icons/wonder.png', answer: [
                {
                    answerAuthorAcountId: '',
                    answerDate: '',
                    answerTime: '',
                    answerWeather: '',
                    answerYesterday: '',
                    answerAuthorLike: '',
                    answerImage: '',
                }
            ]
        },

    ]
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addBoard(state, action) {
            const { selectedImage, authorAcountId, city, gu, date, time, dateTime, weather, temperatures, yesterday, authorLike } = action.payload
            // console.log(selectedImage);
            // console.log(authorAcountId);
            // console.log(city);
            // console.log(gu);
            // console.log(date);
            // console.log(weather);
            // console.log(temperatures);
            // console.log(yesterday);
            // console.log(authorLike);
            const boardId = state.board.length + 1
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
            console.log(JSON.parse(JSON.stringify(state.board)));
        },
        onUploaded(state, action) {
            state.onUpload = false
        },
        onBg(state, action) {
            state.onBg = action.payload
        }
    },
});


export const { addBoard, onUploaded, onBg } = boardSlice.actions
export default boardSlice.reducer