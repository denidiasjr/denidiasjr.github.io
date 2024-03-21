import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../images/profile.png';
import styled from '@emotion/styled';

const SectionContainer = styled(motion.section)`
    flex-grow: 1;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    box-sizing: border-box;
`;

const Heading = styled.h1`
    margin: 3.6rem 0;
    font-size: 3.6rem;
    font-weight: 500;
`;

const AboutGroup = styled.div`
    display: flex;
    gap: 2.4rem;
`;

const Image = styled.img`
    border-radius: 20px;
    border: 0px #37bdd1 solid;
    width: 35rem;
    height: 38.5rem;
`;

const AboutText = styled.p`
    font-size: 1.8rem;
    opacity: 0.9;
    text-align: justify;
`;

export const About = () => {
    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Heading>About</Heading>
            <AboutGroup>
                <Image src={ProfileImage} />
                <AboutText>
                    Hi there! 👋
                    <br />
                    <br /> My name is Deni, I&apos;m a brazilian currently based
                    on Porto, Portugal 🇵🇹🇧🇷
                    <br />
                    <br />
                    I started my journey through the world of the web
                    development back to 2015, when I started to work as a public
                    employee on IFMS.
                    <br />
                    <br />
                    Since then, I&apos;ve been worked in companies and projects
                    from multiple segments, such as breweries, luxury platforms
                    and condominium management. My main focus today is on
                    front-end, but I&apos;ve also worked with mobile apps and
                    backend.
                    <br />
                    <br />
                    Go to the projects tab and see all my professional and
                    personal projects! 😁
                </AboutText>
            </AboutGroup>
        </SectionContainer>
    );
};

export default About;
