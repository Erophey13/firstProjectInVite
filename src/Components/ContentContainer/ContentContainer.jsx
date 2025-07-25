import React from "react";
import styled from "styled-components";
import MainContent from "../MainComponent/MainComponent.jsx";
import {PRIMARY_BLUE} from "../../Constants/Colors/Colors.js";


const Container = styled.div`
    height: 3280px;
    width: 1920px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 20;
`;

const WraperTwoContainer = styled.div`
    position: absolute;
    top: -400px;
    left: 55px;
`;

const ContentContainerWraper = styled.div`
    min-width: 1920px;
    min-height: 3000px;
    background-color: ${PRIMARY_BLUE};
    position: relative;
`;

const ContentContainer = () => {
    return (
        <Container>
            <ContentContainerWraper>
                <WraperTwoContainer>
                <MainContent/>
                </WraperTwoContainer>
            </ContentContainerWraper>
        </Container>
    )
}

export default ContentContainer