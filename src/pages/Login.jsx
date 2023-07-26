import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { login } from '../store/modules/acountSlice';
import { useSelector } from 'react-redux';
import { AiOutlineSmile } from 'react-icons/ai'

const LoginContainer = styled.div`
  .login {
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
    p {

            line-height: 6vw;
            text-align:center;
            font-size: 4vw;
            margin-bottom: 5%;
     
    }
    form {
      label {
        display: block;
        text-align: center;
      }
      input {
        display: block;
        margin: auto;
        width: 80%;
        height: 5dvh;
        margin-bottom: 2dvh;
        padding: 2vw;
        box-sizing: border-box;
        outline: none;
        font-size: 5vw;
        &:nth-child(2) {
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
        font-weight: 700;


            background: gray;

        &:last-child {
            background: tan;
        }
      }
    }
  }
`;

const Login = () => {
    const [user, setUser] = useState({ loginId: '', loginPw: '' });
    const { loginId, loginPw } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = useSelector(state => state.acount.onLogin);

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
        if (!loginId) {
            alert('아이디를 입력하세요');
            return;
        } else if (!loginPw) {
            alert('비밀번호를 입력하세요');
            return;
        } else {
            dispatch(login(user));
        }
    }

    useEffect(() => {
        if (onLogin) {
            navigate('/info');
        }
    }, [onLogin]);

    return (
        <LoginContainer>
            <div className='login'>
                <div className="logo">
                    <img src="./images/logo/hanal_logo_b.png" alt="hanal" />
                </div>
                <p>하날은 하늘의 옛우리말 입니다!</p>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='아이디' value={loginId} name='loginId' onChange={changeInput} maxLength={9} />
                    <input type="password" placeholder='비밀번호' value={loginPw} name='loginPw' onChange={changeInput}maxLength={19}  />
                    <button onClick={onSubmit}>로그인</button>
                    <button onClick={() => navigate('/join')}>회원가입</button>
                </form>
            </div>
        </LoginContainer>
    );
};

export default Login;
