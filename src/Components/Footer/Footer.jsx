import React from "react";
import styled from "styled-components";
import {PRIMARY_GOLD, PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";


const Container = styled.div`
    max-width: 1462px;
    min-width: 1462px;
    height: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    gap: 24px;
    width: 500px;
    height: 280px;
    margin-right: 400px;
    
`;

const TextMNTN = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
`;

const Text = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: ${PRIMARY_WHITE};
    text-align: left;
`;

const GreyText = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: ${PRIMARY_WHITE};
    opacity: 0.5;
    margin-top: 122px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const  WraperText = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${PRIMARY_GOLD};
    text-align: left;
`;

const SubText = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: ${PRIMARY_WHITE};
    text-align: left;
`;




const Footer = () => {
    return (
        <Container>
            <TextContainer>
                <TextMNTN>
                    MNTN
                </TextMNTN>
                <Text>
                    Get out there & discover your next <br/> slope, mountain & destination!
                </Text>
                <GreyText>
                    Copyright 2023 MNTN, Inc. Terms & Privacy
                </GreyText>
            </TextContainer>
            <ListContainer>
                <WraperText>
                    More on The Blog
                </WraperText>
                <SubText>
                    About MNTN
                </SubText>
                <SubText>
                    Contributors & Writers
                </SubText>
                <SubText>
                    Write For Us
                </SubText>
                <SubText>
                    Contact Us
                </SubText>
                <SubText>
                    Privacy Policy
                </SubText>
            </ListContainer>
            <ListContainer>
                <WraperText>
                    More on MNTN
                </WraperText>
                <SubText>
                    The Team
                </SubText>
                <SubText>
                    Jobs
                </SubText>
                <SubText>
                    Press
                </SubText>
            </ListContainer>
        </Container>
    )
}

export default Footer