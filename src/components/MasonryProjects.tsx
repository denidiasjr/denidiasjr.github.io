import React from 'react';
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

const listOfProjects = [
    {
        background: 'white',
        image: ImageFarfetch,
    },
    {
        background: '#fdff00',
        image: ImageBees,
    },
    {
        background: '#1034f2',
        image: ImageSuperlogica,
    },
    {
        background: '#A6379E',
        image: ImageVenturus,
    },
    {
        background: '#00541e',
        image: ImageHeineken,
    },
    {
        background: 'black',
        image: ImageSuperiorIndustries,
    },
    {
        background: '#6231eb',
        image: ImageRecantoCriativo,
    },
    {
        background: 'white',
        image: ImageSIICUSP,
    },
    {
        background: 'white',
        image: Image10i9,
    },
    {
        background: 'white',
        image: ImageIFMS,
    },
];

export const MasonryProjects = () => {
    return (
        <Grid>
            {listOfProjects.map(({ background, image }, index) => {
                return (
                    <GridItem
                        key={image}
                        index={index + 1}
                        height={getRandomHeight()}
                    >
                        <ProjectImage background={background} src={image} />
                    </GridItem>
                );
            })}
        </Grid>
    );
};

export default MasonryProjects;
