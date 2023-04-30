import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import useDimensions from './useDimensions';

const App: React.FC = () => {

    const [width, height] = useDimensions();
    const [data, setData] = useState([]);

    return (
        <div className='container mx-auto'>

            <div className="flex w-full justify-center pt-5">
                <Plot
                    data={[
                        {
                            x: [0,1],
                            y: [0,3],
                            z: [0,1],
                            type: "scatter3d",
                            line: {
                                color: "#ff0000"
                            }
                        }
                    ]}
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
                        <div className="w-full text-center p-5 italic border-dashed border-2"><p>Add a plane or a vector</p></div>
                        
                        <div className="border-l-8 border-solid border-yellow-500"></div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default App;