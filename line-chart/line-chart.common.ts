import { ILegend, LegendHorizontalAlignment, LegendVerticalAlignment, LegendForm } from "../components/legend";
import { XPosition, YPosition, Axis, XAxis, LeftYAxis, RightYAxis } from "../components/axes";
import { BaseChartSettings } from "../components/chart";
import { Dataset } from "../components/dataset";
import { resolveColor } from "../helper";
import { View } from "ui/core/view";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyMetadataSettings } from "ui/core/dependency-observable";

var chartSettingsProperty = new Property(
    "settings",
    "LineChart",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var chartDataProperty = new Property(
    "data",
    "LineChart",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

export {ILegend,LegendHorizontalAlignment,LegendVerticalAlignment,LegendForm}
export {XPosition,YPosition,Axis,XAxis,LeftYAxis,RightYAxis}

export interface ILineChart{
    Legend?:ILegend,
    XAxis?:XAxis,
    LeftYAxis?:LeftYAxis,
    RightYAxis?:RightYAxis,
    BaseSettings?:BaseChartSettings
    
}

export interface IPoint{
    x: number,
    y: number 
}

export interface ILineSeries extends Dataset{
    color?: string|number,
    lineData:Array<IPoint>,
    name:string,
    highLightColor?:string|number,
    drawHighlightIndicators?:boolean,
    highlightLineWidth?:number,
    fillColor?:string|number,
    fillAlpha?:number,
    drawFilled?:boolean,
    lineWidth?:number,
    circleRadius?:number,
    circleColor?:string|number,
    circleColorHole?:string|number,
    drawCircleHole?:boolean,
    enableDashedLine?:{
        lineLength:number, spaceLength:number, phase:number
    }
}

var ArrayList = java.util.ArrayList;


export class LineChartCommon extends View {
    public static chartSettingsProperty = chartSettingsProperty;
    public static chartDataProperty = chartDataProperty;
    

    
    get chartSettings(): ILineChart {
        return this._getValue(LineChartCommon.chartSettingsProperty);
    }
    set chartSettings(value: ILineChart) {
        console.dump(value);
        this._setValue(LineChartCommon.chartSettingsProperty, value);
    }

    get chartData(): Array<ILineSeries> {
        return this._getValue(LineChartCommon.chartDataProperty);
    }
    set chartData(value: Array<ILineSeries>) {
        console.dump(value);
        this._setValue(LineChartCommon.chartDataProperty, value);
    }

    constructor(protected lineChartArgs:ILineChart) {
        super();
    }
    protected resolveColors(color){
        return resolveColor(color);
    }

    protected setDataset(dataset,lineData){
        dataset.setColor(resolveColor(lineData.color));
        if('valueTextColor' in lineData){
            dataset.setValueTextColor(resolveColor(lineData.valueTextColor));
        }
        if('valueTextColors' in lineData){
            var colors = new ArrayList();
            lineData.valueTextColors.forEach((item)=>{
                colors.add(new java.lang.Integer(resolveColor(item)));
            });
            dataset.setValueTextColors(colors);
            colors=null;
        }
        if('valueTextSize' in lineData){
            dataset.setValueTextSize(lineData.valueTextSize);
        }
        if('drawValues' in lineData){
            dataset.setDrawValues(lineData.drawValues);
        }
        if('highlightEnabled' in lineData){
            dataset.setHighlightEnabled(lineData.highlightEnabled);
        }
        if('drawVerticalHighlightIndicator' in lineData){
            dataset.setDrawVerticalHighlightIndicator(lineData.drawVerticalHighlightIndicator);
        }
        if('drawHorizontalHighlightIndicator' in lineData){
            dataset.setDrawHorizontalHighlightIndicator(lineData.drawHorizontalHighlightIndicator);
        }
        if('highLightColor' in lineData){
            dataset.setHighLightColor(resolveColor(lineData.highLightColor));
        }
        if('drawHighlightIndicators' in lineData){
            dataset.setDrawHighlightIndicators(lineData.drawHighlightIndicators);
        }
        if('highlightLineWidth' in lineData){
            dataset.setHighlightLineWidth(lineData.highlightLineWidth);
        }
        if('fillColor' in lineData){
            dataset.setFillColor(resolveColor(lineData.fillColor));
        }
        if('fillAlpha' in lineData){
            if(lineData.fillAlpha <= 255 && lineData.fillAlpha >= 0){
                dataset.setFillAlpha(lineData.fillAlpha);
            }
        }
        if('drawFilled' in lineData){
            dataset.setDrawFilled(lineData.drawFilled);
        }
        if('lineWidth' in lineData){
            dataset.setLineWidth(lineData.lineWidth);
        }
        if('circleRadius' in lineData){
            dataset.setCircleRadius(lineData.circleRadius);
        }
        if('circleColor' in lineData){
            dataset.setCircleColor(resolveColor(lineData.circleColor));
        }
        if('circleColorHole' in lineData){
            dataset.setCircleColorHole(resolveColor(lineData.circleColorHole));
        }
        if('drawCircleHole' in lineData){
            dataset.setDrawCircleHole(lineData.drawCircleHole);
        }
        if('enableDashedLine' in lineData){
            dataset.enableDashedLine(lineData.enableDashedLine.lineLength, lineData.enableDashedLine.spaceLength, lineData.enableDashedLine.phase);
        }

    }

}