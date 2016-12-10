import { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, RightYAxis, LeftYAxis, LineChartCommon } from "./line-chart.common";
export { ILineSeries, IPoint, LegendForm, LegendHorizontalAlignment, LegendVerticalAlignment, ILineChart, XPosition, YPosition, Axis, XAxis, RightYAxis, LeftYAxis };
export declare class LineChart extends LineChartCommon {
    private _android;
    readonly android: any;
    readonly _nativeView: any;
    _createUI(): void;
    invalidate(): void;
    clear(): void;
    clearData(): void;
    setChartSettings(lineChartArgs: ILineChart): void;
    addLine(lineData: ILineSeries): void;
    setChartData(chartData: Array<ILineSeries>): void;
    getXAxis(): any;
    getRightYAxis(): any;
    getLeftYAxis(): any;
    private setChart();
    private setYAxis(yAxisArgs, YAxis);
}
