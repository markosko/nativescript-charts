import * as observable from "data/observable";
import * as pages from "ui/page";
import colorModule = require("color");
var Color = colorModule.Color;
import {LineChart,LegendHorizontalAlignment}  from "nativescript-charts/line-chart";
//LineChart.LegendHorizontalAlignment;
//import * as legend from "nativescript-charts/components/legend";

// Event handler for Page "loaded" event attached in main-page.xml
declare var com:any;
declare var java:any;
declare var Array:any;

var line;
var i=0;
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
   

    let page = <pages.Page>args.object;
    var StackLayout:any=page.getViewById("lay");
    console.log(1)
    line = <LineChart>(new LineChart());
    console.log(2)
    line.height=700;
    console.log(3)
    StackLayout.addChild(line);
    console.log(4)
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
    console.log(5)
    line.addLine(lineData);
    var points2  = [
        {x:1,y:4},
        {x:3,y:5.9},
        {x:7,y:4},
        {x:8,y:10},
        {x:10,y:1}
    ];
    var lineData2 = {
        lineData: points2,
        color:"green",
        name:"test"
    };
    console.log(6)
    line.addLine(lineData2);

    

}

export function addLine(args: observable.EventData){
    var points2  = [
        {x:1,y:(Math.random() * 10) + 1},
        {x:3,y:(Math.random() * 10) + 1},
        {x:7,y:(Math.random() * 10) + 1},
        {x:8,y:(Math.random() * 10) + 1},
        {x:10,y:(Math.random() * 10) + 1}
    ];
      var color= Math.floor((Math.random()*16777215) - 16777216);
      
      console.log("color: " + color);

    var lineData2 = {
        lineData: points2,
        color:color,
        name:"test"+i
    };
    i++;
    line.addLine(lineData2);
}

export function clearData(args: observable.EventData){
    line.clearData();
}
export function clearGraph(args: observable.EventData){
    line.clearGraph();
}