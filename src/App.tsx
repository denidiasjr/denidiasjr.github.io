import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { About, Main, Blog, Projects } from './pages';
import { Container, Header } from './components';
import styled from '@emotion/styled';

const MainContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const RouterPaths = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <MainContainer>
                <AnimatePresence>
                    <Header />
                    <RouterPaths />
                </AnimatePresence>
            </MainContainer>
        </BrowserRouter>
    );
};

export default App;
