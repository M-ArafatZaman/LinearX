import React from 'react';
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
    const {color} = props;

    return (
        <div className="relative w-full p-2">
            <div className="absolute hidden hover:inline-block">
                <SketchPicker color={color} />
            </div>

            <div className="group" style={{height: 50, width: 10, backgroundColor: color}}>
                
            </div>
            
        </div>
    )
};

export default Vector;