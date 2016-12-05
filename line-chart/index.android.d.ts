import { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, RightYAxis, LeftYAxis } from "./line-chart.common";
export { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, RightYAxis, LeftYAxis };
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
    addLine(lineData: ILineSeries): void;
    getXAxis(): any;
    getYAxis(): void;
    private resolveColors(color);
    private setChart();
    private setYAxis(yAxisArgs, YAxis);
    constructor(lineChartArgs: ILineChart);
}
