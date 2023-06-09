import React, {useState, useEffect} from 'react';
import {SwatchesPicker} from 'react-color';
import {DataType} from './types';

interface PlaneProps {
    id: number;
    color: string | undefined;
    a: number | undefined;
    b: number | undefined;
    c: number | undefined;
    d: number | undefined;
    xrange: number[];
    yrange: number[];
    zrange: number[];
    info: string;
    update: (id: number, d: DataType) => void;
    updateMeta: (id: number, a: number, b: number, c: number, d: number) => void;
    remove: (id: number) => void;
};

// A function to update the vertices of the plane
export function updateVertices(xrange: number[], yrange: number[], zrange: number[], a: number, b: number, c: number, d: number) {
    let xmin = xrange[0]; 
    let xmax = xrange[1];
    let ymin = yrange[0]; 
    let ymax = yrange[1];
    let zmin = zrange[0]; 
    let zmax = zrange[1];
    let x: number[] = [];
    let y: number[] = [];
    let z: number[] = [];
    
    if (c !== 0) {
        // [x, y]
        let tmp: number[][] = [ [xmin, ymin], [xmin, ymax], [xmax, ymin], [xmax, ymax] ];
        for (let i = 0; i < tmp.length; i++) {
            x[x.length] = tmp[i][0];
            y[y.length] = tmp[i][1];
            z[z.length] = (d-(a*tmp[i][0])-(b*tmp[i][1]))/c;
        };
    } else if ( b !== 0  ) {
        // [z, x]
        let tmp: number[][] = [ [zmin, xmin], [zmin, xmax], [zmax, xmin], [zmax, xmax] ];
        for (let i = 0; i < tmp.length; i++) {
            x[x.length] = tmp[i][1];
            y[y.length] = (d-(a*tmp[i][1])-(c*tmp[i][0]))/b;
            z[z.length] = tmp[i][0];
        }
    } else if ( a !== 0 ) {
        // [z, y]
        let tmp: number[][] = [ [zmin, ymin], [zmin, ymax], [zmax, ymin], [zmax, ymax] ];
        for (let i = 0; i < tmp.length; i++) {
            x[x.length] = (d-(b*tmp[i][0])-(c*tmp[i][1]))/a;
            y[y.length] = tmp[i][1];
            z[z.length] = tmp[i][0];
        }
    }

    return [x, y, z]
}

const Plane: React.FC<PlaneProps> = (props: PlaneProps) => {
    const {color="#fff", id, a=0, b=0, c=1, d=0, update, xrange, yrange, zrange, updateMeta, info, remove} = props;
    const [_color, setColor] = useState<string>(color);
    const [_a, setA] = useState<number>(a);
    const [_b, setB] = useState<number>(b);
    const [_c, setC] = useState<number>(c);
    const [_d, setD] = useState<number>(d);

    useEffect(() => {
        // When any of these data changes, update the data in the parent component
        const Vertices = updateVertices(xrange, yrange, zrange, _a, _b, _c, _d);
        update(id, {
            x: Vertices[0],
            y: Vertices[1],
            z: Vertices[2],
            type: "mesh3d",
            color: _color,
        })

    }, [_color, _a, _b, _c, _d]);

    useEffect(() => {
        // When any of the coefficients change, update the meta data
        updateMeta(id, _a, _b, _c, _d);
    }, [_a, _b, _c, _d])

    return (
        <div className="relative w-full rounded-md shadow-lg my-2">

            <div className="flex flex-row">
                <div className="self-stretch rounded-l-md relative group" style={{width: 10, backgroundColor: _color}}>
                    <div className="absolute invisible group-hover:visible" style={{zIndex: 1}}>
                        <SwatchesPicker color={_color} onChangeComplete={(e) => { setColor(e.hex) }} />
                    </div>
                </div>

                {/* P label */}
                <div className="flex-1">
                    {/* Log entry */}
                    <div className="px-5 py-2">
                        <code className="text-gray-800"><b>{info}</b></code>
                    </div>
                    
                    {/* Grid Container */}
                    <div className="grid grid-cols-12">

                        {/* Vector data container */}
                        <div className="col-span-8">

                            <div className="flex flex-row pb-2">
                                
                                <div className="p-5 py-0 flex justify-center align-middle flex-col">
                                    <p className="relative">
                                        <span className="italic" style={{zIndex: -5}}>
                                            P<small className="absolute" style={{top: 10}}>{id}</small>
                                        </span>
                                        <span className="ml-5">:</span>
                                    </p>
                                </div>

                                {/* a coefficient */}
                                <div className="p-5 py-0 flex justify-center align-middle flex-row">
                                    <input 
                                        type="number"
                                        value={_a}
                                        onChange={(e) => { setA(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <div className="p-1 m-1"><i>x</i></div>
                                </div>

                                <div className="flex justify-center align-middle flex-col">
                                    <span>+</span>
                                </div>
                                
                                {/* b Coeff */}
                                <div className="p-5 py-0 flex justify-center align-middle flex-row">
                                    <input 
                                        type="number"
                                        value={_b}
                                        onChange={(e) => { setB(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <div className="p-1 m-1"><i>y</i></div>
                                </div>

                                <div className="flex justify-center align-middle flex-col">
                                    <span>+</span>
                                </div>
                                
                                {/* c Coeff */}
                                <div className="p-5 py-0 flex justify-center align-middle flex-row">
                                    <input 
                                        type="number"
                                        value={_c}
                                        onChange={(e) => { setC(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                    <div className="p-1 m-1"><i>z</i></div>
                                </div>

                                <div className="flex justify-center align-middle flex-col">
                                    <span>=</span>
                                </div>

                                <div className="p-5 py-0 flex justify-center align-middle flex-row">
                                    <input 
                                        type="number"
                                        value={_d}
                                        onChange={(e) => { setD(parseInt(e.target.value)) }}
                                        className="rounded border p-1 my-1"
                                        style={{width: 50}}
                                    />
                                </div>
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

export default Plane;