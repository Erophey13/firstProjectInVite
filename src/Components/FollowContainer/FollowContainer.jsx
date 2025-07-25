import React from "react";
import styled from "styled-components";
import {PRIMARY_WHITE} from "../../Constants/Colors/Colors.js";
import icon from "../../Images/Vector.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 77px;
    position: absolute;
    top: 362px;
    left: 80px;
    z-index: 5;
    gap: 80px;
`;

const Text = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: ${PRIMARY_WHITE};
    transform: rotate(90deg);
    white-space: nowrap;
`;

const Image = styled.img`
    width: 24px;
    height: 24px;
`;

const FollowContainer = () => {
    return (
        <Container>
            <Text>
                Follow us
            </Text>
            <Image src={icon}/>
        </Container>
    )
}

export default FollowContainer