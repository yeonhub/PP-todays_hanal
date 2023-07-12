import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterContainer = styled.div`
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    ul {
      width: 100%;
      height: 10vh;
      display: flex;
      background: lightgray;
      align-items: center;
      li {
        width: 25%;
        text-align: center;
      }
    }
  }
`

const Footer = () => {
    let localOnLogin = localStorage.getItem('localOnLogin')
    const onLogin = useSelector(state=>state.acount.onLogin)

    useEffect(()=>{
        localOnLogin = localStorage.getItem('localOnLogin')
    },[onLogin])

    return (
        <FooterContainer>
            <footer className='footer'>
                <ul>
                    <li><Link to=''>홈</Link></li>
                    <li><Link to=''>하늘</Link></li>
                    <li><Link to=''>내주변</Link></li>
                    {
                        localOnLogin === 'true' ? <li><Link to='/info'>내정보</Link></li> : <li><Link to='/login'>로그인</Link></li>
                    }
                </ul>
            </footer>
        </FooterContainer>
    );
};

export default Footer;
