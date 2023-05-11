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
    const {color="#fff", id, a, b, c, d} = props;
    const [_color, setColor] = useState<string>(color);

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
                        <span className="ml-5">=</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
};

export default Plane;