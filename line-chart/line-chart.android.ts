import {ILineSeries,IPoint,LegendForm,LegendHorizontalAlignment,LegendVerticalAlignment,ILineChart,XPosition,YPosition,Axis,XAxis,RightYAxis,LeftYAxis,LineChartCommon} 
    from "./line-chart.common";
export {ILineSeries,IPoint,LegendForm,LegendHorizontalAlignment,LegendVerticalAlignment,ILineChart,XPosition,YPosition,Axis,XAxis,RightYAxis,LeftYAxis}
import {Color} from "color";
import { PropertyChangeData } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import {resolveColor} from "../helper";
declare var com:any;
declare var java:any;

var LineDataSet =     com.github.mikephil.charting.data.LineDataSet;
var LineData =        com.github.mikephil.charting.data.LineData;
var Entry =           com.github.mikephil.charting.data.Entry;
var ArrayList =       java.util.ArrayList;
var Legend =          com.github.mikephil.charting.components.Legend;
var YAxisPosition = com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
var XAxisPosition = com.github.mikephil.charting.components.XAxis.XAxisPosition;


function onChartSettingsPropertyChanged(data: PropertyChangeData) {
    var LineChart = <LineChart>data.object;
    if (!LineChart.android) {
        return;
    }
    LineChart.setChartSettings(data.newValue);
    console.log("Chart settings changed.");
    //console.dump(data);
    /*.setPenColor(new Color(data.newValue).android)*/;
}

function onChartDataPropertyChanged(data: PropertyChangeData) {
    var LineChart = <LineChart>data.object;
    if (!LineChart.android) {
        return;
    }
    LineChart.setChartData(<Array<ILineSeries>>data.newValue);
    console.log("Chart settings changed.");
    //console.dump(data);
    /*.setPenColor(new Color(data.newValue).android)*/;
}


(<PropertyMetadata>LineChartCommon.chartSettingsProperty.metadata).onSetNativeValue = onChartSettingsPropertyChanged;
(<PropertyMetadata>LineChartCommon.chartDataProperty.metadata).onSetNativeValue = onChartDataPropertyChanged;


//var Form=com.github.mikephil.charting.components.Legend.LegendForm;
export class LineChart extends LineChartCommon {
    private _android: any;

    //typically, you'd have a .common.ts for common stuff
    //and a .android.ts that extends common for android-specific stuff (same for ios)
    //I'm showing in same class for simplicity

    //provide getters to native component that this NativeScript component represents
    get android() { return this._android; }
    get _nativeView() { return this._android; }
    

    //set chartSettings(value: ILineChart) {
        //super();
        //this._setValue(LineChartCommon.chartSettingsProperty, value);
    //}

    //how we create the UI of our View
    public _createUI() {
        this._android = new com.github.mikephil.charting.charts.LineChart(this._context,null);
        this.setChart();

    }
    public invalidate(){
        this._nativeView.invalidate();
    }

    public clear(){
        this._nativeView.clear();
        this._nativeView.notifyDataSetChanged();
        this.setChart();
    }

    public clearData(){
        if(this._nativeView.getData()){
            this._nativeView.getData().clearValues();
            this._nativeView.notifyDataSetChanged();
            this.invalidate();
        }
    }
    
    public setChartSettings(lineChartArgs:ILineChart){
        this.lineChartArgs=lineChartArgs;
        this.setChart();
        this._nativeView.notifyDataSetChanged();
        this.invalidate();
    }

    public addLine(lineData:ILineSeries){
        var entries = new ArrayList();
        lineData.lineData.forEach((point:IPoint)=>{
            entries.add(
                new Entry(point.x,point.y)
            );
        })
        var dataset = new LineDataSet(entries,lineData.name);
        this.setDataset(dataset,lineData);

        if(this._android.getData() == null || this._android.getData().getDataSetCount()==0){
            var lineDatasets = new ArrayList();
            lineDatasets.add(dataset);
            var lineDatas= new LineData(lineDatasets);
            this._android.setData(lineDatas);
        }
        else{
            this._android.getData().addDataSet(dataset);
        }
        this._android.getData().notifyDataChanged();
        this._android.notifyDataSetChanged();
        this.invalidate();
    }

