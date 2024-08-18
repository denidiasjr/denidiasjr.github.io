import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const useNavLinks = () => {
    const { t } = useTranslation();

    return {
        '/': <FontAwesomeIcon icon={faHome} />,
        '/about': t('nav.about'),
        '/projects': t('nav.projects'),
        '/blog': t('nav.blog'),
    };
};
