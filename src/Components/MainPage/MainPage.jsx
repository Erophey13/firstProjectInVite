import React from "react";
import styled from "styled-components";
import ContentContainer from "../ContentContainer/ContentContainer.jsx";
import BackgroundComponent from "../BackgroundComponent/BackgroundComponent.jsx";
import Header from "../Header/Header.jsx";
import CenterContainer from "../CenterContainer/CenterContainer.jsx";
import FollowContainer from "../FollowContainer/FollowContainer.jsx";
import StartContainer from "../StartContainer/StartContainer.jsx";


const PageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1920px;
`;

const PageContent = styled(ContentContainer)`
    position: absolute;
    left: 0;
    top: -850px;
`;

const MainPage = () => {
    return (
        <PageContainer>
            <Header/>
            <FollowContainer/>
            <CenterContainer/>
            <StartContainer/>
            <BackgroundComponent/>
            <PageContent/>
        </PageContainer>
    )
}

export default MainPage