import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../images/profile.png';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const SectionContainer = styled(motion.section)`
    flex-grow: 1;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    box-sizing: border-box;
`;

const Heading = styled.h1`
    margin: 3.6rem 0;
    font-size: 3.6rem;
    font-weight: 500;
`;

const AboutGroup = styled.div`
    display: flex;
    gap: 3.6rem;

    @media (max-width: 871px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 2.4rem;
    }
`;

const Image = styled.img`
    border-radius: 20px;
    border: 0px #37bdd1 solid;
    width: 35rem;
    height: 38.5rem;
`;

const AboutText = styled.p`
    font-size: 1.8rem;
    opacity: 0.9;
    text-align: justify;
`;

export const About = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Heading>About</Heading>
            <AboutGroup>
                <Image src={ProfileImage} />
                <AboutText>
                    {t('about.hi_there')} 👋
                    <br />
                    <br />
                    {t('about.my_name_is')} 🇵🇹🇧🇷
                    <br />
                    <br />
                    {t('about.my_journey_started')}
                    <br />
                    <br />
                    {t('about.worked_in_companies')}
                    <br />
                    <br />
                    {t('about.go_to_projects')} 😁
                </AboutText>
            </AboutGroup>
        </SectionContainer>
    );
};

export default About;
