import styled from '@emotion/styled';

interface HeadingProps {
    as?: 'h1' | 'h2';
}

const renderFontByTag = ({ as = 'h1' }: HeadingProps) => {
    switch (as) {
        case 'h1':
            return '2.4rem';
        default:
            return '1.8rem';
    }
};

export const Heading = styled.h1<HeadingProps>`
    font-size: ${renderFontByTag};
    margin: 2.4rem 0;
    font-weight: bold;
`;

export default Heading;
