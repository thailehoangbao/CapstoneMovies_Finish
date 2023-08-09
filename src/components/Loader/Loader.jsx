import React from 'react';
// import './LoaderStyle.css';
import styled, { keyframes } from 'styled-components';
const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`
const Loading = styled.div`
    width: 100px;
    height: 100px;
    border: 5px solid ${props => props.$redColor ? "red" : "#464545"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`

export default function Loader() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
            <Loading $redColor />
        </div>
    )
}
