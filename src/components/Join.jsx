import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { join } from '../store/modules/acountSlice';

const JoinContainer = styled.div`
    .join {
        width: 100%;
        padding: 10%;
        box-sizing: border-box;
        text-align: center;
        h3 {
            font-size: 14vw;
            margin-bottom: 10%;
        }
        p {
            font-size: 4vw;
            margin-bottom: 10%;
        }
        label {
            font-size: 4vw;
        }
    }
`

const Join = () => {
    const [user, setUser] = useState({ loginId: '', loginPw: '', nickname: '' });
    const { loginId, loginPw, nickname } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeInput = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!loginId) {
            alert('아이디를 입력하세요');
            return;
        } else if (!loginPw) {
            alert('비밀번호를 입력하세요');
            return;
        } else if (!nickname) {
            alert('닉네임을 입력하세요');
            return;
        } else {
            dispatch(join(user));
            navigate('/info')
        }
    }


    return (
        <JoinContainer>
            <div className="join">
                <h3>회원가입</h3>
                <p>오늘 하날의 회원이 되어<br /> 매일 하늘을 기록하고<br />나만의 나무를 키워보세요!</p>

                <form onSubmit={onSubmit}>
                    <p><label>아이디</label>
                        <input type="text" placeholder='아이디' value={loginId} name='loginId' onChange={changeInput} /></p>
                    <p><label>비밀번호</label>
                        <input type="password" placeholder='비밀번호' value={loginPw} name='loginPw' onChange={changeInput} /></p>
                    <p><label >닉네임</label>
                        <input type="text" placeholder='닉네입' value={nickname} name='nickname' onChange={changeInput} /> </p>
                    <p>
                        <button onClick={onSubmit}>가입</button>
                    </p>
                </form>
            </div>
        </JoinContainer>
    );
};

export default Join;
