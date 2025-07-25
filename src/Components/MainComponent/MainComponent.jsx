import React from "react";
import styled from "styled-components";
import img1 from "../../Images/01.png";
import img2 from "../../Images/02.png";
import img3 from "../../Images/03.png";
import GalleryContainer from "../GalleryContainer/GalleryContainer.jsx";
import Footer from "../Footer/Footer.jsx";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    margin: 0 auto;
    width: 1620px;
`;

const MainComponent = () => {
    return (
        <Container>
            <GalleryContainer
                count={"01"}
            direction={true}
            title={"get started"}
            subTitle={"What level of hiker are you?"}
            text={"Determining what level of hiker you are can be an important tool when planning future hikes. This " +
                "hiking " +
                "level guide will help you plan hikes according to different hike ratings set by various websites " +
                "like " +
                "All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, " +
                "expert, " +
                "or expert backpacker?"}
            image={img1}
            />
            <GalleryContainer
                count={"02"}
                direction={false}
                title={"Hiking Essentials"}
                subTitle={"Picking the right Hiking Gear!"}
                text={"The nice thing about beginning hiking is that you don’t really need any special gear, you can " +
                    "probably get away with things you already have. Let’s start with clothing. A typical mistake " +
                    "hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif " +
                    "they get sweaty or wet."}
                image={img2}
            />
            <GalleryContainer
                count={"03"}
                direction={true}
                title={"where you go is the key"}
                subTitle={"Understand Your Map & Timing"}
                text={"To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. " +
                    "Read over the guide, study the map, and have a good idea of what to expect. I like to know what " +
                    "my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I " +
                    "make a right turn at the junction.."}
                image={img3}
            />
            <Footer/>
        </Container>
    )
}

export default MainComponent