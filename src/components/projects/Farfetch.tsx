import React from 'react';
import { List, ListItem, Text } from '../project-builder';
import { useTranslation } from 'react-i18next';

export const Farfetch = () => {
    const { t } = useTranslation();

    return (
        <>
            <Text>{t('projects.farfetch.description')}</Text>
            <List>
                <ListItem>{t('projects.farfetch.firstItem')}</ListItem>
                <ListItem>{t('projects.farfetch.secondItem')}</ListItem>
                <ListItem>{t('projects.farfetch.thirdItem')}</ListItem>
            </List>
        </>
    );
};

export default Farfetch;
