import React from 'react';
import styled from "styled-components";

const HomeContainer = styled.div`
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
`

const Home = () => {
    return (
        <HomeContainer>
            
        </HomeContainer>
    );
};

export default Home;