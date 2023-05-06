import React, {useState, useEffect} from 'react';
import { SketchPicker } from 'react-color';
import { Color, Datum, TypedArray } from 'plotly.js';

interface VectorProps {
    id: number;
    color: string | undefined;
    x: number[] | undefined;
    y: number[] | undefined;
    z: number[] | undefined;
};

const Vector: React.FC<VectorProps> = (props: VectorProps) => {
    const {color, x, y, z, id} = props;
    const [_x, setX] = useState<number>(0);
    const [_y, setY] = useState<number>(0);
    const [_z, setZ] = useState<number>(0);


    // Convert x, y, z to some numbers
    useEffect(() => {
        if (typeof x !== "undefined") {
            setX( x[1] );
        };

        if (typeof y !== "undefined") {
            setY( y[1] );
        };

        if (typeof z !== "undefined") {
            setZ( z[1] );
        };
    }, []);

    return (
        <div className="relative w-full p-2">
            <div className="absolute hidden hover:inline-block">
                <SketchPicker color={color} />
            </div>

            <div className="flex flex-row">
                <div className="self-stretch" style={{width: 10, backgroundColor: color}}></div>

                <div className="px-5 flex justify-center align-middle flex-col">
                    <p className="italic relative">V<small className="absolute" style={{top: 10}}>{id}</small></p>
                </div>

                <div className="py-2 px-4 border-l-2 border-r-2 border-gray-500 flex flex-col">
                    <div>{_x}</div>
                    <div>{_y}</div>
                    <div>{_z}</div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Vector;