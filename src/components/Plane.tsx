import React, {useState} from 'react';
import {SwatchesPicker} from 'react-color';

interface PlaneProps {
    id: number;
    color: string | undefined;
    a: number | undefined;
    b: number | undefined;
    c: number | undefined;
    d: number | undefined;
};

const Plane: React.FC<PlaneProps> = (props: PlaneProps) => {
    const {color="#fff", id, a=0, b=0, c=1, d=0} = props;
    const [_color, setColor] = useState<string>(color);
    const [_a, setA] = useState<number>(a);
    const [_b, setB] = useState<number>(b);
    const [_c, setC] = useState<number>(c);
    const [_d, setD] = useState<number>(d);

    return (
        <div className="relative w-full rounded-md shadow-lg my-2">

            <div className="flex flex-row">
                <div className="self-stretch rounded-l-md relative group" style={{width: 10, backgroundColor: _color}}>
                    <div className="absolute invisible group-hover:visible" style={{zIndex: 1}}>
                        <SwatchesPicker color={_color} onChangeComplete={(e) => { setColor(e.hex) }} />
                    </div>
                </div>

                {/* P label */}
                <div className="p-5 flex justify-center align-middle flex-col">
                    <p className="relative">
                        <span className="italic" style={{zIndex: -5}}>
                            P<small className="absolute" style={{top: 10}}>{id}</small>
                        </span>
                        <span className="ml-5">:</span>
                    </p>
                </div>

                {/* a coefficient */}
                <div className="p-5 flex justify-center align-middle flex-row">
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
                <div className="p-5 flex justify-center align-middle flex-row">
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
                <div className="p-5 flex justify-center align-middle flex-row">
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

                <div className="p-5 flex justify-center align-middle flex-row">
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
    )
};

export default Plane;