import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

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

const Heading = styled.h1`
    font-size: 6.4rem;
    font-weight: 500;
`;

export const About = () => {
    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Heading>About</Heading>
        </SectionContainer>
    );
};

export default About;
