declare var com;
//let cLegend = com.github.mikephil.charting.components.Legends;

export enum YPosition{
     OUTSIDE_CHART = com.github.mikephil.charting.components.YAxis.YAxisLabelPosition.OUTSIDE_CHART,
     INSIDE_CHART = com.github.mikephil.charting.components.YAxis.YAxisLabelPosition.INSIDE_CHART
}
export enum XPosition{
     TOP = com.github.mikephil.charting.components.XAxis.XAxisPosition.TOP,
     BOTTOM = com.github.mikephil.charting.components.XAxis.XAxisPosition.BOTTOM,
     BOTH_SIDED = com.github.mikephil.charting.components.XAxis.XAxisPosition.BOTH_SIDED,
     TOP_INSIDE = com.github.mikephil.charting.components.XAxis.XAxisPosition.TOP_INSIDE,
     BOTTOM_INSIDE = com.github.mikephil.charting.components.XAxis.XAxisPosition.BOTTOM_INSIDE
}
/*export enum YSide{
    LEFT,
    RIGHT,
    BOTH
}*/
export interface Axis{
    enabled?:boolean,
    drawLabels?:boolean,
    drawAxisLine?:boolean,
    drawGridLines?:boolean,
    axisMaximum?:number,
    axisMinimum?:number,
    inverted?:boolean,
    showOnlyMinMax?:boolean,
    labelCount?:{
        count:number,force:boolean
    },
    granularity?:number,
    granularityEnabled?:boolean,
    textColor?:string|number,
    textSize?:number,
    gridColor?:string|number,
    gridLineWidth?:number,
    axisLineWidth?:number,
    enableGridDashedLine?:{
        lineLength:number, spaceLength:number, phase:number
    }
}

export interface YAxis extends Axis{
    position?:YPosition,
    drawZeroLine?:boolean,
    zeroLineWidth?:number,
    zeroLineColor?:string|number,
    spaceTop?:number,
    spaceBottom?:number
}
export interface RightYAxis extends YAxis{}
export interface LeftYAxis extends YAxis{}

export interface XAxis extends Axis{
    position?:XPosition,
    labelRotationAngle?:number
}