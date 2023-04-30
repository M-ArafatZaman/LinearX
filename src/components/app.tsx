import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import useDimensions from './useDimensions';

const App: React.FC = () => {

    const [width, height] = useDimensions();

    return (
        <div className='container mx-auto'>

            <div className="flex w-full justify-center pt-5">
                <Plot
                    data={[
                        {
                            x: [1,2,3],
                            y: [3,5,2],
                            z: [1,2,3],
                            type: "mesh3d"
                        }
                    ]}
                    layout={{
                        width: width,
                        height: height,
                        title: "Vectors Visualized"
                    }}
                />
            </div>
        </div>
    )
};

export default App;