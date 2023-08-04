import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { join } from '../store/modules/acountSlice';

const JoinContainer = styled.div`
    .join {
        width: 100%;
        padding: 10%;
        box-sizing: border-box;
        .logo {
        margin: auto;
        text-align: center;
        margin-bottom: 5dvh;
        img {
            margin: 2dvh 0;
            width: 50%;
        }
    }
        h3 {
            font-size: 14vw;
            margin-bottom: 10%;
        }
        p {
            line-height: 6vw;
            text-align:center;
            font-size: 4vw;
            margin-bottom: 5%;
        }
        input {
            display: block;
        margin: auto;
        width: 80%;
        height: 5dvh;
        padding: 2vw;
        box-sizing: border-box;
        outline: none;
        font-size: 5vw;
            margin-bottom: 5%;
        &:nth-child(4) {
            margin-bottom: 10dvh;
        }
    }
        button {
        display: block;
        margin: auto;
        width: 80%;
        height: 5dvh;
        margin-bottom: 2dvh;
        font-size: 4vw;
        border-radius: 5vw;
            background: gray;
            font-weight: 700;
        &:last-child {
            background: tan;
        }
      }
    }
`

const Join = () => {
    const [user, setUser] = useState({ loginId: '', loginPw: '', nickname: '', loginPwCheck: '' });
    const { loginId, loginPw, nickname, loginPwCheck } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const acount = useSelector(state => state.acount)

    const changeInput = e => {
        const { name, value } = e.target;
        if (name === 'loginId') {
            const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, '');
            setUser({
                ...user,
                [name]: alphanumeric
            });

        } else {
            setUser({
                ...user,
                [name]: value
            });
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('localOnJoin', false);
        if (!loginId) {
            alert('아이디를 입력하세요');
            return;
        } else if (!loginPw) {
            alert('비밀번호를 입력하세요');
            return;
        } else if (!nickname) {
            alert('닉네임을 입력하세요');
            return;
        } else if (loginPw !== loginPwCheck) {
            alert('비밀번호가 동일하지 않습니다')
            return;
        } else {
            dispatch(join(user));
        }
    }
    useEffect(() => {
        if (acount.onJoin) {
            navigate('/');
        }
    }, [acount.onJoin, navigate]);



    return (
        <JoinContainer>
            <div className="join">
                <div className="logo">
                    <img src="./images/logo/hanal_logo_b.png" alt="hanal" />
                </div>
                <p>오늘 하날의 회원이 되어<br /> 매일 하늘을 기록하고<br />나만의 나무를 키워보세요!</p>

                <form onSubmit={onSubmit}>

                    <input type="text" placeholder='아이디' value={loginId} name='loginId' onChange={changeInput} maxLength={9} />

                    <input type="password" placeholder='비밀번호' value={loginPw} name='loginPw' onChange={changeInput} maxLength={19} />

                    <input type="password" placeholder='비밀번호 확인' value={loginPwCheck} name='loginPwCheck' onChange={changeInput} />

                    <input type="text" placeholder='닉네임' value={nickname} name='nickname' onChange={changeInput} maxLength={7} />

                    <button onClick={onSubmit}>회원가입</button>

                </form>
            </div>
        </JoinContainer>
    );
};

export default Join;
