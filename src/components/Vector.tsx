import React, {useState, useEffect} from 'react';
import { SwatchesPicker } from 'react-color';
import VectorBorder from './VectorBorder';
import {DataType} from './types';

interface VectorProps {
    id: number;
    color: string | undefined;
    x: number[] | undefined;
    y: number[] | undefined;
    z: number[] | undefined;
    update: (id: number, d: DataType) => void;
};

const Vector: React.FC<VectorProps> = (props: VectorProps) => {
    const {x, y, z, id, color="#fff", update} = props;
    const [x0, setX0] = useState<number>(0);
    const [x1, setX1] = useState<number>(0);
    const [y0, setY0] = useState<number>(0);
    const [y1, setY1] = useState<number>(0);
    const [z0, setZ0] = useState<number>(0);
    const [z1, setZ1] = useState<number>(0);
    const [_color, setColor] = useState<string>(color);

    // Change color
    const changeColor = (val: string) => {
        setColor(val);
    }

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

    // Whenever the values of x changes
    useEffect(() => {
        // Update the data
        update(id, {
            x: [x0, x1],
            y: [y0, y1],
            z: [z0, z1],
            line: {
                color: _color
            }
        })
    }, [x0, x1, y0, y1, z0, z1, _color]);

    return (
        <div className="relative w-full rounded-md shadow-lg my-2">

            <div className="flex flex-row">
                <div className="self-stretch rounded-l-md relative group" style={{width: 10, backgroundColor: _color}}>
                    <div className="absolute invisible group-hover:visible" style={{zIndex: 1}}>
                        <SwatchesPicker color={_color} onChangeComplete={(e) => { changeColor(e.hex) }} />
                    </div>
                </div>

                {/* V label */}
                <div className="px-5 flex justify-center align-middle flex-col">
                    <p className="relative">
                        <span className="italic" style={{zIndex: -5}}>
                            V<small className="absolute" style={{top: 10}}>{id}</small>
                        </span>
                        <span className="ml-5">=</span>
                    </p>
                </div>

                {/* O - A */}
                {/* Point O */}
                <VectorBorder>
                    <input 
                        type="number"
                        value={x1}
                        onChange={(e) => { setX1(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                    <input 
                        type="number"
                        value={y1}
                        onChange={(e) => { setY1(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                    <input 
                        type="number"
                        value={z1}
                        onChange={(e) => { setZ1(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                </VectorBorder>

                <div className="px-5 flex justify-center align-middle flex-col">
                    <span>-</span>
                </div>

                {/* Point A */}
                <VectorBorder>
                    <input 
                        type="number"
                        value={x0}
                        onChange={(e) => { setX0(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                    <input 
                        type="number"
                        value={y0}
                        onChange={(e) => { setY0(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                    <input 
                        type="number"
                        value={z0}
                        onChange={(e) => { setZ0(parseInt(e.target.value)) }}
                        className="rounded border p-1 my-1"
                        style={{width: 50}}
                    />
                </VectorBorder>

                <div className="px-5 flex justify-center align-middle flex-col">
                    <span>=</span>
                </div>

                {/* Resultant vector */}
                <VectorBorder>
                    <div className="p-1 my-1">{x1-x0}</div>
                    <div className="p-1 my-1">{y1-y0}</div>
                    <div className="p-1 my-1">{z1-z0}</div>
                </VectorBorder>
                
            </div>
            
        </div>
    )
};

export default Vector;