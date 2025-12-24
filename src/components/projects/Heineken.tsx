import React from 'react';
import { List, ListItem, Link, Text } from '../project-builder';
import { Trans, useTranslation } from 'react-i18next';

export const Heineken = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text>
                {t('projects.heineken.description')}
                <br />
                <br />
                <Trans i18nKey={'projects.heineken.link'}>
                    More definition about the project can be found
                    <Link
                        target='_blank'
                        href='https://10i9.com.br/cases/heineken'
                        rel='noreferrer'
                    >
                        here
                    </Link>
                </Trans>
            </Text>
            <List>
                <ListItem>
                    Work with Mobile and Web Apps mockups using Figma, HTML, CSS
                    and Bootstrap.
                </ListItem>
                <ListItem>Work with Oracle Database.</ListItem>
                <ListItem>
                    Experience with system requirements validations with end
                    users.
                </ListItem>
            </List>
        </>
    );
};

export default Heineken;
