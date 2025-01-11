import React from 'react';
import { Heading, List, ListItem } from '../project-builder';
import { useTranslation } from 'react-i18next';

export const Superlogica = () => {
    const { t } = useTranslation();

    return (
        <>
            <Heading as='h2'>
                {t('projects.superlogica.mobile.description')}
            </Heading>
            <List>
                <ListItem>
                    {t('projects.superlogica.mobile.firstItem')}
                </ListItem>
                <ListItem>
                    {t('projects.superlogica.mobile.secondItem')}
                </ListItem>
                <ListItem>
                    {t('projects.superlogica.mobile.thirdItem')}
                </ListItem>
                <ListItem>
                    {t('projects.superlogica.mobile.fourthItem')}
                </ListItem>
            </List>
            <Heading as='h2'>
                {t('projects.superlogica.web.description')}
            </Heading>
            <List>
                <ListItem>{t('projects.superlogica.web.firstItem')}</ListItem>
                <ListItem>{t('projects.superlogica.web.secondItem')}</ListItem>
                <ListItem>{t('projects.superlogica.web.thirdItem')}</ListItem>
                <ListItem>{t('projects.superlogica.web.fourthItem')}</ListItem>
                <ListItem>{t('projects.superlogica.web.fifthItem')}</ListItem>
            </List>
        </>
    );
};

export default Superlogica;
