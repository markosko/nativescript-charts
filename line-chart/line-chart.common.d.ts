import { ILegend, LegendHorizontalAlignment, LegendVerticalAlignment, LegendForm } from "../components/legend";
import { XPosition, YPosition, Axis, XAxis, LeftYAxis, RightYAxis } from "../components/axes";
import { Dataset } from "../components/dataset";
export { ILegend, LegendHorizontalAlignment, LegendVerticalAlignment, LegendForm };
export { XPosition, YPosition, Axis, XAxis, LeftYAxis, RightYAxis };
export interface ILineChart {
    Legend?: ILegend;
    XAxis?: XAxis;
    LeftYAxis?: LeftYAxis;
    RightYAxis?: RightYAxis;
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
