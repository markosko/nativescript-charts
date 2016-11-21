import {View} from "ui/core/view";
import {Color} from "color";
export {LegendHorizontalAlignment,LegendVerticalAlignment} from "../components/legend";
declare var com:any;
declare var java:any;


export declare interface IPoint{
  x: number,
  y: number 
}

export declare interface ILineChart{
    color?: string|number,
    
    lineData:Array<IPoint>,
    name:string
}


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

  public addLine(lineData:ILineChart){
    var entries = new ArrayList();
    lineData.lineData.forEach((point:IPoint)=>{
      entries.add(
        new Entry(point.x,point.y)
      );
    })
    var dataset = new LineDataSet(entries,lineData.name);
    if(typeof lineData.color == "string" && Color.isValid(lineData.color)){
      var color = new Color(<string>lineData.color).argb;
      dataset.setColor(color);
    }
    else if(typeof lineData.color == "number"){
      var color = new Color(<number>lineData.color).argb
      dataset.setColor(color);
    }
    if(this._android.getData() == null || this._android.getData().getDataSetCount()==0){
      var lineDatasets = new ArrayList();
      lineDatasets.add(dataset);
      var lineDatas= new LineData(lineDatasets);
      this._android.setData(lineDatas);
    }
    else{
      this._android.getData().addDataSet(dataset);
    }

    this.invalidate();
  }

  public getXAxis(){
    return this._android.getXAxis();
  }
  
 

  constructor() {
        super();
    }
}