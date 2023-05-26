import React, {useState, useEffect} from 'react';
import { SwatchesPicker } from 'react-color';
import VectorBorder from './VectorBorder';
import {DataType} from './types';

interface LineProps {
    id: number;
    color: string | undefined;
    x: number[] | undefined;
    y: number[] | undefined;
    z: number[] | undefined;
    update: (id: number, d: DataType) => void;
    info: string;
    remove: (id: number) => void;
};

const Line: React.FC<LineProps> = (props: LineProps) => {
    const {x, y, z, id, color="#fff", update, info, remove} = props;
    const [_a, setA] = useState<number>(0);
    const [_b, setB] = useState<number>(0);
    const [_c, setC] = useState<number>(0);
    const [_x, setX] = useState<number>(0);
    const [_y, setY] = useState<number>(0);
    const [_z, setZ] = useState<number>(0);
    const [_color, setColor] = useState<string>(color);

    // Change color
    const changeColor = (val: string) => {
        setColor(val);
    }


    // Whenever the values of x changes
    useEffect(() => {
        // Update the data
        
    }, [_a, _b, _c, x, y, z, _color]);

    return (
        <div className="relative w-full rounded-md shadow-lg my-2">

            <div className="flex flex-row">
                {/* The color selector */}
                <div className="self-stretch rounded-l-md relative group" style={{width: 10, backgroundColor: _color}}>
                    <div className="absolute invisible group-hover:visible" style={{zIndex: 1}}>
                        <SwatchesPicker color={_color} onChangeComplete={(e) => { changeColor(e.hex) }} />
                    </div>
                </div>

                {/* The data container */}
                <div className="flex-1">
                    {/* Log entry */}
                    <div className="px-5 py-2">
                        <code className="text-gray-800"><b>{info}</b></code>
                    </div>

                    {/* Grid container */}
                    <div className="grid grid-cols-12">
                        
                        {/* Line data container */}
                        <div className="col-span-8">

                            <div className="flex flex-row pb-2">

                                {/* V label */}
                                <div className="p-5 flex justify-center align-middle flex-col">
                                    <p className="relative">
                                        <span className="italic" style={{zIndex: -5}}>
                                            L<small className="absolute" style={{top: 10}}>{id}</small>
                                        </span>
                                        <span className="ml-5">=</span>
                                    </p>
                                </div>

                                {/* O - A */}
                                {/* Initial point */}
                                <VectorBorder>
                                    <input 
                                        type="number"
                                        value={_a}
                                        onChange={(e) => { setA(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <input 
                                        type="number"
                                        value={_b}
                                        onChange={(e) => { setB(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <input 
                                        type="number"
                                        value={_c}
                                        onChange={(e) => { setC(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                </VectorBorder>

                                <div className="p-5 flex justify-center align-middle flex-col">
                                    <span>+</span>
                                </div>

                                <div className="p-5 flex justify-center align-middle flex-col">
                                    <span>t</span>
                                </div>

                                {/* Point A */}
                                <VectorBorder>
                                    <input 
                                        type="number"
                                        value={_x}
                                        onChange={(e) => { setX(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <input 
                                        type="number"
                                        value={_y}
                                        onChange={(e) => { setY(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <input 
                                        type="number"
                                        value={_z}
                                        onChange={(e) => { setZ(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                </VectorBorder>
                            </div>
                        </div>

                        {/* Other operations */}
                        <div className="col-span-4">
                            <button className="px-5 py-2 bg-red-500 font-bold uppercase text-white rounded-md hover:bg-red-600 shadow-lg hover:shadow-2xl active:bg-red-700"
                            onClick={() => { remove(id) }}
                            >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Line;