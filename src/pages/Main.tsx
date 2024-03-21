import React from 'react';
import { Header, MainSection, Container } from '../components';
import styled from '@emotion/styled';

const MainContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = () => {
    return (
        <MainContainer>
            <Header />
            <MainSection />
        </MainContainer>
    );
};

export default Main;
