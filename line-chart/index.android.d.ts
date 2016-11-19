import { View } from "ui/core/view";
export interface IPoint {
    x: number;
    y: number;
}
export interface ILineChart {
    color?: string | number;
    lineData: Array<IPoint>;
    name: string;
}
export declare class LineChart extends View {
    _android: any;
    android: any;
    _nativeView: any;
    _createUI(): void;
    invalidate(): void;
    clear(): void;
    clearData(): void;
    addLine(lineData: ILineChart): void;
    getXAxis(): any;
    constructor();
}
