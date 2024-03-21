import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

const technologies = ['React', 'Next.js', 'HTML', 'CSS', 'Front-end'];

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
                }, 300);
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
                }, 300);
            }
        } else {
            const currentTechnology = technologies[wordIndex.current];
            if (displayedWord.length < currentTechnology.length) {
                const milliseconds = 300;

                setTimeout(() => {
                    setDisplayedWord(
                        displayedWord + currentTechnology[displayedWord.length],
                    );
                }, milliseconds);
            } else {
                isDeleting.current = true;
                setTimeout(() => {
                    setDisplayedWord(
                        displayedWord.slice(0, displayedWord.length - 1),
                    );
                }, 1500);
            }
        }
    }, [displayedWord]);

    return <StyledTechnology>{displayedWord}</StyledTechnology>;
};

export default TechnologyName;
