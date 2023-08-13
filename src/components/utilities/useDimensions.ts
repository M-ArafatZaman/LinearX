import React, {useState, useEffect} from 'react';

const MAX_WIDTH = 700;
const MAX_HEIGHT = 450;

const useDimensions = () => {
    const [width, setWidth] = useState<number>( Math.min( window.innerWidth - 20, MAX_WIDTH ) );
    const [height, setHeight] = useState<number>( Math.min( window.innerHeight - 40, MAX_HEIGHT ) );

    useEffect(() => {
        const onResize = () => {
            setWidth( Math.min( window.innerWidth - 20, MAX_WIDTH ) );
            setHeight( Math.min( window.innerHeight - 40, MAX_HEIGHT ) );
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return [width, height];
};

export default useDimensions;