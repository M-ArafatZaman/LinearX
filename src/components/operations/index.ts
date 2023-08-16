import React from 'react';
import {useAddVector, useUpdateVector} from './vector';
import {useAddPlane, useUpdatePlane, useUpdatePlaneCoeff} from './plane';
import {DataType, MetaData} from '../types';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

// Hook to get a function to remove data
export function useRemoveData(setData: SetState<DataType[]>, setMetaData: SetState<MetaData[]>): (id: number) => void {
    return (id: number) => {
        // Get index
        let i = -1;
        setMetaData(metaData => metaData.filter((d, ind) => {
            if (d.id == id) {
                i = ind;
                return false;
            }
            return true;
        }));
        setData(data => data.filter((_, ind) => {
            if (ind == i) {
                return false;
            }
            return true;
        }));
    }
}

export {
    useAddVector,
    useUpdateVector,
    useAddPlane,
    useUpdatePlane,
    useUpdatePlaneCoeff
};