import React from "react";
import styled from "styled-components";
import imgClouds from "../../Images/HG.png";
import imgMountains from "../../Images/MG.png";
import imgHill from "../../Images/VG.png";


const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 2100px;
    overflow: hidden;
`;

const Clouds = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${imgClouds});
    //mask-image: linear-gradient(135deg, rgba(11, 29, 38, 0.10) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.0) 70%);
`;

const GradientSpan = styled.div`
    min-height: 700px;
    min-width: 1920px;
    background: linear-gradient(0deg, rgba(11, 29, 38, 1) 0%, rgba(11, 29, 38, 0.5) 30%, rgba(11, 29, 38, 0) 70%);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 4;
`;

const Mountains = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 2;
`;

const Hill = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: contain;
    z-index: 3;
`;



const BackgroundComponent = () => {
    return (
        <>
        <Container>
            <Clouds>
            </Clouds>
            <Mountains src={imgMountains}/>
            <Hill src={imgHill}/>
            <GradientSpan/>
        </Container>
        </>
    )
}

export default BackgroundComponent