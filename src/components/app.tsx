import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {PlotData, ScatterLine} from 'plotly.js';
import useDimensions from './useDimensions';
import Vector from './Vector';

// Added type definition for the Mesh3DColor type
interface Mesh3DColor {
    color: string;
}

interface ScatterLineColor extends ScatterLine {
    color: string;
}

interface PlotDataColor extends PlotData {
    line: Partial<ScatterLineColor>;
}

type DataType = Partial<PlotDataColor> & Partial<Mesh3DColor>;

const App: React.FC = () => {

    const [width, height] = useDimensions();
    const [xrange, setRangeX] = useState({
        min: -1,
        max: 1
    });
    const [yrange, setRangeY] = useState({
        min: -1,
        max: 1
    })
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

    const AddVector = () => {
        // Add a vector to the data => scatter3d
        setData((prevData) => [...prevData, {
            x: [0,1],
            y: [0,1],
            z: [0,1],
            type: "scatter3d",
            line: {
                color: "#4985D7"
            }
        }])
    }

    const AddPlane = () => {
        // Add a plane to the data => mesh3d
    }

    return (
        <div className='container mx-auto'>

            <div className="flex w-full justify-center pt-5">
                <Plot
                    data={data}
                    layout={{
                        width: width,
                        height: height,
                        title: "Vectors Visualized",
                    }}
                />
            </div>

            <hr/>
            <div className="p-2">
                <div className="w-full sm:flex block">
                    <div>
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2" onClick={AddVector}>Add Vector</div>
                        
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200">Add Plane</div>
                    </div>

                    <div className="flex-1 sm:ml-5 px-3">

                        {
                            data.length > 1 ? 

                            data.map((d, i) => {
                                if (i === 0 ) return <></>;
                                return <Vector 
                                    id={i} 
                                    color={d.line?.color}
                                    x={d.x}
                                    y={d.y}
                                    z={d.z}
                                />
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