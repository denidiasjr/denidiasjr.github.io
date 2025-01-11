import React from 'react';
import { List, ListItem, Text } from '../project-builder';
import { useTranslation } from 'react-i18next';

export const Revolut = () => {
    const { t } = useTranslation();

    return (
        <>
            <Text>{t('projects.revolut.description')}</Text>
            <List>
                <ListItem>{t('projects.revolut.firstItem')}</ListItem>
                <ListItem>{t('projects.revolut.secondItem')}</ListItem>
                <ListItem>{t('projects.revolut.thirdItem')}</ListItem>
            </List>
        </>
    );
};

export default Revolut;
