import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BiLocationPlus, BiUser, BiLogInCircle, BiHome, BiUpload } from 'react-icons/bi'
import { BsChatSquareQuote } from 'react-icons/bs'

const FooterContainer = styled.div`
.footer {
    z-index: 1000;
    border-top: 0.1dvh solid gray;
    width: 100%;
    height: 7dvh;
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
            height: 7dvh;
            text-align: center;
            align-items: center;
            line-height: 7dvh;

            a {
                width: 100%;
                height: 100%;
                color: white;
                text-decoration: none;
                ;
                font-size: 6vw;
            }
        }
    }
}
  `


const Footer = () => {
  const onLogin = useSelector(state => state.acount.onLogin)

  return (
    <>
      <FooterContainer>
        <footer className='footer'>
          <ul>
            <li><Link to='/'><BiHome /></Link></li>
            {
              onLogin === true ? <li><Link to='/myhanal'><BiUpload /></Link></li> : <li><Link to='/login'><BiUpload /></Link></li>
            }
            <li><Link to='/nearby'><BiLocationPlus /></Link></li>
            <li><Link to='/wonder'><BsChatSquareQuote /></Link></li>
            {
              onLogin === true ? <li><Link to='/info'><BiUser /></Link></li> : <li><Link to='/login'><BiLogInCircle /></Link></li>
            }
          </ul>
        </footer>
      </FooterContainer>

      {/* <div className='footerblock' style={{ width: '100%', height: '7dvh', zIndex: '100' }}></div> */}
    </>
  );
};

export default Footer;
