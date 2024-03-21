import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ProjectImageProps {
    background: string;
    children?: ReactNode;
    src?: string;
}

const ImageContainer = styled.div<{ background: string }>`
    width: 100%;
    height: 100%;
    background-color: ${({ background }) => background};
    text-align: center;
    font-size: 2.4rem;

    > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const ProjectImage = ({
    background,
    src,
    children,
}: ProjectImageProps) => {
    return (
        <ImageContainer background={background}>
            {src && <img src={src} />}
            {children}
        </ImageContainer>
    );
};

export default ProjectImage;
