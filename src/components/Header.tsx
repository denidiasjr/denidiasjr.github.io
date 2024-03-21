import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
    font-size: 2.4rem;
    font-weight: 600;
    padding-top: 1.6rem;
    display: flex;
    gap: 2.4rem;
`;

const Link = styled.a`
    text-decoration: 1px underline transparent;
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem;
    transition: all 500ms ease;
    border-radius: 8px;
    opacity: 0.8;

    &:hover {
        background-color: #1e3260;
        opacity: 1;
    }
`;

export const Header = () => {
    return (
        <ContainerHeader>
            <Link href='#'>About</Link>
            <Link href='#'>Projects</Link>
            <Link href='#'>Blog</Link>
        </ContainerHeader>
    );
};

export default Header;
