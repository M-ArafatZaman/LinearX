import React from 'react';
import {DataType, MetaData} from '../types';
import getRandomColor from '../utilities/randomColor';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Contains all the vector operations/hooks

// This hook returns a function that simply adds a vector to the data. 
export function useAddVector(setData: SetState<DataType[]>, setMetaData: SetState<MetaData[]>): () => void {
    
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
};

// This hook returns a function to update vector data
export function useUpdateVector(
    setData: SetState<DataType[]>,
    setXMax: SetState<number>, setXMin: SetState<number>,
    setYMax: SetState<number>, setYMin: SetState<number>,
    setZMax: SetState<number>, setZMin: SetState<number>,
    data: DataType[], metaData: MetaData[]
): (id: number, d: DataType) => void {

    return (id: number, d: DataType) => {
        // Update a vector from the vector components
        const newData = data.map((e, i) => {
            if (metaData[i].id === id) {
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
        setXMax(xmax => Math.max(xmax, ...(d.x as number[])) );
        setXMin(xmin => Math.min(xmin, ...(d.x as number[])) );
        setYMax(ymax => Math.max(ymax, ...(d.y as number[])) );
        setYMin(ymin => Math.min(ymin, ...(d.y as number[])) );
        setZMax(zmax => Math.max(zmax, ...(d.z as number[])) );
        setZMin(zmin => Math.min(zmin, ...(d.z as number[])) );
    }
}