    public setChartData(chartData:Array<ILineSeries>){
        if(typeof chartData == "undefined" || chartData == {} || chartData.length==0)
            return ;
        this.setChart();
        var lineDatasets = new ArrayList();
        chartData.forEach((lineSerie:ILineSeries)=>{
            var entries = new ArrayList();
            lineSerie.lineData.forEach((point:IPoint)=>{
                entries.add(
                    new Entry(point.x,point.y)
                );
            })
            var dataset = new LineDataSet(entries,lineSerie.name);
            this.setDataset(dataset,lineSerie);
            lineDatasets.add(dataset);
        });
        var lineDatas= new LineData(lineDatasets);
        this._android.setData(lineDatas);
        this._android.getData().notifyDataChanged();
        this._android.notifyDataSetChanged();
        this.invalidate();
    }



    public getXAxis(){
        return this._android.getXAxis();
    }
    public getRightYAxis(){
        return this._android.getAxisRight();
    }
    public getLeftYAxis(){
        return this._android.getAxisLeft();
    }

    /*private setDataset(lineData,dataset){
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

    }*/

    private setChart(){
        if(typeof this.lineChartArgs == "undefined"){
            return;
        }
        if('BaseSettings' in this.lineChartArgs){
            let chart = this._android; 
            let baseSettings = this.lineChartArgs.BaseSettings;
            if('backgroundColor' in baseSettings){
                chart.setBackgroundColor(resolveColor(baseSettings.backgroundColor));
            }
            if('enabledDescription' in baseSettings){
                if(typeof baseSettings.enabledDescription == "boolean")
                    chart.getDescription().setEnabled(baseSettings.enabledDescription);
            }
            if('description' in baseSettings){
                if(typeof baseSettings.description=="string")
                    chart.getDescription().setText(baseSettings.description);
            }
            if('descriptionColor' in baseSettings){
                chart.getDescription().setTextColor(baseSettings.descriptionColor);
            }
            if('descriptionPosition' in baseSettings){
                if(typeof baseSettings.descriptionPosition.x != "undefined" && baseSettings.descriptionPosition.x > 0 &&
                     typeof baseSettings.descriptionPosition.y != "undefined" && baseSettings.descriptionPosition.y > 0
                )
                    chart.getDescription().setPosition(baseSettings.descriptionPosition.x,baseSettings.descriptionPosition.y)
            }
            if('descriptionTextSize' in baseSettings){
                if(baseSettings.descriptionTextSize > 0)
                    chart.getDescription().setTextSize(baseSettings.descriptionTextSize);
            }
            if('noDataText' in baseSettings){
                if(typeof baseSettings.noDataText=="string")chart.setNoDataText(baseSettings.noDataText);
            }
            if('drawGridBackground' in baseSettings){
                if(typeof baseSettings.drawGridBackground=="boolean")chart.setDrawGridBackground(baseSettings.drawGridBackground);
            }
            if('gridBackgroundColor' in baseSettings){
                chart.setGridBackgroundColor(resolveColor(baseSettings.gridBackgroundColor));
            }
            if('drawBorders' in baseSettings){
                if(typeof baseSettings.drawBorders=="boolean")chart.setDrawBorders(baseSettings.drawBorders);
            }
            if('borderColor' in baseSettings){
                chart.setBorderColor(resolveColor(baseSettings.borderColor));
            }
            if('borderWidth' in baseSettings){
                if(baseSettings.borderWidth > 0)
                    chart.setBorderWidth(baseSettings.borderWidth);
            }
            if('maxVisibleValueCount' in baseSettings){
                if(baseSettings.maxVisibleValueCount > 0)
                    chart.setMaxVisibleValueCount(baseSettings.maxVisibleValueCount);
            }
        } 
        if('Legend' in this.lineChartArgs){
            let legend = this._android.getLegend();
            let legendArgs = this.lineChartArgs.Legend;
            if('enabled' in legendArgs){
                if(typeof legendArgs.enabled=="boolean")legend.setEnabled(legendArgs.enabled);
            }
            if('textColor' in legendArgs){
                legend.setTextColor(resolveColor(legendArgs.textColor));
            }
            if('wordWrap' in legendArgs){
                if(typeof legendArgs.wordWrap=="boolean")legend.setWordWrap(legendArgs.wordWrap);
            }
            if('maxSize' in legendArgs){
                if(legendArgs.maxSize>0)legend.setMaxSize(legendArgs.maxSize);
            }
            if('form' in legendArgs){
                legend.setForm(Legend.LegendForm.valueOf(legendArgs.form));
            }
        }
        if('XAxis' in this.lineChartArgs){
            let xAxisArgs = this.lineChartArgs.XAxis;
            let XAxis = this._android.getXAxis();
            if('enabled' in xAxisArgs){
                if(typeof xAxisArgs.enabled=="boolean")XAxis.setEnabled(xAxisArgs.enabled);
            }
            if('drawLabels' in xAxisArgs){
                if(typeof xAxisArgs.drawLabels=="boolean")XAxis.setDrawLabels(xAxisArgs.drawLabels);
            }
            if('drawAxisLine' in xAxisArgs){
                if(typeof xAxisArgs.drawAxisLine=="boolean")XAxis.setDrawAxisLine(xAxisArgs.drawAxisLine);
            }
            if('drawGridLines' in xAxisArgs){
                if(typeof xAxisArgs.drawGridLines=="boolean")XAxis.setDrawGridLines(xAxisArgs.drawGridLines);
            }
            if('axisMaximum' in xAxisArgs){
                if(typeof xAxisArgs.axisMaximum=="boolean")XAxis.setAxisMaximum(xAxisArgs.axisMaximum);
            }
            if('axisMinimum' in xAxisArgs){
                if(typeof xAxisArgs.axisMinimum=="boolean")XAxis.setAxisMinimum(xAxisArgs.axisMinimum);
            }
            if('inverted' in xAxisArgs){
               if(typeof xAxisArgs.inverted=="boolean")XAxis.setInverted(xAxisArgs.inverted);
            }
            /*if('spaceTop' in xAxisArgs){
                if(xAxisArgs.spaceTop <= 100 && xAxisArgs.spaceTop >= 0) XAxis.setSpaceTop(xAxisArgs.spaceTop);
            }
            if('spaceBottom' in xAxisArgs){
                if(xAxisArgs.spaceBottom <= 100 && xAxisArgs.spaceBottom >= 0) XAxis.setSpaceBottom(xAxisArgs.spaceBottom);
            }*/
            if('showOnlyMinMax' in xAxisArgs){
                if(typeof xAxisArgs.inverted=="boolean")XAxis.setShowOnlyMinMax(xAxisArgs.showOnlyMinMax);
            }
            if('labelCount' in xAxisArgs){
                if(xAxisArgs.labelCount.count>0 && typeof xAxisArgs.labelCount.count != "undefined" && typeof xAxisArgs.labelCount.force == "boolean")
                    XAxis.setLabelCount(xAxisArgs.labelCount.count,xAxisArgs.labelCount.force);
            }
            if('granularity' in xAxisArgs){
                if(xAxisArgs.granularity>0)XAxis.setGranularity(xAxisArgs.granularity);
            }
            if('granularityEnabled' in xAxisArgs){
                if(typeof xAxisArgs.granularityEnabled=="boolean")XAxis.setGranularityEnabled(xAxisArgs.granularityEnabled);
            }
            if('textColor' in xAxisArgs){
                XAxis.setTextColor(resolveColor(xAxisArgs.textColor));
            }
            if('textSize' in xAxisArgs){
                if(xAxisArgs.textSize > 0)XAxis.setTextSize(xAxisArgs.textSize);
            }
            if('gridColor' in xAxisArgs){
                XAxis.setGridColor(resolveColor(xAxisArgs.gridColor));
            }
            if('gridLineWidth' in xAxisArgs){
                if(xAxisArgs.textSize > 0)XAxis.setGridLineWidth(xAxisArgs.gridLineWidth);
            }
            if('enableGridDashedLine' in xAxisArgs){
                if(xAxisArgs.enableGridDashedLine.lineLength>0 && xAxisArgs.enableGridDashedLine.spaceLength>0 && xAxisArgs.enableGridDashedLine.phase>0)
                XAxis.enableGridDashedLine(xAxisArgs.enableGridDashedLine.lineLength, xAxisArgs.enableGridDashedLine.spaceLength, xAxisArgs.enableGridDashedLine.phase);
            }
            if('position' in xAxisArgs){
                XAxis.setPosition(XAxisPosition.valueOf(xAxisArgs.position));
            }
            if('labelRotationAngle' in xAxisArgs){
                XAxis.setLabelRotationAngle(xAxisArgs.labelRotationAngle);
            }
        }
        if('RightYAxis' in this.lineChartArgs){
            let yAxisArgs = this.lineChartArgs.RightYAxis;
            let YAxis = this._android.getAxisRight();
            this.setYAxis(yAxisArgs,YAxis);
        }
        if('LeftYAxis' in this.lineChartArgs){
            let yAxisArgs = this.lineChartArgs.LeftYAxis;
            let YAxis = this._android.getAxisLeft();
            this.setYAxis(yAxisArgs,YAxis);
        }
    }
    private setYAxis(yAxisArgs,YAxis){
        if('enabled' in yAxisArgs){
            if(typeof yAxisArgs.enabled=="boolean")YAxis.setEnabled(yAxisArgs.enabled);
        }
        if('drawLabels' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setDrawLabels(yAxisArgs.drawLabels);
        }
        if('drawAxisLine' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setDrawAxisLine(yAxisArgs.drawAxisLine);
        }
        if('drawGridLines' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setDrawGridLines(yAxisArgs.drawGridLines);
        }
        if('axisMaximum' in yAxisArgs){
            YAxis.setAxisMaximum(yAxisArgs.axisMaximum);
        }
        if('axisMinimum' in yAxisArgs){
            YAxis.setAxisMinimum(yAxisArgs.axisMinimum);
        }
        if('inverted' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setInverted(yAxisArgs.inverted);
        }
        if('spaceTop' in yAxisArgs){
            if(yAxisArgs.spaceTop <= 100 && yAxisArgs.spaceTop >= 0) YAxis.setSpaceTop(yAxisArgs.spaceTop);
        }
        if('spaceBottom' in yAxisArgs){
            if(yAxisArgs.spaceBottom <= 100 && yAxisArgs.spaceBottom >= 0) YAxis.setSpaceBottom(yAxisArgs.spaceBottom);
        }
        if('showOnlyMinMax' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setShowOnlyMinMax(yAxisArgs.showOnlyMinMax);
        }
        if('labelCount' in yAxisArgs){
            if(yAxisArgs.labelCount.count && yAxisArgs.labelCount.count > 0 && typeof yAxisArgs.labelCount.force=="boolean")
            YAxis.setLabelCount(yAxisArgs.labelCount.count,yAxisArgs.labelCount.force);
        }
        if('granularity' in yAxisArgs){
            if(yAxisArgs.granularity > 0) YAxis.setGranularity(yAxisArgs.granularity);
        }
        if('granularityEnabled' in yAxisArgs){
            if(typeof yAxisArgs.drawLabels=="boolean")YAxis.setGranularityEnabled(yAxisArgs.granularityEnabled);
        }
        if('textColor' in yAxisArgs){
            YAxis.setTextColor(resolveColor(yAxisArgs.textColor));
        }
        if('textSize' in yAxisArgs){
            if(yAxisArgs.textSize > 0)YAxis.setTextSize(yAxisArgs.textSize);
        }
        if('gridColor' in yAxisArgs){
            YAxis.setGridColor(resolveColor(yAxisArgs.gridColor));
        }
        if('gridLineWidth' in yAxisArgs){
            if(yAxisArgs.gridLineWidth > 0)YAxis.setGridLineWidth(yAxisArgs.gridLineWidth);
        }
        if('enableGridDashedLine' in yAxisArgs){
            if(yAxisArgs.enableGridDashedLine.lineLength > 0 && yAxisArgs.enableGridDashedLine.spaceLength > 0 && yAxisArgs.enableGridDashedLine.phase > 0)
            YAxis.enableGridDashedLine(yAxisArgs.enableGridDashedLine.lineLength, yAxisArgs.enableGridDashedLine.spaceLength, yAxisArgs.enableGridDashedLine.phase);
        }
        if('position' in yAxisArgs){
            YAxis.setPosition(YAxisPosition.valueOf(yAxisArgs.position));
        }
        if('drawZeroLine' in yAxisArgs){
            if(typeof yAxisArgs.drawZeroLine=="boolean")YAxis.setDrawZeroLine(yAxisArgs.drawZeroLine);
        }
        if('zeroLineWidth' in yAxisArgs){
            if(yAxisArgs.zeroLineWidth > 0)YAxis.setZeroLineWidth(yAxisArgs.zeroLineWidth);
        }
        if('zeroLineColor' in yAxisArgs){
            YAxis.setZeroLineColor(resolveColor(yAxisArgs.zeroLineColor));
        }
    }
//}
    
}