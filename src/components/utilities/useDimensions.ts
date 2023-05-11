import React, {useState, useEffect} from 'react';

const useDimensions = () => {
    const [width, setWidth] = useState<number>( Math.min( window.innerWidth - 20, 900 ) );
    const [height, setHeight] = useState<number>( Math.min( window.innerHeight - 40, 400 ) );

    useEffect(() => {
        const onResize = () => {
            setWidth( Math.min( window.innerWidth - 20, 900 ) );
            setHeight( Math.min( window.innerHeight - 40, 400 ) );
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return [width, height];
};

export default useDimensions;