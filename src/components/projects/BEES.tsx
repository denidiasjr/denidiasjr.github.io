import React from 'react';
import { Heading, List, ListItem, Text } from '../project-builder';
import { useTranslation } from 'react-i18next';

export const BEES = () => {
    const { t } = useTranslation();

    return (
        <>
            <Text>{t('projects.bees.description')}</Text>
            <Heading as='h2'>
                {t('projects.bees.coordinator.description')}
            </Heading>
            <List>
                <ListItem>{t('projects.bees.coordinator.firstItem')}</ListItem>
                <ListItem>{t('projects.bees.coordinator.secondItem')}</ListItem>
                <ListItem>{t('projects.bees.coordinator.thirdItem')}</ListItem>
                <ListItem>{t('projects.bees.coordinator.fourthItem')}</ListItem>
            </List>
            <Heading as='h2'>{t('projects.bees.engineer.description')}</Heading>
            <List>
                <ListItem>{t('projects.bees.engineer.firstItem')}</ListItem>
                <ListItem>{t('projects.bees.engineer.secondItem')}</ListItem>
                <ListItem>{t('projects.bees.engineer.thirdItem')}</ListItem>
                <ListItem>{t('projects.bees.engineer.fourthItem')}</ListItem>
            </List>
        </>
    );
};

export default BEES;
