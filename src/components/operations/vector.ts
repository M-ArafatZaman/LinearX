import React from 'react';
import {DataType, MetaData} from '../types';
import getRandomColor from '../utilities/randomColor';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Contains all the vector operations/hooks

// This hook returns a function that simply adds a vector to the data. 
function useAddVector(setData: SetState<DataType[]>, setMetaData: SetState<MetaData[]>): () => void {
    
    return () => {
        const d = new Date();
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
            info: `[${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}.${d.getUTCMilliseconds()}] Vector ${prev[prev.length-1].id + 1} created by the user.`,
            type: "VECTOR"
        }]);
    }
}