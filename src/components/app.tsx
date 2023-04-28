import React, {useState} from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {

    const [height, setHeight] = useState<number>( Math.min( window.innerHeight - 40, 600 ) );
    const [width, setWidth] = useState<number>( Math.min( window.innerWidth - 20, 900 ) );

    return (
        <div className='container mx-auto'>

            <div className="flex w-full justify-center pt-3">
                <Plot
                    data={[
                        {
                            x: [1,2,3],
                            y: [3,5,2],
                            type: "bar"
                        }
                    ]}
                    layout={{
                        width: width,
                        height: height,
                        title: "Plot"
                    }}
                />
            </div>
        </div>
    )
};

export default App;