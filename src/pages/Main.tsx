import React from 'react';
import styled from '@emotion/styled';
import { SocialMediaIcons, TechnologyName } from '../components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
    flex-grow: 1;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const NameSpan = styled.span`
    color: #37bdd1;
`;

const FirstParagraph = styled.p`
    color: #c2e7d9;
    font-size: 2.4rem;
`;

const SecondParagraph = styled.p`
    font-size: 6.4rem;
    font-weight: 500;
`;

const ThirdParagraph = styled.p`
    font-size: 3.6rem;
    display: inline-block;
    opacity: 0.6;
`;

export const Main = () => {
    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <FirstParagraph>Hello world!</FirstParagraph>
            <SecondParagraph>
                My name is <NameSpan>Deni Junior</NameSpan>
                <br />
            </SecondParagraph>
            <ThirdParagraph>
                I&apos;m a software engineer experienced with <TechnologyName />
                .
            </ThirdParagraph>
            <SocialMediaIcons />
        </SectionContainer>
    );
};

export default Main;
