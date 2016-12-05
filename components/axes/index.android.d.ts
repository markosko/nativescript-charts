export declare enum YPosition {
    OUTSIDE_CHART,
    INSIDE_CHART,
}
export declare enum XPosition {
    TOP,
    BOTTOM,
    BOTH_SIDED,
    TOP_INSIDE,
    BOTTOM_INSIDE,
}
export interface Axis {
    enabled?: boolean;
    drawLabels?: boolean;
    drawAxisLine?: boolean;
    drawGridLines?: boolean;
    axisMaximum?: number;
    axisMinimum?: number;
    inverted?: boolean;
    showOnlyMinMax?: boolean;
    labelCount?: {
        count: number;
        force: boolean;
    };
    granularity?: number;
    granularityEnabled?: boolean;
    textColor?: string | number;
    textSize?: number;
    gridColor?: string | number;
    gridLineWidth?: number;
    axisLineWidth?: number;
    enableGridDashedLine?: {
        lineLength: number;
        spaceLength: number;
        phase: number;
    };
}
export interface YAxis extends Axis {
    position?: YPosition;
    drawZeroLine?: boolean;
    zeroLineWidth?: number;
    zeroLineColor?: string | number;
    spaceTop?: number;
    spaceBottom?: number;
}
export interface RightYAxis extends YAxis {
}
export interface LeftYAxis extends YAxis {
}
export interface XAxis extends Axis {
    position?: XPosition;
    labelRotationAngle?: number;
}
