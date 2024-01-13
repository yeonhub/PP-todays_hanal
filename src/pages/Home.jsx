import React, { Profiler } from 'react';
import styled from "styled-components";
import Todays from '../components/Todays';

const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) => {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
};

const Home = () => {
    return (
        <Profiler id="Home" onRender={onRenderCallback}>
            <Todays />
        </Profiler>
    );
};

export default Home;