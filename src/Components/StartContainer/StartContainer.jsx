import React from "react";
import styled from "styled-components";
import {PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";


const Container = styled.div`
    width: 77px;
    height: 240px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 5;
    right: 99px;
    top: 325px;
`;

const StartContent = styled.div`
    display: flex;
    padding: 16px 16px;
    box-sizing: border-box;
    border-right: 2px solid ${PRIMARY_WHITE};
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
`;



const StartContainer = () => {
    return (
        <Container>
            <StartContent>
                Start
            </StartContent>
            <StartContent>
                1
            </StartContent>
            <StartContent>
                2
            </StartContent>
            <StartContent>
                3
            </StartContent>
        </Container>
    )
}

export default StartContainer