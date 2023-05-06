import React, {useState, useEffect} from 'react';
import { SketchPicker } from 'react-color';
import { Color, Datum, TypedArray } from 'plotly.js';

interface VectorProps {
    id: number;
    color: string | undefined;
    x: Datum[] | Datum[][] | TypedArray | undefined;
    y: Datum[] | Datum[][] | TypedArray | undefined;
    z: Datum[] | Datum[][] | Datum[][][] | TypedArray | undefined;
};

const Vector: React.FC<VectorProps> = (props: VectorProps) => {
    const {color, x, y, z} = props;
    const [_x, setX] = useState<number>(0);
    const [_y, setY] = useState<number>(0);
    const [_z, setZ] = useState<number>(0);


    // Convert x, y, z to some numbers
    useEffect(() => {
        if (typeof x !== "undefined") {
            if (typeof x[1] === "string") {
                setX( parseInt( x[1] ) );
            } else if (typeof x[1] === "number") {
                setX( x[1] );
            }
        };

        if (typeof y !== "undefined") {
            if (typeof y[1] === "string") {
                setY( parseInt( y[1] ) );
            } else if (typeof y[1] === "number") {
                setY( y[1] );
            }
        };

        if (typeof z !== "undefined") {
            if (typeof z[1] === "string") {
                setZ( parseInt( z[1] ) );
            } else if (typeof z[1] === "number") {
                setZ( z[1] );
            }
        };
    }, [])

    return (
        <div className="relative w-full p-2">
            <div className="absolute hidden hover:inline-block">
                <SketchPicker color={color} />
            </div>

            <div className="flex flex-row">
                <div style={{height: 50, width: 10, backgroundColor: color}}></div>

                <div className="py-2 px-4 border-l-2 border-r-2 border-gray-500 ml-4 flex flex-col">
                    <div>{_x}</div>
                    <div>{_y}</div>
                    <div>{_z}</div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Vector;