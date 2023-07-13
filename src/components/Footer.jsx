import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterContainer = styled.div`
  .footer {
    border-top: 1px solid gray;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    ul {
      width: 100%;

      display: flex;
      justify-content: space-around;
      background: black;
      li {
        width: 20%;
        height: 7vh;
        text-align: center;
        align-items: center;
        line-height: 7vh;
        a {
          width: 100%;
          height: 100%;
          color: white;
          text-decoration: none;;
        }
      }
    }
  }
`

const Footer = () => {
  let localOnLogin = localStorage.getItem('localOnLogin')
  const onLogin = useSelector(state => state.acount.onLogin)

  useEffect(() => {
    localOnLogin = localStorage.getItem('localOnLogin')
  }, [onLogin])

  return (
    <FooterContainer>
      <footer className='footer'>
        <ul>
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/myhanal'>내하날</Link></li>
          <li><Link to='/nearby'>내주변</Link></li>
          {
            localOnLogin === 'true' ? <li><Link to='/info'>내정보</Link></li> : <li><Link to='/login'>로그인</Link></li>
          }
        </ul>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
