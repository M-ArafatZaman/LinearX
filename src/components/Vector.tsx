import React, {useState, useEffect} from 'react';
import { SketchPicker } from 'react-color';

interface VectorProps {
    id: number;
    color: string | undefined;
    x: number[] | undefined;
    y: number[] | undefined;
    z: number[] | undefined;
};

const Vector: React.FC<VectorProps> = (props: VectorProps) => {
    const {color, x, y, z, id} = props;
    const [x0, setX0] = useState<number>(0);
    const [x1, setX1] = useState<number>(0);
    const [y0, setY0] = useState<number>(0);
    const [y1, setY1] = useState<number>(0);
    const [z0, setZ0] = useState<number>(0);
    const [z1, setZ1] = useState<number>(0);


    // Convert x, y, z to some numbers
    useEffect(() => {
        if (typeof x !== "undefined") {
            setX0( x[0] );
            setX1( x[1] );
        };

        if (typeof y !== "undefined") {
            setY0( y[0] );
            setY1( y[1] );
        };

        if (typeof z !== "undefined") {
            setZ0( z[0] );
            setZ1( z[1] );
        };
    }, []);

    return (
        <div className="relative w-full p-2">
            <div className="absolute hidden hover:inline-block">
                <SketchPicker color={color} />
            </div>

            <div className="flex flex-row">
                <div className="self-stretch" style={{width: 10, backgroundColor: color}}></div>

                {/* V label */}
                <div className="px-5 flex justify-center align-middle flex-col">
                    <p className="relative">
                        <span className="italic">
                            V<small className="absolute" style={{top: 10}}>{id}</small>
                        </span>
                        <span className="ml-5">=</span>
                    </p>
                </div>

                {/* O - A */}
                {/* Point O */}
                <div className="py-2 px-4 border-l-2 border-r-2 border-gray-500 flex flex-col">
                    <div>{x1}</div>
                    <div>{y1}</div>
                    <div>{z1}</div>
                </div>

                <div className="px-5 flex justify-center align-middle flex-col">
                    <span>-</span>
                </div>

                {/* Point A */}
                <div className="py-2 px-4 border-l-2 border-r-2 border-gray-500 flex flex-col">
                    <div>{x0}</div>
                    <div>{y0}</div>
                    <div>{z0}</div>
                </div>

                <div className="px-5 flex justify-center align-middle flex-col">
                    <span>=</span>
                </div>

                {/* Resultant vector */}
                <div className="py-2 px-4 border-l-2 border-r-2 border-gray-500 flex flex-col">
                    <div>{x1-x0}</div>
                    <div>{y1-y0}</div>
                    <div>{z1-z0}</div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Vector;