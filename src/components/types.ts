import {PlotData, ScatterLine} from 'plotly.js';

export interface Mesh3DColor {
    color: string;
};

export interface ScatterLineColor extends ScatterLine {
    color: string;
};

export interface PlotDataExtended extends PlotData {
    line: Partial<ScatterLineColor>;
    x: number[];
    y: number[];
    z: number[];
};

export type DataType = Partial<PlotDataExtended> & Partial<Mesh3DColor>;

interface SceneCamera {
    up: {
        x: number;
        y: number;
        z: number;
    };
    center: {
        x: number;
        y: number;
        z: number;
    };
    eye: {
        x: number;
        y: number;
        z: number;
    };
    projection: {
        type: string;
    };
};

export interface AppRelayoutType {
    "scene.camera": SceneCamera;
};

export interface MetaData {
    id: number;
    info: string;
    type: string;
    // Type definitions for plane
    // ax + by + cz = d
    a?: number;
    b?: number;
    c?: number;
    d?: number;
}