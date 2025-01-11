import React from 'react';
import { List, ListItem, Text } from '../project-builder';
import { useTranslation } from 'react-i18next';

export const Venturus = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text>{t('projects.venturus.description')}</Text>
            <List>
                <ListItem>{t('projects.venturus.firstItem')}</ListItem>
                <ListItem>{t('projects.venturus.secondItem')}</ListItem>
                <ListItem>{t('projects.venturus.thirdItem')}</ListItem>
                <ListItem>{t('projects.venturus.fourthItem')}</ListItem>
            </List>
        </>
    );
};

export default Venturus;
