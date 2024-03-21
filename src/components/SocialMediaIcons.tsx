import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDev,
    faGithub,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';

const IconsContainer = styled.div`
    display: flex;
    gap: 2.4rem;
    padding-top: 2.4rem;
    justify-content: left;
`;

const IconLink = styled.a`
    opacity: 1;
    transition: all 500ms ease;
    font-size: 2.8rem;

    &:hover {
        opacity: 0.6;
    }

    svg {
        color: white;
    }
`;

export const SocialMediaIcons = () => {
    return (
        <IconsContainer>
            <IconLink
                href='https://github.com/denidiasjr'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithub} />
            </IconLink>
            <IconLink
                href='https://linkedin.com/in/denidiasjr'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </IconLink>
            <IconLink
                href='https://dev.to/denidiasjr'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faDev} />
            </IconLink>
        </IconsContainer>
    );
};

export default SocialMediaIcons;
