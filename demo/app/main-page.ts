import * as observable from "data/observable";
import * as pages from "ui/page";
import colorModule = require("color");

var Color = colorModule.Color;
import {LineChart,LegendHorizontalAlignment,XPosition,YPosition,ILineChart,ILineSeries}  from "nativescript-charts/line-chart";
//LineChart.LegendHorizontalAlignment;
//import * as legend from "nativescript-charts/components/legend";

// Event handler for Page "loaded" event attached in main-page.xml
declare var com:any;
declare var java:any;
declare var Array:any;

var line;
var graph1;
var i=0;
var obj=new observable.Observable({
    chartSettings:{},
    chartData:{}
});
var boolValue=true;
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
   


    let page = <pages.Page>args.object;
    
    var StackLayout:any=page.getViewById("lay");
    //console.log(1)
    var linechartOpts:ILineChart={
        Legend:{
            enabled:true
        },
        XAxis:{
            textSize:12,
            textColor:"green"
            /*position:XPosition.BOTTOM*/            
        },
        RightYAxis:{
            textSize:15,
            textColor:"blue"
        },
        LeftYAxis:{
            textSize:20,
            textColor:"red"
        },
        BaseSettings:{
            //backgroundColor:"black",
            enabledDescription:false,
            description:"POMOOOOOOOOOOOOOOOOOC",
            noDataText:"Nemame data"
        }
    }
    
    graph1=<LineChart>page.getViewById("graph1");
    line = <LineChart>(new LineChart(linechartOpts));
    //console.log(2)
    line.height=400;
    //console.log(3)
    StackLayout.addChild(line);
    //console.log(4)
    var points  = [
        {x:1,y:1},
        {x:3,y:5},
        {x:7,y:0},
        {x:8,y:4.5},
        {x:10,y:9}
    ];
    
    var lineData = {
        lineData: points,
        color:"red",
        name:"test"
    };
    //console.log(5)
    line.addLine(lineData);
    var points2  = [
        {x:1,y:4},
        {x:3,y:5.9},
        {x:7,y:4},
        {x:8,y:10},
        {x:10,y:1}
    ];
    var lineData2:ILineSeries = {
        lineData: points2,
        color:"green",
        name:"test",  
    };
    //console.log(6)
    line.addLine(lineData2);
    obj.set("chartSettings",linechartOpts);
    obj.set("chartData",[lineData,lineData2]);
    page.bindingContext=obj;

    //graph1.addLine(lineData2);

}

export function addLine(args: observable.EventData){
    var points2  = [
        {x:1,y:(Math.random() * 100) - 49},
        {x:3,y:(Math.random() * 100) - 49},
        {x:7,y:(Math.random() * 100) - 19},
        {x:8,y:(Math.random() * 100) - 79},
        {x:10,y:(Math.random() * 100) - 59}
    ];
        var color= Math.floor((Math.random()*16777215) - 16777216);
        var textColors=[
          Math.floor((Math.random()*16777215) - 16777216),
          Math.floor((Math.random()*16777215) - 16777216)          
        ];
      //console.log("color: " + color);

    var lineData2:ILineSeries = {
        lineData: points2,
        color:color,
        name:"test"+i,
        valueTextSize:10,
        valueTextColors:textColors,
        circleColor:color,
        drawCircleHole:false,
        circleRadius:4
    };
    i++;
    line.addLine(lineData2);
    graph1.addLine(lineData2);

}

export function clearData(args: observable.EventData){
    line.clearData();
    graph1.clearData();
}
export function clearGraph(args: observable.EventData){
    line.clear();
    graph1.clear();
}

export function editSettings(args: observable.EventData){
    let page = <pages.Page>args.object;
    boolValue=!boolValue;
    var linechartOpts:ILineChart={
        Legend:{
            enabled:boolValue
        },
        XAxis:{
            textSize:12,
            textColor:"green"
            /*position:XPosition.BOTTOM*/            
        },
        RightYAxis:{
            textSize:20,
            textColor:"blue"
        },
        LeftYAxis:{
            textSize:10,
            textColor:"red"
        },
        BaseSettings:{
            //backgroundColor:"black",
            enabledDescription:false,
            description:"POMOOOOOOOOOOOOOOOOOC",
            noDataText:"Nemame data"
        }
    };
    obj.set("chartSettings",linechartOpts);
}