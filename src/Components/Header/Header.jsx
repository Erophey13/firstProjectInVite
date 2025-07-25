import React from "react";
import styled from "styled-components";
import {PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";
import img1 from "../../Images/cart.png";



const AccountTextContainer = styled.div`
    width: 1760px;
    margin-top: 64px;
    margin-left: 80px;
    margin-right: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 5;
`;

const TextMNTN = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
`;

const TextCenterContainer = styled.div`
    width: 283px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CenterText = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
`;

const AccountContainer = styled.div`
    width: 98px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const AccountImage = styled.img`
    width: 24px;
    height: 24px;
`;

const AccountText = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 17px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
`;



const Header = () => {
    return (
        <AccountTextContainer>
            <TextMNTN>
                MNTN
            </TextMNTN>
            <TextCenterContainer>
                <CenterText>
                    Equipment
                </CenterText>
                <CenterText>
                    About us
                </CenterText>
                <CenterText>
                    Blog
                </CenterText>
            </TextCenterContainer>
            <AccountContainer>
                <AccountImage src={img1}/>
                <AccountText>
                    Account
                </AccountText>
            </AccountContainer>
        </AccountTextContainer>
    )
}

export default Header