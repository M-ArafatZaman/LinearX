import React from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {

    return (
        <div className='container mx-auto'>
            <Plot
                data={[
                    {
                        x: [1,2,3],
                        y: [3,5,2],
                        type: "bar"
                    }
                ]}
                layout={{
                    width: 400,
                    height: 400,
                    title: "Plot"
                }}
            />
        </div>
    )
};

export default App;