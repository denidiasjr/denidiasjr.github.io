import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

const technologies = ['Front-end', 'React', 'Next.js', 'HTML', 'CSS'];
const defaultMilliseconds = 300;
const extendedMilliseconds = 1500;

const StyledTechnology = styled.span`
    border-right: 3px solid;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    animation: cursor 0.5s step-end infinite alternate;
    color: #37bdd1;

    @keyframes cursor {
        50% {
            border-color: transparent;
        }
    }
`;

export const TechnologyName = () => {
    const wordIndex = useRef(0);
    const isDeleting = useRef(true);
    const [displayedWord, setDisplayedWord] = useState(technologies[0]);

    useEffect(() => {
        if (isDeleting.current) {
            if (displayedWord.length > 0) {
                setTimeout(() => {
                    setDisplayedWord(
                        displayedWord.slice(0, displayedWord.length - 1),
                    );
                }, defaultMilliseconds);
            } else {
                isDeleting.current = false;
                if (wordIndex.current === technologies.length - 1) {
                    wordIndex.current = 0;
                } else {
                    wordIndex.current++;
                }

                setTimeout(() => {
                    setDisplayedWord(
                        technologies[wordIndex.current].slice(0, 1),
                    );
                }, defaultMilliseconds);
            }
        } else {
            const currentTechnology = technologies[wordIndex.current];
            if (displayedWord.length < currentTechnology.length) {
                setTimeout(() => {
                    setDisplayedWord(
                        displayedWord + currentTechnology[displayedWord.length],
                    );
                }, defaultMilliseconds);
            } else {
                isDeleting.current = true;
                setTimeout(() => {
                    setDisplayedWord(
                        displayedWord.slice(0, displayedWord.length - 1),
                    );
                }, extendedMilliseconds);
            }
        }
    }, [displayedWord]);

    return <StyledTechnology>{displayedWord}</StyledTechnology>;
};

export default TechnologyName;
