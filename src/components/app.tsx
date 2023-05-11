import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import useDimensions from './utilities/useDimensions';
import getRandomColor from './utilities/randomColor';
import Vector from './Vector';
import Plane from './Plane';
import {DataType, AppRelayoutType, MetaData} from './types';

const App: React.FC = () => {

    const [width, height] = useDimensions();
    const [xmax, setXMax] = useState<number>(1);
    const [xmin, setXMin] = useState<number>(-1);
    const [ymax, setYMax] = useState<number>(1);
    const [ymin, setYMin] = useState<number>(-1);
    const [data, setData] = useState<DataType[]>([
        {
            x: [0],
            y: [0],
            z: [0],
            type: "scatter3d",
            line: {
                color: "#4c4c4c"
            }
        }
    ]);
    const [metaData, setMetaData] = useState<MetaData[]>([
        {
            id: 0,
            info: "The origin point"
        }
    ]);
    const [Eye, setEye] = useState({
        x: 1,
        y: 1,
        z: 1
    });

    const AddVector = () => {
        // Add a vector to the data => scatter3d
        setData((prevData) => [...prevData, {
            x: [0,1],
            y: [0,1],
            z: [0,1],
            type: "scatter3d",
            line: {
                color: getRandomColor()
            }
        }]);
        setMetaData((prev) => [...prev, {
            id: prev[prev.length-1].id + 1,
            info: `Vector ${prev[prev.length-1].id + 1} created by the user.`
        }]);
    };

    const UpdateVector = (id: number, d: DataType) => {
        // Update a vector from the vector components
        const newData = data.map((e, i) => {
            if (id === i) {
                return {
                    ...e,
                    ...d
                }
            } else {
                return e;
            }
        });
        setData(newData);
        // Update the ranges just in case
        setXMax( Math.max(xmax, ...(d.x as number[])) );
        setXMin( Math.min(xmin, ...(d.x as number[])) );
        setYMax( Math.max(ymax, ...(d.y as number[])) );
        setYMin( Math.min(ymin, ...(d.y as number[])) );
    }

    const AddPlane = () => {
        // Add a plane to the data => mesh3d
        let x: number[] = [];
        let y: number[] = [];
        let z: number[] = [];

        // If the formula is ax + by + cz = d
        // We get z by => (d-ax-by)/c
        // The initial formula is z = 0 
        let tmp = [[xmax, ymax], [xmax, ymin], [xmin, ymax], [xmin, ymin]]; 
        
        for (let i = 0; i < tmp.length; i++) {
            x[x.length] = tmp[i][0];
            y[y.length] = tmp[i][1];
            z[z.length] = 0;
        }

        setData((prev) => [...prev, {
            x: x,
            y: y,
            z: z,
            type: "mesh3d",
            color: getRandomColor()
        }]);
        setMetaData((prev) => [...prev, {
            id: prev[prev.length-1].id + 1,
            info: `Plane ${prev[prev.length-1].id + 1} created by the user`,
            a: 0,
            b: 0,
            c: 1,
            d: 0
        }])
    }

    // Whenever the x and y ranges are updated
    useEffect(() => {


    }, [xmax, xmin, ymax, ymin]);

    return (
        <div className='container mx-auto'>

            <div className="flex w-full justify-center mt-5">
                <Plot
                    data={data}
                    layout={{
                        width: width,
                        height: height,
                        title: "Vectors Visualized",
                        scene: {
                            camera: {
                                eye: Eye
                            }
                        }
                    }}
                    // @ts-ignore
                    onRelayout={(e: Readonly<Partial<AppRelayoutType>>) => {
                        setEye((prev) => ({...prev, ...e["scene.camera"]?.eye}));
                    }}
                    
                />
            </div>

            <hr/>
            <div className="p-2">
                <div className="w-full sm:flex block">
                    <div>
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2" onClick={AddVector}>Add Vector</div>
                        
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200" onClick={AddPlane}>Add Plane</div>
                    </div>

                    <div className="flex-1 sm:ml-5 px-3">

                        {
                            data.length > 1 ? 

                            data.map((d, i) => {
                                if (i === 0 ) return <></>;
                                if (d.type === "scatter3d") {
                                    return <Vector 
                                        key={i}
                                        id={metaData[i].id} 
                                        color={d.line?.color}
                                        x={d.x}
                                        y={d.y}
                                        z={d.z}
                                        update={UpdateVector}
                                    />
                                } else if (d.type === "mesh3d") {
                                    return <Plane
                                        key={i}
                                        id={metaData[i].id}
                                        color={d.color}
                                        a={metaData[i].a}
                                        b={metaData[i].b}
                                        c={metaData[i].c}
                                        d={metaData[i].d}
                                    />
                                }
                                return <></>
                            })

                            :
                            
                            <div className="w-full text-center p-5 italic border-dashed border-2 bg-gray-50"><p>Add a plane or a vector</p></div>
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
};

export default App;