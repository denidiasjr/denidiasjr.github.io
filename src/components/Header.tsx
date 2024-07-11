import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import { useResponsive } from '../hooks/useResponsive';
import SideMenu from './SideMenu';

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

    const resumeStyles = {
        marginLeft: 'auto',
        background: '#6231eb',
    };

    renderedLinks.push(
        <StyledLink
            to={{ pathname: '/Deni_CV.pdf' }}
            target='_blank'
            download
            style={resumeStyles}
        >
            Resume <FontAwesomeIcon icon={faDownload} />
        </StyledLink>,
    );

    return <ContainerHeader>{renderedLinks}</ContainerHeader>;
};

export default Header;
