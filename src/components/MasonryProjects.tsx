import React, { ReactNode } from 'react';
import {
    BEES,
    DezINove,
    Farfetch,
    Heineken,
    Superlogica,
    Venturus,
} from './projects';
import ImageFarfetch from '../images/projects/farfetch.png';
import ImageBees from '../images/projects/bees.png';
import ImageVenturus from '../images/projects/venturus.png';
import ImageHeineken from '../images/projects/heineken.png';
import ImageSuperlogica from '../images/projects/superlogica.png';
import ImageSuperiorIndustries from '../images/projects/superior-industries.png';
import ImageSIICUSP from '../images/projects/siicusp.png';
import ImageIFMS from '../images/projects/ifms.png';
import Image10i9 from '../images/projects/10i9.png';
import ImageRecantoCriativo from '../images/projects/recanto-criativo.png';
import styled from '@emotion/styled';
import ProjectImage from './ProjectImage';

const Grid = styled.div`
    columns: 6 250px;
    column-gap: 1rem;
`;

const GridItem = styled.div<{ index: number; height: number }>`
    min-width: 150px;
    width: 100%;
    background: #ec985a;
    color: white;
    margin: 0 1rem 1rem 0;
    display: inline-block;

    &:nth-child(${({ index }) => index}) {
        height: ${({ height }) => height}px;
    }

    &:hover {
        transition: all 0.3s;
        transform: scale(1.04);
        cursor: pointer;
    }
`;

const getRandomInt = (max: number) => Math.floor(Math.random() * max);
const getRandomHeight = () => getRandomInt(100) + 250;

interface Project {
    title: string;
    background: string;
    image: string;
    content: ReactNode;
}

const listOfProjects: Project[] = [
    {
        title: 'Farfetch',
        background: 'white',
        image: ImageFarfetch,
        content: <Farfetch />,
    },
    {
        title: 'BEES',
        background: '#fdff00',
        image: ImageBees,
        content: <BEES />,
    },
    {
        title: 'Superlogica',
        background: '#1034f2',
        image: ImageSuperlogica,
        content: <Superlogica />,
    },
    {
        title: 'Venturus',
        background: '#A6379E',
        image: ImageVenturus,
        content: <Venturus />,
    },
    {
        title: 'Heineken',
        background: '#00541e',
        image: ImageHeineken,
        content: <Heineken />,
    },
    {
        title: 'Superior Industries',
        background: 'black',
        image: ImageSuperiorIndustries,
        content: <></>,
    },
    {
        title: 'Recanto Criativo',
        background: '#6231eb',
        image: ImageRecantoCriativo,
        content: <></>,
    },
    {
        title: 'SIICUSP',
        background: 'white',
        image: ImageSIICUSP,
        content: <></>,
    },
    {
        title: '10i9',
        background: 'white',
        image: Image10i9,
        content: <DezINove />,
    },
    {
        title: 'IFMS',
        background: 'white',
        image: ImageIFMS,
        content: <></>,
    },
];

export const MasonryProjects = () => {
    return (
        <Grid>
            {listOfProjects.map(
                ({ title, background, image, content }, index) => {
                    return (
                        <GridItem
                            key={title}
                            index={index + 1}
                            height={getRandomHeight()}
                        >
                            <ProjectImage
                                title={title}
                                background={background}
                                src={image}
                            >
                                {content}
                            </ProjectImage>
                        </GridItem>
                    );
                },
            )}
        </Grid>
    );
};

export default MasonryProjects;
