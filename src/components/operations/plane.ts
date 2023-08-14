import React from 'react';
import {DataType, MetaData} from '../types';
import getRandomColor from '../utilities/randomColor';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// A hook to get a function that adds a plane to the data
export function useAddPlane(
    setData: SetState<DataType[]>,
    setMetaData: SetState<MetaData[]>,
    xmin: number, xmax: number, ymin: number, ymax: number
): () => void {
    return () => {
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

        const d = new Date();

        setData((prev) => [...prev, {
            x: x,
            y: y,
            z: z,
            type: "mesh3d",
            opacity: 0.7,
            color: getRandomColor()
        }]);
        setMetaData((prev) => [...prev, {
            id: prev[prev.length-1].id + 1,
            info: `[${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}.${d.getUTCMilliseconds()}] Plane ${prev[prev.length-1].id + 1} created by the user`,
            type: "PLANE",
            a: 0,
            b: 0,
            c: 1,
            d: 0
        }])
    }
}