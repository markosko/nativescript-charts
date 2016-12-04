import {ILegend,LegendHorizontalAlignment,LegendVerticalAlignment,LegendForm} from "../components/legend";
import {XPosition,YPosition,Axis,XAxis,YSide,YAxis} from "../components/axes";

export {ILegend,LegendHorizontalAlignment,LegendVerticalAlignment,LegendForm}
export {XPosition,YPosition,Axis,XAxis,YSide,YAxis}


export interface ILineChart{
    Legend?:ILegend,
    XAxis?:XAxis,
    YAxis?:YAxis,
}

export interface IPoint{
    x: number,
    y: number 
}

export interface ILineSeries{
    color?: string|number,
    lineData:Array<IPoint>,
    name:string
}