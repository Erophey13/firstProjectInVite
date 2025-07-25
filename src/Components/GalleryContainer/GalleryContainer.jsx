import React from "react";
import styled from "styled-components";
import {PRIMARY_GOLD, PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";
import span from "../../Images/Rectangle.png";
import arrow from "../../Images/arrow_downward_24px.png";
import img1 from "../../Images/01.png";


const Container = styled.div`
    max-width: 1620px;
    display: flex;
    flex-direction: ${props => props.direction ? "row" : "row-reverse"};
    justify-content: center;
    align-items: center;
    gap: 170px;
    padding-left: 170px;
    box-sizing: border-box;
`;

const FirstContainer = styled.div`
    position: relative;
    z-index: 5;
    margin-left: 170px;
`;

const Figure = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 240px;
    line-height: 240px;
    color: ${PRIMARY_WHITE};
    opacity: 0.1;
    position: absolute;
    top: -120px;
    left: -163px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;
    width: 632px;
    justify-content: flex-start;
    align-items: left;
`;

const GoldImage = styled.img`
    width: 72px;
    height: 2px;
`;

const GoldText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_GOLD};
`;

const Text = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 64px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
    text-align: left;
`;

const TextSub = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    text-align: left;
`;

const ScrollText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_GOLD};
    align-items: center;
`;

const ScrollImage = styled.img`
    width: 24px;
    height: 16px;
`;

const Image = styled.img`
    width: 566px;
    height: 720px;
`;


const GalleryContainer = ({direction, image, title, subTitle, count, text}) => {
    return (
        <Container direction={direction}>
        <FirstContainer direction={direction}>
            <Figure>
                {count}
            </Figure>
            <TextContainer>
                <GoldText>
                    <GoldImage src={span}/>
                    {title}
                </GoldText>
                <Text>
                    {subTitle}
                </Text>
                <TextSub>
                    {text}
                </TextSub>
                <ScrollText>
                    read more
                    <ScrollImage src={arrow}/>
                </ScrollText>
            </TextContainer>
        </FirstContainer>
            <Image src={image}/>
        </Container>
    )
}

export default GalleryContainer