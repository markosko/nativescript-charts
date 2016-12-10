import { ILegend, LegendHorizontalAlignment, LegendVerticalAlignment, LegendForm } from "../components/legend";
import { XPosition, YPosition, Axis, XAxis, LeftYAxis, RightYAxis } from "../components/axes";
import { BaseChartSettings } from "../components/chart";
import { Dataset } from "../components/dataset";
import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
export { ILegend, LegendHorizontalAlignment, LegendVerticalAlignment, LegendForm };
export { XPosition, YPosition, Axis, XAxis, LeftYAxis, RightYAxis };
export interface ILineChart {
    Legend?: ILegend;
    XAxis?: XAxis;
    LeftYAxis?: LeftYAxis;
    RightYAxis?: RightYAxis;
    BaseSettings?: BaseChartSettings;
}
export interface IPoint {
    x: number;
    y: number;
}
export interface ILineSeries extends Dataset {
    color?: string | number;
    lineData: Array<IPoint>;
    name: string;
    highLightColor?: string | number;
    drawHighlightIndicators?: boolean;
    highlightLineWidth?: number;
    fillColor?: string | number;
    fillAlpha?: number;
    drawFilled?: boolean;
    lineWidth?: number;
    circleRadius?: number;
    circleColor?: string | number;
    circleColorHole?: string | number;
    drawCircleHole?: boolean;
    enableDashedLine?: {
        lineLength: number;
        spaceLength: number;
        phase: number;
    };
}
export declare class LineChartCommon extends View {
    protected lineChartArgs: ILineChart;
    static chartSettingsProperty: Property;
    static chartDataProperty: Property;
    chartSettings: ILineChart;
    chartData: Array<ILineSeries>;
    constructor(lineChartArgs: ILineChart);
    protected resolveColor(color: any): number;
    protected setDataset(dataset: any, lineData: any): void;
}
