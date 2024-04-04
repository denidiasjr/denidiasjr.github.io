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
    justify-content: start;
    box-sizing: border-box;
`;

const Heading = styled.h1`
    margin: 3.6rem 0;
    font-size: 3.6rem;
    font-weight: 500;
`;

const Text = styled.p`
    font-size: 1.8rem;
    opacity: 0.9;
    text-align: justify;
`;

export const Blog = () => {
    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Heading>Blog</Heading>
            <Text>Coming soon! 🖥️</Text>
        </SectionContainer>
    );
};

export default Blog;
