import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Heading } from './project-builder';
import styled from '@emotion/styled';

interface ProjectImageProps {
    background: string;
    title: string;
    children: ReactNode;
    src: string;
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

const ProductImageContent = styled.div<{ background: string }>`
    width: 100%;
    height: 250px;
    background-color: ${({ background }) => background};
    text-align: center;
    font-size: 2.4rem;

    > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const ProjectContainer = styled.div`
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

const CloseButton = styled(FontAwesomeIcon)`
    float: right;
    cursor: pointer;
    margin-top: 2.4rem;
`;

const ProjectContent = styled(motion.div)`
    position: fixed;
    height: 100%;
    width: 50%;
    right: 0;
    background-color: #131e37;
    padding: 0 2.4rem;
    font-size: 1.6rem;
    box-sizing: border-box;
    overflow: auto;

    @media (max-width: 871px) {
        width: 100%;
    }
`;

export const ProjectImage = ({
    title,
    background,
    children,
    src,
}: ProjectImageProps) => {
    const [isProjectVisible, setProjectVisible] = useState(false);

    const handleClick = () => {
        setProjectVisible(true);
    };

    const handleClose = (event: React.MouseEvent) => {
        event.stopPropagation();
        setProjectVisible(false);
    };

    const renderProject = () =>
        createPortal(
            <ProjectContainer>
                <OpacityBlock onClick={handleClose} />
                <ProjectContent
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <CloseButton icon={faClose} onClick={handleClose} />
                    <Heading>{title}</Heading>
                    <ProductImageContent background={background}>
                        <img src={src} />
                    </ProductImageContent>
                    {children}
                </ProjectContent>
            </ProjectContainer>,
            document.body,
        );

    return (
        <ImageContainer background={background} onClick={handleClick}>
            {src && <img src={src} />}
            {isProjectVisible && renderProject()}
        </ImageContainer>
    );
};

export default ProjectImage;
