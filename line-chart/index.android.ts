import {ILineSeries,IPoint,LegendForm,LegendHorizontalAlignment,LegendVerticalAlignment,ILineChart,XPosition,YPosition,Axis,XAxis,YAxis,YSide} from "./line-chart.common";
export {ILineSeries,IPoint,LegendForm,LegendHorizontalAlignment,LegendVerticalAlignment,ILineChart,XPosition,YPosition,Axis,XAxis,YAxis,YSide}
import {View} from "ui/core/view";
import {Color} from "color";
import {resolveColor} from "../helper";
declare var com:any;
declare var java:any;

var LineDataSet =     com.github.mikephil.charting.data.LineDataSet;
var LineData =        com.github.mikephil.charting.data.LineData;
var Entry =           com.github.mikephil.charting.data.Entry;
var ArrayList =       java.util.ArrayList;
var Legend =          com.github.mikephil.charting.components.Legend;

export class LineChart extends View {
    _android: any;

    //typically, you'd have a .common.ts for common stuff
    //and a .android.ts that extends common for android-specific stuff (same for ios)
    //I'm showing in same class for simplicity

    //provide getters to native component that this NativeScript component represents
    get android() { return this._android; }
    get _nativeView() { return this._android; }

    //how we create the UI of our View
    public _createUI() {
        this._android = new com.github.mikephil.charting.charts.LineChart(this._context);
        if('Legend' in this.lineChartArgs){
            let legend = this._android.getLegend();
            let legendArgs = this.lineChartArgs.Legend;
            if('enabled' in legendArgs){
                legend.setEnabled(legendArgs.enabled);
            }
            if('textColor' in legendArgs){
                legend.setTextColor(resolveColor(legendArgs.textColor));
            }
            if('wordWrap' in legendArgs){
                legend.setWordWrap(legendArgs.wordWrap);
            }
            if('maxSize' in legendArgs){
                legend.setMaxSize(legendArgs.maxSize);
            }
        }
        if('XAxis' in this.lineChartArgs){
            let xAxisArgs = this.lineChartArgs.XAxis
            let XAxis = this._android.getXAxis();
            if('enabled' in xAxisArgs){
                XAxis.setEnabled(xAxisArgs.enabled);
            }
            if('drawLabels' in xAxisArgs){
                XAxis.setDrawLabels(xAxisArgs.drawLabels);
            }
            if('drawAxisLine' in xAxisArgs){
                XAxis.setDrawAxisLine(xAxisArgs.drawAxisLine);
            }
            if('drawGridLines' in xAxisArgs){
                XAxis.setDrawGridLines(xAxisArgs.drawGridLines);
            }
            if('axisMaximum' in xAxisArgs){
                XAxis.setAxisMaximum(xAxisArgs.axisMaximum);
            }
            if('axisMinimum' in xAxisArgs){
                XAxis.setAxisMinimum(xAxisArgs.axisMinimum);
            }
            if('inverted' in xAxisArgs){
                XAxis.setInverted(xAxisArgs.inverted);
            }
            /*if('spaceTop' in xAxisArgs){
                if(xAxisArgs.spaceTop <= 100 && xAxisArgs.spaceTop >= 0) XAxis.setSpaceTop(xAxisArgs.spaceTop);
            }
            if('spaceBottom' in xAxisArgs){
                if(xAxisArgs.spaceBottom <= 100 && xAxisArgs.spaceBottom >= 0) XAxis.setSpaceBottom(xAxisArgs.spaceBottom);
            }*/
            if('showOnlyMinMax' in xAxisArgs){
                XAxis.setShowOnlyMinMax(xAxisArgs.showOnlyMinMax);
            }
            if('labelCount' in xAxisArgs){
                XAxis.setLabelCount(xAxisArgs.labelCount.count,xAxisArgs.labelCount.force);
            }
            if('granularity' in xAxisArgs){
                XAxis.setGranularity(xAxisArgs.granularity);
            }
            if('granularityEnabled' in xAxisArgs){
                XAxis.setGranularityEnabled(xAxisArgs.granularityEnabled);
            }
            if('textColor' in xAxisArgs){
                XAxis.setTextColor(resolveColor(xAxisArgs.textColor));
            }
            if('textSize' in xAxisArgs){
                XAxis.setTextSize(xAxisArgs.textSize);
            }
            if('gridColor' in xAxisArgs){
                XAxis.setGridColor(resolveColor(xAxisArgs.gridColor));
            }
            if('gridLineWidth' in xAxisArgs){
                XAxis.setGridLineWidth(xAxisArgs.gridLineWidth);
            }
            if('enableGridDashedLine' in xAxisArgs){
                XAxis.enableGridDashedLine(xAxisArgs.enableGridDashedLine.lineLength, xAxisArgs.enableGridDashedLine.spaceLength, xAxisArgs.enableGridDashedLine.phase);
            }
            if('position' in xAxisArgs){
                XAxis.setPosition(xAxisArgs.position);
            }
            if('labelRotationAngle' in xAxisArgs){
                XAxis.setLabelRotationAngle(xAxisArgs.labelRotationAngle);
            }
        }
        if('YAxis' in this.lineChartArgs){
            let yAxisArgs = this.lineChartArgs.YAxis
            let side;
            if('side' in yAxisArgs){
                if(yAxisArgs.side==YSide.LEFT)side=[1];
                else if(yAxisArgs.side==YSide.RIGHT)side=[2];
                else if(yAxisArgs.side==YSide.BOTH)side=[1,2];
            }else{
                side=[1,2];
            }
            let YAxis;
            for(var axisSide of side ){
                if(axisSide==1){
                    YAxis = this._android.getAxisLeft();
                }else{
                    YAxis = this._android.getAxisRight();
                }
                if('enabled' in yAxisArgs){
                    YAxis.setEnabled(yAxisArgs.enabled);
                }
                if('drawLabels' in yAxisArgs){
                    YAxis.setDrawLabels(yAxisArgs.drawLabels);
                }
                if('drawAxisLine' in yAxisArgs){
                    YAxis.setDrawAxisLine(yAxisArgs.drawAxisLine);
                }
                if('drawGridLines' in yAxisArgs){
                    YAxis.setDrawGridLines(yAxisArgs.drawGridLines);
                }
                if('axisMaximum' in yAxisArgs){
                    YAxis.setAxisMaximum(yAxisArgs.axisMaximum);
                }
                if('axisMinimum' in yAxisArgs){
                    YAxis.setAxisMinimum(yAxisArgs.axisMinimum);
                }
                if('inverted' in yAxisArgs){
                    YAxis.setInverted(yAxisArgs.inverted);
                }
                if('spaceTop' in yAxisArgs){
                    if(yAxisArgs.spaceTop <= 100 && yAxisArgs.spaceTop >= 0) YAxis.setSpaceTop(yAxisArgs.spaceTop);
                }
                if('spaceBottom' in yAxisArgs){
                    if(yAxisArgs.spaceBottom <= 100 && yAxisArgs.spaceBottom >= 0) YAxis.setSpaceBottom(yAxisArgs.spaceBottom);
                }
                if('showOnlyMinMax' in yAxisArgs){
                    YAxis.setShowOnlyMinMax(yAxisArgs.showOnlyMinMax);
                }
                if('labelCount' in yAxisArgs){
                    YAxis.setLabelCount(yAxisArgs.labelCount.count,yAxisArgs.labelCount.force);
                }
                if('granularity' in yAxisArgs){
                    YAxis.setGranularity(yAxisArgs.granularity);
                }
                if('granularityEnabled' in yAxisArgs){
                    YAxis.setGranularityEnabled(yAxisArgs.granularityEnabled);
                }
                if('textColor' in yAxisArgs){
                    YAxis.setTextColor(resolveColor(yAxisArgs.textColor));
                }
                if('textSize' in yAxisArgs){
                    YAxis.setTextSize(yAxisArgs.textSize);
                }
                if('gridColor' in yAxisArgs){
                    YAxis.setGridColor(resolveColor(yAxisArgs.gridColor));
                }
                if('gridLineWidth' in yAxisArgs){
                    YAxis.setGridLineWidth(yAxisArgs.gridLineWidth);
                }
                if('enableGridDashedLine' in yAxisArgs){
                    YAxis.enableGridDashedLine(yAxisArgs.enableGridDashedLine.lineLength, yAxisArgs.enableGridDashedLine.spaceLength, yAxisArgs.enableGridDashedLine.phase);
                }
                if('position' in yAxisArgs){
                    YAxis.setPosition(yAxisArgs.position);
                }
                if('drawZeroLine' in yAxisArgs){
                    YAxis.setDrawZeroLine(yAxisArgs.drawZeroLine);
                }
                if('zeroLineWidth' in yAxisArgs){
                    YAxis.setZeroLineWidth(yAxisArgs.zeroLineWidth);
                }
                if('zeroLineColor' in yAxisArgs){
                    YAxis.setZeroLineColor(resolveColor(yAxisArgs.zeroLineColor));
                }
            }
        }
    }
    public invalidate(){
        this._nativeView.invalidate();
    }

    //var xAxis = line
      //xAxis.setGranularity(1);
    public clear(){
        this._android.clear();
    }

    public clearData(){
        if(this._android.getData()){
            this._android.getData().clearValues();
            this.invalidate();
        }
    }

    public addLine(lineData:ILineSeries):any{
        var entries = new ArrayList();
        lineData.lineData.forEach((point:IPoint)=>{
            entries.add(
                new Entry(point.x,point.y)
            );
        })
        var dataset = new LineDataSet(entries,lineData.name);
        /*if(typeof lineData.color == "string" && Color.isValid(lineData.color)){
          var color = new Color(<string>lineData.color).argb;
          dataset.setColor(color);
        }
        else if(typeof lineData.color == "number"){
          var color = new Color(<number>lineData.color).argb
          dataset.setColor(color);
        }*/
        dataset.setColor(resolveColor(lineData.color));
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
        //this._android.getData().notifyDataSetChanged();
        this.invalidate();
    }

    public getXAxis(){
        return this._android.getXAxis();
    }
    public getYAxis(){
        //return this._android.getYAxis();
    }


    constructor(private lineChartArgs:ILineChart) {
        super();
    }
}