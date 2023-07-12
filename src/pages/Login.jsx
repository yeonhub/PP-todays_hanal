import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { login } from '../store/modules/acountSlice';
import { useSelector } from 'react-redux';

const LoginContainer = styled.div`
  .login {
    width: 100%;
    margin: auto;
    p {
      text-align: center;
    }
    form {
      label {
        display: block;
        text-align: center;
      }
      input {
        display: block;
        margin: auto;
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
                <p>로그인 하십씨오</p>
                <form onSubmit={onSubmit}>
                    <label>아이디</label>
                    <input type="text" placeholder='아이디' value={loginId} name='loginId' onChange={changeInput} />
                    <label>비밀번호</label>
                    <input type="password" placeholder='비밀번호' value={loginPw} name='loginPw' onChange={changeInput} />
                </form>
                <p>
                    <button onClick={onSubmit}>로그인</button>
                    <button onClick={() => navigate('/join')}>회원가입</button>
                </p>
            </div>
        </LoginContainer>
    );
};

export default Login;
