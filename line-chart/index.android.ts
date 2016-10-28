import {View} from "ui/core/view";
import {Color} from "color";

declare var com:any;
declare var java:any;


var LineDataSet =     com.github.mikephil.charting.data.LineDataSet;
var LineData =        com.github.mikephil.charting.data.LineData;
var Entry =           com.github.mikephil.charting.data.Entry;
var ArrayList =       java.util.ArrayList;
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
  public setData(entryList){
    this._android.setData(entryList);
    this.invalidate();
  }
  
  //var xAxis = line.android.getXAxis();
    //xAxis.setGranularity(1);


  public addLine(lineData:ILineChart){
    
    var entries = new ArrayList();
    lineData.lineData.forEach((point:IPoint)=>{
      entries.add(
        new Entry(point.x,point.y)
      );
    })
    
    var dataset = new LineDataSet(entries,lineData.name);

    if(typeof lineData.color == "string" && Color.isValid(lineData.color)){
      dataset.setColor(new Color(<string>lineData.color).argb);
    }
    else if(typeof lineData.color == "number" && Color.isValid(lineData.color)){
      dataset.setColor(lineData);
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
    this._android.getLegend().setEnabled(true);
    this.invalidate();
  }

  constructor() {
        super();
    }
}


interface IPoint{
  x: number,
  y: number 
}

interface ILineChart{
    color?: string|number,
    
    lineData:Array<IPoint>,
    name:string
}