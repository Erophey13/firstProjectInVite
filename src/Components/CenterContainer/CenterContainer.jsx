import React from "react";
import styled from "styled-components";
import {PRIMARY_GOLD, PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";
import icon from "../../Images/Rectangle.png";
import scroll from "../../Images/arrow_downward_24px.png";



const WraperContainer = styled.div`
    height: 310px;
    top: 340px;
    left: 500px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    position: absolute;
    z-index: 5;
    width: 1050px;
`;

const GoldContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

const GoldImage = styled.img`
    width: 72px;
    height: 2px;
`;

const GoldText = styled.p`
    margin: 0;
    font-weight: 800;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_GOLD};
`;

const Text = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 88px;
    line-height: 100%;
    color: ${PRIMARY_GOLD};
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
    color: ${PRIMARY_WHITE};
`;

const ScrollImage = styled.img`
    width: 16px;
    height: 24px;
`;


const CenterContainer = () => {
    return (
        <WraperContainer>
            <GoldContainer>
            <GoldImage src={icon}/>
            <GoldText>
                A Hiking guide
            </GoldText>
            </GoldContainer>
            <Text>
                Be prepared for the Mountains and beyond!
            </Text>
            <ScrollText>
                scroll down
                <ScrollImage src={scroll}/>
            </ScrollText>
        </WraperContainer>
    )
}

export default CenterContainer