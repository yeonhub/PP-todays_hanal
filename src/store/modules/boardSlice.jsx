import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addBoard: {},
    board: [
        { boardId: 1, date: '2023-07-01', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '연수구', likesAcountId: [1, 2, 3], images: './images/sky/sky1.jpg' },
        { boardId: 2, date: '2023-07-01', authorAcountId: 2, loactionCity: '서울특별시', loactionGu: '광진구', likesAcountId: [1, 2], images: './images/sky/sky2.jpg' },
        { boardId: 3, date: '2023-07-02', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [1, 3], images: './images/sky/sky3.jpg' },
        { boardId: 4, date: '2023-07-03', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '연수구', likesAcountId: [2, 3], images: './images/sky/sky4.jpg' },
        { boardId: 5, date: '2023-07-03', authorAcountId: 3, loactionCity: '수원시', loactionGu: '영통구', likesAcountId: [3], images: './images/sky/sky5.jpg' },
        { boardId: 6, date: '2023-07-10', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [2, 3], images: './images/sky/sky6.jpg' },
        { boardId: 7, date: '2023-07-10', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [1, 2], images: './images/sky/sky7.jpg' },
        { boardId: 8, date: '2023-07-10', authorAcountId: 4, loactionCity: '서귀포시', loactionGu: '성산읍', likesAcountId: [3], images: './images/sky/sky8.jpg' },
        { boardId: 9, date: '2023-07-10', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '연수구', likesAcountId: [3], images: './images/sky/sky9.jpg' },
        { boardId: 10, date: '2023-07-10', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [3], images: './images/sky/sky10.jpg' },
        { boardId: 11, date: '2023-07-10', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [3], images: './images/sky/sky11.jpg' },
        { boardId: 12, date: '2023-07-10', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [3], images: './images/sky/sky12.jpg' },
        { boardId: 13, date: '2023-07-10', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '연수구', likesAcountId: [3], images: './images/sky/sky13.jpg' },
        { boardId: 14, date: '2023-07-10', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '서구', likesAcountId: [1, 2, 3], images: './images/sky/sky14.jpg' },
        { boardId: 15, date: '2023-07-10', authorAcountId: 1, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [3, 4], images: './images/sky/sky15.jpg' },
        { boardId: 16, date: '2023-07-10', authorAcountId: 3, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [2, 3], images: './images/sky/sky16.jpg' },
        { boardId: 17, date: '2023-07-10', authorAcountId: 2, loactionCity: '인천광역시', loactionGu: '서구', likesAcountId: [1, 3], images: './images/sky/sky17.jpg' },
        { boardId: 18, date: '2023-07-10', authorAcountId: 4, loactionCity: '인천광역시', loactionGu: '남동구', likesAcountId: [1, 2, 3, 4], images: './images/sky/sky18.jpg' },
    ]

}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
    },
});


export const { } = boardSlice.actions
export default boardSlice.reducer