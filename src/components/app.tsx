import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import useDimensions from './utilities/useDimensions';
import getRandomColor from './utilities/randomColor';
import Vector from './Vector';
import Plane, {updateVertices} from './Plane';
import Line from './Line';
import {DataType, AppRelayoutType, MetaData} from './types';
import {useAddVector, useUpdateVector, useAddPlane, useUpdatePlane, useUpdatePlaneCoeff, useRemoveData} from './operations';

const App: React.FC = () => {

    const [width, height] = useDimensions();
    const [xmax, setXMax] = useState<number>(1);
    const [xmin, setXMin] = useState<number>(-1);
    const [ymax, setYMax] = useState<number>(1);
    const [ymin, setYMin] = useState<number>(-1);
    const [zmax, setZMax] = useState<number>(1);
    const [zmin, setZMin] = useState<number>(-1);
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
            info: "The origin point",
            type: "ORIGIN"
        }
    ]);
    const [Eye, setEye] = useState({
        x: 1,
        y: 1,
        z: 1
    });

    // ================== VECTOR OPERATIONS =====================
    const AddVector = useAddVector(setData, setMetaData);

    const UpdateVector = useUpdateVector(setData, setXMax, setXMin, setYMax, setYMin, setZMax, setZMin, data, metaData);

    // =============== PLANE OPERATIONS ==================

    const AddPlane = useAddPlane(setData, setMetaData, xmin, xmax, ymin, ymax);

    const UpdatePlane = useUpdatePlane(setData);

    const UpdatePlaneCoeff = useUpdatePlaneCoeff(setMetaData);

    const RemoveData = useRemoveData(setData, setMetaData);

    // Whenever the x and y ranges are updated
    useEffect(() => {
        const newData = data.map((e, i) => {
            if (e.type === "mesh3d") {
                // Get the constants
                const a = metaData[i].a as number;
                const b = metaData[i].b as number;
                const c = metaData[i].c as number;
                const d = metaData[i].d as number;

                // Get the new vertices
                const newVertices = updateVertices(
                    [xmin, xmax],
                    [ymin, ymax],
                    [zmin, zmax],
                    a, b, c, d
                );
                return {
                    ...e,
                    x: newVertices[0],
                    y: newVertices[1],
                    z: newVertices[2]
                }

            } else {
                return e;
            }
        });

        setData(newData);

    }, [xmax, xmin, ymax, ymin, zmax, zmin]);

    return (
        <div className='container mx-auto h-screen flex flex-col overflow-hidden'>

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
            <div className="p-2 flex-1 overflow-scroll">
                <div className="w-full sm:flex block">
                    <div>
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2 text-center" onClick={AddVector}>Add Vector</div>
                        
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2 text-center" onClick={AddPlane}>Add Plane</div>

                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 text-center" onClick={AddVector}>Add Line</div>
                    </div>

                    <div className="flex-1 sm:ml-5 px-3">

                        {
                            data.length > 1 ? 

                            data.map((d, i) => {
                                if (i === 0 ) return <></>;
                                if (metaData[i].type === "VECTOR") {
                                    return <Vector 
                                        key={i}
                                        id={metaData[i].id} 
                                        color={d.line?.color}
                                        x={d.x}
                                        y={d.y}
                                        z={d.z}
                                        update={UpdateVector}
                                        info={metaData[i].info}
                                        remove={RemoveData}
                                    />
                                } else if (metaData[i].type === "PLANE") {
                                    return <Plane
                                        key={i}
                                        id={metaData[i].id}
                                        color={d.color}
                                        a={metaData[i].a}
                                        b={metaData[i].b}
                                        c={metaData[i].c}
                                        d={metaData[i].d}
                                        xrange={[xmin, xmax]}
                                        yrange={[ymin, ymax]}
                                        zrange={[zmin, zmax]}
                                        info={metaData[i].info}
                                        update={UpdatePlane}
                                        updateMeta={UpdatePlaneCoeff}
                                        remove={RemoveData}
                                    />
                                } else if (metaData[i].type === "LINE") {
                                    return <Line
                                        key={i}
                                        id={metaData[i].id}
                                        color={d.line?.color}
                                        x={d.x}
                                        y={d.y}
                                        z={d.z}
                                        update={UpdateVector}
                                        info={metaData[i].info}
                                        remove={RemoveData}
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