import { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, YAxis, YSide } from "./line-chart.common";
export { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, YAxis, YSide };
import { View } from "ui/core/view";
export declare class LineChart extends View {
    private lineChartArgs;
    _android: any;
    readonly android: any;
    readonly _nativeView: any;
    _createUI(): void;
    invalidate(): void;
    clear(): void;
    clearData(): void;
    addLine(lineData: ILineSeries): any;
    getXAxis(): any;
    getYAxis(): void;
    constructor(lineChartArgs: ILineChart);
}
