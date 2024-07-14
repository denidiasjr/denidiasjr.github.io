import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const SideMenuContainer = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
`;

const OpacityBlock = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    background-color: black;
`;

const SideMenuContent = styled(motion.div)`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: #131e37;
    padding: 0 2.4rem;
    font-size: 1.6rem;
    box-sizing: border-box;
    overflow: auto;
`;

const CloseButton = styled(FontAwesomeIcon)`
    float: right;
    cursor: pointer;
    margin-top: 2.4rem;
`;

const StyledLink = styled(Link)`
    text-decoration: 1px underline transparent;
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem;
    transition: all 500ms ease;
    border-radius: 8px;
    opacity: 0.8;
    text-align: center;

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

const MobileMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
`;

const links = {
    '/': <FontAwesomeIcon icon={faHome} />,
    '/about': 'About',
    '/projects': 'Projects',
    '/blog': 'Blog',
};

interface SideMenuProps {
    onClose: VoidFunction;
}

export const SideMenu = ({ onClose }: SideMenuProps) => {
    const renderedLinks = Object.entries(links).map(([path, content]) => {
        const className = path === location.pathname ? 'selected' : '';
        return (
            <StyledLink
                onClick={onClose}
                key={path}
                to={path}
                className={className}
            >
                {content}
            </StyledLink>
        );
    });

    renderedLinks.push(
        <ResumeButton
            to={{ pathname: '/Deni_CV.pdf' }}
            target='_blank'
            download
        >
            Resume <FontAwesomeIcon icon={faDownload} />
        </ResumeButton>,
    );

    return createPortal(
        <SideMenuContainer>
            <OpacityBlock />
            <SideMenuContent
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ x: '-100%' }}
            >
                <CloseButton icon={faClose} onClick={onClose} />
                <MobileMenuLinks>{renderedLinks}</MobileMenuLinks>
            </SideMenuContent>
        </SideMenuContainer>,
        document.body,
    );
};

export default SideMenu;
