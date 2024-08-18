import { useEffect, useState } from 'react';

export const useResponsive = (threshold: number = 871) => {
    const [isMobile, setMobile] = useState(false);

    const onResize = () => {
        const isMobile = window.innerWidth <= threshold;
        setMobile(isMobile);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
        // eslint-disable-next-line
    }, []);

    return {
        isMobile,
        isDesktop: !isMobile,
    };
};
