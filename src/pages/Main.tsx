import React from 'react';
import styled from '@emotion/styled';
import { SocialMediaIcons, TechnologyName } from '../components';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

const SectionContainer = styled(motion.section)`
    flex-grow: 1;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const NameSpan = styled.span`
    color: #37bdd1;
`;

const FirstParagraph = styled.p`
    color: #c2e7d9;
    font-size: 2.4rem;

    @media (max-width: 871px) {
        font-size: calc(1.5vw + 1.2rem);
    }
`;

const SecondParagraph = styled.p`
    font-size: 6.4rem;
    font-weight: 500;

    @media (max-width: 871px) {
        font-size: calc(1.5vw + 4.8rem);
    }
`;

const ThirdParagraph = styled.p`
    font-size: 3.6rem;
    display: inline-block;
    opacity: 0.6;

    @media (max-width: 871px) {
        font-size: calc(1.5vw + 2.4rem);
    }
`;

export const Main = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <FirstParagraph>{t('main.hello_world')}</FirstParagraph>
            <SecondParagraph>
                <Trans
                    i18nKey={'main.my_name_is'}
                    components={{ highlight: <NameSpan /> }}
                    values={{
                        myName: 'Deni Junior',
                    }}
                />
                <br />
            </SecondParagraph>
            <ThirdParagraph>
                <Trans
                    i18nKey={'main.experienced_with'}
                    components={{ technology: <TechnologyName /> }}
                />
            </ThirdParagraph>
            <SocialMediaIcons />
        </SectionContainer>
    );
};

export default Main;
