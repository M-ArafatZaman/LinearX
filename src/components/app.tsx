import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import useDimensions from './useDimensions';

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
    const [data, setData] = useState<Data[]>([
        {
            x: [0,0],
            y: [0,0],
            z: [0,0],
            type: "scatter3d",
            line: {
                color: "#4c4c4c"
            }
        }
    ]);

    const AddVector = () => {
        // Add a vector to the data => scatter3d
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
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2">Add Vector</div>
                        
                        <div className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-5 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200">Add Plane</div>
                    </div>

                    <div className="flex-1 sm:ml-5 px-3">

                        {
                            data.length > 1 ? 

                            <p>LOL</p>

                            :
                            
                            <div className="w-full text-center p-5 italic border-dashed border-2 bg-gray-50"><p>Add a plane or a vector</p></div>
                        }
                        
                        <div className="border-l-8 border-solid border-yellow-500"></div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default App;