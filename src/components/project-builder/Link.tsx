import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledLink = styled.a`
    color: #868686;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
`;

const LinkIcon = styled(FontAwesomeIcon)`
    font-size: 1.4rem;
`;

interface LinkProps {
    children: ReactNode;
    target: string;
    href: string;
    rel?: string;
}

export const Link = ({ children, ...props }: LinkProps) => (
    <StyledLink {...props}>
        {children} <LinkIcon icon={faArrowUpRightFromSquare} />
    </StyledLink>
);

export default Link;
