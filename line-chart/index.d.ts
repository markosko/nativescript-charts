import {View} from "ui/core/view";
declare var com:any;


export declare class LineChart extends View{
    //com:any;
    public LineData: any;//com.github.mikephil.charting.data.LineData;
    public ArrayList;//java.util.ArrayList;
    public setData(): any|void;
    public setData(LineData:any): any|void;
    public addLine(LineData:ILineChart): any|void;
    public invalidate2(): void;
    public setValues(ArrayList): any|void;
}

export declare interface IPoint{
  x: number,
  y: number 
}

export declare interface ILineChart{
    color?: string,
    lineData:Array<IPoint>
}