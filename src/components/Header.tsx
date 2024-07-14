import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import { useResponsive } from '../hooks/useResponsive';
import SideMenu from './SideMenu';
import LanguageDropdown from './LanguageDropdown';

const ContainerHeader = styled.header`
    font-size: 2.4rem;
    font-weight: 600;
    padding-top: 1.6rem;
    display: flex;
    gap: 2.4rem;
`;

const MenuButton = styled(FontAwesomeIcon)`
    margin-left: -0.8rem;
    text-decoration: 1px underline transparent;
    padding: 1.2rem;
    transition: all 500ms ease;
    border-radius: 8px;
    opacity: 0.8;

    &.selected,
    &:hover {
        background-color: #1e3260;
        opacity: 1;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: 1px underline transparent;
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem;
    transition: all 500ms ease;
    border-radius: 8px;
    opacity: 0.8;

    &.selected,
    &:hover {
        background-color: #1e3260;
        opacity: 1;
    }
`;

const ResumeButton = styled(StyledLink)`
    background: #6231eb;

    &:hover {
        background-color: #6231eb;
    }
`;

const ContainerRightAligned = styled.div`
    margin-left: auto;
    display: flex;
    gap: 2.4rem;
`;

const links = {
    '/': <FontAwesomeIcon icon={faHome} />,
    '/about': 'About',
    '/projects': 'Projects',
    '/blog': 'Blog',
};

export const Header = () => {
    const location = useLocation();
    const { isMobile } = useResponsive();
    const [isSideMenuOpen, showSideMenu] = useState(false);

    const handleSideMenu = () => {
        showSideMenu(!isSideMenuOpen);
    };

    useEffect(() => {
        if (!isMobile) {
            showSideMenu(false);
        }
    }, [isMobile]);

    if (isMobile) {
        return (
            <ContainerHeader>
                <MenuButton icon={faBars} onClick={handleSideMenu} />
                {isSideMenuOpen && <SideMenu onClose={handleSideMenu} />}
                <ContainerRightAligned>
                    <LanguageDropdown />
                </ContainerRightAligned>
            </ContainerHeader>
        );
    }

    const renderedLinks = Object.entries(links).map(([path, content]) => {
        const className = path === location.pathname ? 'selected' : '';
        return (
            <StyledLink key={path} to={path} className={className}>
                {content}
            </StyledLink>
        );
    });

    return (
        <ContainerHeader>
            {renderedLinks}
            <ContainerRightAligned>
                <LanguageDropdown />
                <ResumeButton
                    key={'resume'}
                    to={{ pathname: '/Deni_CV.pdf' }}
                    target='_blank'
                    download
                >
                    Resume <FontAwesomeIcon icon={faDownload} />
                </ResumeButton>
            </ContainerRightAligned>
        </ContainerHeader>
    );
};

export default Header;
