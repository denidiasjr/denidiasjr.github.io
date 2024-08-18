import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Dropdown = styled.div``;

const Button = styled.button`
    text-decoration: 1px underline transparent;
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    border: 0px;
    background-color: #1e3260;
    opacity: 0.8;

    &.selected,
    &:hover {
        cursor: pointer;
    }
`;

const CaretIcon = styled(FontAwesomeIcon)`
    margin-left: 6px;
`;

const List = styled(motion.ul)`
    position: absolute;
    list-style-type: none;
    font-size: 1.6rem;
    padding: 1.2rem;
    border-radius: 8px;
    background-color: #1e3260;
    opacity: 0.8;
    margin-top: 12px;
`;

const Item = styled.li`
    padding: 1.2rem;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;

interface LanguageMapper {
    en: string;
    pt: string;
}

const languageMapper: LanguageMapper = {
    en: '🇬🇧 EN',
    pt: '🇧🇷 PT',
};

const mapi18nLanguage = (i18nLanguage: string): keyof LanguageMapper => {
    if (i18nLanguage == 'pt' || i18nLanguage == 'en') {
        return i18nLanguage;
    }
    return 'en';
};

export const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<
        keyof LanguageMapper
    >(mapi18nLanguage(i18n.language));
    const [isDropdownVisible, showDropdown] = useState(false);

    const handleDropdownClick = () => {
        showDropdown(!isDropdownVisible);
    };

    const handleItemClick = (language: keyof LanguageMapper) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        showDropdown(false);
    };

    return (
        <Dropdown>
            <Button onClick={handleDropdownClick}>
                {languageMapper[selectedLanguage]}
                <CaretIcon icon={isDropdownVisible ? faCaretUp : faCaretDown} />
            </Button>
            {isDropdownVisible && (
                <List
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Item onClick={() => handleItemClick('en')}>🇬🇧 EN</Item>
                    <Item onClick={() => handleItemClick('pt')}>🇧🇷 PT</Item>
                </List>
            )}
        </Dropdown>
    );
};

export default LanguageDropdown;
